const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const dbPath = path.resolve(__dirname, 'database.db')

let db

const initDB = callback => {
  db = new sqlite3.Database(dbPath, err => {
    if (err) {
      console.error('Error opening database', err)
    } else {
      db.run(
        `CREATE TABLE IF NOT EXISTS users (
                    id TEXT PRIMARY KEY,
                    name TEXT NOT NULL,
                    email TEXT UNIQUE NOT NULL,
                    password TEXT NOT NULL
                )`,
      )

      db.run(
        `CREATE TABLE IF NOT EXISTS tasks (
                    id TEXT PRIMARY KEY,
                    task TEXT NOT NULL,
                    status TEXT NOT NULL,
                    userId TEXT,
                    FOREIGN KEY(userId) REFERENCES users(id)
                )`,
      )
      callback()
    }
  })
}

const getDB = () => db

module.exports = {initDB, getDB}
