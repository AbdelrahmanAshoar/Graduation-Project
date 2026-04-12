-- ============================================================
--  Freelancing Platform Database Schema
-- ============================================================
CREATE DATABASE Freelance_Platform

-- ============================================================
-- 1. USER
-- ============================================================
CREATE TABLE "USER" (
    user_id          SERIAL          PRIMARY KEY,
    email            VARCHAR(255)    NOT NULL UNIQUE,
    password_hash    VARCHAR(255)    NOT NULL,
    full_name        VARCHAR(255)    NOT NULL,
    role             VARCHAR(50)     NOT NULL CHECK (role IN ('client', 'freelancer', 'admin')),
    created_at       TIMESTAMP       NOT NULL DEFAULT NOW(),
    profile_picture_url TEXT,
    bio              TEXT,
    phone_number     VARCHAR(50)
);

-- ============================================================
-- 2. CLIENT  (extends USER)
-- ============================================================
CREATE TABLE CLIENT (
    client_id              INT         PRIMARY KEY REFERENCES "USER"(user_id) ON DELETE CASCADE,
    total_spent            NUMERIC(12, 2) NOT NULL DEFAULT 0,
    total_projects_posted  INT           NOT NULL DEFAULT 0
);

-- ============================================================
-- 3. FREELANCER  (extends USER)
-- ============================================================
CREATE TABLE FREELANCER (
    freelancer_id          INT             PRIMARY KEY REFERENCES "USER"(user_id) ON DELETE CASCADE,
    rating                 NUMERIC(3, 2)   DEFAULT 0,
    completed_projects     INT             NOT NULL DEFAULT 0,
    experience_level       VARCHAR(50)     CHECK (experience_level IN ('entry', 'intermediate', 'expert')),
    hourly_rate            NUMERIC(10, 2),
    on_time_delivery_rate  NUMERIC(5, 2)   DEFAULT 0
);

-- ============================================================
-- 4. SKILL
-- ============================================================
CREATE TABLE SKILL (
    skill_id         SERIAL          PRIMARY KEY,
    name             VARCHAR(100)    NOT NULL,
    category         VARCHAR(100),
    relevance_score  NUMERIC(5, 2)   DEFAULT 0,
    freelancer_id    INT             NOT NULL REFERENCES FREELANCER(freelancer_id) ON DELETE CASCADE
);

-- ============================================================
-- 5. PORTFOLIO_ITEM
-- ============================================================
CREATE TABLE PORTFOLIO_ITEM (
    portfolio_id   SERIAL        PRIMARY KEY,
    title          VARCHAR(255)  NOT NULL,
    description    TEXT,
    file_url       TEXT,
    added_at       TIMESTAMP     NOT NULL DEFAULT NOW(),
    freelancer_id  INT           NOT NULL REFERENCES FREELANCER(freelancer_id) ON DELETE CASCADE
);

-- ============================================================
-- 6. PROJECT
-- ============================================================
CREATE TABLE PROJECT (
    project_id             SERIAL          PRIMARY KEY,
    title                  VARCHAR(255)    NOT NULL,
    description            TEXT,
    budget                 NUMERIC(12, 2),
    status                 VARCHAR(50)     NOT NULL DEFAULT 'open'
                               CHECK (status IN ('open', 'in_progress', 'completed', 'cancelled')),
    deadline               DATE,
    posted_date            TIMESTAMP       NOT NULL DEFAULT NOW(),
    required_skills        TEXT,
    client_id              INT             NOT NULL REFERENCES CLIENT(client_id) ON DELETE CASCADE,
    selected_freelancer_id INT             REFERENCES FREELANCER(freelancer_id) ON DELETE SET NULL
);

