import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const DetailEvenement = () => {
    const navigate = useNavigate();
    const handleVoir= () => {
        navigate('/evenement');
    };
    return (
        <>
            <Container fluid className="bg-body-tertiary">
                <Header />
            </Container>
            <Grid fluid component="main"
                style={{
                    backgroundImage: 'url(https://www.rheagroup.com/wp-content/uploads/2023/07/blue-planet-space-connectors-banner.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    flexDirection: 'start',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 500
                }}
            >

                <Grid container
                    sx={{
                        padding: {
                            xs: '10px',
                            sm: '50px',
                            md: '120px'
                        },

                        marginBottom: '20px',
                        textAlign: 'center',

                    }}
                >
                    <Grid className='mt-2 mt-sm-0'>
                        <Grid className='my-5 my-sm-0' >
                            <Box sx={{ padding: 2 }} className='mt-5 text-center'>
                                <Typography className='text-white mt-2 fs-1 fw-normal fs-sm-5 '>
                                    Nos Événements.
                                </Typography>

                            </Box>
                        </Grid>
                    </Grid>


                </Grid>

            </Grid>

            {/* Section consultant */}
            <Container className='mt-5 p-5'>
                <Row>
                    <Col xs={false} md={4}>
                        <div style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1148645060/fr/vid%C3%A9o/plan%C3%A8te-terre-vue-de-lespace-une-vraie-vid%C3%A9o-pas-de-prise-de-la-station-spatiale.jpg?s=640x640&k=20&c=TjfLI5E51WC_a3L4muZfkLOGOASz7HRuNdZMKE8o400=', backgroundRepeat: 'none', height: '300px', width: '100%', cursor: 'pointer' }}>
                            <div className='p-3 title'>
                                <span className='p-2 text-white text-center title' style={{ background: "#008bd2", height: '100px', cursor: 'pointer' }}>Projet satelite</span>
                            </div>
                        </div>                    </Col>
                    <Col xs={12} md={8}>
                        <Grid >
                            <Box sx={{ textAlign: 'start' }}>
                                <Typography className='text-dark mb-2 fs-1 fw-bold fs-sm-5 '>
                                    Project Satellite
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='mb-2 fw-bold '>
                                    <CalendarMonthIcon /> 29-30 mai 2024
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='mb-2 fw-bold '>
                                    Date : 29-30 mai 2024
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='mb-2 fw-bold '>
                                    Lieu : Brussels Expo, Belgique
                                </Typography>
                            </Box>
                            <Row>
                                <Typography variant="body2" color="text.secondary" className='mb-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore accusantium modi eaque quisquam! Unde iste in nesciunt cum eligendi quaerat nemo? Aliquam vero maxime dolores, perspiciatis inventore optio aperiam libero.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='mb-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore accusantium modi eaque quisquam! Unde iste in nesciunt cum eligendi quaerat nemo? Aliquam vero maxime dolores, perspiciatis inventore optio aperiam libero.
                                </Typography>

                                <Typography variant="body2" color="text.secondary" className='mb-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore accusantium modi eaque quisquam! Unde iste in nesciunt cum eligendi quaerat nemo? Aliquam vero maxime dolores, perspiciatis inventore optio aperiam libero.
                                </Typography>

                            </Row>
                            <Button onClick={handleVoir} variant="outlined" className='mt-5 float-end'>Tous les Événements à venir</Button>
                        </Grid>
                    </Col>

                </Row>

            </Container>

            <Container fluid className='mb-5 '>
                <Grid item xs={12} sm={6} md={3} >
                    <Paper elevation={6} style={{ padding: '5%' }}>
                        <Typography variant="h5" color="text.secondary" className='mb-5 fw-bold text-center'>
                            Événements semblable
                        </Typography>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-3" >
                                <div>
                                    <div onClick={handleVoir} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522770179533-24471fcdba45', backgroundRepeat: 'none', height: '300px', width: '100%', cursor: 'pointer' }}>
                                        <div className='p-3 title'>
                                            <span className='p-2 text-white text-center title' style={{ background: "#008bd2", height: '100px', cursor: 'pointer' }}>Lancement spacial</span>
                                        </div>
                                    </div>
                                    <Typography>5 février 2024</Typography>
                                    <div onClick={handleVoir} className='description' style={{ cursor: 'pointer' }}>
                                        Lancement du projet satelitaire du cameroun
                                    </div>
                                    <Typography onClick={handleVoir} className='description' style={{ cursor: 'pointer' }}>Lire plus <ArrowOutwardIcon /></Typography>
                                </div>

                            </div>
                            <div className="col-md-3">
                                <div>
                                    <div style={{ backgroundImage: 'url(https://www.rheagroup.com/wp-content/uploads/2022/08/rhea-group-astral-brochure-english-cover-crop-4x3-1-768x576.jpg', backgroundRepeat: 'none', height: '300px', width: '100%' }}>
                                        <div className='p-3'>
                                            <span className='p-2 text-white text-center' style={{ background: "#008bd2", height: '100px', width: '300px' }}>Lancement satelite</span>
                                        </div>
                                    </div>
                                    <Typography>5 février 2024</Typography>
                                    <div>
                                        Lancement du projet satelitaire du cameroun
                                    </div>
                                    <Typography>Lire plus <ArrowOutwardIcon /></Typography>
                                </div>

                            </div>
                            <div className="col-md-3" style={{ width: 'auto' }}>
                                <div>
                                    <div style={{ backgroundImage: 'url(https://www.rheagroup.com/wp-content/uploads/2023/11/blue-transparent-people-graphics-space-4x3-1-768x576.jpg', backgroundRepeat: 'none', height: '300px', width: '100%' }}>
                                        <div className='p-3'>
                                            <span className='p-2 text-white text-center' style={{ background: "#008bd2", height: '100px', width: '300px' }}>satelite en plus</span>
                                        </div>
                                    </div>
                                    <Typography>5 février 2024</Typography>
                                    <div>
                                        Lancement du projet satelitaire du cameroun
                                    </div>
                                    <Typography>Lire plus <ArrowOutwardIcon /></Typography>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Container>

            <Footer />
        </>
    )
}

export default DetailEvenement