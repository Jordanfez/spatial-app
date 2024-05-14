import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SearchIcon from '@mui/icons-material/Search';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import axios from "../../axios.js";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { setActualiteId } from '../../features/ActualiterSlice.js';
import URL_SERVER from "../../services/appApi.js";
import { fetchActualityFunction } from '../../services/GetFunction/GetAdmin/getAdminFunctions.js';


const ActualiteDetails = () => {

    /** dispacher des projet */
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const actualiteId = useSelector((state) => state.actualiteId);
    const objet = actualiteId;
    const id = objet.actualiteId;
    console.log(id);

    const [actualiter, setActualite] = useState([]);
    React.useEffect(() => {
        const fetchActualite = async () => {
            try {
                const response = await axios.get(`/actualite/${id}`);
                setActualite(response.data);
                console.log('actu',response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchActualite();
    }, []);

    const firstActualite = actualiter;
    console.log(firstActualite);
    const imageAtuality = firstActualite.image
    console.log('mon image', imageAtuality);

    /** actualites connexes */
    const [actualiteConnexes, setActualiteConnexes] = React.useState([]);

    React.useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetchActualityFunction();
                setActualiteConnexes(response.slice(-3));
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProjects();
    }, []);

    const handleVoirClick = () => {
        navigate('/actualite-Detail');
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
                                    Acceuil - MEDIAS
                                </Typography>
                                <Typography className='text-white  mb-5 fs-1 fw-normal fs-sm-5'>
                                    Nos Actualites.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            <Container className="mt-5" direction="column">
                <div className="row-2 d-flex justify-content-center align-items-center">
                    {!firstActualite ? (
                        <h3>Aucune actualite Presente</h3>
                    ) : firstActualite && (
                        <div className="col-md-3" style={{ width: '70%' }} >
                            <Typography> Date de publication: <span style={{ color: "#008bd2" }}>{firstActualite.dateCreation}</span></Typography>
                            <hr />
                            <Grid item xs={2} sm={4} md={6} >
                                <Card sx={{ borderBottom: 3, borderColor: '#008bd2', display: 'flex' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    {firstActualite.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>

                                    </Box>

                                </Card>
                            </Grid>

                            <div style={{ marginTop: '3%' }}>
                                <img className="rectangle" alt="Rectangle" src={`${URL_SERVER}${firstActualite.image}`} style={{ width: '100%', height: '70ch' }} />

                                <Typography gutterBottom variant="h4" component="div">
                                    {firstActualite.title}
                                </Typography>
                            </div>

                            {/* <Card sx={{ maxWidth: 345 }}>
                                <Box>
                                    <CardMedia
                                        sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                        image={`http://localhost:8081/${actu.image}`}
                                    />
                                </Box>
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        className="text-end text-primary"
                                    >
                                        Date de publication: <span style={{ color: "black" }}>{actu.dateCreation}</span>
                                    </Typography>
                                    <Typography gutterBottom variant="h4" component="div">
                                        {actu.title}
                                    </Typography>
                                </CardContent>
                                <Typography className='description' style={{ cursor: 'pointer' }} onClick={() => handleVoirClick(dispatch(setActualiteId(actu.id)))} >Lire plus <ArrowOutwardIcon /></Typography>
                            </Card> */}
                        </div>
                    )}&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                    <div className="col-md-3">
                        <div className="row d-flex justify-content-center align-items-center" style={{ backgroundColor: '#f1f7fa', height: '500px' }}>
                            <div className='col-m2'>
                                <TextField placeholder='rechercher' style={{ backgroundColor: 'white' }} />
                                <SearchIcon style={{
                                    backgroundColor: '#008bd2',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    fontSize: '54px',
                                    marginLeft: '3%',
                                    cursor: 'pointer'
                                }}
                                    className="text-white"
                                />
                            </div>
                            <div style={{ marginBottom: '50%' }}>
                                <Typography>Sujet</Typography>
                                <ul>
                                    <li>
                                        Ingénierie
                                    </li>
                                    <li>
                                        Science
                                    </li>
                                    <li>
                                        Sécurité
                                    </li>
                                    <li>
                                        Espace
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className='p-5 mt-5' style={{ background: '#f1f7fa', marginBottom: '5%' }}>
                <Typography variant="h5">Article connexes</Typography>
                <div className="row">
                    {actualiteConnexes.map((actu) => (
                        <div className="col-md-3 p-3" style={{ width: '30%' }} >
                            <Card sx={{ maxWidth: 345 }}>
                                <Box>
                                    <CardMedia
                                        sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                        image={`${URL_SERVER}${actu.image}`}
                                    />
                                </Box>
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        className="text-end text-primary"
                                    >
                                        Date de publication: <span style={{ color: "black" }}>{actu.dateCreation}</span>
                                    </Typography>
                                    <Typography gutterBottom variant="h4" component="div">
                                        {actu.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {actu.description}
                                    </Typography>
                                </CardContent>
                                <Typography className='description' style={{ cursor: 'pointer' }} onClick={() => handleVoirClick(dispatch(setActualiteId(actu.id)))} >Lire plus <ArrowOutwardIcon /></Typography>
                            </Card>
                        </div>
                    ))}
                    <Stack className='text-center' spacing={2} style={{ display: "flex", justifyContent: "center", alignItems: 'center', marginTop:'3%' }} >
                        <Pagination count={10} color="primary" />
                    </Stack>

                </div>
                <Row style={{ marginTop: '5%' }}>
                    <Col>
                        <Typography>
                            Actualité à venir
                        </Typography>
                    </Col>
                    <Col>
                        <Button variant="outlined" className='float-end'> Actualités passés</Button>
                    </Col>
                </Row>
            </Container>



            <Footer />

        </>
    )
}

export default ActualiteDetails