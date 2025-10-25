-- Create database
CREATE DATABASE IF NOT EXISTS auction_db;
USE auction_db;

-- =====================================
-- USERS TABLE (Authentication)
-- =====================================
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('client', 'worker', 'admin') DEFAULT 'client',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================
-- TASKS TABLE (Tasks posted for auction)
-- =====================================
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    budget DECIMAL(10,2),
    status ENUM('open', 'bidding', 'assigned', 'completed') DEFAULT 'open',
    posted_by INT NOT NULL,
    assigned_to INT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (posted_by) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (assigned_to) REFERENCES users(id) ON DELETE SET NULL
);

-- =====================================
-- BIDS TABLE (Auction system)
-- =====================================
CREATE TABLE IF NOT EXISTS bids (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_id INT NOT NULL,
    bidder_id INT NOT NULL,
    bid_amount DECIMAL(10,2) NOT NULL,
    message VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
    FOREIGN KEY (bidder_id) REFERENCES users(id) ON DELETE CASCADE
);

-- =====================================
-- INDEXES for performance
-- =====================================
CREATE INDEX idx_task_status ON tasks(status);
CREATE INDEX idx_bid_task ON bids(task_id);
CREATE INDEX idx_user_email ON users(email);

-- =====================================
-- SAMPLE DATA (optional)
-- =====================================
INSERT INTO users (name, email, password, role) VALUES
('Admin', 'admin@example.com', 'hashed_password_here', 'admin'),
('Alice', 'alice@example.com', 'hashed_password_here', 'client'),
('Bob', 'bob@example.com', 'hashed_password_here', 'worker');

INSERT INTO tasks (title, description, budget, status, posted_by) VALUES
('Design a logo', 'Need a logo for a startup', 200.00, 'bidding', 2),
('Build a landing page', 'Create a responsive HTML page', 400.00, 'open', 2);

INSERT INTO bids (task_id, bidder_id, bid_amount, message) VALUES
(1, 3, 180.00, 'I can finish it in 2 days.'),
(2, 3, 350.00, 'Experienced front-end developer.');
