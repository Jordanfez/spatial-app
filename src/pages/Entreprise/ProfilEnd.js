import DoneAllIcon from '@mui/icons-material/DoneAll';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
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
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../img/logopsi1-0.png';


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

function Contact() {
    const [activeStep, setActiveStep] = React.useState(4);
    const navigate = useNavigate();

    const handleDash = () => {
        navigate('/DashProfil');
    };

    const handleFree = () => {
        navigate('/AddProjet');
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
                    {activeStep === 4 ? (
                        <React.Fragment >
                            <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Avatar sx={{ width: 80, height: 80 }}>
                                    <DoneAllIcon />
                                </Avatar>
                            </Stack>
                            <Typography variant="h5" gutterBottom align='center' sx={{ mt: 5 }}>
                                Félicitation profil crée  avec succès
                            </Typography>
                            <Typography variant="subtitle1" align='center'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id purus sodales, pulvinar purus
                            </Typography>
                            <Stack spacing={2} direction="row" sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                <Button variant="contained" onClick={handleDash}>Dashbord</Button>
                                <Button variant="outlined" onClick={handleFree} >Poster</Button>
                            </Stack>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography component="h1" variant="h4" align="center">
                                No components
                            </Typography>
                        </React.Fragment>
                    )}
                </Paper>
                <Copyright />
            </Container>
        </React.Fragment>
    )
}

export default Contact