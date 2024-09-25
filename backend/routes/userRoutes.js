const express = require('express')
const {
  getUserProfile,
  updateUserProfile,
} = require('../controllers/userController')
const {authenticateJWT} = require('../middleware/authMiddleware')
const router = express.Router()

router.get('/profile', authenticateJWT, getUserProfile)
router.put('/profile', authenticateJWT, updateUserProfile)

module.exports = router
