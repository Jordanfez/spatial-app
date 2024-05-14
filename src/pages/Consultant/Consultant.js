import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button, CardActionArea, Divider, Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import AOS from "aos";
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Bank from '../images/Bank Building.png';
import Femme from '../images/Femme.png';
import General from '../images/General Policy.png';
import Woman from '../images/high-angle-woman-talking-phone 1.jpg';
import image1 from '../images/homme.jpg';
import Lease from '../images/Lease.png';
import Real from '../images/Real Estate.png';
import Rocket from '../images/Rocket.png';
import BackToTop from '../ScoolTop/BackToTop';


const Consultant = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const navigate = useNavigate();
    const handleVoirPropo = () => {
        navigate('/NotFound');
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                                <Typography className='text-white mt-5 fs-5 fw-bold fs-sm-6 ' data-aos="fade-right">NOUS SOMMES EXPERTS</Typography>
                                <Typography className='text-white mt-2 fs-1 fw-normal fs-sm-5 ' data-aos="fade-left">
                                    Nous fournissons des conseils  de différentes manières sur n’importe quel sujet
                                </Typography>

                            </Box>
                        </Grid>
                    </Grid>


                </Grid>

            </Grid>
            <Grid sx={{ backgroundColor: '#F5F5F5', paddingBlock: '40px' }} className='mb-5 ' fluid>

                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12}>
                        <Typography className='text-black fs-6 fw-bold fs-sm-6 mb-3 p-2' data-aos="fade-down">
                            En tant qu'experts de premier plan dans ce domaine, nous sommes
                            présents dans plus de 50 pays.
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='text-center p-2'>
                            Welcome to Pan-African Space Industry (PSI) Consultancy, where innovation meets practical solutions <br />
                            to propel the African space industry forward. We specialize in providing cutting-edge consulting and  <br />
                            advisory services to governments, start-ups, NGOs, and other stakeholders across the continent
                        </Typography>
                    </Grid>

                </Grid>

            </Grid>

            {/* Section benefice */}
            <Container >
                <Grid >
                    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography className='text-dark mb-2 fs-1 fw-bold fs-sm-5 ' data-aos="fade-down">
                                Benefits
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='mb-5'>
                                Join us at PSI Consultancy and embark on a journey of discovery, innovation, and transformation in
                                the African space sector
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }} className='mb-5'>

                        <Grid item xs={12} sm={6} md={3} >
                            <Paper elevation={6}>
                                <Card sx={{ textAlign: 'start' }} data-aos="fade-down-right">
                                    <CardMedia
                                        component="img"
                                        sx={{ height: 120 }}
                                        image={image1}
                                        alt="Live from space album cover"
                                    />
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                At PSI, we offer a wide array of exclusive benefits, including access to state-of-the-art software and
                                                online services for earth observation, navigation, telecommunication, and space science exploration
                                                applications.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            </Paper>


                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                            <Paper elevation={6}>
                                <Card sx={{ textAlign: 'start' }} data-aos="fade-down-right">
                                    <CardMedia
                                        component="img"
                                        sx={{ height: 120 }}
                                        image={image1}
                                        alt="Live from space album cover"
                                    />
                                    <CardActionArea>
                                        <CardContent>

                                            <Typography variant="body2" color="text.secondary">
                                                At PSI, we offer a wide array of exclusive benefits, including access to state-of-the-art software and
                                                online services for earth observation, navigation, telecommunication, and space science exploration
                                                applications.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            </Paper>


                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                            <Paper elevation={6}>
                                <Card sx={{ textAlign: 'start' }} data-aos="fade-down-right">
                                    <CardMedia
                                        component="img"
                                        sx={{ height: 120 }}
                                        image={image1}
                                        alt="Live from space album cover"
                                    />
                                    <CardActionArea>
                                        <CardContent>

                                            <Typography variant="body2" color="text.secondary">
                                                At PSI, we offer a wide array of exclusive benefits, including access to state-of-the-art software and
                                                online services for earth observation, navigation, telecommunication, and space science exploration
                                                applications.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            </Paper>


                        </Grid>
                        <Grid item xs={12} sm={6} md={3} >
                            <Paper elevation={6}>
                                <Card sx={{ textAlign: 'start' }} data-aos="fade-down-right">
                                    <CardMedia
                                        component="img"
                                        sx={{ height: 120 }}
                                        image={image1}
                                        alt="Live from space album cover"
                                    />
                                    <CardActionArea>
                                        <CardContent>

                                            <Typography variant="body2" color="text.secondary">
                                                At PSI, we offer a wide array of exclusive benefits, including access to state-of-the-art software and
                                                online services for earth observation, navigation, telecommunication, and space science exploration
                                                applications.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            </Paper>


                        </Grid>


                    </Grid>
                </Grid>
            </Container>

            {/* Section Chart showing numbers */}
            <Container >
                <Grid className='mb-5 '>
                    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography className='text-dark mb-2 fs-1 fw-bold fs-sm-5 '>
                                Chart showing numbers
                            </Typography>

                        </Box>

                    </Grid>
                    <Paper elevation={6}>
                        <Container>
                            <Grid sx={{
                                marginTop: '40px'
                            }}>
                                <Grid sx={{
                                    padding: {
                                        xs: '10px',
                                        sm: '20px',
                                    },
                                    // paddingInline: {
                                    //     md: '50px'
                                    // },
                                    borderRadius: 3
                                }}>

                                    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', color: '#413DEE' }} >
                                        <Grid item xs={12} md={4}>
                                            <Typography className=' fs-2 fw-bold fs-sm-5' data-aos="fade-down">
                                                10+
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={1}>
                                            <Typography className=' fs-2 fw-bold fs-sm-5' data-aos="fade-down">
                                                50+
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography className=' fs-2 fw-bold fs-sm-5' data-aos="fade-down">
                                                20+
                                            </Typography>
                                        </Grid>

                                    </Grid>

                                </Grid>
                                <Grid><Divider sx={{ color: 'black' }} /> </Grid>
                                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}  >
                                    <Grid item xs={12} md={4} >

                                        <Typography className='text-black fs-6 fw-bold fs-sm-6 text-center mt-2' >
                                            Cosmic Consultants
                                        </Typography>
                                        <Divider orientation="vertical" variant="middle" flexItem />
                                        <Typography variant="body2" color="text.secondary" className='mb-3 text-center'>
                                            Space science and Exploration
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={1}>
                                        <Typography className='text-black fs-6 fw-bold fs-sm-6 text-center mt-2'>
                                            Application consultants
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className='mb-3 text-center'>
                                            Space systems engineering and <br />
                                            space applications
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography className='text-black fs-6 fw-bold fs-sm-6 text-center mt-2'>
                                            Cosmic Consultants
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" className='mb-3 text-center'>
                                            Space Law, Policy and<br />
                                            Entrepreneurship
                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Container>
                    </Paper>

                </Grid>
            </Container>

            {/*  Section choose */}
            <Grid sx={{ backgroundColor: '#f1f2f4', height: '300' }} className='mb-5'>
                <Row >
                    <Col xs={false} sm={6} md={6} style={{ backgroundImage: { Woman } }}>

                        {/* <Box sx={{ height: '100' }}>
                            <img src={Woman} alt='' />
                        </Box> */}

                    </Col>
                    <Col xs={12} sm={6} md={6} style={{ backgroundColor: '#0B0A38', color: 'white' }} className='p-5' data-aos="fade-up-left">
                        <Typography className='text-white mb-2 fs-1 fw-bold fs-sm-5 p-4'>
                            Why Choose us
                        </Typography>
                        <List className='p-3'>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Vast Experience in the space industry" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Trending Innovation" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Regular training and evolving capacity building" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Interdisciplinary and multinational Network" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Realtime, honest and detailed Market Analysis" />
                            </ListItem>
                        </List>
                    </Col>
                </Row>
            </Grid>

            {/* Section value */}

            <Grid className='mb-5'>
                <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography className='text-dark mb-2 fs-1 fw-bold fs-sm-5 '>
                            Value Proposition
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='mb-2'>
                            At PSI, our consultancy services offer a unique value proposition that sets us apart in the industry:
                        </Typography>
                    </Box>
                </Grid>
                <Container>
                    <Grid >
                        <Row sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', textAlign: 'center' }}>

                            <Col xs={6} md={2} className='my-2'>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Avatar sx={{ bgcolor: '#413DEE', height: '58', width: '58' }} data-aos="fade-down">
                                        <img src={Lease} alt='' sx={{ height: '20', width: '20' }} />
                                    </Avatar>
                                </Box>
                                <Typography className='text-black fs-6 fw-bold fs-sm-6 text-center mt-2' >
                                    Expertise
                                </Typography>
                            </Col>



                            <Col xs={6} md={2} className='my-2'>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Avatar sx={{ bgcolor: '#413DEE' }} data-aos="fade-down">
                                        <img src={Bank} alt='' sx={{ height: '20', width: '20' }} />
                                    </Avatar>
                                </Box>

                                <Typography className='text-black fs-6 fw-bold fs-sm-6 text-center mt-2' >
                                    Partnership
                                </Typography>
                            </Col>


                            <Col xs={6} md={2} className='my-2'>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Avatar sx={{ bgcolor: '#413DEE' }} data-aos="fade-down">
                                        <img src={Rocket} alt='' sx={{ height: '20', width: '20' }} />
                                    </Avatar>
                                </Box>
                                <Typography className='text-black fs-6 fw-bold fs-sm-6 text-center mt-2' >
                                    Innovation
                                </Typography>
                            </Col>


                            <Col xs={6} md={2} className='my-2'>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Avatar sx={{ bgcolor: '#413DEE' }} data-aos="fade-down">
                                        <img src={General} alt='' sx={{ height: '20', width: '20' }} />
                                    </Avatar>
                                </Box>
                                <Typography className='text-black fs-6 fw-bold fs-sm-6 text-center mt-2' >
                                    Impact
                                </Typography>
                            </Col>
                            <Col xs={12} md={2} className='my-2'>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Avatar sx={{ bgcolor: '#413DEE' }} data-aos="fade-down">
                                        <img src={Real} alt='' sx={{ height: '20', width: '20' }} />
                                    </Avatar>
                                </Box>
                                <Typography className='text-black fs-6 fw-bold fs-sm-6 text-center mt-2' >
                                    Client-Centric Approach
                                </Typography>
                            </Col>


                        </Row>
                    </Grid>
                </Container>

            </Grid>

            {/* Section consultant */}
            <Container className='mt-5 p-5'>
                <Row>
                    <Col xs={false} md={4}>
                        <img src={Femme} alt='' />
                    </Col>
                    <Col xs={12} md={8}>
                        <Grid >
                            <Box sx={{ textAlign: 'start' }}>
                                <Typography className='text-dark mb-2 fs-1 fw-bold fs-sm-5 '>
                                    Consultancy services
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='mb-2'>
                                    Select your category here to know more about the services we are offering for you!
                                </Typography>

                            </Box>
                            <Row>
                                <Col xs={12} md={6}>
                                    <List className='fw-bold' data-aos="fade-up">
                                        <ListItem>
                                            <ListItemIcon className='fs-3 fw-bold fs-sm-5' sx={{ color: '#413DEE' }}>01.</ListItemIcon>
                                            <ListItemText sx={{ fontWeight: 'bold' }} primary="Regional Space-related institutions" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon className='fs-3 fw-bold fs-sm-5' sx={{ color: '#413DEE' }}>03.</ListItemIcon>
                                            <ListItemText sx={{ fontWeight: 'bold' }} primary="Space Agencies" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon className='fs-3 fw-bold fs-sm-5' sx={{ color: '#413DEE' }}>05.</ListItemIcon>
                                            <ListItemText sx={{ fontWeight: 'bold' }} primary="Ministries & Public institutions" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon className='fs-3 fw-bold fs-sm-5' sx={{ color: '#413DEE' }}>07.</ListItemIcon>
                                            <ListItemText sx={{ fontWeight: 'bold' }} primary="Non-Governmental Organizations (NGOs)" />
                                        </ListItem>
                                    </List>
                                </Col>
                                <Col xs={12} md={6}>
                                    <List className='fw-bold' data-aos="fade-down">
                                        <ListItem>
                                            <ListItemIcon className='fs-3 fw-bold fs-sm-5' sx={{ color: '#413DEE' }}>02.</ListItemIcon>
                                            <ListItemText sx={{ fontWeight: 'bold' }} primary="Universities" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon className='fs-3 fw-bold fs-sm-5' sx={{ color: '#413DEE' }}>04.</ListItemIcon>
                                            <ListItemText sx={{ fontWeight: 'bold' }} primary="Research Institutions and Laboratories" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon className='fs-3 fw-bold fs-sm-5' sx={{ color: '#413DEE' }}>06.</ListItemIcon>
                                            <ListItemText sx={{ fontWeight: 'bold' }} primary="Startups and Small Businesses" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon className='fs-3 fw-bold fs-sm-5' sx={{ color: '#413DEE' }}>08.</ListItemIcon>
                                            <ListItemText sx={{ fontWeight: 'bold' }} primary="International Space Agencies and Organizations" />
                                        </ListItem>
                                    </List>
                                </Col>
                            </Row>
                            <Grid> <Button variant="outlined" sx={{ height: '35px', borderRadius: '20px' }} data-aos="fade-right" >Tout voir</Button></Grid>
                        </Grid>
                    </Col>

                </Row>

            </Container>

            {/* Section services */}
            <Container className='mb-5 p-5'>
                <Row>
                    <Col xs={12} sm={7} md={5}>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'start' }}>
                            <Box sx={{ textAlign: 'start', paddingTop: '20px' }}>
                                <Typography className='text-dark mb-2 fs-1 fw-bold fs-sm-5 ' data-aos="fade-down">
                                    Service Packages
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='mb-5'>
                                    At PSI, we understand that each project is unique and may require different approaches, resources,
                                    and levels of engagement. Our service packages are tailored to meet the specific needs and goals of
                                    your project, taking into account various parameters such as scope, complexity, timeline, and budget.
                                    Please contact us to discuss your project in detail and provide us with insights into your requirements,
                                    objectives, and constraints. Based on this information, we will work closely with you to customize a
                                    service package that best aligns with your needs and maximizes the value we can deliver.
                                </Typography>

                            </Box>
                        </Grid>
                    </Col>
                    <Col xs={12} sm={7} md={7} style={{ backgroundColor: '#0B0A38', color: 'white' }} className='p-4'>
                        <Typography className='text-white mb-2 fs-1 fw-bold fs-sm-5 p-2' data-aos="fade-down">
                            Client Onboarding Process
                        </Typography>
                        <List >
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary={<Typography className='fw-bold fs-5'>Initial Consultation:</Typography>} secondary={<Typography variant='body' style={{ color: 'white' }}> We begin with an initial consultation to understand your project requirements,objectives, and constraints.</Typography>} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary={<Typography className='fw-bold fs-5'>Project Scoping:</Typography>} secondary={<Typography variant='body' style={{ color: 'white' }}> Based on the information gathered, we work with you to define the scope, deliverables, and timeline for the project</Typography>} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary={<Typography className='fw-bold fs-5'>Contract Negotiation:</Typography>} secondary={<Typography variant='body' style={{ color: 'white' }}> Once the project scope is finalized, we negotiate the terms and conditions of the consultancy agreement, ensuring mutual understanding and agreement on all aspects.</Typography>} />

                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary={<Typography className='fw-bold fs-5'>Project Kickoff:</Typography>} secondary={<Typography variant='body' style={{ color: 'white' }}> With the contract signed, we initiate the project kickoff, assembling the project team and establishing communication channels and project management processes.</Typography>} />
                            </ListItem>
                        </List>
                    </Col>


                </Row>

            </Container>

            {/* Section Mission */}
            <Grid sx={{ backgroundColor: '#30509D' }} className='mb-5 p-5'>
                <Row className='p-5'>
                    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <IconButton aria-label="play/pause" sx={{ border: '2px solid' }} className='mb-4' onClick={handleClickOpen}>
                                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                            </IconButton>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogContent>
                                    <iframe
                                        width="515"
                                        height="315"
                                        src="https://www.youtube.com/embed/HcnEyYGmiXs?si=miuOxD--Gdl6c42x"
                                        title="YouTube video player"
                                        allowFullScreen
                                    ></iframe>
                                </DialogContent>
                            </Dialog>
                            <Typography className='text-white mb-2 fs-5 fw-bold fs-sm-5 ' data-aos="fade-right">
                                Mission et valeurs fondamentales
                            </Typography>
                            <Typography variant="body2" color="white" className='mb-5' data-aos="fade-left">
                                Element um nibh tellus molestie nunc non blandit massa. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.
                            </Typography>

                        </Box>
                    </Grid>
                </Row>
            </Grid>

            {/* Section FAQ */}
            <Container >
                <Grid >
                    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography className='black mb-2 fs-1 fw-bold fs-sm-5 p-2' data-aos="fade-down">
                                FAQs
                            </Typography>
                            <List >
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon sx={{ color: 'black' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography className='fw-bold fs-5'>What industries do you serve with your consultancy services?</Typography>}
                                        secondary={<Typography variant='body'> We serve clients across various industries within the space sector, including telecommunications,
                                            agriculture,environmental monitoring, tourism, government agencies, and more.</Typography>} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon sx={{ color: 'black' }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<Typography className='fw-bold fs-5'>How do I request a consultation or learn more about your services?</Typography>} secondary={<Typography variant='body'>
                                        Simply fill out the contact form on our website or reach out to us via email or phone. Our team will
                                        be happy to schedule a consultation and discuss your project requirements in detail.
                                    </Typography>} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowForwardIcon sx={{ color: 'black' }} />
                                    </ListItemIcon>
                                    <ListItemText primary={<Typography className='fw-bold fs-5'>How long does the consultancy process typically take?</Typography>}
                                        secondary={<Typography variant='body'> Once the project scope is finalized, we negotiate the terms and conditions of the consultancy agreement, ensuring mutual understanding and agreement on all aspects.</Typography>} />

                                </ListItem>

                            </List>
                        </Box>
                    </Grid>

                </Grid>
            </Container>

            <BackToTop />
            <Footer />
        </>
    )
}
export default Consultant