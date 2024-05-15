import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { Button, CardActionArea, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import AOS from "aos";
import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import { setActualiteId } from '../features/ActualiterSlice';
import About from '../img/at psi img/About.png';
import Clients from '../img/at psi img/clients.png';
import Mision from '../img/at psi img/Mission2.png';
import Platform from "../img/at psi img/Platform.png";
import Valeu from '../img/at psi img/Values.png';
import Vision from '../img/at psi img/vision.png';
import URL_SERVER from '../services/appApi';
import { fetchActualityFunction } from '../services/GetFunction/GetAdmin/getAdminFunctions';
import HompageCarrousel from './HompageCarrousel';
import BackToTop from './ScoolTop/BackToTop';

const linksArray = ["Accueil", "Services", "À propos de nous", "Actualités", "Contact"];

const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    /** dispacher des projet */
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleGo = (e) => {
        e.preventDefault();

        navigate("/actualite");
    };

    const handleGoConsultants = (e) => {
        e.preventDefault();

        navigate("/NotFound");
    };
    /** actualiter */
    const [actualiter, setActualite] = React.useState([]);

    console.log(actualiter);
    React.useEffect(() => {
        const fectData = async () => {
            try {
                const request = await fetchActualityFunction();
                setActualite(request.slice(-8));
                console.log(request.data);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, []);

    const handleVoirClick = () => {
        navigate('/actualite-Detail');
    }; // navigation vers la page de detais des actualiter

    return (
        <>
            <Container fluid className="bg-body-tertiary">
                <Header links={linksArray} />
            </Container>
            <Grid fluid component="main" style={{ position: 'relative' }}
            // style={{
            //     backgroundImage: 'url(https://www.rheagroup.com/wp-content/uploads/2023/07/blue-planet-space-connectors-banner.jpg)',
            //     backgroundRepeat: 'no-repeat',
            //     backgroundSize: 'cover',
            //     flexDirection: 'start',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //     height: { xs: 300, sm: 500, md: 500 }
            // }}
            >

                <HompageCarrousel />
                {/* <Grid container
                    sx={{
                        padding: {
                            sm: '50px',
                            md: '120px'
                        },
                        // margin: 'auto',
                        marginBottom: '10px'

                    }}
                >
                    <Grid className='mt-2 mt-sm-0'>
                        <Grid className='my-5 my-sm-0' >
                            <Box sx={{ padding: 2 }} className='mt-5'>
                                <Typography className='text-center text-white mt-5 fs-1 fw-normal fs-sm-5'>
                                    Leading space consultancy and Engineering Solution Provider in the African space industry
                                    <Divider sx={{ backgroundColor: '#413DEE', height: 5, width: 100, borderRadius: 5 }} />
                                </Typography>

                            </Box>
                        </Grid>
                    </Grid>


                </Grid> */}
                <Container style={{ position: 'absolute', top: '90%', left: 80, width: '100%', marginTop: '-10%', zIndex: 1 }} sx={{
                    display: {
                        xs: 'none',
                        md: 'false',
                        lg: 'false',
                    }
                }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='my-5'>

                        <Grid item xs={2} sm={3} md={3} data-aos="fade-down" >
                            <Paper elevation={6} >
                                <Card sx={{ textAlign: 'center', height: 265 }} >
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Freelance
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" style={{}}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                        <Link href="/responsiveAppBar" underline="none">
                                            {' En savoir plus'}
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Paper>


                        </Grid>
                        <Grid item xs={2} sm={3} md={3} data-aos="fade-down">
                            <Paper elevation={6}>
                                <Card sx={{ textAlign: 'center', height: 265 }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Space Market
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center', height: '80px' }}>

                                        <Link href="/SpaceMarket" underline="none">
                                            {' En savoir plus'}
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs={2} sm={3} md={3} data-aos="fade-down">
                            <Paper elevation={6}>
                                <Card sx={{ textAlign: 'center', height: 265 }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Consultant
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center', height: '100px' }}>

                                        <Link href="/Consultant" underline="none">
                                            {' En savoir plus'}
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs={2} sm={3} md={3} data-aos="fade-down" style={{ height: '180%' }} >
                            <Paper elevation={6}>
                                <Card sx={{ textAlign: 'center', height: 265 }}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Industrialisation
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center', height: '80px' }}>

                                        <Link href="/industrialisation" underline="none">
                                            {' En savoir plus'}
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>

                    </Grid>
                </Container>

            </Grid>

            {/** section about */}
            <Grid className='mb-5'
                sx={{
                    marginTop: {
                        xl: '10%',
                        lg: '15%',
                        md: '15%',
                        sm: '40%',
                        xs: '140%',
                    },

                }}
            >
                <Row >
                    <Col xs={false} sm={6} md={6} className="p-5 text-center mt-5" data-aos="fade-right">

                        <Typography variant='h3' className="text-center">Who are we?</Typography>
                        <Box textAlign="center">
                            <Typography>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                            </Typography>
                        </Box>
                    </Col>
                    <Col xs={12} sm={6} md={6} className='p-5' data-aos="fade-left">
                        <img src={About} alt='top' width={500} height={400} style={{ boxShadow: '0px 5px rgba(0, 0, 0, 0.1)', borderRadius: '2%' }} />
                    </Col>
                </Row>
            </Grid>

            <Grid className='mb-5' style={{ backgroundColor: '#f1f2f4' }}>
                <Row >
                    <Typography className='text-center text-darkblue mb-2 fw-normal fs-sm-5 p-3' variant='h3'>
                        Cores values
                    </Typography>

                    <Col xs={12} sm={6} md={6} className='p-5' data-aos="fade-left">
                        <div
                        // sx={{
                        //     width: {
                        //         xl: '100%',
                        //         lg: '80%',
                        //         md: '60%',
                        //         sm: '40%',
                        //         xs: '5%',
                        //     },

                        //     height: {
                        //         xl: '100px',
                        //         lg: '80px',
                        //         md: '60px',
                        //         sm: '40px',
                        //         xs: '5px',
                        //     },
                        >
                            <img src={Valeu} alt='top' width={'auto'} height={400} style={{ borderRadius: '7px' }} />
                        </div>
                    </Col>
                </Row>
            </Grid>

            {/* section value mission et vision */}
            <Container>
                <Grid sx={{
                    marginTop: '40px'
                }}>
                    {/* <Grid sx={{
                        background: '#f1f2f4',
                        padding: {
                            xs: '10px',
                            sm: '50px',
                        },
                        paddingInline: {
                            md: '70px'
                        },
                        borderRadius: 3
                    }}>

                        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} >
                            <Grid item xs={12} md={4} data-aos="fade-down-right">
                                <Typography className='text-darkblue mb-2 fs-2 fw-normal fs-sm-5'>
                                    Valeurs Fondamentales
                                </Typography>

                            </Grid>
                            <Grid item xs={12} md={1}></Grid>
                            <Grid item xs={12} md={4} >
                                <Accordion sx={{ background: '#f1f2f4' }}>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography>Innovation</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            We foster a culture of
                                            continuous innovation,
                                            embracing new ideas,
                                            technologies, and
                                            approaches to advance
                                            the Pan-African space
                                            industry.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ background: '#f1f2f4' }}>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Typography>Excellence</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            We strive for excellence in
                                            everything we do,
                                            delivering high-quality
                                            products, services, and
                                            solutions that exceed
                                            expectations.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ background: '#f1f2f4' }}>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Typography>Collaboration</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            We believe in the power
                                            of collaboration and
                                            partnerships, actively
                                            seeking opportunities to
                                            work with stakeholders
                                            across sectors, disciplines,
                                            and geographies to
                                            achieve common goals.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ background: '#f1f2f4' }}>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Typography>Integrity</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            We conduct our business
                                            with the utrncrt integrity,
                                            achering to ethical
                                            principles, tramiparency
                                            and actounlability
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion sx={{ background: '#f1f2f4' }}>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Typography>Diversity and inclusion</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            We celebrate and
                                            embrace diversity,
                                            creating an inclusive and
                                            equitable environment
                                            that values and respects
                                            individuals from all
                                            backgrounds.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ background: '#f1f2f4' }}>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Typography>Sustainability</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            We are committed to
                                            environmental
                                            sustainability,
                                            incorporating responsible
                                            practices into our
                                            operations and promoting
                                            the sustainable use of
                                            space resources.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{ background: '#f1f2f4' }}>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                    >
                                        <Typography>Impact</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            We are driven by a desire
                                            to make a positive impact
                                            on society, leveraging
                                            space technology and
                                            services to address
                                            societal challenges,
                                            improve lives, and drive
                                            economic growth.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>


                            </Grid>

                        </Grid>

                    </Grid> */}
                    <Container sx={{ borderRadius: 3 }}>
                        <Row >
                            {/* <Col className='text-center activiter'>
                                <h2 className='my-3 text-darkblue'>Vision</h2>
                                <Typography className='my-2'>
                                    To be the Leading catalyst for the development and advancement of the Pan-African Space Industry (PSI), empowering Africa’s involvement in global application, technology, and services.
                                </Typography>
                            </Col>
                            <Col className='text-center '>
                                <img src={Vision} alt='top' width={200} height={400} style={{ marginLeft: '-8%' }} />
                            </Col> */}
                            {/* /**commentaire */}
                            {/* <Col xs={12} md={4} className='my-2'>
                                <Card sx={{ borderRight: 4, borderColor: '#ffff', display: 'flex', width: 1260 }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 500 }}
                                        xs={false}
                                        image={Vision}
                                        alt="Live from space album cover"
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                        <CardActionArea>
                                            <CardContent data-aos="fade-down-left">
                                                <Typography className="text-center mt-5" gutterBottom variant="h4" component="div">
                                                    Vision
                                                </Typography>
                                                <Typography className="text-center" gutterBottom component="div" sx={{ padding: '10%' }}>
                                                    To be the Leading catalyst for the development and advancement of the Pan-African Space Industry (PSI), empowering Africa’s involvement in global application, technology, and services.
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Box>

                                </Card>
                            </Col> */}

                            <Col className='text-center'>
                                <Box sx={{ boxShadow: 3, borderRadius: 3, backgroundColor: 'white' }} data-aos="fade-right" height={'auto'} padding={5} style={{ position: 'absolute', left: '13%', zIndex: 2, width: '40%', marginTop: '7%' }}>
                                    <Typography variant='h3' className='my-3 text-darkblue'>Vision</Typography>
                                    <Typography className='my-2'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                    </Typography>
                                </Box>
                            </Col>
                            <Col style={{ position: 'relative', zIndex: 1 }}>
                                <Grid data-aos="fade-left">
                                    <img src={Vision} height={520} alt='Vision' style={{ borderRadius: '2%' }} />
                                </Grid>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs={12} md={4} className='my-2'>
                                <Card sx={{ display: 'flex', width: 1260, marginTop: 8 }}>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundImage: `url(${Mision})`, backgroundRepeat: 'no-repeat' }}>
                                        <CardActionArea style={{ cursor: 'default' }}>
                                            <CardContent data-aos="fade-down">
                                                <Card className="float-end" sx={{ width: 500, height: 'auto', background: 'rgba(255, 255, 255, 0.5)', border: '1px solid #599bd5' }}>
                                                    <Typography className="text-center" component="div" sx={{ padding: '2%' }}>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                                    </Typography>
                                                </Card>

                                                <Card className="float-end mt-2" sx={{ width: 500, height: 'auto', background: 'rgba(255, 255, 255, 0.5)', border: '1px solid #599bd5' }}>
                                                    <Typography className="text-center" component="div" sx={{ padding: '2%' }}>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                                    </Typography>
                                                </Card>

                                                <Card className="float-end mt-2" sx={{ width: 500, height: 'auto', background: 'rgba(255, 255, 255, 0.5)', border: '1px solid #599bd5' }}>
                                                    <Typography className="text-center" component="div" sx={{ padding: '2%' }}>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                                    </Typography>
                                                </Card>

                                                <Card className="float-end mt-2" sx={{ width: 500, height: 'auto', background: 'rgba(255, 255, 255, 0.5)', border: '1px solid #599bd5' }}>
                                                    <Typography className="text-center" component="div" sx={{ padding: '2%' }}>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                                    </Typography>
                                                </Card>

                                                <Card className="float-end mt-2" sx={{ width: 500, height: 'auto', background: 'rgba(255, 255, 255, 0.5)', border: '1px solid #599bd5' }}>
                                                    <Typography className="text-center" component="div" sx={{ padding: '2%' }}>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                                    </Typography>
                                                </Card>

                                                <Card className="float-end mt-2" sx={{ width: 500, height: 'auto', background: 'rgba(255, 255, 255, 0.5)', border: '1px solid #599bd5' }}>
                                                    <Typography className="text-center" component="div" sx={{ padding: '2%' }}>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                                    </Typography>
                                                </Card>
                                                {/* <div style={{ border: '1px solid #599bd5',borderRadius: '4px 4px 4px 4px', background: 'rgba(255, 255, 255, 0.5)', width:'90%', height:'40px' }}>
                                                    <Typography className="text-center" component="div" sx={{ padding: '2%' }}>
                                                        Provide cutting-edge space products and services for Africa, driving technological progress and sustainable development
                                                    </Typography>
                                                </div> */}
                                            </CardContent>
                                            <Typography className="text-center" variant="h3" component="div" sx={{ padding: '2%' }}>
                                                Mission
                                            </Typography>
                                        </CardActionArea>
                                        <Typography data-aos="fade-right" className="text-center" gutterBottom component="div" sx={{ padding: '5%' }}>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                        </Typography>
                                    </Box>

                                    <CardMedia
                                        component="img"
                                        sx={{ width: 500 }}
                                        xs={false}
                                        image={'https://cloudfront-eu-central-1.images.arcpublishing.com/leparisien/3ISLFB2PJRGDBKBLAB2SNU35ZE.jpg'}
                                        alt="Live from space album cover"
                                    />
                                </Card>
                            </Col>

                        </Row>

                        {/* <Row >
                            <Col className='text-center '>
                                <img src={Mission} alt='top' style={{ boxShadow: '0px 5px 2px 5px rgba(0, 0, 0, 0.1)' }} />
                            </Col>
                            <Col className='text-center activiter'>
                                <h2 className='my-3 text-darkblue'>Mission</h2>
                                <Typography className='my-2'>
                                    Fournir des produits et services spatiaux innovants adaptés aux besoins africains, favorisant les
                                    progrès technologiques et le développement durable. Grâce à des partenariats stratégiques,
                                    promouvoir l’inclusion et la diversité dans l’industrie spatiale africaine, en encourageant les talents et
                                    en autonomisant les groupes sous-représentés. Pionnier des systèmes satellitaires indigènes, établir
                                    un marché numérique et donner la priorité à la gestion de l’environnement pour un avenir spatial
                                    durable et responsable en Afrique.
                                </Typography>
                            </Col>
                        </Row> */}

                    </Container>
                </Grid>
            </Container>

            <Grid sx={{ backgroundColor: '', height: '300', marginTop: '5%' }} className='mb-5'>
                <Row >
                    <Col xs={false} sm={6} md={6} data-aos="fade-up-right" style={{}} >

                        <Box className='text-center'>
                            <img src={Platform} alt='' style={{ boxShadow: '0px 5px 3px 5px rgba(0, 0, 0, 0.1)', borderRadius: '2%' }} />
                        </Box>

                    </Col>
                    <Col xs={12} sm={6} md={6} style={{ backgroundColor: '#0B0A38', color: 'white' }} className='p-5' data-aos="fade-up-left">
                        <Typography className='text-white mb-2 fs-1 fw-bold fs-sm-5 p-4'>
                            Our Platform
                        </Typography>
                        <List className='p-3'>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!" />
                            </ListItem>
                        </List>
                    </Col>
                </Row>
            </Grid>

            {/* section entreprise */}
            <Grid fluid sx={{ marginTop: '100px' }}>
                <Grid fluid
                    sx={{
                        padding: {
                            xs: '10px',
                            sm: '50px',
                            md: '50px',
                        },
                        marginTop: '100px',

                    }}
                    style={{
                        backgroundImage: 'url(https://www.rheagroup.com/wp-content/uploads/2021/05/connecting-points-dark-background.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',


                    }}
                >

                    <Grid >

                        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', textAlign: 'center' }}>
                            <Row>
                                <Col xs={12} md={4} className='text-center'>
                                    <Box data-aos="fade-down">
                                        <img src='https://www.rheagroup.com/wp-content/uploads/2021/03/rhea-group-quality-icon.png' alt='' height='120' width='120' />
                                    </Box>
                                    <Typography className='text-white mb-2 fs-2 fw-normal fs-sm-5'>
                                        5 Ans
                                    </Typography>
                                    <Typography className='mb-3 lh-sm text-white' paragraph>
                                        D'experiences et toujours la pour vous servir
                                    </Typography>
                                </Col>
                                <Col xs={12} md={4} className='text-center'>
                                    <Box data-aos="fade-down">
                                        <img src='https://www.rheagroup.com/wp-content/uploads/2021/03/rhea-group-people-icon.png' alt='' height='120' width='120' />
                                    </Box>
                                    <Typography className='text-white mb-2 fs-2 fw-normal fs-sm-5'>
                                        200 Experts
                                    </Typography>
                                    <Typography className='mb-3 lh-sm text-white' paragraph>
                                        Qui sont à votre disposition
                                    </Typography>
                                </Col>
                                <Col xs={12} md={4} className='text-center'>
                                    <Box data-aos="fade-down">
                                        <img src='https://www.rheagroup.com/wp-content/uploads/2021/03/rhea-group-global-europe-icon.png' alt='' height='120' width='120' />
                                    </Box>
                                    <Typography className='text-white mb-2 fs-2 fw-normal fs-sm-5'>
                                        50 Pays
                                    </Typography>
                                    <Typography className='mb-3 lh-sm text-white' paragraph>
                                        Avec qui nous travaillons depuis plusieurs annees
                                    </Typography>
                                </Col>



                            </Row>
                        </Container>

                    </Grid>
                </Grid>
            </Grid>

            {/* section service */}
            <Container>
                <Grid sx={{
                    marginBlock: '100px'
                }}>
                    <Grid>
                        <Box>
                            <Typography className='text-dark mb-2 fs-1 fw-bold fs-sm-5'>
                                Services
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid container className='mt-4'>
                        <Container>
                            <Row>
                                <Col xs={12} md={4} className='my-2'>
                                    <Card sx={{ borderRight: 4, borderColor: '#135ed7', display: 'flex', height: 257, height: 257 }}>
                                        <CardMedia
                                            data-aos="fade-right"
                                            component="img"
                                            sx={{ width: 160 }}
                                            xs={false}
                                            image="data:image/jpeg;base64,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"
                                            alt="Live from space album cover"
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    business intelligence
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                                </Typography>
                                            </CardContent>
                                        </Box>

                                    </Card>
                                </Col>
                                <Col xs={12} md={4} className='my-2'>
                                    <Card sx={{ borderRight: 4, borderColor: '#135ed7', display: 'flex', height: 257 }}>
                                        <CardMedia
                                            data-aos="fade-right"
                                            component="img"
                                            sx={{ width: 160 }}
                                            image="data:image/jpeg;base64,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"
                                            alt="Live from space album cover"
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    Virtual data analysis centre                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                                </Typography>
                                            </CardContent>
                                        </Box>

                                    </Card>
                                </Col>
                                <Col xs={12} md={4} className='my-2'>
                                    <Card sx={{ borderRight: 4, borderColor: '#135ed7', display: 'flex', height: 257 }}>
                                        <CardMedia
                                            data-aos="fade-right"
                                            component="img"
                                            sx={{ width: 160 }}
                                            image="data:image/jpeg;base64,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"
                                            alt="Live from space album cover"
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    Design Tool Af-OCDT
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                    </Card>
                                </Col>
                                <Col xs={12} md={4} className='my-2'>
                                    <Card sx={{ borderRight: 4, borderColor: '#135ed7', display: 'flex', height: 257 }}>
                                        <CardMedia
                                            data-aos="fade-right"
                                            component="img"
                                            sx={{ width: 160 }}
                                            image="data:image/jpeg;base64,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"
                                            alt="Live from space album cover"
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    Digital factories
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                                </Typography>
                                            </CardContent>
                                        </Box>

                                    </Card>
                                </Col>
                                <Col xs={12} md={4} className='my-2'>
                                    <Card sx={{ borderRight: 4, borderColor: '#135ed7', display: 'flex', height: 257 }}>
                                        <CardMedia
                                            data-aos="fade-right"
                                            component="img"
                                            sx={{ width: 160 }}
                                            image="data:image/jpeg;base64,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"
                                            alt="Live from space album cover"
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    laboratory
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                                </Typography>
                                            </CardContent>
                                        </Box>

                                    </Card>
                                </Col>
                                <Col xs={12} md={4} className='my-2'>
                                    <Card sx={{ borderRight: 4, borderColor: '#135ed7', display: 'flex', height: 257 }}>
                                        <CardMedia
                                            data-aos="fade-right"
                                            component="img"
                                            sx={{ width: 160 }}
                                            image="data:image/jpeg;base64,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"
                                            alt="Live from space album cover"
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    manufactured in Africa
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!
                                                </Typography>
                                            </CardContent>
                                        </Box>

                                    </Card>
                                </Col>

                            </Row>
                        </Container>
                    </Grid>
                </Grid>
            </Container>

            {/* Section actualite */}
            <Container >
                <Grid sx={{
                    marginBlock: '100px'
                }} >
                    <Grid data-aos="fade-right">
                        <Box>
                            <Typography className='text-dark fs-1 fw-bold fs-sm-5'>
                                Latest news
                            </Typography>

                        </Box>
                        <Box>
                            <Button href='/actualite' variant="outlined" sx={{ borderRadius: '20px' }} >See all</Button>
                        </Box>

                    </Grid>
                    <Grid container spacing={{ xs: 2, md: 3 }}  className='my-5'>
                        {actualiter.length === 0 ? (
                            <Container >
                            <div className='row'>
                                <div className='col-3'>
                                    <Grid item sx={{width:300}} >
                                        <Paper elevation={6}>
                                            <Card sx={{ textAlign: 'start', height: 420 }}>
                                                <CardMedia
                                                    component="img"
                                                    // sx={{ height: 60 }}
                                                    image="data:image/jpeg;base64,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"
                                                    alt="Live from space album cover"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Title
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!

                                                    </Typography>
                                                </CardContent>
                                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                                    <Link style={{ cursor: 'pointer' }} underline="none">
                                                        {' Lire...'}
                                                    </Link>
                                                </CardActions>
                                            </Card>
                                        </Paper>
                                    </Grid>
                                </div>
                                <div className='col-3'>
                                    <Grid item sx={{width:300}} >
                                        <Paper elevation={6}>
                                            <Card sx={{ textAlign: 'start', height: 420 }}>
                                                <CardMedia
                                                    component="img"
                                                    // sx={{ height: 60 }}
                                                    image="data:image/jpeg;base64,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"
                                                    alt="Live from space album cover"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Title
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!

                                                    </Typography>
                                                </CardContent>
                                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                                    <Link style={{ cursor: 'pointer' }} underline="none">
                                                        {' Lire...'}
                                                    </Link>
                                                </CardActions>
                                            </Card>
                                        </Paper>
                                    </Grid>
                                </div>
                                <div className='col-3'>
                                    <Grid item sx={{width:300}} >
                                        <Paper elevation={6}>
                                            <Card sx={{ textAlign: 'start', height: 420 }}>
                                                <CardMedia
                                                    component="img"
                                                    // sx={{ height: 60 }}
                                                    image="data:image/jpeg;base64,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"
                                                    alt="Live from space album cover"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Title
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!

                                                    </Typography>
                                                </CardContent>
                                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                                    <Link style={{ cursor: 'pointer' }} underline="none">
                                                        {' Lire...'}
                                                    </Link>
                                                </CardActions>
                                            </Card>
                                        </Paper>
                                    </Grid>
                                </div>
                                <div className='col-3'>
                                    <Grid item sx={{width:300}} >
                                        <Paper elevation={6}>
                                            <Card sx={{ textAlign: 'start', height: 420 }}>
                                                <CardMedia
                                                    component="img"
                                                    // sx={{ height: 60 }}
                                                    image="data:image/jpeg;base64,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"
                                                    alt="Live from space album cover"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Title
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus officiis similique amet illo ut nobis in sunt voluptas adipisci rem ex nihil consequuntur sed! Hic!

                                                    </Typography>
                                                </CardContent>
                                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                                    <Link style={{ cursor: 'pointer' }} underline="none">
                                                        {' Lire...'}
                                                    </Link>
                                                </CardActions>
                                            </Card>
                                        </Paper>
                                    </Grid>
                                </div>

                            </div>
                            </Container>
                        ) : (
                            actualiter.map((actu) => (
                                <Grid item xs={12} sm={6} md={3} key={actu.id} >
                                    <Paper elevation={6}>
                                        <Card sx={{ textAlign: 'start', height: 420 }}>
                                            <CardMedia
                                                component="img"
                                                // sx={{ height: 60 }}
                                                image={`${URL_SERVER}${actu.image}`}
                                                alt="Live from space album cover"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {actu.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {actu.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                                <Link style={{ cursor: 'pointer' }} onClick={() => handleVoirClick(dispatch(setActualiteId(actu.id)))} underline="none">
                                                    {' Lire...'}
                                                </Link>
                                            </CardActions>
                                        </Card>
                                    </Paper>
                                </Grid>
                            )
                            ))}

                    </Grid>
                </Grid>
            </Container>

            {/** constluting teams */}
            {/* <Container >
                <Grid sx={{
                    marginBlock: '100px'
                }} >
                    <Grid sx={{ display: 'flex', justifyContent: 'space-between' }} data-aos="fade-left">
                        <Box >
                            <Typography className='text-dark mb-2 fs-1 fw-bold fs-sm-5'>
                                Consultants
                            </Typography>

                        </Box>
                        <Button variant="outlined" sx={{ height: '35px', borderRadius: '20px' }} onClick={handleGoConsultants} >Explorer plus</Button>
                    </Grid>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }} className='my-5'>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className="col-md-3" style={{ width: 'auto' }}>
                                <div>
                                    <div style={{ backgroundImage: 'url(https://www.euroconsult-ec.com/wp-content/uploads/2023/11/Avatar-Woman-NEW.jpg.webp', backgroundRepeat: 'none', height: '300px', width: 'auto' }}>
                                    </div>
                                    <div className='mt-3'>
                                        Name <br />
                                        <Typography>Specialisation</Typography>
                                    </div>
                                    <Typography className='float-end mt-3'>Voir la biographie <ArrowOutwardIcon /></Typography>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <div className="col-md-3" style={{ width: 'auto' }}>
                                <div>
                                    <div style={{ backgroundImage: 'url(https://www.euroconsult-ec.com/wp-content/uploads/2023/11/Avatar-Woman-NEW.jpg.webp', backgroundRepeat: 'none', height: '300px', width: 'auto' }}>
                                    </div>
                                    <div className='mt-3'>
                                        Name <br />
                                        <Typography>Specialisation</Typography>
                                    </div>
                                    <Typography className='float-end mt-3'>Voir la biographie <ArrowOutwardIcon /></Typography>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <div className="col-md-3" style={{ width: 'auto' }}>
                                <div>
                                    <div style={{ backgroundImage: 'url(https://www.euroconsult-ec.com/wp-content/uploads/2023/11/Avatar-Woman-NEW.jpg.webp', backgroundRepeat: 'none', height: '300px', width: 'auto' }}>
                                    </div>
                                    <div className='mt-3'>
                                        Name <br />
                                        <Typography>Specialisation</Typography>
                                    </div>
                                    <Typography className='float-end mt-3'>Voir la biographie <ArrowOutwardIcon /></Typography>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <div className="col-md-3" style={{ width: 'auto' }}>
                                <div>
                                    <div style={{ backgroundImage: 'url(https://www.euroconsult-ec.com/wp-content/uploads/2023/11/Avatar-Woman-NEW.jpg.webp', backgroundRepeat: 'none', height: '300px', width: 'auto' }}>
                                    </div>
                                    <div className='mt-3'>
                                        Name <br />
                                        <Typography>Specialisation</Typography>
                                    </div>
                                    <Typography className='float-end mt-3'>Voir la biographie <ArrowOutwardIcon /></Typography>
                                </div>
                            </div>
                        </Grid>


                    </Grid>
                </Grid>
            </Container> */}

            <Container>
                <Grid sx={{ backgroundColor: '', height: '300', marginTop: '5%' }} className='mb-5'>
                    <Typography className='text-center text-dark mb-2 fs-1 fw-bold fs-sm-5 p-4' data-aos="fade-right">
                        Our clients
                    </Typography>

                    <Row >
                        {/* <Col xs={12} sm={6} md={6} style={{ backgroundColor: '#0B0A38', color: 'white' }} className='p-5'>
                        <List className='p-3'>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Space agencies." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Research institutions." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Satellite operators." />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Aerospace companies." />
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Academic institutions" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Government agencies" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Media outlets" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIcon sx={{ color: 'white' }} />
                                </ListItemIcon>
                                <ListItemText primary="Stakeholders involved in space sciences, applications, and technologies." />
                            </ListItem>
                        </List>
                    </Col>
                    <Col xs={false} sm={6} md={6} style={{ backgroundImage: `url(${Clients})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    </Col> */}

                        <Card sx={{ display: 'flex', width: '100%' }}>

                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                                {/* <Typography className="text-center" variant="h4" component="div" sx={{ padding: '2%' }}>
                                        Mission
                                    </Typography> */}
                                <CardContent>
                                    <List className='p-3'>
                                        <ListItem>
                                            <ListItemIcon>
                                                <DoneOutlineIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <DoneOutlineIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <DoneOutlineIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <DoneOutlineIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemIcon>
                                                <DoneOutlineIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <DoneOutlineIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <DoneOutlineIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <DoneOutlineIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </Box>

                            <CardMedia
                                data-aos="fade-down"
                                component="img"
                                sx={{ width: 700 }}
                                xs={false}
                                image={Clients}
                                alt="Live from space album cover"
                            />
                        </Card>

                    </Row>
                </Grid>
            </Container>


            <BackToTop />
            <Footer />

        </>
    )
}

export default Home