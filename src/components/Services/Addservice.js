// AddService.js
import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Container, Typography } from '@mui/material';

const AddService = () => {
  const [serviceData, setServiceData] = useState({
    id: '',
    service_img: '',
    icon: '',
    treatment: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    setServiceData({
      ...serviceData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/services', serviceData);
      console.log('Service added:', response.data);
      setServiceData({
        id: '',
        service_img: '',
        icon: '',
        treatment: '',
        description: '',
        price: '',
      });
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Add New Service</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="ID"
            name="id"
            value={serviceData.id}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Service Image URL"
            name="service_img"
            value={serviceData.service_img}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Icon URL"
            name="icon"
            value={serviceData.icon}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Treatment"
            name="treatment"
            value={serviceData.treatment}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            name="description"
            value={serviceData.description}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Price"
            name="price"
            value={serviceData.price}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>Add Service</Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddService;
