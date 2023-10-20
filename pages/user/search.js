// pages/user/Search.js

import React, { useState } from 'react';
import { Container, TextField, List, ListItem, ListItemText, Typography } from '@mui/material';

const Search = () => {
  const [filter, setFilter] = useState('');
  const [users, setUsers] = useState([]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Implement user search logic (e.g., API call)

  return (
    <Container>
      <Typography variant="h4">Search Users</Typography>
      <TextField
        label="Filter by Username"
        value={filter}
        onChange={handleFilterChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.username} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Search;
