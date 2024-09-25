const app = require('./app')
const {initDB} = require('./db/database')

const PORT = process.env.PORT || 5000

// Initialize the database
initDB(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})
