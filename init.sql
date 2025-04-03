CREATE TABLE IF NOT EXISTS weather (
    id INT AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(100),
    temperature FLOAT,
    humidity INT,
    description TEXT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
