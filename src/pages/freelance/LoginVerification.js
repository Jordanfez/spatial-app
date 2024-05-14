import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }



const defaultTheme = createTheme();
const LoginVerification = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '860px'}}>
        <CssBaseline />
        <Grid component={Paper}
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/photos-gratuite/portrait-beau-jeune-homme-affaires-noir-africain-travaillant-ordinateur-portable-au-bureau_231208-680.jpg?w=1380&t=st=1696980256~exp=1696980856~hmac=8d782e9a7ac93aad86bbf995ceb44ae02d2edb83ba5ee9ff3ac1cd4792e7fdcd)',
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
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Connexion
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
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
                Se Connecter
              </Button>
              <Typography component="h1" variant="h5" className='text-center fs-4 fw-bold'>
                OU
              </Typography>
              <Grid container>
                <Grid item xs className='d-flex'>
                   <Box
                      component="img"
                      sx={{
                        height: 25,
                        width: 25,
                      }}
                      src="https://get-picto.com/wp-content/uploads/2023/01/logo-facebook-icon.png"
                    />
                    <Typography component="h6" variant="h5" className='fw-lighter fs-4 ms-2 sm-fs-6'>
                     <a href="/#" class="text-decoration-none text-secondary">Facebook</a>
                    </Typography>
                </Grid>
                <Grid item className='d-flex'>
                 <Box
                      component="img"
                      sx={{
                        height: 25,
                        width: 25,
                      }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                  />
                  <Typography component="h6" variant="h5" className='fw-lighter fs-4 ms-2 sm-fs-6'>
                    <a href="/#" class="text-decoration-none text-secondary">Google</a>
                  </Typography>
                </Grid>
              </Grid>
              <Grid  className='d-flex align-items-center justify-content-center mt-3'>
                  <Typography  component="h6" variant="h6 body2" className='text-center fw-lighter fs-6'>
                  Vous n’avez pas de compte?
                  </Typography>
                  <Link href="#" variant="body2" className='text-center fw-lighter fs-6'>
                    Creer un Compte
                    </Link>
                </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


export default LoginVerification;