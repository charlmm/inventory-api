const express = require('express');
const router = express.Router();
const authService = require('../services/authService');

// Sign up controller
router.post('/signup', async(req, res) =>{
  try {
    const { email, password } = req.body;
    const user = await authService.signup(email, password);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

// Login controller
router.post('/login', async(req, res) =>{  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(401).json({ error: 'Invalid credentials' });
  }
})

module.exports = router;
