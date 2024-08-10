import { Avatar, Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useData from '../../../Hooks/useData';
import './Whyus.css'


const Whyus = () => {
    const [ourServices, setOurServices] = useState([])
    const mainData = useData();
    let services = mainData[0];

    // handle undifined problem in mapping data
    useEffect(() => {
        if (services.length > 0) {
            const serv = services?.slice(0, 3);
            setOurServices(serv);
        }
        else {
            <LinearProgress color="secondary" />
        }
    }, [services]);

    return (


        <Box sx={{ bgcolor: 'alternate.main', color: 'primary.main', mt:10,  p: 2, mb: 2, textAlign: "center" }}>
            <Container maxWidth="xl">
                <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }}
                    variant='h6'
                >Why Choose Our Medical
                </Typography>

                <Typography sx={{ mb: 8, fontWeight: 600 }}
                    variant='h5'
                >Breakthrough in Comprehensive, Flexible Care Delivery Models
                </Typography>

                {
                    services?.length > 1 && <Grid container spacing={10}>

                        {
                            ourServices?.map((service) => (
                                <Grid key={service.id} className={service.class} item xs={6} md={6} lg={4}>

                                    <Card sx={{
                                        maxWidth: 330, transition: '0.5s all ease-in-out',  ':hover': {
                                            boxShadow: 10,
                                            color: '#121fd1',
                                            
                                            
                                            
                                            
                                        },
                                        borderRadius:'30px'
                                        , 'img': { transition: '0.5s all ease-in-out' },
                                        ':hover img': {
                                            transform: 'scale(1.1)'
                                        }
                                    }}>
                                        <CardActionArea>
                                            {/* <CardMedia
                                                component="img"
                                                height="320"
                                                image={service?.service_img}
                                                alt="card image of service"
                                            /> */}
                                            <CardContent sx={{ display: 'flex', mx: 'auto', my: 2 }}>
                                                <Avatar
                                                    alt="service icon"
                                                    src={service?.icon}
                                                    sx={{
                                                        width: 40, height: 40, mx: 'auto'
                                                    }}
                                                />
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Consult for {service.treatment}
                                                </Typography>
                                                
                                               
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions style={{justifyContent: 'center'}}>
                                            <Typography sx={{ mx: 2, p: 2, textAlign: "end" }} >
                                                <Link className='' to="/services" color="">
                                                    See More Details...
                                                </Link>
                                            </Typography>
                                        </CardActions>
                                    </Card>




                                </Grid>
                            ))
                        }
                    </Grid>}

                <Typography sx={{ mx: 2, p: 2, textAlign: "end" }} >
                    <HashLink smooth to="/services#services" className='text-style' color="primary">
                        See All services
                    </HashLink>
                </Typography>


            </Container>
        </Box>


    );
};

export default Whyus;

{/* <Card sx={{ display: 'flex', mx: 'auto', my: 2 }}>
                 <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {service.treatment}
                        </Typography>
                    </CardContent>
                 </Box>
                    <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={service?.service_img}
                    alt="User Image"
                    />
                </Card>  */}