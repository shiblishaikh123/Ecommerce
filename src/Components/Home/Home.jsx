import React from 'react';
import img from '../../Assets/img4.png';
import { Container, Grid, Typography } from '@mui/material';



const Home = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div style={{ width: '100%', height: '80vh' }} className='header flex items-center justify-center bg-gray-200'>
        <Typography variant="h2" align="center">
          Big Pattern <br />
          Are back in <br />
          fashion
        </Typography>
        <div style={{ width: '50%', height: '100%' }}>
          <img style={{ height: '70%', width: '100%', objectFit: 'cover' }} src={img} alt="Pattern" />
        </div>
      </div>

      <footer className='bg-gray-800 text-white py-8'>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={3}>
              <Typography variant="h6" fontWeight="bold" mb={4}>About Us</Typography>
              <Typography>
                Discover the latest fashion trends with us. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Typography variant="h6" fontWeight="bold" mb={4}>Contact</Typography>
              <Typography>Email: info@example.com</Typography>
              <Typography>Phone: +123 456 7890</Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Typography variant="h6" fontWeight="bold" mb={4}>Follow Us</Typography>
              <Typography>Stay connected on social media:</Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Typography variant="h6" fontWeight="bold" mb={4}>Subscribe</Typography>
              <Typography>Subscribe to our newsletter for updates on new arrivals and promotions.</Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
