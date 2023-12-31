const CREATE_USERS_TABLE = `CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(40) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
)`;

const CREATE_BOOKS_TABLE = `CREATE TABLE IF NOT EXISTS books (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    status VARCHAR(255) NOT NULL,
    borrower_id INT,
    FOREIGN KEY (borrower_id) REFERENCES users(id),
    PRIMARY KEY (id)
)`;

export { CREATE_USERS_TABLE, CREATE_BOOKS_TABLE };
