import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AOS from "aos";
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import URL_SERVER from "../../services/appApi.js";
import { fetchEvenementsFunction } from '../../services/GetFunction/GetAdmin/getAdminFunctions.js';


const Evenement = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const navigate = useNavigate();
    const handleGo = (e) => {
        e.preventDefault();
        navigate("/DetailEvenement");
    };

    const [Evenement, setEvenement] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const [loading, setLoading] = useState(true);

    console.log(Evenement);
    useEffect(() => {
        const fectData = async () => {
            try {
                const request = await fetchEvenementsFunction();
                setEvenement(request);
                setLoading(false);
                console.log(request);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, []);

    function formatDate(date) {
        return format(new Date(date), 'dd-MM-yyyy')
    }

    return (
        <>
            <Header />
            <Grid fluid component="main"
                style={{
                    backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    flexDirection: 'start',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}
            >
                <Grid
                    sx={{
                        height: '470px',
                        backgroundColor: '#30509dbf',
                        padding: {
                            xs: '10px',
                            sm: '50px',
                            md: '200px'
                        },
                        margin: 'auto',
                    }}
                >
                    <Grid className='mt-5 mt-sm-0'>
                        <Grid className='my-5 my-sm-0'>
                            <Box  data-aos="fade-down">
                                <Typography className='text-white  mb-5 fs-1 fw-normal fs-sm-5'>
                                    Nos Événements.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            <Container className='p-5 mt-5'>
                <Row>
                    <Col data-aos="fade-left">
                        <Typography>
                            Événements à venir
                        </Typography>
                    </Col>
                    <Col data-aos="fade-left">
                        <Button variant="outlined" className='float-end'> Événements passés</Button>
                    </Col>
                </Row>
            </Container>


            <Container >
                <div className="row d-flex justify-content-center align-items-center">
                    {Evenement.length === 0 ? (
                        <div className="col-md-3" data-aos="fade-down">
                            Aucun Evenement
                        </div>
                    ) : Evenement.map((event) => (
                        <div className="col-md-3" data-aos="fade-down" style={{padding: '2%'}}>
                            {/* <div>
                                <div onClick={handleGo} style={{ backgroundImage: 'url(https://panafrican-space.net/api/photoEvenement/Capture d\'écran 2023-12-18 110213.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', cursor: 'pointer' }}>
                                    <div className='p-3 title'>
                                        <span className='p-2 text-white text-center title' style={{ background: "#008bd2", height: '100px', cursor: 'pointer' }}>{event.sousTitle}</span>
                                    </div>
                                    <img src={`${URL_SERVER}${event.image}`} alt="toto" />
                                </div>
                                <Typography>{formatDate(event.datePublication)}</Typography>
                                <div className='description' onClick={handleGo} style={{ cursor: 'pointer' }}>
                                    {event.description}
                                </div>
                                <Typography className='description' style={{ cursor: 'pointer' }} onClick={handleGo}>Lire plus <ArrowOutwardIcon /></Typography>
                            </div> */}

                            <Card sx={{ maxWidth: 285, height:'auto' }}>
                                <Box onClick={handleGo}>
                                    <CardMedia
                                        sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                        image={`${URL_SERVER}${event.image}`}
                                    >
                                    <div className='p-3 title'>
                                        <span className='p-2 text-white text-center title' style={{ background: "#008bd2", height: '100px', cursor: 'pointer' }}>{event.sousTitle}</span>
                                    </div></CardMedia>
                                </Box>
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        component="div"
                                        className="text-end text-primary"
                                    >
                                        Date de publication: <span style={{ color: "black" }}>{formatDate(event.datePublication)}</span>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Description: {event.description}
                                    </Typography>
                                </CardContent>
                                <Typography className='description text-center' style={{ cursor: 'pointer' }} onClick={handleGo}>Lire plus <ArrowOutwardIcon /></Typography>
                            </Card>

                        </div>
                    ))}
                </div>

            </Container>

            <Container className='p-5 mt-5'>
                <Row>
                    <Col>
                        <Stack className='text-center' spacing={2} style={{ display: "flex", justifyContent: "center", alignItems: 'center' }} >
                            <Pagination count={10} color="primary" />
                        </Stack>
                    </Col>
                </Row>
            </Container>

            <Footer />

        </>
    )
}

export default Evenement