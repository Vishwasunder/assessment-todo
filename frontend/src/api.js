import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Auth API
export const signup = (userData) => axios.post(`${API_URL}/auth/signup`, userData);
export const login = (userData) => axios.post(`${API_URL}/auth/login`, userData);

// Task API
export const createTask = (taskData, token) =>
  axios.post(`${API_URL}/tasks`, taskData, {
    headers: { Authorization: token },
  });

export const getTasks = (token) =>
  axios.get(`${API_URL}/tasks`, { headers: { Authorization: token } });

// Profile API
export const getProfile = (token) =>
  axios.get(`${API_URL}/users/profile`, { headers: { Authorization: token } });
