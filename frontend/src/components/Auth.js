import React, { useState } from 'react';
import { login, signup } from '../api';
import { useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Auth() {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    if (isSignup) {
      userData.name = name;
      await signup(userData);
    } else {
      const { data } = await login(userData);
      localStorage.setItem('token', data.token);
      navigate('/tasks'); // Use navigate to redirect instead of history.push
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <div className="auth-form mt-5 p-4 border rounded">
            <h2>{isSignup ? 'Signup' : 'Login'}</h2>
            <Form onSubmit={handleSubmit}>
              {isSignup && (
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
              )}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="me-2">
                {isSignup ? 'Signup' : 'Login'}
              </Button>
              <Button variant="link" onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? 'Already have an account? Login' : 'New here? Signup'}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Auth;
