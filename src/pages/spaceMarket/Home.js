import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Divider, Skeleton } from '@mui/material';
import Alert from '@mui/material/Alert';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from '@mui/material/Grid';
import Modal from "@mui/material/Modal";
import OutlinedInput from "@mui/material/OutlinedInput";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Service3 from '../../img/at psi img/cloud_11055853.png';
import Service1 from '../../img/at psi img/image_12954017.png';
import Service2 from '../../img/at psi img/map_854883.png';
import URL_SERVER from "../../services/appApi";
import { fetcharticlesValideFunction } from '../../services/GetFunction/GetAdmin/getAdminFunctions';
import Homme from "../images/homme.jpg";
import BackToTop from '../ScoolTop/BackToTop';
import "./Home.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 648,
  height: 566,
  bgcolor: "background.paper",
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
};

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 648,
  height: 206,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const Home = () => {


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const buttonStyles = {
    backgroundColor: "#413DEE1A",
    border: "none",
    color: "#0A65CC",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  /** les meilleurs produit */
  // useEffect(() => {
  //    axios
  //      .get("/articles/")
  //      .then((response) => {
  //        setPosts(response.slice(-4));
  //      })
  //      .catch((error) => {
  //        console.log(error);
  //      });
  // }, []);

  const [posts, setPosts] = useState([]);
  console.log("ls article", posts);
  useEffect(() => {
    const fectData = async () => {
      try {
        const request = await fetcharticlesValideFunction();
        setPosts(request.slice(-4));
      } catch (error) {
        console.log(error);
      }
    };

    fectData();
  }, []);

  /** end meilleurs produit */

  /**modal pour ajouter un produit */
  const [showModal, setShowModal] = React.useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const [alert, setAlert] = React.useState({ variant: "", message: "" });
  const [showAlert, setShowAlert] = useState(false);

  const handleBuy = () => {
    setAlert({ variant: "warning", message: "We're sorry, but the payment service is currently unavailable." });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  }

  return (

    <>
      <Header />
      <Grid fluid component="main"
        style={{
          backgroundImage: 'url(https://www.rheagroup.com/wp-content/uploads/2023/07/blue-planet-space-connectors-banner.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          flexDirection: 'start',
          justifyContent: 'center',
          alignItems: 'center',
          height: '500',
        }}
      >

        <Grid container
          sx={{
            padding: {
              xs: '10px',
              sm: '50px',
              md: '120px'
            },
            // margin: 'auto',
            // marginBottom: '20px'

          }}
        >
          <Grid className='mt-2 mt-sm-0'>
            <Grid className='mt-5 my-sm-0' >
              <Box sx={{ padding: 2 }} className='mt-5 text-white'>
                <Typography variant="h4" data-aos="fade-left" style={{ fontSize: "250%" }}>Space Market</Typography>
                <Divider sx={{ backgroundColor: 'white', height: 5, width: 100, borderRadius: 5 }} /><br />
                <div>
                  <Typography variant="h4" data-aos="fade-left" style={{ fontSize: "250%" }}>Explore the world of space shopping with Space Market
                  </Typography>
                  <Typography variant="h4" data-aos="fade-left"> The ultimate destination for space fanatics.</Typography>
                  <br />
                  <a
                    data-aos="fade-right"
                    href="/DetailProduit"
                    class="btn btn-primary btn-lg expo"
                    role="button"
                    aria-pressed="true"
                  >
                    Explore the Marketplace
                  </a> &nbsp; &nbsp;
                  <a
                    data-aos="fade-right"
                    onClick={handleShow}
                    class="btn btn-secondary btn-lg expo"
                    role="button"
                    aria-pressed="true"
                  >
                    Publish a product
                  </a>

                  <Modal
                    open={showModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={styles}>
                      <div className="row">
                        <div className="col-12"> <HighlightOffIcon className="float-end" style={{ cursor: 'pointer' }} onClick={handleCloseModal} /> </div>
                      </div>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.dark"
                        fontWeight="bold"
                        className="fs-5 text-center"
                      >
                        Creer vous un compte employeur si vous en avez pas ou Connecter vous a votre compte employeur si vous en avez un
                      </Typography>

                      <div className="row ">
                        <div className="col text-center">
                          <Button variant="contained" href="/login">Se Connecter</Button>
                        </div>
                        <div className="col text-center">
                          <Button variant="outlined" href="/account">S'inscrire</Button>
                        </div>
                      </div>
                    </Box>
                  </Modal>

                </div>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid className='mb-5'
        sx={{
          marginTop: 5

        }}
      >
        <Row >
          <Col xs={false} sm={6} md={6} className="p-5 text-center mt-5" data-aos="fade-right">
            <Typography variant='h3' className="text-center">What is space-market</Typography>
            <Box textAlign="left">
              <Typography className="p-2">
                The Space Market is a market, economy or business environment related to space activities. It encompasses a wide range of commercial and industrial activities, such as satellite launches, space transportation services, space equipment manufacturing, space technologies, satellite telecommunications services, space exploration, space tourism, etc. The rapid development of space technologies, combined with growing interest in the exploration and use of space, has led to the creation of a dynamic space business ecosystem.
                The rapid development of space technologies, combined with growing interest in the exploration and use of space, has led to the creation of a dynamic commercial space ecosystem. Private companies, government agencies and public-private partnerships are all helping to shape this evolving space market.
              </Typography>
            </Box>
          </Col>
          <Col xs={12} sm={6} md={6} className='p-5' data-aos="fade-left">
            <img src='https://www.marketing91.com/wp-content/uploads/2020/02/Significant-components-of-market-space.jpg' alt='top' width={500} height={400} style={{ boxShadow: '0px 5px rgba(0, 0, 0, 0.1)', borderRadius: '2%' }} />
          </Col>
        </Row>
      </Grid>

      {/**about product */}
      <Grid className='mb-5'
        sx={{
          marginTop: 5

        }}
      >
        <Row >
          <Col xs={12} sm={6} md={6} className='p-5' data-aos="fade-left">
            <Box textAlign="center" >
              <img src='https://www.mitsubishielectric.com/bu/space/img/img_link01.jpg' alt='top' width={500} height={'auto'} style={{ boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.1)', borderRadius: '2%', }} />
            </Box>
          </Col>

          <Col xs={false} sm={6} md={6} className="p-5 text-center mt-5" data-aos="fade-right">
            <Box sx={{ marginTop: 4, marginLeft: 5 }}>
              <Typography variant='h3' className="text-center">About our products</Typography>
              <Box textAlign="left">
                <Typography className="p-2">
                  Discover our range of space products specializing in GPS data, imagery and meteorology. Get precise information for location, navigation, high-resolution Earth imaging and weather forecasting. Our products are designed to meet your space data needs.
                </Typography>
              </Box>
            </Box>
          </Col>
        </Row>
      </Grid>

      {/** service */}
      <Grid sx={{
        padding: {
          xs: '10px',
          sm: '50px',
        },
        paddingInline: {
          md: '120px'
        },
        background: '#fbfcef',
        marginTop: '50px'
      }}>
        <Grid sx={{

          padding: {
            xs: '10px',
            sm: '50px',
          },
          paddingInline: {
            md: '100px'
          }
        }}>
          <Paper elevation={6}>
            <Grid fluid sx={{ background: '#fff', borderTop: 5, borderColor: '#135ed7', borderRadius: '5px' }}>
              <Container className='p-5 text-center' data-aos="fade-left">
                <Typography variant="h5" className='text-dark  fs-2 fw-bold text-center pt-5 fs-sm-5'>
                  Our services
                </Typography>
                <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {/* <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}> */}
                  <Typography variant='body2' className='text-center p-2' color="text.secondary" >
                    We offer a wide range of services. We'd like to introduce you to our range of services.
                  </Typography>
                  {/* </Box> */}
                </Container>
              </Container>
              <Grid container className='px-5 pb-5' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop:'-15%' }}>
                <Grid item xs={3} sx={{ textAlign: 'center', marginTop:-2 }} >
                  <Box>
                    <img src={Service1} alt='' height='70' width='70' />
                  </Box>
                  <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5'  data-aos="fade-down">
                    Imaging data
                  </Typography>
                  <Typography variant='body2' className='text-center' color="text.secondary">
                    Imagery data provides high-resolution images of the Earth captured from space. They enable us to visualize geographical features, monitor environmental changes and gain a better understanding of our planet. This high-quality visual data is used in fields such as mapping, environmental studies and monitoring.
                  </Typography>
                </Grid>

                <Grid item xs={3} sx={{ textAlign: 'center',  }} >
                  <Box>
                    <img src={Service2} alt='' height='70' width='70' />
                  </Box>
                  <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5' data-aos="fade-down">
                    GPS data
                  </Typography>
                  <Typography className='mb-3 lh-sm fs-6' color="text.secondary">
                    GPS data are used for precise location, navigation and time synchronization. It enables precise determination of position, speed and time in a variety of applications. GPS data is essential for optimizing operations, ensuring reliable connectivity and facilitating logistics planning.
                  </Typography>
                </Grid>
                <Grid item xs={3} sx={{ textAlign: 'center',marginTop:18 }} >
                  <Box>
                    <img src={Service3} alt='' height='70' width='70' />
                  </Box>
                  <Typography className='text-darkblue my-2 fs-4 fw-bold fs-sm-5' data-aos="fade-down">
                    Meteorological data
                  </Typography>
                  <Typography className='mb-3 fw-ligh lh-sm ' color="text.secondary">
                    Les données météorologiques fournissent des informations précieuses sur les conditions atmosphériques actuelles et prévues. Elles comprennent des mesures telles que la température, les précipitations, la pression atmosphérique, les vents et d'autres paramètres liés au climat. Ces données sont utilisées par les professionnels de la météorologie pour la prévision des conditions météorologiques, la gestion des catastrophes naturelles et la compréhension des modèles climatiques.
                  </Typography>

                </Grid>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>


      {/* <div
        className="container-fluid p-5 mt-5 d-flex justify-content-between"
        style={{ background: "#F8F8F8" }}
      >
        <div className="col-sm-6" style={{ marginLeft: "3.5%" }} data-aos="fade-right">
          Our best offers
        </div>
        <div className="col-sm-6" data-aos="fade-right">
          <div style={{ marginLeft: "70%", cursor: "pointer" }}>
            <Link to='/DetailProduit' style={{ color: 'black' }}>
              Explore  <ArrowOutwardIcon />
            </Link>
          </div>
        </div>
      </div> */}

      <Box className="container-fluid p-5" sx={{ marginTop: -3 }}>
        <Typography variant="h4" className="text-center p-5">Our best offers</Typography>
        <Box className="Row d-flex justify-content-center align-items-center">
          {posts.length === 0 ? (
            <div className="col-md-3" data-aos="fade-down">
              <Card sx={{ maxWidth: 345 }}>
                <Skeleton variant="rectangular" width="100%" height={118} />
                <CardActions className="d-flex justify-content-between">
                  <Skeleton width="60%" />
                </CardActions>

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <Skeleton width="60%" />
                  </Typography>
                </CardContent>
                <CardActions className=" d-flex justify-content-center">
                  <Button className="btn btn-primary" style={buttonStyles}>
                    <Skeleton />
                  </Button>
                </CardActions>
              </Card>
            </div>
          ) : posts.map((post) => (
            <div className="col-md-3" data-aos="fade-down-left" >
              <Card sx={{ maxWidth: 345, height: 340 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={`${URL_SERVER}${post.photo}`}
                  className="p-2"
                />
                <CardActions className="d-flex justify-content-between">
                  <Button className="btn btn-primary" style={buttonStyles}>
                    Catégorie:  {post.categorie.name}
                  </Button>
                  <p style={{ marginLeft: "25%" }}>${post.prix}</p>
                </CardActions>

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {post.description}
                  </Typography>
                </CardContent>
                <CardActions className=" d-flex justify-content-center">
                  <Button variant="contained" onClick={handleOpen}>
                    Buy Now
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.dark"
                        fontWeight="bold"
                        className="fs-5 text-center"
                      >
                        <div className="row">
                          <div className="col-12"> <HighlightOffIcon className="float-end" style={{ cursor: 'pointer' }} onClick={handleClose} /> </div>
                        </div>
                        {showAlert && (
                          <Alert variant="filled" severity={alert.variant} className="alert-message">
                            {alert.message}
                          </Alert>
                        )}
                        PAIEMENT
                      </Typography>
                      <div className="row ">
                        <div className="col-6">
                          <FormControl
                            fullWidth
                            sx={{ m: 1 }}
                            variant="outlined"
                            size="small"
                          >
                            <FormHelperText
                              id="outlined-projet-helper-text"
                              className="fs-6 text-dark fw-bold"
                            >
                              Nom
                            </FormHelperText>
                            <OutlinedInput
                              className="bg-white"
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                "aria-label": "projet",
                              }}
                              placeholder="entrer votre nom"
                            />
                          </FormControl>
                        </div>
                        <div className="col-6">
                          <FormControl
                            fullWidth
                            sx={{ m: 1 }}
                            variant="outlined"
                            size="small"
                          >
                            <FormHelperText
                              id="outlined-projet-helper-text"
                              className="fs-6 text-dark fw-bold"
                            >
                              Email
                            </FormHelperText>
                            <OutlinedInput
                              className="bg-white"
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                "aria-label": "projet",
                              }}
                              placeholder="mail@gmail.com"
                            />
                          </FormControl>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col-6">
                          <FormControl
                            fullWidth
                            sx={{ m: 1 }}
                            variant="outlined"
                            size="small"
                          >
                            <FormHelperText
                              id="outlined-projet-helper-text"
                              className="fs-6 text-dark fw-bold"
                            >
                              Adresse
                            </FormHelperText>
                            <OutlinedInput
                              className="bg-white"
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                "aria-label": "projet",
                              }}
                              placeholder="entrer votre adresse"
                            />
                          </FormControl>
                        </div>
                        <div className="col-6">
                          <FormControl
                            fullWidth
                            sx={{ m: 1 }}
                            variant="outlined"
                            size="small"
                          >
                            <FormHelperText
                              id="outlined-projet-helper-text"
                              className="fs-6 text-dark fw-bold"
                            >
                              Pays
                            </FormHelperText>
                            <OutlinedInput
                              className="bg-white"
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                "aria-label": "projet",
                              }}
                              placeholder="entrer votre pays"
                            />
                          </FormControl>
                        </div>
                      </div>

                      <div className="row ">
                        <div className="col">
                          <FormControl
                            fullWidth
                            sx={{ m: 1, height: "40" }}
                            variant="outlined"
                          >
                            <FormHelperText
                              id="outlined-projet-helper-text"
                              className="fs-6 text-dark fw-bold"
                            >
                              Card
                            </FormHelperText>
                            <OutlinedInput
                              className="bg-white"
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                "aria-label": "projet",
                              }}
                              placeholder="_ _ _ _    _ _ _ _    _ _ _ _   _ _ _ _"
                            />
                          </FormControl>
                        </div>
                        <div className="col">
                          <FormControl
                            fullWidth
                            sx={{ m: 1, height: "40" }}
                            variant="outlined"
                          >
                            <OutlinedInput
                              className="bg-white"
                              id="outlined-adornment-projet"
                              aria-describedby="outlined-projet-helper-text"
                              inputProps={{
                                "aria-label": "projet",
                              }}
                              style={{ marginTop: "10%" }}
                              placeholder="_ _/_ _     _ _ _      _ _ _ _ _"
                            />
                          </FormControl>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mt-5 d-flex justify-content-end">
                          <button type="button" onClick={handleBuy} class="btn btn-primary btn-lg btn-block">Payer</button>
                        </div>
                      </div>
                    </Box>
                  </Modal>
                </CardActions>
              </Card>
            </div>
          ))}
        </Box>
      </Box>

      <div
        className="container-fluid p-5 mt-5 d-flex justify-content-between"
        style={{ background: "#F8F8F8" }}
      >
        <div className="col-sm-6" style={{ marginLeft: "3.5%" }} data-aos="fade-right">
          best-selling products
        </div>
        <div className="col-sm-6" data-aos="fade-right">
          <div style={{ marginLeft: "70%", cursor: "pointer" }}>
            <Link to='#' style={{ color: 'black' }}>
              Explore  <ArrowOutwardIcon />
            </Link>
          </div>
        </div>
      </div>

      <Box className="container-fluid p-5">
        <Box className="Row d-flex justify-content-between">
          <div class="col-md-3">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={Homme}
                className="p-2"
              />
              <CardActions className="d-flex justify-content-between">
                <Button class="btn btn-primary" style={buttonStyles}>
                  Catégorie
                </Button>
                <p style={{ marginLeft: "25%" }}>$600,000</p>
              </CardActions>

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Nokia Essential Wireless Headphones Nokia Essential Wireless
                  Headphones 120CM BLACK
                </Typography>
              </CardContent>
              <CardActions className=" d-flex justify-content-center">
                <Button variant="contained" disableElevation data-aos="fade-down">
                  Buy now
                </Button>
              </CardActions>
            </Card>
          </div>
          <div class="col-md-3">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={Homme}
                className="p-2"
              />
              <CardActions className="d-flex justify-content-between">
                <Button class="btn btn-primary" style={buttonStyles}>
                  Catégorie
                </Button>
                <p style={{ marginLeft: "25%" }}>$600,000</p>
              </CardActions>

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Nokia Essential Wireless Headphones Nokia Essential Wireless
                  Headphones 120CM BLACK
                </Typography>
              </CardContent>
              <CardActions className=" d-flex justify-content-center">
                <Button variant="contained" disableElevation data-aos="fade-down">
                  Buy now
                </Button>
              </CardActions>
            </Card>
          </div>
          <div class="col-md-3">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={Homme}
                className="p-2"
              />
              <CardActions className="d-flex justify-content-between">
                <Button class="btn btn-primary" style={buttonStyles}>
                  Catégorie
                </Button>
                <p style={{ marginLeft: "25%" }}>$600,000</p>
              </CardActions>

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Nokia Essential Wireless Headphones Nokia Essential Wireless
                  Headphones 120CM BLACK
                </Typography>
              </CardContent>
              <CardActions className=" d-flex justify-content-center">
                <Button variant="contained" disableElevation data-aos="fade-down">
                  Buy now
                </Button>
              </CardActions>
            </Card>
          </div>
          <div class="col-md-3">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={Homme}
                className="p-2"
              />
              <CardActions className="d-flex justify-content-between">
                <Button class="btn btn-primary" style={buttonStyles}>
                  Catégorie
                </Button>
                <p style={{ marginLeft: "25%" }}>$600,000</p>
              </CardActions>

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Nokia Essential Wireless Headphones Nokia Essential Wireless
                  Headphones 120CM BLACK
                </Typography>
              </CardContent>
              <CardActions className=" d-flex justify-content-center">
                <Button variant="contained" disableElevation data-aos="fade-down">
                  Buy now
                </Button>
              </CardActions>
            </Card>
          </div>
        </Box>
      </Box>

      <Container className="p-5" fluid style={{ background: '#ccd0db', marginTop: "6%" }}>
        <Typography variant="h3" className="text-center">Rates</Typography>
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
              <h2 className='text-center' >Classic</h2>
              <hr />
              <Row className="p-3">
                <Col>
                  <Typography variant="h5">A single team*</Typography>
                  <Typography variant="h5" className="text-center">6000 €</Typography>
                </Col>
                <Col>
                  <Typography variant="h5">A single team*</Typography>
                  <Typography variant="h5" className="text-center">6000 €</Typography>
                </Col>
              </Row>
              <hr />
              <Typography className='text-center'>
                The uniqueness of our business model is based on synergies created by the complementarity of our four activities. Each activity increases our market knowledge and expertise and extends our network of key decision makers while at the same time maintaining a respect for client confidentiality
              </Typography>
            </Container>
          </Col>
          <Col data-aos="fade-down" style={{
            height: 'auto',
            backgroundColor: '#00134d',
            marginLeft: '2%'
          }} >
            <Container style={{ padding: '10%' }} className='text-white '>
              <h2 className='text-center' >Bonus</h2>
              <hr />
              <Row className="p-3">
                <Col>
                  <Typography variant="h5">A single team*</Typography>
                  <Typography variant="h5" className="text-center">6000 €</Typography>
                </Col>
                <Col>
                  <Typography variant="h5">A single team*</Typography>
                  <Typography variant="h5" className="text-center">6000 €</Typography>
                </Col>
              </Row>
              <hr />
              <Typography className='text-center'>
                The uniqueness of our business model is based on synergies created by the complementarity of our four activities. Each activity increases our market knowledge and expertise and extends our network of key decision makers while at the same time maintaining a respect for client confidentiality
              </Typography>
            </Container>

          </Col>
          <Col data-aos="fade-down-left" style={{
            height: '700px',
            backgroundColor: '#ffffff',
            marginLeft: '2%'
          }} >
            <Container style={{ padding: '10%' }} >
              <h2 className='text-center' >Tracker</h2>
              <hr />
              <Row className="p-3">
                <Col>
                  <Typography variant="h5">A single team*</Typography>
                  <Typography variant="h5" className="text-center">6000 €</Typography>
                </Col>
                <Col>
                  <Typography variant="h5">A single team*</Typography>
                  <Typography variant="h5" className="text-center">6000 €</Typography>
                </Col>
              </Row>
              <hr />
              <Typography className='text-center'>
                The uniqueness of our business model is based on synergies created by the complementarity of our four activities. Each activity increases our market knowledge and expertise and extends our network of key decision makers while at the same time maintaining a respect for client confidentiality
              </Typography>
            </Container>
          </Col>

        </Row>
      </Container>



      <BackToTop />
      <Footer />
    </>
  );
};

export default Home;