-- ============================================================
-- 7. PROPOSAL
-- ============================================================
CREATE TABLE PROPOSAL (
    proposal_id     SERIAL          PRIMARY KEY,
    project_id      INT             NOT NULL REFERENCES PROJECT(project_id) ON DELETE CASCADE,
    freelancer_id   INT             NOT NULL REFERENCES FREELANCER(freelancer_id) ON DELETE CASCADE,
    proposed_price  NUMERIC(12, 2)  NOT NULL,
    delivery_days   INT             NOT NULL,
    cover_letter    TEXT,
    status          VARCHAR(50)     NOT NULL DEFAULT 'pending'
                        CHECK (status IN ('pending', 'accepted', 'rejected', 'withdrawn')),
    submitted_at    TIMESTAMP       NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 8. MILESTONE
-- ============================================================
CREATE TABLE MILESTONE (
    milestone_id  SERIAL        PRIMARY KEY,
    project_id    INT           NOT NULL REFERENCES PROJECT(project_id) ON DELETE CASCADE,
    title         VARCHAR(255)  NOT NULL,
    description   TEXT,
    amount        NUMERIC(12, 2),
    deadline      DATE,
    status        VARCHAR(50)   NOT NULL DEFAULT 'pending'
                      CHECK (status IN ('pending', 'in_progress', 'completed')),
    completed_at  TIMESTAMP
);

-- ============================================================
-- 9. WORK_DELIVERY
-- ============================================================
CREATE TABLE WORK_DELIVERY (
    delivery_id   SERIAL        PRIMARY KEY,
    project_id    INT           NOT NULL REFERENCES PROJECT(project_id) ON DELETE CASCADE,
    freelancer_id INT           NOT NULL REFERENCES FREELANCER(freelancer_id) ON DELETE CASCADE,
    file_urls     TEXT,
    message       TEXT,
    submitted_at  TIMESTAMP     NOT NULL DEFAULT NOW(),
    status        VARCHAR(50)   NOT NULL DEFAULT 'submitted'
                      CHECK (status IN ('submitted', 'approved', 'revision_requested', 'rejected'))
);

-- ============================================================
-- 10. PAYMENT
-- ============================================================
CREATE TABLE PAYMENT (
    payment_id         SERIAL          PRIMARY KEY,
    project_id         INT             NOT NULL REFERENCES PROJECT(project_id) ON DELETE CASCADE,
    client_id          INT             NOT NULL REFERENCES CLIENT(client_id) ON DELETE CASCADE,
    freelancer_id      INT             NOT NULL REFERENCES FREELANCER(freelancer_id) ON DELETE CASCADE,
    amount             NUMERIC(12, 2)  NOT NULL,
    payment_method     VARCHAR(100),
    status             VARCHAR(50)     NOT NULL DEFAULT 'pending'
                           CHECK (status IN ('pending', 'completed', 'refunded', 'failed')),
    paid_at            TIMESTAMP,
    transaction_id     VARCHAR(255)    UNIQUE,
    is_escrow_released BOOLEAN         NOT NULL DEFAULT FALSE
);

-- ============================================================
-- 11. RATING_REVIEW
-- ============================================================
CREATE TABLE RATING_REVIEW (
    review_id     SERIAL          PRIMARY KEY,
    project_id    INT             NOT NULL REFERENCES PROJECT(project_id) ON DELETE CASCADE,
    client_id     INT             NOT NULL REFERENCES CLIENT(client_id) ON DELETE CASCADE,
    freelancer_id INT             NOT NULL REFERENCES FREELANCER(freelancer_id) ON DELETE CASCADE,
    rating        NUMERIC(3, 2)   NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review_text   TEXT,
    created_at    TIMESTAMP       NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 12. CHAT_MESSAGE
-- ============================================================
CREATE TABLE CHAT_MESSAGE (
    message_id          SERIAL      PRIMARY KEY,
    sender_id           INT         NOT NULL REFERENCES "USER"(user_id) ON DELETE CASCADE,
    receiver_id         INT         NOT NULL REFERENCES "USER"(user_id) ON DELETE CASCADE,
    project_id          INT         REFERENCES PROJECT(project_id) ON DELETE SET NULL,
    message             TEXT,
    original_language   VARCHAR(50),
    translated_message  TEXT,
    attachment_url      TEXT,
    sent_at             TIMESTAMP   NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 13. NOTIFICATION
-- ============================================================
CREATE TABLE NOTIFICATION (
    notification_id     SERIAL        PRIMARY KEY,
    user_id             INT           NOT NULL REFERENCES "USER"(user_id) ON DELETE CASCADE,
    type                VARCHAR(100)  NOT NULL,
    message             TEXT          NOT NULL,
    is_read             BOOLEAN       NOT NULL DEFAULT FALSE,
    created_at          TIMESTAMP     NOT NULL DEFAULT NOW(),
    related_project_id  INT           REFERENCES PROJECT(project_id) ON DELETE SET NULL,
    related_proposal_id INT           REFERENCES PROPOSAL(proposal_id) ON DELETE SET NULL
);

-- ============================================================
-- 14. PROJECT_ANALYTICS
-- ============================================================
CREATE TABLE PROJECT_ANALYTICS (
    analytics_id            SERIAL          PRIMARY KEY,
    project_id              INT             NOT NULL UNIQUE REFERENCES PROJECT(project_id) ON DELETE CASCADE,
    proposal_count          INT             NOT NULL DEFAULT 0,
    average_proposal_price  NUMERIC(12, 2)  DEFAULT 0,
    market_price_estimate   NUMERIC(12, 2)  DEFAULT 0,
    last_updated            TIMESTAMP       NOT NULL DEFAULT NOW()
);


-- ============================================================
-- INDEXES  (for common query patterns)
-- ============================================================
CREATE INDEX idx_project_client         ON PROJECT(client_id);
CREATE INDEX idx_project_freelancer     ON PROJECT(selected_freelancer_id);
CREATE INDEX idx_proposal_project       ON PROPOSAL(project_id);
CREATE INDEX idx_proposal_freelancer    ON PROPOSAL(freelancer_id);
CREATE INDEX idx_skill_freelancer       ON SKILL(freelancer_id);
CREATE INDEX idx_portfolio_freelancer   ON PORTFOLIO_ITEM(freelancer_id);
CREATE INDEX idx_payment_project        ON PAYMENT(project_id);
CREATE INDEX idx_notification_user      ON NOTIFICATION(user_id);
CREATE INDEX idx_chat_sender            ON CHAT_MESSAGE(sender_id);
CREATE INDEX idx_chat_receiver          ON CHAT_MESSAGE(receiver_id);
CREATE INDEX idx_chat_project           ON CHAT_MESSAGE(project_id);
CREATE INDEX idx_review_freelancer      ON RATING_REVIEW(freelancer_id);
CREATE INDEX idx_delivery_project       ON WORK_DELIVERY(project_id);
CREATE INDEX idx_milestone_project      ON MILESTONE(project_id);