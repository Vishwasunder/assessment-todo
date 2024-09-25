const {getDB} = require('../db/database')

const createTask = (taskData, callback) => {
  const db = getDB()
  const {id, task, status, userId} = taskData

  db.run(
    'INSERT INTO tasks (id, task, status, userId) VALUES (?, ?, ?, ?)',
    [id, task, status, userId],
    function (err) {
      callback(err, this.lastID)
    },
  )
}

const getTasksByUser = (userId, callback) => {
  const db = getDB()
  db.all('SELECT * FROM tasks WHERE userId = ?', [userId], (err, rows) => {
    callback(err, rows)
  })
}

const updateTask = (taskId, taskData, callback) => {
  const db = getDB()
  const {task, status} = taskData
  db.run(
    'UPDATE tasks SET task = ?, status = ? WHERE id = ?',
    [task, status, taskId],
    function (err) {
      callback(err, this.changes)
    },
  )
}

const deleteTask = (taskId, callback) => {
  const db = getDB()
  db.run('DELETE FROM tasks WHERE id = ?', [taskId], function (err) {
    callback(err, this.changes)
  })
}

module.exports = {createTask, getTasksByUser, updateTask, deleteTask}
