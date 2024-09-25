import React, {useEffect, useState} from 'react'
import {getTasks, createTask} from '../api'
import Task from './Task'
import {Container, Form, Button, Row, Col} from 'react-bootstrap'

function TaskList() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const token = localStorage.getItem('token')

  useEffect(() => {
    fetchTasks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchTasks = async () => {
    const {data} = await getTasks(token)
    setTasks(data)
  }

  const handleCreateTask = async () => {
    await createTask({task: newTask, status: 'pending'}, token)
    fetchTasks()
    setNewTask('')
  }

  const handleDeleteTask = taskId => {
    // Implement delete task function
  }

  const handleUpdateTask = taskId => {
    // Implement update task function
  }

  return (
    <Container>
      <h2 className='my-4'>Todo List</h2>
      <Row>
        <Col md={8}>
          <Form.Group className='mb-3'>
            <Form.Control
              type='text'
              value={newTask}
              placeholder='Add new task'
              onChange={e => setNewTask(e.target.value)}
            />
          </Form.Group>
          <Button variant='primary' onClick={handleCreateTask} className='mb-3'>
            Add Task
          </Button>
          <div>
            {tasks.map(task => (
              <Task
                key={task.id}
                task={task}
                onDelete={handleDeleteTask}
                onUpdate={handleUpdateTask}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default TaskList
