import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Fade from "@mui/material/Fade";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import OutlinedInput from "@mui/material/OutlinedInput";
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { default as Container } from 'react-bootstrap/Container';
import axios from "../../axios.js";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import URL_SERVER from '../../services/appApi.js';
import './Detail.css';


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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const DetailProduit = () => {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buttonStyles = {
    backgroundColor: "#413DEE1A",
    border: "none",
    color: "#0A65CC",
  };

  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [image, setImage] = useState([])
  /**
   * 1- la fonction se declanche par defau
   * 2- j'affecte le resultat de la function dans un variable
   */

  const [imageId, setImageId] = useState('');
  const [gpsId, setGpsId] = useState('');

  const idCategorie = 4
  let getImagerie = useEffect(() => {
    const fectData = async () => {
      try {
        const request = await axios.get(`/articleByCategorie/${idCategorie}`);
        setImage(request.data.slice(-4));
      } catch (error) {
        console.log(error);
      }
    };

    fectData();
  }, []);

  const HandleGetImagerie = () => {

  }

  const HandleGetGps = () => {

  }

  const HandleGetDonnées = () => {

  }

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /**modal from imagerie */
  const [openModalImagerie, setOpenModalImagerie] = useState(false);
  const handleCloseImagerie = () => setOpenModalImagerie(false);

  const [selectedIdImagerie, setSelectedIdImagerie] = useState(null);

  const handleOpenModalAcceptImagerie = (id) => {
    setSelectedIdImagerie(id);
    setOpenModalImagerie(true);
  };

  /**affichage(recuperation des donnees) des imagerie */
  const [imagerie, setImagerie] = useState([]);
  const [imagerieCount, setImagerieCount] = useState(0)

  console.log(imagerie);
  useEffect(() => {
    const fectData = async () => {
      try {
        const request = await axios.get(`/articleByCategorie/1`);
        setImagerie(request.data);
        const totalCount = request.data.length;
        setImagerieCount(totalCount);
        console.log(request.data);
      } catch (error) {
        console.log(error);
      }
    };

    fectData();
  }, []);

  /**modal from Gps */
  const [openModalGps, setOpenModalGps] = useState(false);
  const handleCloseGps = () => setOpenModalGps(false);

  const [selectedIdGps, setSelectedIdGps] = useState(null);

  const handleOpenModalAcceptGps = (id) => {
    setSelectedIdGps(id);
    setOpenModalGps(true);
  };

  /**affichage(recuperation des donnees) des GPS */
  const [gps, setGps] = useState([]);
  const [gpsCount, setGpsCount] = useState(0)
  console.log("mes donnee gps", gps);
  useEffect(() => {
    const fectData = async () => {
      try {
        const request = await axios.get(`/articleByCategorie/2`);
        setGps(request.data);
        const totalCount = request.data.length;
        setGpsCount(totalCount);
        console.log(request.data);
      } catch (error) {
        console.log(error);
      }
    };

    fectData();
  }, []);

  const [openModalmetheorologique, setOpenModalmetheorologique] = useState(false);
  const handleClosemetheorologique = () => setOpenModalmetheorologique(false);

  const [selectedIdmetheorologique, setSelectedIdmetheorologique] = useState(null);

  const handleOpenModalAcceptmetheorologique = (id) => {
    setSelectedIdmetheorologique(id);
    setOpenModalmetheorologique(true);
  };

  /**affichage(recuperation des donnees) des metheorologique */
  const [metheorologique, setmetheorologique] = useState([]);
  const [metoCount, setMethoCount] = useState(0)
  console.log(metheorologique);
  useEffect(() => {
    const fectData = async () => {
      try {
        const request = await axios.get(`/articleByCategorie/3`);
        setmetheorologique(request.data);
        const totalCount = request.data.length;
        setMethoCount(totalCount);
        console.log(request.data);
      } catch (error) {
        console.log(error);
      }
    };

    fectData();
  }, []);

  /**pagination */
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
let state = 'Valide'
  return (
    <>
      <Header />
      {/** section image content */}
      <Grid
        fluid
        component="main"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/product-package-boxes-cart-with-shopping-bag-laptop-computer_38716-306.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          flexDirection: "start",
          justifyContent: "center",
          alignItems: "center",
          height: "650px",
        }}
      >
        <Grid
          sx={{
            height: '650px',
            backgroundColor: "#30509dbf",
            padding: {
              xs: "10px",
              sm: "50px",
              md: "236px",
            },
            margin: "auto",
          }}
        >
          <Grid className="mt-5 mt-sm-0">
            <Grid className="my-5 my-sm-0">
              <Box>
                <Typography className="text-white mb-2 fs-1 fw-normal fs-sm-5 text-center" data-aos="fade-down-right">
                  Decouvrez une nouvelle dimension de shopping avec space Market.
                </Typography>
                <Box>
                  {/* <Typography className='mb-5 text-white lh-sm text-wrap' paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
                    purus sodales, pulvinar purus dsld;woefjnwamsacda;ellqwfnmwa
                  </Typography> */}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Container style={{ marginTop: '-5%' }}>
        <Grid container spacing={2} sx={{ padding: { xs: '10px', sm: '20px', md: '4px' } }}>
          <Grid item xs={false} sm={4} md={4}
            data-aos="fade-down-right">
            <Item>
              <Card

                sx={{
                  p: 4,
                  boxShadow: '0 1px 3px rgba(0, 127, 255, 0.1)',
                  display: 'flex',
                  flexDirection: {
                    xs: 'column', // mobile
                    sm: 'row', // tablet and up
                  },
                }}
              >
                <CardMedia
                  width="50"
                  height="50"

                  sx={{

                    width: { xs: '100%', sm: 100 },
                    mr: { sm: 1 },
                    mb: { xs: 0, sm: 0 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                ><Box sx={{ background: '#E7F0FA', padding: '20px' }} className="rounded">< AddPhotoAlternateIcon sx={{ color: '#0A65CC' }} /></Box></CardMedia>
                <Box>
                  <Typography variant="body2" color="text.secondary" fontWeight="medium" className='fs-5'>
                    Imageries
                  </Typography>
                  <Typography>{imagerieCount}</Typography>
                </Box>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={false} sm={4} md={4} data-aos="fade-down">
            <Item>
              <Card

                sx={{
                  p: 4,
                  boxShadow: '0 1px 3px rgba(0, 127, 255, 0.1)',
                  display: 'flex',
                  flexDirection: {
                    xs: 'column', // mobile
                    sm: 'row', // tablet and up
                  },
                }}
              >
                <CardMedia
                  width="50"
                  height="50"

                  sx={{

                    width: { xs: '100%', sm: 100 },
                    mr: { sm: 1 },
                    mb: { xs: 0, sm: 0 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                ><Box sx={{ background: '#0A65CC', padding: '20px' }} className="rounded"><FmdGoodIcon sx={{ color: '#fff' }} /></Box></CardMedia>
                <Box sx={{}}>
                  <Typography fontWeight="bold" noWrap className='fs-2'>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight="medium" className='fs-5'>
                    GPS
                  </Typography>
                  <Typography>{gpsCount}</Typography>
                </Box>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={false} sm={4} md={4} data-aos="fade-down-left">
            <Item>
              <Card

                sx={{
                  p: 4,
                  boxShadow: '0 1px 3px rgba(0, 127, 255, 0.1)',
                  display: 'flex',
                  flexDirection: {
                    xs: 'column', // mobile
                    sm: 'row', // tablet and up
                  },
                }}
              >
                <CardMedia
                  width="50"
                  height="50"

                  sx={{

                    width: { xs: '100%', sm: 100 },
                    mr: { sm: 1 },
                    mb: { xs: 0, sm: 0 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                ><Box sx={{ background: '#E7F0FA', padding: '20px' }} className="rounded">< CloudQueueIcon sx={{ color: '#0A65CC' }} /></Box></CardMedia>
                <Box>
                  <Typography fontWeight="bold" noWrap className='fs-2'>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight="medium" className='fs-5'>
                    Métheorologique
                  </Typography>
                  <Typography>{metoCount}</Typography>

                </Box>
              </Card>
            </Item>
          </Grid>

        </Grid>
      </Container>

      <Container fluid style={{ marginTop: '6%', width: '90%' }}>
        <Typography variant="h4"> À propos de nos produits</Typography>
        <div className="Row d-flex justify-content-between" style={{ marginTop: '6%' }}>
          <div class="col-md-3" data-aos="fade-down">
            <div class="card text-white bg-secondary  mb-3">
              <div class="card-circle text-center" ><AddPhotoAlternateIcon style={{ fontSize: '5rem', alignItems: 'center' }} /> </div>
              <div class="card-body">
                <h5 class="card-title">Données Imageries</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div class="col-md-3" data-aos="fade-down">
            <div class="card text-white bg-secondary mb-3">
              <div class="card-circle"><FmdGoodIcon style={{ fontSize: '5rem' }} /> </div>
              <div class="card-body">
                <h5 class="card-title">Données GPS</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div class="col-md-3" data-aos="fade-down">
            <div class="card text-white bg-secondary  mb-3" >
              <div class="card-circle"><CloudQueueIcon style={{ fontSize: '5rem' }} /> </div>
              <div class="card-body">
                <h5 class="card-title">Données météorologique</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/** afficharge de tout les produit par categorie */}
      <Box sx={{ width: "100%", typography: "body1", marginTop: '5%' }}>
        <Typography className="text-center">Acheter</Typography>
        <TabContext value={value}>
          <Box style={{ marginLeft: '35%', padding: '2%' }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Imageries" value="1" style={{ border: '0.5px solid #87CEEB', borderRadius: '5px' }} />
              <Tab label="GPS" value="2" style={{ border: '0.5px solid #87CEEB', borderRadius: '5px', marginLeft: "2%" }} />
              <Tab label="Données métheorologiques" value="3" style={{ border: '0.5px solid #87CEEB', borderRadius: '5px', marginLeft: "2%" }} />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="row d-flex justify-content-center">
              {imagerie.length === 0 ? (
                <Typography className='text-center'> Aucun produit trouver</Typography>
              ) : imagerie.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((image) => {
                if (image.state !== "Rejette" || image.state !== "EnAttente" && state === "Valide") {
                  return (
                    <div className="col-4">
                      {/** modal from imagerie */}
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={openModalImagerie}
                        onClose={handleCloseImagerie}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                          backdrop: {
                            timeout: 500,
                          },
                        }}
                      >
                        <Fade in={openModalImagerie}>
                        </Fade>
                      </Modal>

                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          alt="image product"
                          height="140"
                          image={`${URL_SERVER}${image.photo}`}
                          className="p-2"
                        />
                        <CardActions className="d-flex justify-content-between">
                          <Button className="btn btn-primary" style={buttonStyles}>
                            Catégorie:  {image.categorie.name}
                          </Button>
                          <p style={{ marginLeft: "25%" }}>${image.prix}</p>
                        </CardActions>

                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {image.description}
                          </Typography>
                        </CardContent>
                        <CardActions className=" d-flex justify-content-center">
                          <Button variant="contained" onClick={handleOpen}>
                            Acheter maintenant
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
                                  <button type="button" class="btn btn-primary btn-lg btn-block">Payer</button>
                                </div>
                              </div>

                            </Box>

                          </Modal>
                        </CardActions>
                      </Card>
                    </div>
                  );
                } else {
                  return (
                    <div>
                    </div>
                  );
                }
              })}
              <Container className='d-flex justify-content-center mt-5'>
                <Stack spacing={2} >
                  <Pagination count={imagerie.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage} variant="outlined" color="primary" />
                </Stack>
              </Container>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="row d-flex justify-content-center">
              {gps.length === 0 ? (
                <Typography className='text-center'> Aucun produit trouver</Typography>
              ) : gps.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((donneeGps) => {
                if (donneeGps.state !== "Rejette" || donneeGps.state !== "EnAttente" && state === "Valide") {
                  return (
                    <div className="col-4">
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          alt="image product"
                          height="140"
                          image={`${URL_SERVER}${donneeGps.photo}`}
                          className="p-2"
                        />
                        <CardActions className="d-flex justify-content-between">
                          <Button className="btn btn-primary" style={buttonStyles}>
                            Catégorie:  {donneeGps.categorie.name}
                          </Button>
                          <p style={{ marginLeft: "25%" }}>${donneeGps.prix}</p>
                        </CardActions>

                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {donneeGps.description}
                          </Typography>
                        </CardContent>
                        <CardActions className=" d-flex justify-content-center">
                          <Button variant="contained" onClick={handleOpen}>
                            Acheter maintenant
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
                                  <button type="button" class="btn btn-primary btn-lg btn-block">Payer</button>
                                </div>
                              </div>

                            </Box>

                          </Modal>
                        </CardActions>
                      </Card>
                    </div>
                  );
                } else {
                  return (
                    <div>
                    </div>
                  );
                }
              })}
              <Container className='d-flex justify-content-center mt-5'>
                <Stack spacing={2} >
                  <Pagination count={gps.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage} variant="outlined" />
                </Stack>
              </Container>
            </div>
          </TabPanel>
          <TabPanel value="3">
            <div className="row d-flex justify-content-center">
              {metheorologique.length === 0 ? (
                <Typography className='text-center'> Aucun produit trouver</Typography>
              ) : metheorologique.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((metheo) => {
                if (metheo.state !== "Rejette" || metheo.state !== "EnAttente" && state === "Valide") {
                  return (
                    <div className="col-4">
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          alt="image product"
                          height="140"
                          image={`${URL_SERVER}${metheo.photo}`}
                          className="p-2"
                        />
                        <CardActions className="d-flex justify-content-between">
                          <Button className="btn btn-primary" style={buttonStyles}>
                            Catégorie:  {metheo.categorie.name}
                          </Button>
                          <p style={{ marginLeft: "25%" }}>${metheo.prix}</p>
                        </CardActions>

                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {metheo.description}
                          </Typography>
                        </CardContent>
                        <CardActions className=" d-flex justify-content-center">
                          <Button variant="contained" onClick={handleOpen}>
                            Acheter maintenant
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
                                  <button type="button" class="btn btn-primary btn-lg btn-block">Payer</button>
                                </div>
                              </div>

                            </Box>

                          </Modal>
                        </CardActions>
                      </Card>

                    </div>
                  );
                } 
              })}
              <Container className='d-flex justify-content-center mt-5'>
                <Stack spacing={2} >
                  <Pagination count={metheorologique.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage} variant="outlined" color="primary" />
                </Stack>
              </Container>
            </div>
          </TabPanel>
        </TabContext>
      </Box>

      {/* <section style={{ marginTop: '6%' }}>
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 col-xl-8 text-center">
            <h3 class="mb-4">Testimonials</h3>
            <p class="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
              numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
              quisquam eum porro a pariatur veniam.
            </p>
          </div>
        </div>

        <Container fluid style={{ width: '80%', marginBottom: '3%' }}>
          <div class="row text-center d-flex align-items-stretch">
            <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch" data-aos="fade-down">
              <div class="card testimonial-card">
                <div class="card-up" style={{ backgroundColor: '#9d789b' }}></div>
                <div class="avatar mx-auto bg-white">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    class="rounded-circle img-fluid" />
                </div>
                <div class="card-body">
                  <h4 class="mb-4">Maria Smantha</h4>
                  <hr />
                  <p class="dark-grey-text mt-4">
                    <FormatQuoteIcon />Lorem ipsum dolor sit amet eos adipisci,
                    consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch" data-aos="fade-down">
              <div class="card testimonial-card">
                <div class="card-up" style={{ backgroundColor: '#7a81a8' }}></div>
                <div class="avatar mx-auto bg-white">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    class="rounded-circle img-fluid" />
                </div>
                <div class="card-body">
                  <h4 class="mb-4">Lisa Cudrow</h4>
                  <hr />
                  <p class="dark-grey-text mt-4">
                    <FormatQuoteIcon />Neque cupiditate assumenda in maiores
                    repudi mollitia architecto.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-0 d-flex align-items-stretch" data-aos="fade-down">
              <div class="card testimonial-card">
                <div class="card-up" style={{ backgroundColor: '#6d5b98' }}></div>
                <div class="avatar mx-auto bg-white">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                    class="rounded-circle img-fluid" />
                </div>
                <div class="card-body">
                  <h4 class="mb-4">John Smith</h4>
                  <hr />
                  <p class="dark-grey-text mt-4">
                    <FormatQuoteIcon />Delectus impedit saepe officiis ab
                    aliquam repellat rem unde ducimus.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </Container>
      </section> */}

      <Footer />

    </>
  );
};

export default DetailProduit;
