import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Task({ task, onDelete, onUpdate }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{task.task}</Card.Title>
        <Card.Text>Status: {task.status}</Card.Text>
        <Button variant="success" className="me-2" onClick={() => onUpdate(task.id)}>
          Update
        </Button>
        <Button variant="danger" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Task;
