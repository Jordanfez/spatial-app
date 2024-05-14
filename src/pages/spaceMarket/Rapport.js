import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AOS from "aos";
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from '../../img/logoPSI.png';
import Rapports from "../../img/rapport.jpg";
import URL_SERVER from "../../services/appApi.js";
import { fetchActualityFunction, fetchRaportindustriesFunction, fetchtendancesFunction } from '../../services/GetFunction/GetAdmin/getAdminFunctions.js';
import CarrouselSpace from './CarouselSpace';
import './Rapport.css';

const Rapport = () => {

    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const navigate = useNavigate();
    const handleGo = (e) => {
        e.preventDefault();

        navigate("/Tendance");
    };

    const [GetRapport, setRapport] = useState([]);
    console.log('les rapport', GetRapport);
    useEffect(() => {
        const fectData = async () => {
            try {
                const request = await fetchRaportindustriesFunction();
                setRapport(request.slice(-4));
                console.log(request);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, []);


    /**affichage(recuperation des donnees) des Tendance */
    const [GetTendance, setTendance] = useState([]);
    console.log(GetTendance);
    useEffect(() => {
        const fectData = async () => {
            try {
                const request = await fetchtendancesFunction();
                setTendance(request.slice(-4));
                console.log(request);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, []);


    const [actualiter, setActualite] = useState([]);

    console.log(actualiter);
    useEffect(() => {
        const fectData = async () => {
            try {
                const request = await fetchActualityFunction();
                setActualite(request.slice(0, 4));
                console.log(request);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, []);

    const [GetRapports, setRapports] = useState([]);
    console.log('les rapportss', GetRapports);
    useEffect(() => {
        const fectData = async () => {
            try {
                const request = await fetchRaportindustriesFunction();
                setRapports(request.slice(0, 4));
                console.log(request);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, []);

    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <div style={{ marginTop: "25%", marginLeft: "12%" }}>
                            <p style={{ fontSize: "250%" }}>Explorez nos <span style={{ color: "#fc5e61" }}>données</span>
                                et <span style={{ color: "#fc5e61" }}>informations de marché</span>
                                pour l'industrie spatiale et satellitaire
                            </p>
                            {GetRapports.length === 0 ? (
                                <h3>Pas d'Actualiter trouves</h3>
                            ) : GetRapports.map((event) => (
                                <Stack spacing={2} direction="row" className='mt-5'>
                                    <Button variant="contained" data-aos="fade-down-right">REGISTRE</Button>
                                    <Button variant="outlined" data-aos="fade-down" href={`${URL_SERVER}${event.fileExtractForEdition}`}>TÉLÉCHARGEZ L'extrait d'édition'</Button>
                                    {/* <Button variant="text" data-aos="fade-down-left" href='/Contact_us'>CONTACTEZ-NOUS</Button> */}
                                </Stack>
                            ))}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img src={Rapports} className="d-block " alt="img" style={{ height: '70ch' }} />
                    </div>
                </div>
            </div>

            <Container className='mt-5' fluid>
                <Row>
                    <Col data-aos="fade-down" style={{
                        height: '500px',
                        backgroundColor: '#ffff',
                        padding: {
                            xs: '5px',
                            sm: '20px',
                            md: '90px'
                        },
                        margin: 'auto',
                    }} >
                        <Container style={{ padding: '10%' }}>
                            <img src={Image} style={{ height: 'auto' }} alt="" />
                            <Typography className='text-center'>
                                Intelligence de marché Euroconsult
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque odio et tortor vestibulum, quis fringilla nisl suscipit. Proin nec urna eu nisl fermentum fermentum. Nullam auctor purus ut dolor posuere, at mattis diam tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi et arcu in lorem facilisis hendrerit.
                            </Typography>
                        </Container>
                    </Col>
                    <Col style={{
                        height: 'auto',
                        backgroundColor: '#ffff',
                        marginLeft: '2%'
                    }} >
                        <CarrouselSpace />
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5">
                <Row>
                    <Typography variant='h4'>Catégories de rapports</Typography>
                    <Col className="mt-3">
                        <div className="row d-flex justify-content-center">
                            {GetRapports.length === 0 ? (
                                <h3>Pas d'Actualiter trouves</h3>
                            ) : GetRapports.map((event) => (
                                <div className="col-3" data-aos="fade-down-left">
                                    <Card sx={{ maxWidth: 345 }} style={{ height: '350px' }}>
                                        <CardMedia
                                            sx={{ height: 350, margin: 1, borderRadius: 2 }}
                                            image={`${URL_SERVER}${event.image1}`}
                                        >
                                            <CardContent>
                                                <Typography variant="body2" className='text-dark'>
                                                    {event.editionNews}
                                                </Typography>
                                            </CardContent>
                                            <CardActions className=" float-start " style={{ marginTop: '65%' }}>
                                                <Button variant="contained" onClick={handleGo}>
                                                    Lire
                                                </Button>
                                            </CardActions>
                                        </CardMedia>
                                    </Card>
                                </div>
                            ))}
                        </div>

                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: '6%' }}>
                <Row>
                    <Typography variant='h4' style={{ marginLeft: '3%' }}>Produits de données</Typography>
                    <Col className='p-5' data-aos="fade-down">
                        <Container style={{
                            backgroundImage: 'url(https://www.apur.org/sites/default/files/styles/body_with_sidebar/public/images/geo-apps/image-a-la-une/catalogue_donnes_geo_935_550.jpg?itok=Ib9_PJRz)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            flexDirection: 'start',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '350px',
                            borderRadius: "20px 20px 20px 20px",
                            cursor: 'pointer'
                        }}
                            className='text-white'>
                            <div className='text-center p-5'>
                                <Typography variant='h2' >Catalogue de données</Typography>
                                <Typography>
                                    Ces bases de donnees couvrent des informations sur tous les aspects de la
                                    chaîne de valeur des satellites, depuis les budgets gouvernementaux, la
                                    fabrication et le lancement des satellites, jusqu'a l'exploitation.et aux.
                                    services des satellites. Euroconsult maintient plusieurs tableaux lies aux
                                    marches des telecommunications, de l'observation de la Terre (EO) et de la
                                    navigation.
                                </Typography>
                            </div>
                        </Container>
                    </Col>
                    <Col className='p-5' data-aos="fade-down">
                        <Container style={{
                            backgroundImage: 'url(https://espritweb.fr/wp-content/uploads/2020/09/creer-une-base-de-donnes-en-7-minutes-1692x846.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            flexDirection: 'start',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '350px',
                            borderRadius: "20px 20px 20px 20px",
                            cursor: 'pointer'
                        }}
                            className='text-white' >
                            <div className='text-center p-5'>
                                <Typography variant='h2' >
                                    Base de données sur l'écosystème</Typography>
                                <Typography>
                                    Une base de donnees etendue consolidant les informations
                                    organisationnelles et strategiques sur tous les acteurs du spatial
                                </Typography>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container >

            <Container fluid style={{ marginTop: '4%' }}>
                <Row>
                    <Typography variant='h4' style={{ marginLeft: '3%' }}>Aperçus des Tendances</Typography>
                    {GetTendance.length === 0 ? (
                        <h3>Pas de Rapport trouvés</h3>
                    ) : GetTendance.map((event) => (
                        <div className='p-5 col-3' data-aos="fade-down-right">
                            <Container>
                                <div className="ui-card" style={{
                                    borderRadius: "20px 20px 20px 20px",
                                }}>
                                    <img src={`${URL_SERVER}${event.image1}`} alt="Mountain Morning" style={{
                                        height: '450px',
                                        cursor: 'pointer',
                                        flexDirection: 'start',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                        className='img-bord' />
                                    <div className="description">
                                        <h3>{event.editionNews}</h3>
                                        <p>{event.characteristics}</p>
                                        <a href="/Tendance">Read More</a>
                                    </div>
                                </div>

                            </Container>
                        </div>
                    ))}
                    {/* <div className='p-5 col-3' data-aos="fade-down">
                        <Container>
                            <div className="ui-card" style={{
                                borderRadius: "20px 20px 20px 20px",
                            }}>

                                <Typography>Satellites définis par logiciel</Typography>
                                <img src={Fss} alt="Mountain Morning" style={{
                                    height: '450px',
                                    cursor: 'pointer',
                                    flexDirection: 'start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                    className='img-bord' />
                                <div className="description">
                                    <h3>Mountain Morning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                        </Container>
                    </div>

                    <div className='p-5 col-3' data-aos="fade-down-left">
                        <Container>
                            <div className="ui-card" style={{
                                borderRadius: "20px 20px 20px 20px",
                            }}>
                                <img src={Fss} alt="Mountain Morning" style={{
                                    height: '450px',
                                    cursor: 'pointer',
                                    flexDirection: 'start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                    className='img-bord' />
                                <div className="description">
                                    <h3>Mountain Morning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                        </Container>
                    </div>

                    <div className='p-5 col-3' data-aos="fade-down-right">
                        <Container>
                            <div className="ui-card" style={{
                                borderRadius: "20px 20px 20px 20px",
                            }}>
                                <img src={Fss} alt="Mountain Morning" style={{
                                    height: '450px',
                                    cursor: 'pointer',
                                    flexDirection: 'start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                    className='img-bord' />
                                <div className="description">
                                    <h3>Mountain Morning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                        </Container>
                    </div> */}
                </Row>
            </Container >

            <Container fluid style={{ marginTop: '4%' }}>
                <Row>
                    <Typography variant='h4' style={{ marginLeft: '3%' }}>Rapports récemment publiés</Typography>
                    {GetRapport.length === 0 ? (
                        <h3>Pas de Rapport trouvés</h3>
                    ) : GetRapport.map((event) => (
                        <div className='p-5 col-3' data-aos="fade-down-right">
                            <Container>
                                <div className="ui-card" style={{
                                    borderRadius: "20px 20px 20px 20px",
                                }}>
                                    <img src={`${URL_SERVER}${event.image1}`} alt="Mountain Morning" style={{
                                        height: '450px',
                                        cursor: 'pointer',
                                        flexDirection: 'start',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                        className='img-bord' />
                                    <div className="description">
                                        <h3>{event.editionNews}</h3>
                                        <p>{event.characteristics}</p>
                                        {/* <a href={`${URL_SERVER}${event.image1}`}>Read More</a> */}
                                        <a href='#'>Read More</a>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    ))}
                    {/* <div className='p-5 col-3' data-aos="fade-down">
                        <Container>
                            <div className="ui-card" style={{
                                borderRadius: "20px 20px 20px 20px",
                            }}>
                                <img src={Marcher2} alt="Mountain Morning" style={{
                                    height: '450px',
                                    cursor: 'pointer',
                                    flexDirection: 'start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                    className='img-bord' />
                                <div className="description">
                                    <h3>Mountain Morning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                        </Container>
                    </div>

                    <div className='p-5 col-3' data-aos="fade-down-left">
                        <Container>
                            <div className="ui-card" style={{
                                borderRadius: "20px 20px 20px 20px",
                            }}>
                                <img src={Marcher3} alt="Mountain Morning" style={{
                                    height: '450px',
                                    cursor: 'pointer',
                                    flexDirection: 'start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                    className='img-bord' />
                                <div className="description">
                                    <h3>Mountain Morning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                        </Container>
                    </div>

                    <div className='p-5 col-3' data-aos="fade-down-right">
                        <Container>
                            <div className="ui-card" style={{
                                borderRadius: "20px 20px 20px 20px",
                            }}>
                                <img src={Fss} alt="Mountain Morning" style={{
                                    height: '450px',
                                    cursor: 'pointer',
                                    flexDirection: 'start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                    className='img-bord' />
                                <div className="description">
                                    <h3>Mountain Morning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>

                        </Container>
                    </div> */}

                </Row>
            </Container >

            <Container fluid style={{ marginTop: '4%' }}>
                <Row>
                    <Typography variant='h4' style={{ marginLeft: '3%' }}>Produits à venir</Typography>
                    {actualiter.length === 0 ? (
                        <h3>Pas d'Actualiter trouves</h3>
                    ) : actualiter.map((actu) => (
                        <div className='p-5 col-3' data-aos="fade-down-right">
                            <div className="ui-card" style={{
                                borderRadius: "20px 20px 20px 20px",
                            }}>
                                <img src={`${URL_SERVER}${actu.image}`} alt="Mountain Morning" style={{
                                    height: '450px',
                                    cursor: 'pointer',
                                    flexDirection: 'start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                    className='img-bord' />
                                <div className="description">
                                    <h3>{actu.title}</h3>
                                    <p>{actu.description}</p>
                                    <a href="/Tendance">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </Row>
            </Container >

            <Footer />
        </>
    )
}

export default Rapport