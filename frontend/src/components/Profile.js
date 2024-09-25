import React, { useEffect, useState } from 'react';
import { getProfile } from '../api';
import { Container, Card } from 'react-bootstrap';

function Profile() {
  const [profile, setProfile] = useState({});
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProfile = async () => {
    const { data } = await getProfile(token);
    setProfile(data);
  };

  return (
    <Container>
      <h2 className="my-4">Profile</h2>
      <Card>
        <Card.Body>
          <Card.Title>Name: {profile.name}</Card.Title>
          <Card.Text>Email: {profile.email}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Profile;
