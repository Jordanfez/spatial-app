import AddLinkIcon from '@mui/icons-material/AddLink';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useEffect, useState } from 'react';
import Logo from '../../img/logopsi1-0.png';


import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  setCreationDate,
  setDescription,
  setIndustrie,
  setOrganisation,
  setSite,
  setTeamLength,
} from "../../features/entrepriseSlice";

import axios from "../../axios";

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

function Informations() {

  const navigate = useNavigate();

  /**stepper index */
  const [activeStep, setActiveStep] = React.useState(1);

  /** return to */
  const handleBack = () => {
    navigate("/Entreprises");
  };


  /** zone de texte */
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  // function data picker
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const dispatch = useDispatch();

  /**recuperation des organition */
  const [typesOrganisation, setTypesOrganisation] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    fetchTypesOrganisation();
  }, []);

  const fetchTypesOrganisation = async () => {
    try {
      const response = await axios.get("/typesOrganisation");
      setTypesOrganisation(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedType(event.target.value);
  };
  /**fin organisation */

  /** recuperation des type d'industrie */

  const [typesIndustry, setTypesIndustry] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState("");
  console.log(typesIndustry);

  useEffect(() => {
    fetchTypesIndustry();
  }, []);

  const fetchTypesIndustry = async () => {
    try {
      const response = await axios.get("/typesIndustry");
      setTypesIndustry(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectChanges = (event) => {
    setSelectedTypes(event.target.value);
  };

  /** fin */

  const [name, setName] = useState("");
  const [taille, setTailles] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  /** envoi de donne au store */

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Envoyer les valeurs au store
    dispatch(setOrganisation(selectedType));
    dispatch(setIndustrie(selectedTypes));
    dispatch(setTeamLength(taille));
    dispatch(setSite(name));
    dispatch(setCreationDate(selectedDate));
    dispatch(setDescription(content));

    navigate("/Reseaux");
  };

  const isFormValid = selectedType !== '' && selectedTypes !== '' && taille !== '' && name !== '' && content !== '' && selectedDate !== null; //verification des champs vide ou pas


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
          <img src={Logo} style={{height:'70px'}} alt="" />
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Profil de l'entreprise
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>

            <Step key={1}>
              <StepLabel>entreprise</StepLabel>
            </Step>
            <Step key={2}>
              <StepLabel>Informations Générales</StepLabel>
            </Step>

            <Step key={3}>
              <StepLabel>Réseaux Sociaux</StepLabel>
            </Step>

            <Step key={4}>
              <StepLabel>Contact</StepLabel>
            </Step>

          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment >
              <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar sx={{ width: 80, height: 80 }}>
                  <DoneAllIcon />
                </Avatar>
              </Stack>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 235 }}>
                    <InputLabel id="demo-simple-select-standard-label">Type d'organisation</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={selectedType}
                      onChange={handleSelectChange}
                      label="Type d'organisation"
                    >
                      <MenuItem value="">
                        Sélectionnez un type d'organisation
                      </MenuItem>
                      {typesOrganisation.map((type) => (
                        <MenuItem key={type.id} value={type.id}>
                          {type.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 235 }}>
                    <InputLabel id="demo-simple-select-standard-label">Type d'industrie</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={selectedTypes} onChange={handleSelectChanges}
                      label="Type d'industrie"
                    >
                      <MenuItem value="">
                        Sélectionnez un type d'industrie
                      </MenuItem>
                      {typesIndustry.map((types) => (
                        <MenuItem key={types.id} value={types.id}>
                          {types.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 235 }}>
                    <InputLabel id="demo-simple-select-standard-label">Taille des équipes</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={taille}
                      onChange={(event) => setTailles(event.target.value)} label="Taille des équipes"
                    >
                      <MenuItem value="">
                        Sélectionnez la taille de votre entreprise
                      </MenuItem>
                      <MenuItem value="50">50</MenuItem>
                      <MenuItem value="100">100</MenuItem>
                      <MenuItem value="150">150</MenuItem>
                      <MenuItem value="200">200</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Site web"
                      placeholder='Entrer une date de creation'
                      value={selectedDate}
                      onChange={handleDateChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>

                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="input-with-icon-textfield"
                    label="Site web"
                    placeholder='https://name.com/'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" >
                          <AddLinkIcon sx={{ color: 'primary' }} />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    onChange={handleNameChange}
                    value={name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-multiline-static"
                    label="Vision de Lentreprise"
                    fullWidth
                    multiline
                    rows={4}
                    placeholder='Dites-nous quelle est la vision de votre entreprise...'
                    variant="standard"
                    value={content}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Précédent
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleFormSubmit}
                  sx={{ mt: 3, ml: 1 }}
                  disabled={!isFormValid}
                >
                  Suivant
                </Button>
              </Box>

            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>

  )
}

export default Informations