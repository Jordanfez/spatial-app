import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputAdornment from "@mui/material/InputAdornment";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Homme from '../../img/homme.jpg';
import './about.css';

// const useStyles = styled((theme) => ({
//     container: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginTop: theme.spacing(4),
//     },
//     textField: {
//       marginRight: theme.spacing(2),
//     },
//   }));

const Index = () => {
    // const classes = useStyles();

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
                                <Typography className='text-white mb-2 fs-1 fw-normal fs-sm-5'>
                                    Acceuil - A propos
                                </Typography>
                                <Typography className='text-white  mb-5'>
                                    Qui sommes nous ?
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            <Container className='p-5 mt-5'>
                <Row>
                    {/* <Col>
                        <Box sx={{ flexGrow: 1 }} >
                            <Grid container  >
                                <img src={Homme} alt="" style={{ height: "400px", boxShadow: "5px black", width: 'auto' }} />
                            </Grid>
                        </Box>

                    </Col> */}
                    <Col>
                        <h1>Faites décoller vos projets</h1>
                        <Typography className='mt-5'>
                            L'industrie spatiale panafricaine (PSI) est une initiative de collaboration dédiée à l'avancement des capacités et de l'impact du secteur spatial africain. et l'impact du secteur spatial africain. L'ISP représente un collectif d'organisations visionnaires, visionnaires, unies dans leur engagement à propulser l'Afrique à l'avant-garde des technologies, services et services et de la consultance dans le domaine spatial. Grâce à ces partenariats stratégiques, nous visons à façonner l'avenir des technologies liées à l'espace, des opportunités commerciales et de l'environnement socio-économique. l'espace, des opportunités commerciales et du développement socio-économique dans toute l'Afrique grâce à l'innovation. l'innovation.
                        </Typography>
                    </Col>
                </Row>
            </Container>


            <Container className='mt-5' fluid>
                <Row>
                    <Col style={{
                        height: '500px',
                        backgroundColor: '#ccd0db',
                        padding: {
                            xs: '5px',
                            sm: '20px',
                            md: '90px'
                        },
                        margin: 'auto',
                    }} >
                        <Container style={{ padding: '10%' }}>
                            <h2 className='text-center' >Notre mission​</h2>
                            <Typography className='text-center'>
                                Fournir des produits et des services spatiaux innovants adaptés aux besoins de l'Afrique, en favorisant les avancées technologiques et le développement durable.
                                les avancées technologiques et le développement durable.  Par le biais de partenariats stratégiques,
                                promouvoir l'intégration et la diversité dans l'industrie spatiale africaine, en encourageant les talents et en donnant des moyens d'action aux groupes sous-représentés.
                                talents et en donnant des moyens d'action aux groupes sous-représentés.  Pionnier des systèmes satellitaires indigènes, établir un marché numérique et donner la priorité à l'innovation technologique.
                                marché numérique et donner la priorité à la gestion de l'environnement pour un avenir spatial durable et responsable en Afrique.
                                durable et responsable en Afrique.
                            </Typography>
                        </Container>
                    </Col>
                    <Col style={{
                        height: 'auto',
                        backgroundColor: '#00134d',
                        marginLeft: '2%'
                    }} >
                        <Container style={{ padding: '10%' }}>
                            <h2 className='text-center text-white' >Notre vision​</h2>
                            <Typography className='text-center text-white'>
                                Être le principal catalyseur du développement et de l'avancement de l'industrie spatiale panafricaine.
                                panafricaine, en renforçant la participation de l'Afrique aux applications, technologies et services spatiaux mondiaux.
                                services spatiaux.
                            </Typography>
                        </Container>
                    </Col>
                </Row>

                {/* <Container style={{ padding: '10%', height: 'auto', backgroundColor: '#00134d', marginTop: '2%' }}>
                    <h2 className='text-center text-white' >Nos valeurs​</h2>
                    <Typography className='text-center text-white'>
                        The uniqueness of our business model is based on synergies created by the complementarity of our four activities. Each activity increases our market knowledge and expertise and extends our network of key decision makers while at the same time maintaining a respect for client confidentiality
                    </Typography>
                </Container> */}
                {/* <Grid sx={{ display: 'flex', alignItems: 'center',backgroundColor: '#00134d', justifyContent: 'space-around' }} >
                    <Grid item xs={4}>
                        <Typography className='text-white mb-2 fs-2 fw-normal fs-sm-5'>
                            Valeurs Fondamentales
                        </Typography>
                        <Typography className='mb-3 fw-ligh lh-sm ' paragraph>
                            Qui nous sommes et qui nous aspirons à être
                        </Typography>

                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" className='text-white  fs-5 fw-bold  fs-sm-5' >
                            ethique
                        </Typography>
                        <Typography variant="h5" className='text-white  fs-5 fw-bold  fs-sm-5 my-3' >
                            Valeurs
                        </Typography>
                        <Typography variant="h5" className='text-white  fs-5 fw-bold  fs-sm-5' >
                            Integrite
                        </Typography>

                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" className='text-white  fs-5 fw-bold  fs-sm-5'>
                            Flexibilite
                        </Typography>
                        <Typography variant="h5" className='text-white  fs-5 fw-bold  fs-sm-5 my-3'>
                            Independance
                        </Typography>
                        <Typography variant="h5" className='text-white  fs-5 fw-bold  fs-sm-5'>
                            Excellence
                        </Typography>

                    </Grid>
                </Grid> */}

            </Container>

            <Grid fluid component="main" className='mt-5'>
                <Grid
                    sx={{
                        height: '370px',
                        backgroundColor: '#f2f3f6',
                        padding: {
                            xs: '5px',
                            sm: '20px',
                            md: '90px'
                        },
                        margin: 'auto',
                    }}
                >
                    <Container className='mt-5'>
                        <Row>
                            <Col>
                                <h2>Valeurs Fondamentales​</h2>
                                <Typography>
                                    Qui nous sommes et qui nous aspirons à être
                                </Typography>
                            </Col>
                            <Col className='text-center'>
                                <h4>
                                    Excellence
                                </h4>
                                <h4>
                                    Diversité
                                </h4>
                            </Col>
                            <Col className='text-center'>
                                <h4>
                                    Responsabilité
                                </h4>
                                
                                <h4>
                                    Integrité
                                </h4>
                            </Col>
                        </Row>
                    </Container>
                </Grid>
            </Grid>

            <Container className='mt-5'
                style={{
                    height: 'auto',
                    backgroundColor: '#f2f3f6',
                    padding: {
                        xs: '5px',
                        sm: '20px',
                        md: '90px'
                    },
                    margin: 'auto',
                }}>
                <Row>
                    <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h2 className='text-center' >Nos activitees principaux​</h2>
                        <Typography className='text-center'>
                            The uniqueness of our business model is based on synergies created by the complementarity of our four activities. Each activity increases our market knowledge and expertise and extends our network of key decision makers while at the same time maintaining a respect for client confidentiality                        </Typography>
                    </Col>
                    <Col>
                        <img src={Homme} style={{ width: "101.9%", height: 'auto' }} alt="" />
                    </Col>
                </Row>
            </Container>

            <Container
                style={{
                    height: 'auto',
                    padding: {
                        xs: '5px',
                        sm: '20px',
                        md: '90px'
                    },
                    margin: 'auto',
                }}>
                <Row >
                    <Col className='text-center activiter'>
                        <h2>Active 1​</h2>
                        <Typography>
                            Privately owned and fully independent, we provide first-class strategic consulting,
                        </Typography>
                    </Col>
                    <Col className='text-center activiter'>
                        <h2>Active 2</h2>
                        <Typography>
                            Privately owned and fully independent, we provide first-class strategic consulting,
                        </Typography>
                    </Col>
                    <Col className='text-center activiter'>
                        <h2>Active 3</h2>
                        <Typography>
                            Privately owned and fully independent, we provide first-class strategic consulting,
                        </Typography>
                    </Col>
                </Row>
            </Container>

            <Container className='mt-5' >
                <Row>
                    {/* <Col>
                        <Box sx={{ flexGrow: 1 }} >
                            <Grid container  >
                                <img src={Homme} alt="" style={{ height: "400px", boxShadow: "5px black", width: 'auto' }} />
                            </Grid>
                        </Box>

                    </Col> */}
                    <Col>
                        <h2>Notre historique</h2>
                        <Typography className='mt-5'>
                            À la Commission économique des Nations unies pour l'Afrique, en décembre 2019, lors de la 8e Conférence des dirigeants africains sur
                            les sciences et technologies spatiales au service du développement durable, une faction de dirigeants a proposé le concept d'industrie spatiale panafricaine.
                            industrie spatiale panafricaine.  Cette proposition s'explique par le consensus unanime sur le fait que l'Afrique a besoin d'une stratégie de développement à long terme et transformatrice pour exploiter ses capacités et ses ressources.
                            à long terme pour exploiter ses capacités, en particulier dans le domaine des sciences et des technologies spatiales.
                            Reconnaissant le rôle crucial du développement du capital humain, de la plateforme régionale pour les capacités d'emploi et des compétences des jeunes, le changement de paradigme s'est traduit par la création d'une industrie spatiale panafricaine.
                            les compétences des jeunes, le changement de paradigme vers des technologies de pointe exige une main-d'œuvre qualifiée.  Le besoin
                            de données spatiales pour atteindre les objectifs de développement durable (ODD) est devenu évident, ce qui a incité l'Afrique à investir dans le développement des satellites.
                            dans le développement des satellites.
                            L'histoire a pris un tournant important en mai 2020 lors de la conférence Africa Need Space, qui a mis en évidence les lacunes de l'entreprenariat spatial et souligné la nécessité d'un investissement africain dans le développement de satellites.
                            dans l'entrepreneuriat spatial et a souligné la nécessité pour les industries de s'aligner sur les cadres juridiques existants.
                            En 2021, lors du quatrième atelier sur la génération spatiale africaine, des étudiants et de jeunes professionnels se sont réunis pour façonner l'avenir de l'Afrique.
                            ont convergé pour façonner l'avenir des efforts spatiaux de l'Afrique.  Lors de cet atelier, l'idée d'une industrie spatiale panafricaine a été solidement définie.
                            panafricaine a été solidement définie, ce qui a également marqué la définition des objectifs stratégiques et de la vision.  Les principales
                            Les principales étapes et l'établissement du champ d'application se sont poursuivis lors d'une réunion à la Semaine mondiale des affaires spatiales et au Sommet sur le financement des satellites qui se tiendra à Paris en 2022.
                            Satellite Finance Summit à Paris en 2022.
                            Le crescendo a été atteint en mai 2023 lorsque l'industrie spatiale panafricaine a vu le jour.  Avec un objectif ambitieux
                            de créer un écosystème robuste de l'industrie spatiale africaine, l'organisation s'est engagée à fournir des solutions d'ingénierie pour un développement durable perturbateur.
                            des solutions d'ingénierie pour un développement durable innovant.  En février 2024, l'industrie spatiale panafricaine
                            a lancé des services tels que la plateforme de freelance, le marché de l'espace et les services de conseil.
                            - La rubrique "Qui sommes-nous ?
                            "
                            vous permet d'accéder à une nouvelle page :  Cette page devrait afficher -
                            Brève description/résumé de ce que nous faisons L'industrie spatiale panafricaine (PSI) est une organisation à but non lucratif.
                            L'industrie spatiale panafricaine (PSI) est une initiative de collaboration dédiée à l'avancement des capacités et de l'impact du secteur spatial africain.
                            et l'impact du secteur spatial africain.  L'ISP représente un collectif d'organisations visionnaires,
                            visionnaires, unies dans leur engagement à propulser l'Afrique à l'avant-garde des technologies, services et
                            services et de la consultance dans le domaine spatial.  Grâce à ces partenariats stratégiques, nous visons à façonner l'avenir des technologies liées à l'espace, des opportunités commerciales et de l'environnement socio-économique.
                            l'espace, des opportunités commerciales et du développement socio-économique dans toute l'Afrique grâce à l'innovation.
                            l'innovation.

                            Traduit avec DeepL.com (version gratuite)
                        </Typography>
                    </Col>
                </Row>
            </Container>

            <Container className='mt-5' fluid
                style={{
                    height: '250px',
                    backgroundColor: '#f2f3f6',
                    marginBottom: '4%'
                }}>
                <Container className="text-center p-5"  >
                    <Typography variant="h4" component="h2">
                        En savoir plus sur nous
                    </Typography>
                    <Typography>Abonnez-vous à notre newsletter pour en savoir plus.</Typography>

                    <TextField
                        className="mt-5"
                        label="Enter your email"
                        style={{ background: 'white' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button variant="contained" color="primary" style={{ borderRadius: "100px" }}>
                                        Subscribe
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Container>

            </Container>

            <Footer />
        </>
    )
}

export default Index