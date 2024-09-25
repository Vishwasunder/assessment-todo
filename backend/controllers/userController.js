const {findUserByEmail} = require('../models/userModel')

const getUserProfile = (req, res) => {
  const userId = req.user.id
  findUserByEmail(userId, (err, user) => {
    if (err) return res.status(500).json({message: 'Error fetching user data'})
    res.json(user)
  })
}

const updateUserProfile = (req, res) => {
  // Implement updating the user's profile (e.g., name, email, password)
}

module.exports = {getUserProfile, updateUserProfile}
