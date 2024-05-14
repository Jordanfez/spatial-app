import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import URL_SERVER from "../../services/appApi.js";
import { fetchtendancesFunction } from '../../services/GetFunction/GetAdmin/getAdminFunctions.js';


const Tendance = () => {

    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const [edition, setEdition] = React.useState('');

    const handleChange = (event) => {
        setEdition(event.target.value);
    };

    const [Adhésion, setAdhésion] = React.useState('');

    const handleChanges = (event) => {
        setAdhésion(event.target.value);
    };


    const [value, setValue] = useState("1");

    const handleChangeTabs = (event, newValue) => {
        setValue(newValue);
    };

    /**affichage(recuperation des donnees) des imagerie */
    const [GetTendance, setTendance] = useState([]);
    console.log(GetTendance);
    const Tendancy = GetTendance[0]
    React.useEffect(() => {
        const fectData = async () => {
            try {
                const request = await fetchtendancesFunction();
                setTendance(request);
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

            {/* <div className="container-fluid">
                <div className="row">
                    <div></div>
                    {GetTendance.length === 0 ? (
                        <div className="col-md-3">
                            ras
                        </div>
                    ) : GetTendance.map((event) => (
                        <div className="col-sm-6" data-aos="fade-down-left">
                            <div style={{ marginTop: "25%", marginLeft: "12%" }}>
                                <p style={{ fontSize: "250%" }}>Tendances actuelles du marcher de l'espace en afrique</p>
                                <h1>Une évaluation de la dynamique actuelle de tarification de la capacité satellitaire.</h1>
                            </div>
                        </div>
                        <div className="col-sm-6 text-center">
                            <img src={`${URL_SERVER}${event.image1}`} style={{ height: '80ch' }} alt="" />
                        </div>
                    ))}
                </div>
            </div> */}

            <Box className="container-fluid ">
                <Box className="Row d-flex justify-content-center align-items-center">
                    {GetTendance.length === 0 ? (
                        <div className="col-md-12">
                            Pas de Tendance trouvées
                        </div>
                    ) :  (
                        <div className="row" key={Tendancy._id}>
                            <div className="col-6" data-aos="fade-down-left">
                                <div style={{ marginTop: "25%", marginLeft: "12%" }}>
                                    <p style={{ fontSize: "250%" }}>{Tendancy.editionNews}</p>
                                    <h1>Une évaluation de la dynamique actuelle de tarification de la capacité satellitaire.</h1>
                                </div>
                            </div>
                            <div className="col-6 text-center">
                                <img src={`${URL_SERVER}${Tendancy.image1}`} style={{ height: '80ch' }} alt="" />
                            </div>
                        </div>
                    )}
                </Box>
            </Box>

            <Container fluid style={{ background: '#f2f3f6', marginTop: "6%" }}>
                <Row>
                    <Col className="container col-sm-12" style={{ padding: '7%' }} >
                        <Stack spacing={2} direction="row" className='ml-2'>
                            <p style={{ fontSize: "250%" }}>Édition</p>
                            <FormControl className='w-25' style={{ marginLeft: '3.5%' }}>
                                <InputLabel id="demo-simple-select-label" >Édition</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={edition}
                                    label="edition"
                                    onChange={handleChange}
                                    style={{ background: 'white' }}
                                >
                                    <MenuItem value={10}>2023</MenuItem>
                                    <MenuItem value={20}>2022</MenuItem>
                                    <MenuItem value={30}>2021</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                        {/* <Stack spacing={2} direction="row" className='mt-3'>
                            <p style={{ fontSize: "250%" }}>Adhésion</p>
                            <FormControl className='w-25'>
                                <InputLabel id="demo-simple-select-label">Adhésion</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={Adhésion}
                                    label="Adhésion"
                                    onChange={handleChanges}
                                    style={{ background: 'white' }}
                                >
                                    <MenuItem value={10}>2023</MenuItem>
                                    <MenuItem value={20}>2022</MenuItem>
                                    <MenuItem value={30}>2021</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack> */}

                        <Stack spacing={2} direction="row" className='mt-5'>
                            <Button variant="text"  href={`${URL_SERVER}${Tendance.fileExtractForEdition}`}>TÉLÉCHARGEZ L'EXTRAIT GRATUIT</Button>
                            <Button variant="contained" href={`${URL_SERVER}${Tendance.filePresseCommunicate}`}>COMMUNIQUÉ DE PRESSE</Button>
                            {/* <Button variant="text">VOIR LES PRIX</Button> */}
                            <Button variant="outlined">CONTACTEZ-NOUS</Button>
                        </Stack>
                    </Col>

                </Row>
            </Container>

            <Container className="mt-5">
                <Row>
                    <Col>
                        <TabContext value={value}>
                            <Box style={{ padding: '2%' }}>
                                <TabList
                                    onChange={handleChangeTabs}
                                    aria-label="lab API tabs example"
                                >
                                    <Tab label="Description" value="1" style={{ border: '0.5px solid #87CEEB', borderRadius: '5px' }} />
                                    <Tab label="Principales caractéristiques" value="2" style={{ border: '0.5px solid #87CEEB', borderRadius: '5px', marginLeft: "2%" }} />
                                    <Tab label="Nouveau dans l'édition actuelle" value="3" style={{ border: '0.5px solid #87CEEB', borderRadius: '5px', marginLeft: "2%" }} />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div className="row d-flex justify-content-center">
                                    <Typography variant='h4'>Description</Typography>
                                    <Typography >
                                        Les tendances en matière de tarification de la capacité satellitaire fournissent une évaluation de la dynamique actuelle de tarification de la capacité satellitaire, dans un contexte d'innovation technologique soutenue et de capacité satellitaire supplémentaire associée aux satellites de nouvelle génération. Le rapport couvre neuf marchés régionaux, ainsi qu'un examen spécifique des marchés verticaux de la mobilité et du gouvernement.
                                    </Typography>
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                <div className="row d-flex justify-content-center">
                                    <Typography variant='h4'>Principales caractéristiques</Typography>
                                    <Typography >
                                        <ul>
                                            <li>{Tendancy?.characteristics}</li>
                                        </ul>
                                    </Typography>
                                </div>
                            </TabPanel>
                            <TabPanel value="3">
                                <div className="row d-flex justify-content-center">
                                    <Typography variant='h4'>Nouveau dans l'édition actuelle</Typography>
                                    <Typography >
                                        <ul>
                                            <li>{Tendancy?.editionNews}</li>
                                        </ul>
                                    </Typography>
                                </div>
                            </TabPanel>
                        </TabContext>
                    </Col>
                    <Col>
                        <div className="row d-flex justify-content-center">
                            <div className="col-6" data-aos="fade-down-right">
                                <Card sx={{ maxWidth: 345 }} style={{ backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)', height: '300px' }}>

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Satellites à haut débit, 7 ème édition
                                        </Typography>
                                    </CardContent>
                                    <CardActions className=" float-start " style={{ marginTop: '65%' }}>
                                        <Button variant="contained">
                                            Lire
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                            <div className="col-6" data-aos="fade-down">
                                <Card sx={{ maxWidth: 345 }} style={{ backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)', height: '300px' }}>

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Satellites à haut débit, 7 ème édition
                                        </Typography>
                                    </CardContent>
                                    <CardActions className=" float-start " style={{ marginTop: '65%' }}>
                                        <Button variant="contained">
                                            Lire
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                            <div className="col-6" data-aos="fade-down-left">
                                <Card sx={{ maxWidth: 345 }} style={{ backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)', height: '300px', marginTop: '3%' }}>

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Satellites à haut débit, 7 ème édition
                                        </Typography>
                                    </CardContent>
                                    <CardActions className=" float-start " style={{ marginTop: '65%' }}>
                                        <Button variant="contained">
                                            Lire
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                            <div className="col-6" data-aos="fade-down-right">
                                <Card sx={{ maxWidth: 345 }} style={{ backgroundImage: 'url(https://img.freepik.com/photos-gratuite/vaisseau-spatial-brillant-orbite-autour-planete-dans-galaxie-etoilee-generee-par-ia_188544-9655.jpg)', height: '300px', marginTop: '3%' }}>

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Satellites à haut débit, 7 ème édition
                                        </Typography>
                                    </CardContent>
                                    <CardActions className=" float-start " style={{ marginTop: '65%' }}>
                                        <Button variant="contained">
                                            Lire
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>

                        </div>

                    </Col>
                </Row>
            </Container>

            <Container className="p-5" fluid style={{ background: '#ccd0db', marginTop: "6%" }}>
                <Typography variant="h3">Tarifs</Typography>
                <Row className="mt-3">
                    <Col data-aos="fade-down-right" style={{
                        height: '700px',
                        backgroundColor: '#ffffff',
                        padding: {
                            xs: '5px',
                            sm: '20px',
                            md: '90px'
                        },
                        margin: 'auto',
                    }} >
                        <Container style={{ padding: '10%' }} >
                            <h2 className='text-center' >Classique​</h2>
                            <hr />
                            <Row className="p-3">
                                <Col>
                                    <Typography variant="h5">Une seule équipe*</Typography>
                                    <Typography variant="h5" className="text-center">6000 €</Typography>
                                </Col>
                                <Col>
                                    <Typography variant="h5">Une seule équipe*</Typography>
                                    <Typography variant="h5" className="text-center">6000 €</Typography>
                                </Col>
                            </Row>
                            <hr />
                            <Typography className='text-center'>
                                The uniqueness of our business model is based on synergies created by the complementarity of our four activities. Each activity increases our market knowledge and expertise and extends our network of key decision makers while at the same time maintaining a respect for client confidentiality
                            </Typography>
                            <Box className="text-center" style={{ marginTop: '50%' }}>
                                <Button variant="contained" >S'ABONNER</Button>
                            </Box>
                        </Container>
                    </Col>
                    <Col data-aos="fade-down" style={{
                        height: 'auto',
                        backgroundColor: '#00134d',
                        marginLeft: '2%'
                    }} >
                        <Container style={{ padding: '10%' }} className='text-white '>
                            <h2 className='text-center' >Prime​</h2>
                            <hr />
                            <Row className="p-3">
                                <Col>
                                    <Typography variant="h5">Une seule équipe*</Typography>
                                    <Typography variant="h5" className="text-center">6000 €</Typography>
                                </Col>
                                <Col>
                                    <Typography variant="h5">Une seule équipe*</Typography>
                                    <Typography variant="h5" className="text-center">6000 €</Typography>
                                </Col>
                            </Row>
                            <hr />
                            <Typography className='text-center'>
                                The uniqueness of our business model is based on synergies created by the complementarity of our four activities. Each activity increases our market knowledge and expertise and extends our network of key decision makers while at the same time maintaining a respect for client confidentiality
                            </Typography>
                            <Box className="text-center" style={{ marginTop: '50%' }}>
                                <Button variant="contained" >S'ABONNER</Button>
                            </Box>
                        </Container>

                    </Col>
                    <Col data-aos="fade-down-left" style={{
                        height: '700px',
                        backgroundColor: '#ffffff',
                        marginLeft: '2%'
                    }} >
                        <Container style={{ padding: '10%' }} >
                            <h2 className='text-center' >Traqueur</h2>
                            <hr />
                            <Row className="p-3">
                                <Col>
                                    <Typography variant="h5">Une seule équipe*</Typography>
                                    <Typography variant="h5" className="text-center">6000 €</Typography>
                                </Col>
                                <Col>
                                    <Typography variant="h5">Une seule équipe*</Typography>
                                    <Typography variant="h5" className="text-center">6000 €</Typography>
                                </Col>
                            </Row>
                            <hr />
                            <Typography className='text-center'>
                                The uniqueness of our business model is based on synergies created by the complementarity of our four activities. Each activity increases our market knowledge and expertise and extends our network of key decision makers while at the same time maintaining a respect for client confidentiality
                            </Typography>
                            <Box className="text-center" style={{ marginTop: '50%' }}>
                                <Button variant="contained" >S'ABONNER</Button>
                            </Box>
                        </Container>
                    </Col>

                </Row>
            </Container>

            <Footer />
        </>
    )
}

export default Tendance