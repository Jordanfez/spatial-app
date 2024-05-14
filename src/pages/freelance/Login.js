import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import Logo from "../../img/logopsi1-0.png";
import * as Components from "./Components";
//import { useLoginMutation } from "../../services/appApi";
//import { Alert } from 'react-bootstrap';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import { setAdminSlice } from '../../features/AdminSlice';
import { loginUser } from '../../features/UserElement';
import { setUser } from '../../features/UserSlice';
import { login } from "../../services/authService";

const defaultTheme = createTheme();

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [alert, setAlert] = React.useState({ variant: "", message: "" });
  const [isLoading, setIsLoading] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await login(email, password);
      const userData = response.data.users;
      const userRole = response.data.users.role
      console.log('log', response);
      if (userData) {
        const userId = userData.userFunction?.id;
        if (userId === 1) {
          setAlert({ variant: "success", message: "Félicitacion Votre connexion a été établie" });
          dispatch(loginUser(userData));
          // navigate("/DashProfil");
          setTimeout(() => {
            navigate("/DashProfil");
          }, 5000);
        } else if (userId === 2) {
          setAlert({ variant: "success", message: "Félicitacion Votre connexion a été établie" });
          dispatch(setUser(userData));
          setTimeout(() => {
            navigate("/");
          }, 5000);
        } else if (userRole === "SUPER_ADMIN") {
          setAlert({ variant: "success", message: "Félicitacion Votre connexion a été établie" });
          dispatch(setAdminSlice(response.data.users.id));
          // navigate("/DashProfil");
          setTimeout(() => {
            navigate("/produitAdmin");
          }, 5000);

          console.log('admin');
        }
      } else {
        setAlert({ variant: "warning", message: "Problème de connexion. Veuillez réessayer." });
      }

    } catch (error) {
      console.error('les erreur', error.message);
      console.log(error.response?.data.Message)
      setAlert({ variant: "error", message: error.response?.data.Message.fr });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>

      <Header />

      <div style={{ width: "auto", padding: '5%' }}>
        <Components.Container maxWidth="xs" className="m-auto">
          <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: "860px" }}>
              <CssBaseline />
              <Grid
                component={Paper}
                item
                xs={false}
                sm={4}
                md={5}
                sx={{
                  backgroundImage:
                    "url(https://media.istockphoto.com/id/1326046108/fr/photo/voyage-cosmique-dans-lespace.jpg?s=612x612&w=0&k=20&c=GVAzDjgECD9lYTpHb8QKVEKoS63La7PgVOL5bHODMM0=)",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: (t) =>
                    t.palette.mode === "light"
                      ? t.palette.grey[50]
                      : t.palette.grey[900],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Box
                  sx={{
                    height: "860px",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={8} md={7} component={Paper} square>
                <Box
                  sx={{
                    my: 1,
                    mx: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  {alert.variant && (
                    <Alert variant="filled" severity={alert.variant} className="alert-message">
                      {alert.message}
                    </Alert>
                  )}

                  <div className="container" style={{ marginTop: '5%' }}>
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <Typography component="h1" variant="h4">
                          Connexion
                        </Typography>

                      </div>
                      <div className="col-md-6 col-sm-12  text-center">
                        <img className="float-end" src={Logo} style={{ height: '68px' }} alt="" />
                      </div>
                    </div>

                  </div>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      value={email}
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
                      autoFocus
                    />
                    {/* <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Mot de passe"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                    /> */}

                    <OutlinedInput
                      sx={{ marginTop: 3 }}
                      id="outlined-adornment-password"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      placeholder="Entrer le mot de passe*"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
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
                      disabled={isLoading || !(email && password)}
                    >
                      {isLoading ? 'Traitement...' : 'Se Connecter'}
                    </Button>
                    {/* <Typography
                  component="h1"
                  variant="h5"
                  className="text-center fs-6"
                >
                  OU
                </Typography> */}
                    {/* <Container
                  maxWidth="xs"
                  className="d-flex justify-content-between mt-2 gap-3 sm-w-50"
                >
                  <Grid className="d-flex justify-content-center border p-2 rounded">
                    <Box
                      component="img"
                      sx={{
                        height: 25,
                        width: 25,
                      }}
                      src="https://get-picto.com/wp-content/uploads/2023/01/logo-facebook-icon.png"
                    />
                    <Typography
                      component="h6"
                      variant="h5"
                      className="fw-lighter fs-4 ms-3"
                    >
                      <a href="/#" class="text-decoration-none text-secondary">
                        Facebook
                      </a>
                    </Typography>
                  </Grid>
                  <Grid className="d-flex justify-content-center border p-2 rounded">
                    <Box
                      component="img"
                      sx={{
                        height: 25,
                        width: 25,
                      }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                    />
                    <Typography
                      component="h6"
                      variant="h5"
                      className="fw-lighter fs-4 ms-3"
                    >
                      <a href="/#" class="text-decoration-none text-secondary">
                        Google
                      </a>
                    </Typography>
                  </Grid>
                </Container> */}
                    <Grid className="d-flex align-items-center justify-content-center mt-3">
                      <Typography
                        component="h6"
                        variant="h6 body2"
                        className="text-center fw-lighter fs-6"
                      >
                        Vous n’avez pas de compte?
                      </Typography>
                      <Link
                        href="/account"
                        variant="body2"
                        className="text-center fw-lighter fs-6"
                      >
                        Creer un Compte
                      </Link>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Components.Container>
      </div>

    </>
  );
};

export default Login;