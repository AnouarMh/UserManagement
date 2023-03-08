import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography,
  Button
} from '@mui/material';


function TipList() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    axios.get('/tips/get').then(response => {
      setTips(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/tips/delete/${id}`);
      console.log(response.data);
      // Remove the deleted tip from the tips array
      const newTips = tips.filter(tip => tip._id !== id);
      setTips(newTips);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = (id) => {
    const tipToUpdate = tips.find(tip => tip._id === id);
    navigator.push({
      pathname: '/addtip',
      state: { tipToUpdate: tipToUpdate }
    });
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {tips.map(tip => (
        <Card key={tip._id} sx={{ maxWidth: 345, m: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image={tip.imageUrl}
            alt={tip.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {tip.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {tip.description}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button variant="contained" color="error" onClick={() => handleDelete(tip._id)}>Delete</Button>
              <Button variant="contained" color="success" onClick={() => handleUpdate(tip._id)}>Update</Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default TipList;
