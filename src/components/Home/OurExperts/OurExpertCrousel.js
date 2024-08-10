import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, Avatar, Typography, Button, Box } from '@mui/material';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
  };

  const visibleItems = items.slice(currentIndex, currentIndex + 2);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button onClick={handlePrev} sx={{ mr: 2 }}><img src='https://cdn-icons-png.flaticon.com/128/5544/5544140.png' alt='prev' width={'20px'}/> </Button>

      <Box sx={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
        {visibleItems.map((item) => (
          <Card key={item.doc_id} sx={{ mx: 1, flex: '0 0 auto', width: 'calc(50% - 16px)' }}>
            <CardActionArea>
              <Avatar alt="doctor image" src={item.doc_img} sx={{ width: 200, height: 200, mx: 'auto' }} />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Specialist in {item.specialize}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Dr. {item.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      <Button onClick={handleNext} sx={{ ml: 2 ,color:'black'}}><img src='https://cdn-icons-png.flaticon.com/128/318/318476.png' alt='next' width={'20px'}/></Button>
    </Box>
  );
};

export default Carousel;
