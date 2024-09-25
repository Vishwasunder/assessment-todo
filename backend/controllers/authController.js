const {v4: uuidv4} = require('uuid')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {createUser, findUserByEmail} = require('../models/userModel')

const signup = (req, res) => {
  const {name, email, password} = req.body
  findUserByEmail(email, (err, user) => {
    if (user) return res.status(400).json({message: 'User already exists'})

    const userId = uuidv4()
    createUser({id: userId, name, email, password}, err => {
      if (err) return res.status(500).json({message: 'Error creating user'})

      const token = jwt.sign({id: userId}, 'secretkey', {expiresIn: '1h'})
      res.json({token})
    })
  })
}

const login = (req, res) => {
  const {email, password} = req.body
  findUserByEmail(email, (err, user) => {
    if (!user) return res.status(404).json({message: 'User not found'})

    const validPassword = bcrypt.compareSync(password, user.password)
    if (!validPassword)
      return res.status(400).json({message: 'Invalid password'})

    const token = jwt.sign({id: user.id}, 'secretkey', {expiresIn: '1h'})
    res.json({token})
  })
}

module.exports = {signup, login}
