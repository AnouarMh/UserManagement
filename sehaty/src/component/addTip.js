import React, { useState } from 'react';
import axios from '../axios';
import { Box, Button, TextField } from '@mui/material';

function AddTip() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTip = {
      title: title,
      description: description,
      imageUrl: imageUrl
    };

    axios.post('/tips/add', newTip).then(response => {
      console.log(response);
      setTitle('');
      setDescription('');
      setImageUrl('');
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Add new tips</h2>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="title"
          label="Titre"
          variant="outlined"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <TextField
          id="description"
          label="Description"
          variant="outlined"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
          multiline
          rows={4}
        />
        <TextField
          id="imageUrl"
          label="Image (URL)"
          variant="outlined"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          required
        />
        <Button type="submit" variant="contained" sx={{ mt: 1 }}>
          Ajouter
        </Button>
      </Box>
    </Box>
  );
}

export default AddTip;
