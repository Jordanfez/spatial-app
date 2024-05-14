import CheckIcon from "@mui/icons-material/Check";
import Alert from '@mui/material/Alert';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
// import Grid from '@mui/material/Grid';
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import Header from 'src/components/Header.js'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import axios from "../axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import URL_SERVER from "../services/appApi";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const DetailProjet = () => {

  const [alert, setAlert] = React.useState({ variant: "", message: "" });
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const profilId = useSelector((state) => state.profile.profileId);
  const projetIds = useSelector((state) => state.projetId.projetId);

  console.log(profilId);

  // //console.log('infor su free',user.profile.id);
  // const valUserId = user.profile.id

  // function getProfilUserId(valUserId) {
  //   return user.profile.id=== null ? 'profile.id' : profilId;
  // }

  // function getProfilUserId() {
  //   if (user.id === '') {
  //     return profilId;
  //   } else {
  //     return user.profile.id;
  //   }
  // }
  const profilUserId = user;
  console.log(profilUserId);

  const projetId = useSelector((state) => state.projetId);
  const objet = projetId;
  const id = objet.projetId;
  console.log(id);

  /**recuperation des projets */
  const [projects, setProjects] = React.useState([]);
  let module = { 'id': null }
  module.id = projetIds;
  console.log(module);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${URL_SERVER}/modulesByProject/${id}`);
        setProjects(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  const [candidatures, setcandidatures] = useState(false);
  console.log('mes candidatures', candidatures);
  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${URL_SERVER}/candidatures`);
        setcandidatures(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);


  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [title, setTitle] = React.useState("");
  // const [description, setDescription] = React.useState("");

  const handleSubmits = async (e) => {
    e.preventDefault();

    if (user.userName !== '') {
      setIsLoading(true);
      // Effectuer la requête vers l'API ici
      try {
        const moduleData = {
          module
        };
        console.log(moduleData);

        const response = await axios.post("/candidature", moduleData);
        setAlert({ variant: "success", message: "Votre canditadure a ete envoyer avec succes" });
        setTimeout(() => {
          setAlert({ variant: "", message: "" });
          navigate('/')
        }, 3000);
        console.log('reussi avec sucess', response.data);
        console.log(response.data); // Affiche la réponse de l'API

        // Faire quelque chose avec la réponse de l'API si nécessaire
      } catch (error) {
        setAlert({ variant: "warning", message: error.response.data.error });

        console.error(error);
      }
    } else {
      // Demander à l'utilisateur de se connecter
      alert('Veuillez vous connecter si vous avez un compte ou creer en un pour postuler.');
    }

  };

  const handleApply = async (projectId) => {

    const module = projectId
    const profile = profilUserId

    if (user.userName !== '') {
      setIsLoading(true);
      // Effectuer la requête vers l'API ici
      try {
        const moduleData = {
          "module": {
            "id": module
          },
          "profile": profile
        };
        console.log(moduleData);

        const response = await axios.post("/candidature", moduleData);
        console.log('candidature', response.data);

        setAlert({ variant: "success", message: "Votre canditadure a ete envoyer avec succes" });
        setTimeout(() => {
          setAlert({ variant: "", message: "" });
          navigate('/')
        }, 3000);
        console.log('reussi avec sucess', response.data);

        // Faire quelque chose avec la réponse de l'API si nécessaire
      } catch (error) {
        console.error(error);
        setAlert({ variant: "warning", message: error.response.data.error });

      }
    } else {
      // Demander à l'utilisateur de se connecter
      alert('Veuillez vous connecter si vous avez un compte ou creer en un pour postuler.');
    }

  };
  const firstProject = projects[0]?.project;
  console.log(firstProject);

  return (
    <>
      <Header />

      <Container
        fluid
        className="my-5 pb-5"
        style={{
          backgroundColor: 'rgba(246, 214, 214, 0)',
        }}
      >
        <Container>
          <Container>
            <Container className="px-5">
              <Box>
                <Container className="px-5">
                  <Box className="px-5">
                    {alert.variant && (
                      <Alert variant="filled" severity={alert.variant} className="alert-message">
                        {alert.message}
                      </Alert>
                    )}

                    <Container className="px-5">
                      {!firstProject ? (
                        <h3>Aucun module Present Pour ce projet</h3>
                      ) : firstProject && (
                        <Container>
                          <Box className="border-bottom mt-5">
                            <div className="row mb-3">
                              <div className="col-8 ">
                                <Typography
                                  fontWeight="bold"
                                  noWrap
                                  className="fs-4"
                                >
                                  {firstProject.title}
                                </Typography>
                                <Typography
                                  fontWeight="medium"
                                  noWrap
                                  className="fs-6 mt-1"
                                >
                                  date de post : {firstProject.dateCreation}
                                </Typography>
                              </div>
                              <div className='col-4 text-end'>
                                <Button variant="contained" size="medium" onClick={handleSubmits} >
                                  Postuler
                                </Button>
                              </div>
                            </div>
                          </Box>
                          <Box className="mt-3">
                            <div className="row mb-3">
                              <div className="col-7">
                                <Typography
                                  sx={{ mb: 1.5 }}
                                  color="text.dark"
                                  fontWeight="bold"
                                  className="fs-5"
                                >
                                  Information suplementaire
                                </Typography>
                                <Typography variant="body2" className="lh-lg">
                                  Description: {firstProject.wording}
                                </Typography>
                              </div>
                            </div>

                            <div className="row mb-3">
                              <div className="col-7">
                                <Typography
                                  sx={{ mb: 1.5 }}
                                  color="text.dark"
                                  fontWeight="bold"
                                  className="fs-5"
                                >
                                  date limite du pour postuler
                                </Typography>
                                <Typography variant="body2" className="lh-lg">
                                  {firstProject.delay}
                                </Typography>
                              </div>
                              <div className="col-7">
                                <List
                                  sx={{
                                    width: "100%",
                                    maxWidth: 360,
                                    bgcolor: "background.paper",
                                  }}
                                >
                                  {projects.map((value) => (
                                    <ListItem key={value.id} disableGutters>
                                      <ListItemIcon>
                                        <CheckIcon />
                                      </ListItemIcon>
                                      <ListItemText
                                        primary={`Nom du Module : ${value.title} `}
                                      />
                                      <Button variant="contained" size="medium" onClick={() => handleApply(value.id)} >
                                        Postuler
                                      </Button>

                                    </ListItem>
                                  ))}
                                </List>
                              </div>
                            </div>
                          </Box>
                        </Container>
                      )}
                      {/* <div className="row mb-3 text-center px-5">
                        <Typography
                          sx={{ mb: 1.5, mt: 4 }}
                          color="text.dark"
                          fontWeight="bold"
                          className="fs-4"
                        >
                          Postuler pour cet emploi
                        </Typography>
                        <Typography variant="body2" className="lh-lg">
                          We develop intelligent solutions for companies to
                          reduce their operational costs, increase their
                          profitability and improve service quality.
                        </Typography>
                      </div>
                      <div className="row px-5">
                        <Box className="pb-4">
                          <div className="row ">
                            <div className="col">
                              <FormControl
                                fullWidth
                                sx={{ m: 1 }}
                                variant="outlined"
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
                                  value={title}
                                  onChange={(e) => setTitle(e.target.value)}
                                />
                              </FormControl>
                            </div>
                          </div>
                          <div className="row ">
                            <div className="col">
                              <FormControl
                                fullWidth
                                sx={{ m: 1 }}
                                variant="outlined"
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
                                  value={description}
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
                                />
                              </FormControl>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <FormControl
                                fullWidth
                                sx={{ m: 1 }}
                                variant="outlined"
                              >
                                <Button
                                  component="label"
                                  variant="contained"
                                  startIcon={<CloudUploadIcon />}
                                >
                                  Importer le CV
                                  <VisuallyHiddenInput type="file" />
                                </Button>
                              </FormControl>
                            </div>
                            <div className="col-6">
                              <FormControl
                                fullWidth
                                sx={{ m: 1 }}
                                variant="outlined"
                              >
                                <Button
                                  component="label"
                                  variant="contained"
                                  startIcon={<CloudUploadIcon />}
                                >
                                  Importer la lettre de motivation
                                  <VisuallyHiddenInput type="file" />
                                </Button>
                              </FormControl>
                            </div>
                          </div>
                          <div className="row ">
                            <div className="col">
                              <FormControl
                                fullWidth
                                sx={{ m: 1, height: "10" }}
                                variant="outlined"
                              >
                                <FormHelperText
                                  id="outlined-projet-helper-text"
                                  className="fs-6 text-dark fw-bold"
                                >
                                  Competences
                                </FormHelperText>
                                <InputLabel id="demo-select-label"></InputLabel>
                                <Select
                                  value={selectedCompetence}
                                  onChange={handleSelectChange}
                                >
                                  <MenuItem value="">
                                    Sélectionnez un type d'industrie
                                  </MenuItem>
                                  {competences.map((competence) => (
                                    <MenuItem
                                      key={competence.id}
                                      value={competence.id}
                                    >
                                      {competence.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </div>
                          </div>
                          <div className="mt-5 d-flex justify-content-center">
                            <Button onClick={handleSubmits} variant="contained">
                              Postuler
                            </Button>
                          </div>
                        </Box>
                      </div> */}
                    </Container>
                  </Box>
                </Container>
              </Box>
            </Container>
          </Container>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default DetailProjet;
