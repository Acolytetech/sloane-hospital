import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, LinearProgress } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import useDocData from '../../../Hooks/useDocData';
import Carousel from './OurExpertCrousel'; // Import the Carousel component

const OurExperts = () => {
  const [ourExperts, setOurExperts] = useState([]);
  const mainData = useDocData();
  let experts = mainData[0];

  useEffect(() => {
    if (experts.length > 1) {
      const serv = experts?.slice(0, 4);
      setOurExperts(serv);
    } else {
      setOurExperts([]); // Ensure empty array is set when data is not available
    }
  }, [experts]);

  return (
    <Box
      sx={{
        bgcolor: '#fff',
        color: '#000',
        width: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        mb: 2,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Typography sx={{ mb: 2, fontWeight: 900 }} variant="h4">
          Meet Our Expert Team
        </Typography>
        <Typography sx={{ mb: 8, fontWeight: 600 }} variant="h5">
          We are committed to ensuring you the best service
        </Typography>

        {ourExperts.length > 1 ? (
          <Carousel items={ourExperts} />
        ) : (
          <LinearProgress color="secondary" />
        )}

        <Typography sx={{ mx: 2, p: 2, textAlign: 'end' }}>
          <HashLink smooth to="/doctors#doctors" className="text-style" color="primary">
            Meet Our Expert Team
          </HashLink>
        </Typography>
      </Container>
    </Box>
  );
};

export default OurExperts;
