import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button, Divider, Grid, Link, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const preventDefault = (event) => event.preventDefault();

function Footer(props) {

    const navigate = useNavigate();

    // const handleGoAbout = () => {
    //     navigate('/about')
    // }

    const handleGoActualite = () => {
        navigate('/actualite')
    }

    const handleGoNotFound = () => {
        navigate('/NotFound')
    }

    const handleGoResponsiveAppBar = () => {
        navigate('/responsiveAppBar')
    }

    const handleGoSpaceMarket = () => {
        navigate('/SpaceMarket')
    }

    const handleGoConsultants = () => {
        navigate('/Consultant')
    }

    const handleGoEmail = () => {
        navigate('/NotFound')
    }

    return (
        <>
            <Grid sx={{ backgroundColor: '#f1f2f4' }}>
                <Grid sx={{ paddingInline: 11, paddingTop: 11, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} fluid >
                    <Container>
                        <Row>
                            <Col xs={12} sm={6} md={4}>
                                <Typography paragraph className=' fw-ligh lh-sm text-start fs-sm-6'>
                                    Joindre notre newsletter pour des <br /> mises à jour régulières
                                </Typography>
                                <Grid
                                    component="form"
                                    sx={{ backgroundColor: '#f1f2f4' }}
                                    noValidate
                                    autoComplete="off"

                                >

                                    <Grid>

                                        <TextField label="email" />

                                    </Grid>

                                    {/* <Button variant="outlined" className='my-2 text-capitalize'>Souscrire</Button> */}
                                    <Button
                                        className='my-2 text-capitalize'
                                        variant="outlined"
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: '#413DEE',
                                                color: '#ffffff',
                                            },
                                        }}
                                    >
                                        Souscrire
                                    </Button>


                                </Grid>

                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <Typography variant="h5" className='text-dark  fs-6 fw-bold  fs-sm-5 mt-xs-3' >
                                    Accès Rapide
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'inline-block',
                                        typography: 'body1',
                                        '& > :not(style) ~ :not(style)': {
                                            ml: 2,
                                        },
                                    }}
                                    onClick={preventDefault}
                                > <List>
                                        <Link onClick={handleGoResponsiveAppBar} underline="none">
                                            <ListItemButton sx={{
                                                '&:hover': {
                                                    backgroundColor: '#f1f2f4',
                                                },
                                            }}>
                                                <ListItemIcon>
                                                    <ListItemText primary="Freelance" sx={{
                                                        '&:hover': {
                                                            backgroundColor: '#f1f2f4',
                                                            color: '#413DEE',
                                                        },
                                                    }} />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </Link>
                                        <Link onClick={handleGoSpaceMarket} underline="none" >
                                            <ListItemButton sx={{
                                                '&:hover': {
                                                    backgroundColor: '#f1f2f4',
                                                },
                                            }}>
                                                <ListItemIcon>
                                                    <ListItemText primary="SpaceMarket" sx={{
                                                        '&:hover': {
                                                            backgroundColor: '#f1f2f4',
                                                            color: '#413DEE',
                                                        },
                                                    }} />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </Link>
                                        <Link onClick={handleGoConsultants} underline="none">
                                            <ListItemButton sx={{
                                                '&:hover': {
                                                    backgroundColor: '#f1f2f4',
                                                },
                                            }}>
                                                <ListItemIcon>
                                                    <ListItemText primary="Consultation" sx={{
                                                        '&:hover': {
                                                            backgroundColor: '#f1f2f4',
                                                            color: '#413DEE',
                                                        },
                                                    }} />
                                                </ListItemIcon>
                                            </ListItemButton>

                                        </Link>
                                    </List>
                                </Box>
                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <Typography variant="h5" className='text-dark  fs-6 fw-bold  fs-sm-5'>
                                    Compagnie
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'inline-block',
                                        typography: 'body1',
                                        '& > :not(style) ~ :not(style)': {
                                            ml: 2,
                                        },
                                    }}
                                    onClick={preventDefault}
                                > <List>

                                        <Link onClick={handleGoActualite} underline="none" >
                                            <ListItemButton sx={{
                                                '&:hover': {
                                                    backgroundColor: '#f1f2f4',
                                                },
                                            }}>
                                                <ListItemIcon>
                                                    <ListItemText primary="Actualités" sx={{
                                                        '&:hover': {
                                                            backgroundColor: '#f1f2f4',
                                                            color: '#413DEE',
                                                        },
                                                    }} />
                                                </ListItemIcon>
                                            </ListItemButton>

                                        </Link>
                                        <Link onClick={handleGoNotFound} underline="none">
                                            <ListItemButton sx={{
                                                '&:hover': {
                                                    backgroundColor: '#f1f2f4',
                                                },
                                            }}>
                                                <ListItemIcon>
                                                    <ListItemText primary="Service d'assistance" sx={{
                                                        '&:hover': {
                                                            backgroundColor: '#f1f2f4',
                                                            color: '#413DEE',
                                                        },
                                                    }} />
                                                </ListItemIcon>
                                            </ListItemButton>

                                        </Link>
                                        <Link onClick={handleGoNotFound} underline="none">
                                            <ListItemButton sx={{
                                                '&:hover': {
                                                    backgroundColor: '#f1f2f4',
                                                },
                                            }}>
                                                <ListItemIcon>
                                                    <ListItemText primary="Politique de confidentialité" sx={{
                                                        '&:hover': {
                                                            backgroundColor: '#f1f2f4',
                                                            color: '#413DEE',
                                                        },
                                                    }} />
                                                </ListItemIcon>
                                            </ListItemButton>

                                        </Link>
                                    </List>
                                </Box>
                            </Col>


                        </Row>
                        <Row className='text-center my-3'>
                            <Col xs={12} md={12}>
                                <Typography variant="h5" className='text-dark  fs-6 fw-bold  fs-sm-5 mb-3'>
                                    Retrouver Nous Sur:
                                </Typography>
                                <Box>
                                    <Button sx={{
                                        color: 'primary',
                                        '&:hover': {
                                            backgroundColor: '#f1f2f4',

                                        },
                                    }}>

                                        <FacebookRoundedIcon
                                            sx={{
                                                color: 'primary',
                                                '&:hover': {

                                                    color: '#413DEE',
                                                },
                                            }}
                                        />

                                    </Button>
                                    <Button sx={{
                                        color: 'primary',
                                        '&:hover': {
                                            backgroundColor: '#f1f2f4',

                                        },
                                    }}>

                                        <WhatsAppIcon
                                            sx={{
                                                color: '#00FF00',
                                                '&:hover': {

                                                    color: '#413DEE',
                                                },
                                            }}
                                        />
                                    </Button>
                                    <Button sx={{
                                        color: 'primary',
                                        '&:hover': {
                                            backgroundColor: '#f1f2f4',

                                        },
                                    }}>

                                        <InstagramIcon
                                            sx={{
                                                color: 'linear-gradient(-39deg,#8a3ab9 50%,#4c68d7 50%,#222222 100%)',
                                                '&:hover': {

                                                    color: '#413DEE',
                                                },
                                            }}
                                        />
                                    </Button>
                                    <Button sx={{
                                        color: 'primary',
                                        '&:hover': {
                                            backgroundColor: '#f1f2f4',

                                        },
                                    }}>

                                        <LinkedInIcon
                                            sx={{
                                                color: '#0077b5',
                                                '&:hover': {

                                                    color: '#413DEE',
                                                },
                                            }}
                                        />


                                    </Button>
                                    <Typography
                                        className='my-1'
                                        sx={{
                                            '&:hover': {
                                                color: '#413DEE',
                                            },
                                        }}
                                        onClick={handleGoEmail}
                                    >

                                        mailExemple@gmail.com
                                    </Typography>

                                </Box>
                            </Col>
                        </Row>
                    </Container>
                </Grid>
                <Divider />
                <Grid >
                    <Typography className='fw-ligh fs-6 fw-sm-6  text-center' paragraph>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLruMNO37oQ9xg_yGNDVt9ujdQ47IauJ2leIrEd7s2oR1Pn9LIHITkVTnzuM-LJdMZNks&usqp=CAU" alt="Logo" height={50} /> Copyright © 2024 PSI.
                    </Typography>
                </Grid>
            </Grid>

        </>
    );
}

export default Footer;