import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Auth from './components/Auth';
import TaskList from './components/TaskList';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
