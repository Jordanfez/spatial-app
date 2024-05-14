import AddLinkIcon from '@mui/icons-material/AddLink';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

import DoneAllIcon from '@mui/icons-material/DoneAll';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../../img/logopsi1-0.png';


import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  setfacebookLink,
  setLieninstagramLink,
  setLienlinkedLink,
  setLientwitterLink
} from '../../features/entrepriseSlice';


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

function Reseaux() {

  // navigation
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**stepper index */
  const [activeStep, setActiveStep] = React.useState(2);

  /** return to */
  const handleBack = () => {
    navigate("/Informations");
  };

  const [facebook, setFacebook] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [linkedLink, setLinkedLink] = useState('');

  console.log(facebook);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Envoyer la valeur au store
    dispatch(setfacebookLink(facebook));
    dispatch(setLieninstagramLink(instagramLink));
    dispatch(setLienlinkedLink(twitterLink));
    dispatch(setLientwitterLink(linkedLink));

    navigate('/Contact');
  };

  const isFormValid = facebook !== '' && instagramLink !== '' && twitterLink !== '' && linkedLink !== ''; //verification des champs vide ou pas

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
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <TextField
                    id="input-with-icon-textfield"
                    label="Lien Facebook"
                    placeholder='https://facebook.com/'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" >
                          <AddLinkIcon sx={{ color: 'primary' }} />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    fullWidth
                    value={facebook}
                    onChange={(event) => setFacebook(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-multiline-static"
                    label="Lien Instagram"
                    fullWidth
                    placeholder='https://instagram.com/'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" >
                          <AddLinkIcon sx={{ color: 'primary' }} />
                        </InputAdornment>
                      ),
                    }}
                    value={instagramLink}
                    onChange={(event) => setInstagramLink(event.target.value)}
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-multiline-static"
                    label="Lien twitter"
                    fullWidth
                    placeholder='https://twitter.com/'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" >
                          <AddLinkIcon sx={{ color: 'primary' }} />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    value={twitterLink}
                    onChange={(event) => setTwitterLink(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-multiline-static"
                    label="Lien linkedLink"
                    fullWidth
                    placeholder="EX: https://linkedLink.com/"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" >
                          <AddLinkIcon sx={{ color: 'primary' }} />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    value={linkedLink}
                    onChange={(event) => setLinkedLink(event.target.value)}
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

export default Reseaux