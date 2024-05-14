import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from "@mui/material/InputLabel";
import Link from '@mui/material/Link';
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Paper from '@mui/material/Paper';
import Select from "@mui/material/Select";
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../../axios.js";
import { setProfile } from "../../features/profileSlice.js";
import Logo from '../../img/logopsi1-0.png';
import { fetchdomainsFunction } from '../../services/GetFunction/GetFreelance/getFreelanceFunctions.js';
import Entreprise from './Entreprise';
import Informations from './Informations';
import Reseaux from './Reseaux';

import { styled } from '@mui/material/styles';

import Contact from './Contact';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        PSI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Entreprise', 'Informations Générales', 'Réseaux Sociaux', 'Contact'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Entreprise />;
    case 1:
      return <Informations />;
    case 2:
      return <Reseaux />;
    case 3:
      return <Contact />;
    default:
      throw new Error('Unknown step');
  }
}


function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  /**Upload cv */

  const [selectedFile, setSelectedFile] = useState(null);

  const handleCVChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  /** end Upload cv */

  /** upload photo */

  const [selectedPhotos, setSelectedPhotos] = useState(null);
  console.log(selectedPhotos);
  const handlePhotoChanges = (event) => {
    const photos = event.target.files;
    setSelectedPhotos(photos);
  };

  /** end upload photo */


  /**recuperation des domaine */
  const [domains, setDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState("");
  console.log(selectedDomain);

  const idValue = selectedDomain.id;
  const valuesList = [idValue];
  console.log(valuesList);

  const domain = valuesList
  useEffect(() => {
    fetchTypesDomaine();
  }, []);

  const fetchTypesDomaine = async () => {
    try {
      const response = await fetchdomainsFunction();
      setDomains(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  /** competence */
  const [competenceByDomaine, setCompetences] = useState([]);
  const [selectedCompetences, setSelectedCompetences] = useState([]);
  const [object, setObject] = useState();

  useEffect(() => {
    const convertedObject = selectedCompetences.map((item) => ({ id: item }));
    setObject(convertedObject);
  }, [selectedCompetences]);

  const competences = selectedCompetences
  console.log(competences);

  /**domaine */
  const handleDomainChange = (event) => {
    const selectedDomainId = event.target.value;
    setSelectedDomain(selectedDomainId);
    console.log(selectedDomainId.id);

    // Fetch competences by domain ID from API
    axios
      .get(`/competencesbydomain/${selectedDomainId.id}`)
      .then((response) => {
        setCompetences(response.data);
      })
      .catch((error) => {
        console.error("Error fetching competences:", error);
      });
  };

  /** competence */
  const handleCompetenceChange = (event) => {
    const selectedCompetences = event.target.value;
    setSelectedCompetences(selectedCompetences);
  };

  const users = useSelector((state) => state.user);
  console.log(users.id);
  const user = users.id
  // const user = {
  //   "id": 23,
  //   "userName": "dave",
  //   "email": "davechedjouun@gmail.com",
  //   "password": "123",
  //   "userFunction": {
  //     "id": 1,
  //     "name": "Employeur"
  //   }
  // };

  /** envoi de donnee */
  const [linkedInLink, setName] = useState("");
  const [description, setDescription] = useState("");
  const linkedIn = linkedInLink

  const [errorCV, setErrorCV] = useState('');
  const [errorphotos, setErrorphotos] = useState('');
  const [errorcompetence, setErrorcompetence] = useState('');
  const [errornom, setErrorNom] = useState('');
  const [errororganisation, setErrororganisation] = useState('');
  const [errorDescription, setErrorDescription] = useState('');


  const handleSubmit = async () => {

    if (selectedPhotos === "") {
      setErrorCV('Veuillez remplir ce champ.');
    } else if (selectedFile === "") {
      setErrorphotos('Veuillez remplir ce champ.');
    }
    else if (linkedIn === "") {
      setErrorNom('Veuillez remplir ce champ.');
    }
    else if (domain === "") {
      setErrororganisation('Veuillez remplir ce champ.');
    }
    else if (competences === "") {
      setErrorcompetence('Veuillez remplir ce champ.');
    }
    else if (description === "") {
      setErrorDescription('Veuillez remplir ce champ.');
    }else{

      try {
        const formData = new FormData();
        console.log('valeur a envoyer', formData);
        Array.from(selectedPhotos).forEach((photo) => {
          formData.append("photo", photo);
        });
        formData.append("cv", selectedFile);
        formData.append("linkedIn", linkedIn);
        formData.append("domain", domain);
        formData.append("competences", competences);
        formData.append("description", description);
        formData.append("user", user);
  
  
        const request = await axios.post("/profile", formData);
        // Succès de l'envoi de l'API, effectuez les actions supplémentaires nécessaires ici
        dispatch(setProfile(request.data.id));
        navigate("/DashAccueil");
  
        // Réinitialiser les champs après l'envoi
        setSelectedPhotos(null);
        setSelectedFile(null);
        setName("");
        setDescription("");
      } catch (error) {
        // Gérer les erreurs de l'API ici
        console.error(error);
      }

    }

  };


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <img src={Logo} alt="" style={{height:'70px'}} />
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            PROFIL DU FREELANCE
          </Typography>
          <React.Fragment >
            <br />
            <Typography variant="h6" gutterBottom sx={{}}>
              CV & photos
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={5}>
                <Box sx={{ p: 5, border: '1px dashed grey', borderRadius: 1 }}>
                  <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                    <label htmlFor="upload-cv" style={{ marginLeft: -25 }}>
                      <input
                        style={{ display: "none" }}
                        id="upload-cv"
                        name="upload-cv"
                        type="file"
                        onChange={handleCVChange}
                      />

                      <Button
                        color="secondary"
                        variant="contained"
                        component="span"
                        startIcon={<CloudUploadIcon />}
                      >
                        Télécharger un CV
                      </Button>
                      {selectedFile && <p>Votre cv: {selectedFile.name}</p>}
                      {errorCV && <span style={{ color: "red" }}>{errorCV}</span>}
                    </label>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Box sx={{ p: 5, border: '1px dashed grey', borderRadius: 1 }}>
                  <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                    <Button
                      color="success"
                      component="label"
                      variant="contained"
                      startIcon={<CloudUploadIcon />}
                    >
                      Télécharger une photos
                      <VisuallyHiddenInput
                        type="file"
                        onChange={handlePhotoChanges}
                      />
                    </Button>
                    {errorphotos && <span style={{ color: "red" }}>{errorphotos}</span>}
                  </FormControl>
                </Box>
              </Grid>
              {/* <Grid><Divider/></Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  id="nom"
                  name="nom"
                  label="Nom de l’Entreprise"
                  fullWidth
                  autoComplete="entreprise"
                  variant="standard"
                  value={linkedInLink}
                  onChange={(e) => setName(e.target.value)}
                />
                {errornom && <span style={{ color: "red" }}>{errornom}</span>}
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 235 }}>
                  <InputLabel id="demo-simple-select-standard-label">Type d'organisation</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={selectedDomain}
                    onChange={handleDomainChange}
                    label="Type d'organisation"
                  >
                    <MenuItem value="">Sélectionnez un Domaine</MenuItem>
                    {domains.map((domain) => (
                      <MenuItem key={domain.id} value={domain}>
                        {domain.titled}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {errororganisation && <span style={{ color: "red" }}>{errororganisation}</span>}
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 235 }}>
                  <InputLabel id="demo-simple-select-standard-label">Type d'industrie</InputLabel>
                  <Select
                    label="Type d'industrie"
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    multiple
                    value={selectedCompetences}
                    onChange={handleCompetenceChange}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Sélectionnez une compétence"
                      />
                    }
                  >
                    <MenuItem value="">Sélectionnez une competence</MenuItem>
                    {competenceByDomaine.map((competence) => (
                      <MenuItem key={competence.id} value={competence.id}>
                        {competence.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {errorcompetence && <span style={{ color: "red" }}>{errorcompetence}</span>}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="standard-multiline-static"
                  label="Description"
                  fullWidth
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder='Faites connaître votre entreprise. Faites savoir au candidat qui vous êtes ...'
                  variant="standard"
                />
                {errorDescription && <span style={{ color: "red" }}>{errorDescription}</span>}

              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>

              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 3, ml: 1 }}
              >
                Suivant
              </Button>
            </Box>
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  )
}

export default Checkout