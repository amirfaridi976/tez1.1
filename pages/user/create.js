// pages/user/Create.js

import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Create = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform user creation logic (e.g., API call)

    alert('User created successfully');
    setFormData({ username: '', password: '' });
  };

  return (
    <Container>
      <Typography variant="h4">Create User</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          label="Username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Create User
        </Button>
      </form>
    </Container>
  );
};

export default Create;
