import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AOS from "aos";
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImageRapport from '../../img/ImageRapport1.png';
import ImageRapport3 from '../../img/ImageRapport3.png';

const MarcherSpace = () => {

    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const navigate = useNavigate();
    const handleGo = (e) => {
        e.preventDefault();

        navigate("/DetailMarcherSPace");
    };
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
                            <Box>
                                <Typography className='text-white mb-2 fs-3'>
                                    Acceuil - PSI estime que l'économie spatiale mondiale a totalisé 370 milliards de dollars en 2021
                                </Typography>
                                <Typography className='text-white  mb-5 fs-1 fw-normal fs-sm-5' variant='h3'>
                                    PSI estime que l'économie spatiale mondiale a totalisé 370 milliards de dollars en 2021
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            <Container className='p-5 mt-5' style={{ marginBottom: '-8%' }}>
                <Row>
                    <Col data-aos="fade-down">
                        <h1>Paris, Washington DC, Montréal, Yokohama, Sydney, Toulouse, mardi 11 janvier 2022 .​</h1>
                        <Typography className='mt-5'>
                            PSI, société leader de conseil spatial et d'intelligence de marché, a publié son rapport annuel « Space Economy report » pour 2021. Dans sa dernière édition, PSI estime que l'économie spatiale mondiale a totalisé 370 milliards de dollars en 2021. Ce chiffre se compose de :
                            <br />
                            •  Le marché spatial (337 milliards de dollars en 2021) , qui comprend les revenus spatiaux commerciaux et les marchés publics pour leurs activités spatiales sous-traitées au secteur privé.
                            <br />
                            •  Autres dépenses des organismes gouvernementaux (33 G$) pour mener leurs activités spatiales (coûts internes et R&D).
                            <br />
                            L'économie spatiale devrait croître de 74 % d'ici 2030 pour atteindre 642 milliards de dollars (TCAC de 6,3 %), renouvelant ainsi son solide modèle de croissance après une baisse de 4 % en 2020 sous l'effet de l'impact de la crise du covid sur les services spatiaux commerciaux.
                        </Typography>
                    </Col>
                </Row>
            </Container>

            <Container className='mt-5'>
                <Row>
                    <Col style={{
                        height: '500px'
                    }} >
                        <Container style={{ padding: '10%' }}>
                            <img className='text-center text-white' src={ImageRapport} alt="" style={{ height: "400px", boxShadow: "5px black", width: 'auto' }} />
                        </Container>
                    </Col>
                </Row>

            </Container>

            <Container data-aos="fade-down-left" style={{ marginTop: '5%' }}>
                <Typography className='text-center text-dark'>
                    Le rapport sur l'économie spatiale 2021 couvre l'ensemble de la chaîne de valeur spatiale, avec des faits et chiffres clés et une analyse concise des services de fabrication et de lancement de satellites en amont, ainsi que des opérations et services satellitaires en aval. Pour la première fois, les clients Premium bénéficient désormais de la gamme complète de KPI et de toutes les données derrière les graphiques. En outre, le rapport est disponible sur la plateforme numérique d'PSI pour faciliter un accès rapide et des visualisations claires des données, permettant aux clients d'obtenir une compréhension détaillée et complète de l'économie spatiale en 2021, y compris les principales tendances, l'analyse stratégique et les moteurs de croissance.
                </Typography>
            </Container>

            <Container className='mt-5'>
                <Row>
                    <Col style={{
                        height: '500px',
                    }} >
                        <Container style={{ padding: '10%' }}>
                            <img className='text-center text-dark' src={ImageRapport3} alt="" style={{ height: "400px", boxShadow: "5px black", width: 'auto' }} />
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container data-aos="fade-down-left" style={{ marginTop: '5%' }}>
                <Typography className='text-center text-dark'>
                    Le rapport sur l'économie spatiale 2021 couvre l'ensemble de la chaîne de valeur spatiale, avec des faits et chiffres clés et une analyse concise des services de fabrication et de lancement de satellites en amont, ainsi que des opérations et services satellitaires en aval. Pour la première fois, les clients Premium bénéficient désormais de la gamme complète de KPI et de toutes les données derrière les graphiques. En outre, le rapport est disponible sur la plateforme numérique d'PSI pour faciliter un accès rapide et des visualisations claires des données, permettant aux clients d'obtenir une compréhension détaillée et complète de l'économie spatiale en 2021, y compris les principales tendances, l'analyse stratégique et les moteurs de croissance.
                </Typography>
            </Container>

            <Container className='mt-5'>
                <hr />
                <Row>
                    <Col data-aos="fade-down-down" style={{
                        height: '500px',
                    }} >
                        <Container style={{ padding: '10%' }}>
                            <h2>Les systèmes satellitaires de nouvelle génération continuent de perturber le paysage de tarification de la capacité satellitaire​</h2>
                            <Typography className='text-center'>
                                Paris, Washington DC, Montréal, Yokohama, Sydney, le 12 février 2024. PSI, leader mondial du conseil spécialisé dans les marchés satellitaires, a publié la dernière édition de son rapport Tendances en matière de tarification des capacités FSS..
                            </Typography>
                            <Button onClick={handleGo}  variant="text" data-aos="fade-down-left">En savoir plus</Button>
                        </Container>
                    </Col>
                    <Col data-aos="fade-down-down" style={{
                        height: 'auto',
                        marginLeft: '2%'
                    }} >
                        <Container style={{ padding: '10%' }}>
                            <h2 className=' text-dark' >Le marché mondial des données et services commerciaux d’observation de la Terre devrait atteindre 7,6 milliards de dollars d’ici 2032​</h2>
                            <Typography className='text-center text-dark'>
                                Paris, Washington DC, Montréal, Yokohama, Sydney, le 28 novembre 2023. Alors que les paysages économiques mondiaux continuent de faire face aux défis posés par l'inflation, les tensions géopolitiques et les effets résiduels des perturbations liées à la pandémie
                            </Typography>
                            <Button onClick={handleGo} variant="text" data-aos="fade-down-left">En savoir plus</Button>
                        </Container>
                    </Col>
                </Row>
                <Row style={{ marginTop: '-8%' }}>
                    <Col data-aos="fade-down-down" style={{
                        height: '500px',
                    }} >
                        <Container style={{ padding: '10%' }}>
                            <h2>Les systèmes satellitaires de nouvelle génération continuent de perturber le paysage de tarification de la capacité satellitaire​</h2>
                            <Typography className='text-center'>
                                Paris, Washington DC, Montréal, Yokohama, Sydney, le 12 février 2024. PSI, leader mondial du conseil spécialisé dans les marchés satellitaires, a publié la dernière édition de son rapport Tendances en matière de tarification des capacités FSS..
                            </Typography>
                            <Button onClick={handleGo} variant="text" data-aos="fade-down-left">En savoir plus</Button>
                        </Container>
                    </Col>
                    <Col data-aos="fade-down-down" style={{
                        height: 'auto',
                        marginLeft: '2%'
                    }} >
                        <Container style={{ padding: '10%' }}>
                            <h2 className=' text-dark' >Le marché mondial des données et services commerciaux d’observation de la Terre devrait atteindre 7,6 milliards de dollars d’ici 2032​</h2>
                            <Typography className='text-center text-dark'>
                                Paris, Washington DC, Montréal, Yokohama, Sydney, le 28 novembre 2023. Alors que les paysages économiques mondiaux continuent de faire face aux défis posés par l'inflation, les tensions géopolitiques et les effets résiduels des perturbations liées à la pandémie
                            </Typography>
                            <Button variant="text" data-aos="fade-down-left">En savoir plus</Button>
                        </Container>
                    </Col>
                </Row>

            </Container>

            <Footer />

        </>
    )
}

export default MarcherSpace