const express = require('express')
const {
  createNewTask,
  getUserTasks,
  updateUserTask,
  deleteUserTask,
} = require('../controllers/taskController')
const {authenticateJWT} = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/', authenticateJWT, createNewTask)
router.get('/', authenticateJWT, getUserTasks)
router.put('/:id', authenticateJWT, updateUserTask)
router.delete('/:id', authenticateJWT, deleteUserTask)

module.exports = router
