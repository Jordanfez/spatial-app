import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as Components from "./Components";
import Container from 'react-bootstrap/Container';
import Logo from '../images/logoPSI.png';


const defaultTheme = createTheme();


// const defaultTheme = createTheme();
const ForgetPassword = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
    });
  };

  return (
    <Components.Container  maxWidth="xs" className='m-auto mt-5'> 
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '860px'}}>
        <CssBaseline />
        <Grid component={Paper}
          item
          xs={false}
          sm={3}
          md={4}
          sx={{
            backgroundImage: 'url(https://media.istockphoto.com/id/1326046108/fr/photo/voyage-cosmique-dans-lespace.jpg?s=612x612&w=0&k=20&c=GVAzDjgECD9lYTpHb8QKVEKoS63La7PgVOL5bHODMM0=)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          >
          <Box sx={{
            height: '860px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
           }} /> 
        </Grid>
        <Grid item xs={12} sm={8} md={7} component={Paper}  square>
          
          <Box
            sx={{
              my: 1,
              mx: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            <img src={Logo} alt=""/>
            <Typography component="h1" variant="h5">
              Mot de passe oublié
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
             
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Maintenir la connexion"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Envoyer
              </Button>
              <Typography component="h1" variant="h5" className='text-center fs-6'>
                OU
              </Typography>
              <Container maxWidth="xs" className='d-flex justify-content-between mt-2 gap-3 sm-w-50'>
                  <Grid  className='d-flex justify-content-center border p-2 rounded' >
                   <Box
                      component="img"
                      sx={{
                        height: 25,
                        width: 25,
                      }}
                      src="https://get-picto.com/wp-content/uploads/2023/01/logo-facebook-icon.png"
                    />
                     <Typography component="h6" variant="h5" className='fw-lighter fs-4 ms-3'>
                     <a href="/#" class="text-decoration-none text-secondary">Facebook</a>
                     </Typography>
                  </Grid>
                  <Grid  className='d-flex justify-content-center border p-2 rounded' >
                   <Box
                      component="img"
                      sx={{
                        height: 25,
                        width: 25,
                      }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                    />
                     <Typography component="h6" variant="h5" className='fw-lighter fs-4 ms-3'>
                     <a href="/#" class="text-decoration-none text-secondary">Google</a>
                     </Typography>
                  </Grid>
                </Container>
                <Grid  className='d-flex align-items-center justify-content-center mt-3'>
                  <Typography  component="h6" variant="h6 body2" className='text-center fw-lighter fs-6'>
                  Vous n’avez pas de compte?
                  </Typography>
                  <Link href="#" variant="body2" className='text-center fw-lighter fs-6'>
                    Creer un Compte
                    </Link>
                </Grid>
                <Grid  className='d-flex align-items-center justify-content-center mt-3'>
                  <Typography  component="h6" variant="h6 body2" className='text-center fw-lighter fs-6'>
                    Vous en avez déjà un?
                  </Typography>
                  <Link href="#" variant="body2" className='text-center fw-lighter fs-6'>
                    Se Connecter
                    </Link>
                </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </Components.Container>
  );
}


export default ForgetPassword;