const {v4: uuidv4} = require('uuid')
const {
  createTask,
  getTasksByUser,
  updateTask,
  deleteTask,
} = require('../models/taskModel')

const createNewTask = (req, res) => {
  const {task, status} = req.body
  const userId = req.user.id
  const taskId = uuidv4()

  createTask({id: taskId, task, status, userId}, err => {
    if (err) return res.status(500).json({message: 'Error creating task'})
    res.status(201).json({message: 'Task created successfully'})
  })
}

const getUserTasks = (req, res) => {
  const userId = req.user.id
  getTasksByUser(userId, (err, tasks) => {
    if (err) return res.status(500).json({message: 'Error fetching tasks'})
    res.json(tasks)
  })
}

const updateUserTask = (req, res) => {
  const taskId = req.params.id
  const {task, status} = req.body

  updateTask(taskId, {task, status}, err => {
    if (err) return res.status(500).json({message: 'Error updating task'})
    res.json({message: 'Task updated successfully'})
  })
}

const deleteUserTask = (req, res) => {
  const taskId = req.params.id
  deleteTask(taskId, err => {
    if (err) return res.status(500).json({message: 'Error deleting task'})
    res.json({message: 'Task deleted successfully'})
  })
}

module.exports = {createNewTask, getUserTasks, updateUserTask, deleteUserTask}
