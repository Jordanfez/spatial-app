import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardActionArea, Paper } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import AOS from "aos";
import { default as React, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import astronaut from '../../img/astronaute.png';
import image2 from '../../img/industries.png';
import satellite from '../../img/satellite.png';
import technical from '../../img/Technical.png';
import BackToTop from '../ScoolTop/BackToTop';

const Industri = () => {

    const navigate = useNavigate();
    const handleVoirPropo = () => {
        navigate('/NotFound');
    };

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);


    return (
        <>
            <Container fluid className="bg-body-tertiary">
                <Header />
            </Container>
            <Grid fluid component="main"
                style={{
                    backgroundImage: 'url(https://img.freepik.com/premium-photo/3d-rendering-network-data-exchange-planet-earth-space-connection-lines-around-earth-globe-global-international-connectivity-elements-this-image-furnished-by-nasa_92790-575.jpg)',
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
                        <Grid className='my-5 my-sm-0'>
                            <Box sx={{ padding: 2 }} className='mt-5 text-center' style={{ width: '135%' }}>
                                <Typography className='text-white mt-2 fs-1 fw-normal fs-sm-5 ' data-aos="fade-right">Industrialization</Typography>

                                <Typography className='text-white mt-2 fs-1 fw-normal fs-sm-5 ' data-aos="fade-right">Discover our current projects</Typography>
                                <Typography className='text-white mt-2 fs-1 fw-normal fs-sm-5 ' data-aos="fade-left">
                                    Ground Station as a Service to Space Connectivity
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            {/* <Container style={{ marginBottom: '2%', marginTop: '6%' }}>
                <Row>
                    <Col >
                        <Grid >
                            <Paper style={{

                                backgroundColor: '#ccd0db'
                            }} >
                                <Container style={{ height: 'auto', padding: '10%' }}>
                                    <Typography className='text-black fs-sm-6 '>
                                        At PSI, we offer cutting-edge ground station services tailored to meet the diverse needs of the rapidly
                                        evolving space industry. Whether you're a satellite operator, a new space startup, or a government
                                        agency, we provide the infrastructure and expertise you need to communicate with and control your
                                        spacecraft efficiently and reliably.
                                    </Typography>
                                </Container>

                            </Paper></Grid>

                    </Col>
                    <Col >
                        <Grid
                            sx={{
                                width: {
                                    xs: '10px',
                                    sm: '50px',
                                    md: '20px'
                                },

                                marginBottom: '20px',
                                textAlign: 'center',

                            }}
                        >
                            <img src={image2} alt='top' width='600rem' />
                        </Grid>
                    </Col>
                </Row>

            </Container> */}

            <Container className='mt-5' style={{ marginBottom: '2%' }}>
                <Row>
                    <Col style={{ padding: '1%' }}>
                        <Grid >
                            <Paper style={{
                                backgroundColor: '#ccd0db'
                            }}>
                                <Container style={{ height: 'auto', padding: '10%' }}>
                                    <Typography className='text-black fs-sm-6 ' data-aos="fade-left">
                                        At PSI, we offer cutting-edge ground station services tailored to meet the diverse needs of the rapidly
                                        evolving space industry. Whether you're a satellite operator, a new space startup, or a government
                                        agency, we provide the infrastructure and expertise you need to communicate with and control your
                                        spacecraft efficiently and reliably.
                                    </Typography>
                                </Container>
                            </Paper></Grid>
                    </Col>
                    <Col >
                        <Grid >
                            <Container >
                                <img src={image2} alt='top' width='600rem' data-aos="fade-right" style={{ boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.1)', borderRadius: '2%' }} />
                            </Container>
                        </Grid>
                    </Col>

                </Row>

            </Container >

            {/* section */}
            <Container className='mt-5' style={{ marginBottom: '2%' }}>
                <Row>
                    <Col >
                        <Grid >
                            <Container style={{ height: 'auto', padding: '10%' }} data-aos="fade-down">
                                <h2 className='text-dark' >Our Services
                                </h2>
                                {/* <List >
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowForwardIcon sx={{ color: 'black' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography className='fw-bold fs-5'>Ground Station as a Service (GSaaS): </Typography>} secondary={<Typography variant='body' style={{ color: 'black' }}>Access our global network of ground stations to communicate with your satellites and downlink data in real-time.</Typography>} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowForwardIcon sx={{ color: 'black' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography className='fw-bold fs-5'>Data Reception and Processing: </Typography>} secondary={<Typography variant='body' style={{ color: 'black' }}>Receive, process, and analyze satellite imagery and sensor data for various applications, including remote sensing, environmental monitoring, and disaster response.</Typography>} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowForwardIcon sx={{ color: 'black' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography className='fw-bold fs-5'>Communication Solutions: </Typography>} secondary={<Typography variant='body' style={{ color: 'black' }}>Ensure seamless communication between ground-based operations and spacecraft, supporting mission-critical activities such as command and control, telemetry, and payload data transmission</Typography>} />
                                        </ListItem>
                                    </List> */}
                                <Grid item xs={12} md={4} >
                                    <Accordion sx={{ background: '#f1f2f4' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <Typography>Ground Station as a Service (GSaaS):</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Access our global network of ground stations to communicate with your satellites and downlink data in real-time.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion sx={{ background: '#f1f2f4' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Typography>Data Reception and Processing: </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Receive, process, and analyze satellite imagery and sensor data for various applications, including remote sensing, environmental monitoring, and disaster response.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion sx={{ background: '#f1f2f4' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Typography>Communication Solutions:</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Ensure seamless communication between ground-based operations and spacecraft, supporting mission-critical activities such as command and control, telemetry, and payload data transmission
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>

                            </Container>

                        </Grid>
                    </Col>
                    <Col >
                        <Grid >
                            <Container style={{ padding: '10%' }} data-aos="fade-down">
                                <h2 className='text-dark' >Why Choose PSI?</h2>
                                {/* <List className='text-white'>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowForwardIcon sx={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography className='fw-bold fs-5'>Reliability: </Typography>} secondary={<Typography variant='body' style={{ color: 'white' }}>Our state-of-the-art ground station infrastructure is designed for maximum reliability, ensuring uninterrupted communication with your satellites.</Typography>} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowForwardIcon sx={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography className='fw-bold fs-5'>Expertise:</Typography>} secondary={<Typography variant='body' style={{ color: 'white' }}> Benefit from the expertise of our skilled engineers and technicians who manage and operate our ground stations with precision and efficiency.</Typography>} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowForwardIcon sx={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography className='fw-bold fs-5'> Flexibility:</Typography>} secondary={<Typography variant='body' style={{ color: 'white' }}> Choose from flexible subscription plans or pay-as-you-go options to meet your specific communication and data processing needs.</Typography>} />

                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowForwardIcon sx={{ color: 'white' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography className='fw-bold fs-5'>Global Reach:</Typography>} secondary={<Typography variant='body' style={{ color: 'white' }}> With ground stations strategically located around the world, we offer global coverage and support for satellite missions spanning across continents and oceans.</Typography>} />
                                        </ListItem>
                                    </List> */}

                                <Grid item xs={12} md={4} >
                                    <Accordion sx={{ background: '#f1f2f4' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <Typography>Reliability:</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Our state-of-the-art ground station infrastructure is designed for maximum reliability, ensuring uninterrupted communication with your satellites.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion sx={{ background: '#f1f2f4' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Typography>Expertise:</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Benefit from the expertise of our skilled engineers and technicians who manage and operate our ground stations with precision and efficiency.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion sx={{ background: '#f1f2f4' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Typography>Flexibility:</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Choose from flexible subscription plans or pay-as-you-go options to meet your specific communication and data processing needs.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion sx={{ background: '#f1f2f4' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Typography>Global Reach:</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                With ground stations strategically located around the world, we offer global coverage and support for satellite missions spanning across continents and oceans.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>

                            </Container>
                        </Grid>
                    </Col>

                </Row>

            </Container >

            <Container fluid className='mt-5' style={{ marginBottom: '2%' }}>
                <Row>
                    <Typography className='text-dark mb-2 fs-1 fw-bold fs-sm-5 text-center' data-aos="fade-right">
                        Empowering Africa's Future
                    </Typography>

                    <Col >
                        <img src={satellite} alt='top' style={{ borderRadius: '0.8%' }} />
                    </Col>
                    <Col >
                        <Grid >
                            <Paper style={{
                                height: '40rem',
                                backgroundColor: '#f2f2f2'
                            }} >
                                <Container style={{ padding: '10%' }} data-aos="fade-down-left">
                                    <h2 className='text-dark' >Prototyping a 6U Multi-purpose Satellite: </h2>
                                    <List className='text-dark' data-aos="fade-down-left">
                                        <ListItem>
                                            <ListItemText primary={<Typography className='fs-5'>In the dynamic Pan-African Space Industry, we propose developing
                                                a 6U multi-purpose satellite to revolutionize commercial space
                                                applications across the continent. Our vision is to harness Africa's
                                                potential, drive economic growth, and propel our continent to new
                                                heights in the global space arena.
                                            </Typography>} />
                                        </ListItem>
                                    </List>
                                </Container>
                            </Paper></Grid>
                    </Col>

                </Row>

            </Container >

            {/* Section Empowering */}
            <Container Container  >
                <Grid sx={{
                    marginTop: '50px'
                }}>
                    <Grid sx={{

                        paddingInline: {
                            md: '70px'
                        },
                        borderRadius: 3
                    }}>
                        <Typography className='text-center p-3' variant='h5'>Seizing the Moment:</Typography>

                        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', color: '#413DEE' }} >
                            <Grid item xs={12} sm={6} md={3} >
                                <Paper elevation={6}>
                                    <Card sx={{ textAlign: 'start' }} data-aos="fade-down-left">
                                        <CardMedia
                                            component="img"
                                            sx={{ height: 120 }}
                                            image={'https://www.worldbank.org/content/dam/infographics/780xany/2019/jul/20190725-thefutureofworkafrica780.jpg'}
                                            alt="Live from space album cover"
                                        />
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    <span style={{ fontWeight: 'bold' }}>Rising Demand:</span>  Africa's increasing demand for satellite services creates an opportune
                                                    moment for innovation.
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>

                                    </Card>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} sx={{ marginLeft: 2 }} >
                                <Paper elevation={6}>
                                    <Card sx={{ textAlign: 'start' }} data-aos="fade-down-left">
                                        <CardMedia
                                            component="img"
                                            sx={{ height: 120 }}
                                            image={'https://media.licdn.com/dms/image/sync/D4D27AQFPYgTiJNYgNw/articleshare-shrink_800/0/1705775473038?e=2147483647&v=beta&t=ZZx9kDZkfNpytaN-MwU0FaL8DP2TEW96GmOQwYYZZLQ'}
                                            alt="Live from space album cover"
                                        />
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    <span style={{ fontWeight: 'bold' }}>Innovative Edge: </span>Our adaptable satellite fills a gap for compact, tailored solutions in Africanmarkets.
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>

                                    </Card>
                                </Paper>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

                <Grid sx={{
                    marginTop: '40px'
                }}>
                    <Grid sx={{

                        paddingInline: {
                            md: '70px'
                        },
                        borderRadius: 3
                    }}>
                        <Typography className='text-center p-3' variant='h5'>Financial Prosperity:</Typography>
                        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', color: '#413DEE' }} >
                            <Grid item xs={12} sm={6} md={3} >
                                <Paper elevation={6}>
                                    <Card sx={{ textAlign: 'start' }} data-aos="fade-left">
                                        <CardMedia
                                            component="img"
                                            sx={{ height: 120 }}
                                            image={'https://soleraam.com/wp-content/uploads/2019/07/defensive-investment-strategy.jpeg'}
                                            alt="Live from space album cover"
                                        />
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    <span style={{ fontWeight: 'bold' }}>Strategic Investment:</span> Transparent projections offer investors an opportunity to participate in Africa's space revolution
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>

                                    </Card>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} sx={{ marginLeft: 2 }} >
                                <Paper elevation={6}>
                                    <Card sx={{ textAlign: 'start' }} data-aos="fade-down-left">
                                        <CardMedia
                                            component="img"
                                            sx={{ height: 120 }}
                                            image={'https://www.mea-markets.com/wp-content/uploads/2023/03/science.jpg'}
                                            alt="Live from space album cover"
                                        />
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    <span style={{ fontWeight: 'bold' }}>Sustainable Growth: </span>Prudent financial management ensures long-term success and prosperity
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>

                                    </Card>
                                </Paper>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

                <Grid sx={{
                    marginTop: '40px'
                }}>
                    <Grid sx={{
                        padding: '2%',
                        paddingInline: {
                            md: '70px'
                        },
                        borderRadius: 3
                    }}>
                        <Typography className='text-center p-3' variant='h5'>Pioneering Spirit, Mitigated Risks:</Typography>
                        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', color: '#413DEE' }} >
                            <Grid item xs={12} sm={6} md={3} data-aos="fade-down-left">
                                <Paper elevation={6}>
                                    <Card sx={{ textAlign: 'start' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ height: 120 }}
                                            image={'https://www.ias.u-psud.fr/sites/default/files/formation/image1_ESA_M2_OSAE.png'}
                                            alt="Live from space album cover"
                                        />
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    <span style={{ fontWeight: 'bold' }}>Technical Mastery: </span> Commitment to excellence guides us through challenges
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>

                                    </Card>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} sx={{ marginLeft: 2 }} data-aos="fade-down-left">
                                <Paper elevation={6}>
                                    <Card sx={{ textAlign: 'start' }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ height: 120 }}
                                            image={'https://static.latribune.fr/full_width/2140723/thales-alenia-space-iride-asi-esa.jpg'}
                                            alt="Live from space album cover"
                                        />
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    <span style={{ fontWeight: 'bold' }}>Market Vigilance: </span> Adapting to market shifts and seizing emerging opportunities with agility
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>

                                    </Card>
                                </Paper>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>


            </Container >

            {/** section Microsatellite */}
            <Container className='mt-4' style={{ marginBottom: '2%' }}>
                <Row>
                    <Col>
                        <Box className='text-center' sx={{ padding: 12 }}>
                            <img src={technical} alt='Technical' />
                        </Box>
                    </Col>
                    <Col >
                        <Box className='p-5' style={{ marginLeft: '-19%' }} data-aos="fade-right">
                            <Typography >Our journey to prototype a 6U multi-purpose satellite signifies more than innovation; it's a
                                transformative movement shaping Africa's future in the cosmos. Join us as we unleash Africa's
                                limitless potential and chart a brighter, more prosperous future for all.
                            </Typography><br />

                            <Typography className='fw-bold' variant='h5' >Microsatellite Constellation "Sankara" Specifications</Typography>
                            <Typography className='p-2'>Constellation Name: Sankara. <br />
                                <span style={{ fontWeight: 'bold' }}>Area: IoT / M2M</span><br />
                                <span style={{ fontWeight: 'bold' }}> Info:</span><br />
                                <Box className='p-2'> ● Constellation comprises microsatellites increasing in size, managed by Saber Astronautics. <br />
                                    ● Deployment ongoing, 7 satellites launched, 14 planned.
                                </Box>
                                <span style={{ fontWeight: 'bold' }}>Types:</span><br />
                                <Box className='p-2'>● Microsat, 6U, 12U
                                </Box>
                                <span style={{ fontWeight: 'bold' }}>Manufacturers:</span><br />
                                <Box className='p-2'>● Pan-African Space Industry
                                    First Launch: 2027
                                </Box>
                            </Typography>
                        </Box>
                    </Col>

                </Row>

            </Container >


            {/** section Microsatellite */}
            <Container className='mt-4' style={{ marginBottom: '2%' }}>
                <Row>
                    <h2 className='text-dark text-center' data-aos="fade-left">Introducing Our Space Suit Innovations</h2>

                    <Col>
                        <Box className='p-5 mt-4'>
                            <Typography >At the forefront of space technology, we are
                                proud to unveil our latest breakthroughs in
                                Space Suit design. Our team of engineers and
                                designers is dedicated to creating a new
                                generation of Space Suits that redefine the
                                possibilities of extravehicular activities (EVAs)
                                and ensure the safety and comfort of astronauts during their missions.
                            </Typography>
                        </Box>

                    </Col>
                    <Col >
                        <Box className='text-center mt-4'>
                            <img src={astronaut} alt='Technical' />
                        </Box>
                    </Col>
                </Row>

            </Container >

            <Container className='mt-5' style={{ marginBottom: '2%' }}>
                <Row>
                    <Col >
                        <Grid >
                            <Paper style={{
                                height: 'auto',
                                backgroundColor: '#00134d'
                            }} >
                                <Container style={{ padding: '10%' }} data-aos="fade-down">
                                    <h2 className='text-white' >Introducing Our Space Suit Innovations</h2>
                                    <Typography className='text-white'>
                                        At the forefront of space technology, we are
                                        proud to unveil our latest breakthroughs in
                                        Space Suit design. Our team of engineers and
                                        designers is dedicated to creating a new
                                        generation of Space Suits that redefine the
                                        possibilities of extravehicular activities (EVAs)
                                        and ensure the safety and comfort of astronauts during their missions.
                                    </Typography><br />
                                    <Typography className='text-white'>
                                        Cutting-Edge Features
                                        Our Space Suits incorporate cutting-edge technologies and advanced materials to provide
                                        unparalleled performance in the harsh environment of space. Key features include:
                                    </Typography><br />

                                    <Container style={{ padding: '1%' }}>
                                        <Typography className='text-white'>
                                            <ArrowForwardIcon /><span style={{ fontWeight: 'bolder' }}>Enhanced Mobility: </span>Designed for maximum flexibility and ease of movement during EVAs. Advanced joint mechanisms and ergonomic design ensure optimal range of motion.
                                        </Typography>

                                        <Typography className='text-white'>
                                            <ArrowForwardIcon /><span style={{ fontWeight: 'bolder' }}>Comfort and Life Support: </span>Integrated life support systems regulate temperature, provide breathable air, and manage bodily waste, ensuring astronaut comfort and focus.
                                        </Typography>
                                        <Typography className='text-white'>
                                            <ArrowForwardIcon /><span style={{ fontWeight: 'bolder' }}>Customization and Adaptability: </span>It is tailored to meet the specific requirements of each mission, whether on the lunar surface, in low Earth orbit, or beyond.
                                        </Typography>

                                        <Typography className='text-white'>
                                            <ArrowForwardIcon /><span style={{ fontWeight: 'bolder' }}>Durability and Reliability: </span>Built to withstand extreme temperatures, radiation, micrometeoroids, and other hazards of space travel, ensuring astronaut safety in any scenario.
                                        </Typography>
                                    </Container>
                                    <br />
                                    <h2 className='text-white' >Collaboration et innovation</h2>
                                    <Typography className='text-white'>
                                        Our Space Suit innovations are the result of close collaboration with astronauts, space agencies, and
                                        industry partners. By leveraging their expertise and insights, we continuously push the boundaries of
                                        innovation to meet the evolving needs of space exploration.
                                    </Typography><br />

                                </Container>
                            </Paper></Grid>
                    </Col>
                </Row>

            </Container>

            <Container className='mt-5' style={{ marginBottom: '2%' }}>
                <Row>
                    <Col >
                        <Grid >
                            <Paper style={{
                                backgroundColor: '#f2f2f2'
                            }}>
                                <Container style={{ height: 'auto', padding: '10%' }}>
                                    <h2 className='text-dark' data-aos="fade-right">Cutting-Edge Features </h2>
                                    <List >
                                        <h6 className='text-dark' >Our Space Suits incorporate cutting-edge technologies and advanced materials to provide unparalleled performance in the harsh environment of space. Key features include:</h6>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowForwardIcon sx={{ color: 'black' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography className='fw-bold fs-5'> Enhanced Mobility:  </Typography>} secondary={<Typography variant='body' style={{ color: 'black' }}>Designed for maximum flexibility and ease of movement during EVAs. Advanced joint mechanisms and ergonomic design ensure optimal range of motion.</Typography>} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowForwardIcon sx={{ color: 'black' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography className='fw-bold fs-5'>Comfort and Life Support: </Typography>} secondary={<Typography variant='body' style={{ color: 'black' }}>Integrated life support systems regulate temperature, provide breathable air, and manage bodily waste, ensuring astronaut comfort and focus.</Typography>} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowForwardIcon sx={{ color: 'black' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography className='fw-bold fs-5'>Customization and Adaptability: </Typography>} secondary={<Typography variant='body' style={{ color: 'black' }}> It is tailored to meet the specific requirements of each mission, whether on the lunar surface, in low Earth orbit, or beyond</Typography>} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowForwardIcon sx={{ color: 'black' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography className='fw-bold fs-5'> Durability and Reliability:</Typography>} secondary={<Typography variant='body' style={{ color: 'black' }}> Built to withstand extreme temperatures, radiation, micrometeoroids, and other hazards of space travel, ensuring astronaut safety in any scenario.</Typography>} />
                                        </ListItem>
                                    </List>

                                    <h2 >Collaboration and Innovation</h2>
                                    <Typography >
                                        Our Space Suit innovations are the result of close collaboration with astronauts, space agencies, and
                                        industry partners. By leveraging their expertise and insights, we continuously push the boundaries of
                                        innovation to meet the evolving needs of space exploration.
                                    </Typography>
                                </Container>

                            </Paper></Grid>
                    </Col>
                    <Col >
                        <Grid >
                            <Paper style={{
                                height: '945px',
                                backgroundColor: '#00134d'
                            }} >
                                <Container className='text-white' style={{ padding: '10%' }}>
                                    <h2 data-aos="fade-right">Accelerator programme.</h2>
                                    <Typography >
                                        PSI has an accelerator programme designed to help unearth opportunities for businesses at various
                                        levels of their space journey. From established space businesses to start-ups and anyone working in a
                                        space related industry such as engineering, manufacturing, software, mining or even farming and
                                        other areas, who might not have yet fully explored the opportunities, the accelerator programme will
                                        help boost business growth.<br /><br />
                                        PSI provides support for entrepreneurs at every stage of their space journey. We're on a mission to
                                        make space accessible to all and together, we'll co-create something special, realizing these ambitions
                                        to deliver lasting outcomes for our space sector and related industries across Africa.
                                    </Typography>
                                </Container>
                            </Paper></Grid>
                    </Col>

                </Row>

            </Container >

            <BackToTop />
            <Footer />
        </>
    )
}

export default Industri