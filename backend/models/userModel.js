const {getDB} = require('../db/database')
const bcrypt = require('bcryptjs')

const createUser = (userData, callback) => {
  const db = getDB()
  const {id, name, email, password} = userData
  const hashedPassword = bcrypt.hashSync(password, 10)

  db.run(
    'INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)',
    [id, name, email, hashedPassword],
    function (err) {
      callback(err, this.lastID)
    },
  )
}

const findUserByEmail = (email, callback) => {
  const db = getDB()
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    callback(err, row)
  })
}

module.exports = {createUser, findUserByEmail}
