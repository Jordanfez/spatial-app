import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  createTheme,
  CssBaseline,
  Grid,
  IconButton, InputAdornment,
  Link,
  OutlinedInput,
  Paper,
  TextField,
  ThemeProvider,
  ToggleButtonGroup,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UseToggleFunction } from '../../components/component.function/userToggleFunction';
import Header from "../../components/Header";
import { loginUser } from "../../features/UserElement";
import { setUser } from "../../features/UserSlice";
import Logo from "../../img/logopsi1.png";
import { singUp } from '../../services/Post/singUpFunction';
import { fetchUserFunction } from '../../services/userFunction';
import * as Components from "./Components";

const defaultTheme = createTheme();

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [alignment, setAlignment] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [alertVariant, setAlertVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [userFunctionId, setUserFunctionId] = useState([]);
  const [isChecked, setIsChecked] = useState(null);
  let [functionID, setFuntionId] = React.useState(null)


  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePasswordVisibilityConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserFunction();
      setUserFunctionId(data);
    };
    fetchData();
  }, []);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setIsButtonDisabled(false);
  };

  let userDispach

  const handleClick = async (e) => {
    e.preventDefault();

    // Vérifier les champs
    const emailPattern = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Le mot de passe doit contenir au moins 8 caractères, une lettre minuscule, une lettre majuscule et un chiffre."
      );
      return;
    } else if (userName.trim() === "") {
      setUserNameError("Le nom est requis.");
      return;
    } else if (!emailPattern.test(email)) {
      setEmailError("Adresse e-mail invalide");
      return;
    } else if (email.trim() === "") {
      setEmailError(" L'Email est requis.");
      return;
    } else if (password.trim() === "") {
      setPasswordError("Le mot de passe est requis.");
      return;
    } else if (password !== confirmPassword) {
      setPasswordError("Les mots de passe ne correspondent pas.");
      return;
    } else if (!specialChars.test(password)) {
      setPasswordError("Le mot de passe doit contenir au moins un caractère spécial.");
      return;
    }

    setIsLoading(true);
    const datas = {
      userName,
      email,
      password,
      age,
      localisation,
      userFunction: {
        id: functionID === 1 ? 1 : 2
      }
    }

    try {
      const request = await singUp(datas);

      setShowSuccessMessage(true);
      setShowMessage("sucess")
      console.log('exactly', request);
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate(functionID === 1 ? "/Entreprises" : "/ProfilFreelance");
        userDispach = (functionID === 1 ? (loginUser(request.users)) : (setUser(request.users)));
        dispatch(userDispach);
      }, 3000);
      setAlertVariant("success");
      setAlertMessage("Votre compte a été créé avec succès");
      // setResponseStatus(request.data.status);
      ;

      console.log('le dispache est ', request.users);
      // dispatch(functionID === 1 ? dispatch(loginUser(request.data)) : dispatch(setUser(request.data)) );


    } catch (error) {
      console.log(error);
      setResponseStatus(error.response.status);
      setAlertVariant("danger");
      setAlertMessage("Erreur lors de la création du compte");
    }

    setIsLoading(false);
  };

  const buttonText = isLoading ? 'Traitement...' : 'Se Créer';
  const isFormValid = userName !== '' && email !== '' && password !== '';

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
                  backgroundImage: "url(https://media.istockphoto.com/id/1326046108/fr/photo/voyage-cosmique-dans-lespace.jpg?s=612x612&w=0&k=20&c=GVAzDjgECD9lYTpHb8QKVEKoS63La7PgVOL5bHODMM0=)",
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
              <Grid
                item
                xs={12}
                sm={8}
                md={7}
                component={Paper}
                className="d-flex justify-content-center align-items-center"
              >
                <form>
                  {showMessage === "sucess" ? (
                    <Alert variant="filled" severity="success">La création de votre compte a été éffectue avec succès !</Alert>
                  ) : responseStatus === 400 ? (
                    <Alert variant="filled" severity="warning" className="text-white">{alertMessage}</Alert>
                  ) : responseStatus === 500 ? (
                    <Alert variant="filled" severity="warning" className="text-white">{alertMessage}</Alert>
                  ) : (
                    <Alert variant="filled" severity={alertVariant}>{alertMessage}</Alert>
                  )}

                  <Box
                    sx={{
                      my: 0,
                      mx: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={Logo} style={{ height: '80px' }} alt="" />
                    <Typography component="h1" variant="h5" className="fw-bold mb-2">
                      Créer Un Compte
                    </Typography>

                    <ToggleButtonGroup
                      color="primary"
                      value={alignment}
                      exclusive
                      onChange={handleChange}
                      aria-label="Platform"
                    >
                      {userFunctionId.map((userFunction, index) => (
                        <UseToggleFunction
                          key={index}
                          color='primary'
                          isChecked={isChecked}
                          name={userFunction.name}
                          handleChangeFunction={() => { setAlignment(userFunction.name); setIsChecked(index); setFuntionId(userFunction.id); }}
                        />
                      ))}
                    </ToggleButtonGroup>

                    <Box component="form" noValidate sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Nom"
                        name="name"
                        autoComplete="Nom"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        autoFocus
                      />
                      {userNameError && <span style={{ color: "red" }}>{userNameError}</span>}
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {emailError && <span style={{ color: "red" }}>{emailError}</span>}
                      <div className="row">
                        <div className="col">
                          <TextField
                            margin="normal"
                            fullWidth
                            label="Ages"
                            name="Ages"
                            autoComplete="Ages"
                            autoFocus
                            sx={{
                              width: 244, marginLeft: 0,
                              backgroundColor: alignment !== 'Freelance' ? '#f1f1f1' : 'transparent',
                            }}
                            disabled={alignment !== 'Freelance'}
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                          />
                        </div>
                        <div className="col">
                          <TextField
                            margin="normal"
                            fullWidth
                            label="Localisation"
                            name="Localisation"
                            autoComplete="Localisation"
                            autoFocus
                            sx={{
                              width: 244, marginLeft: 0,
                              backgroundColor: alignment !== 'Freelance' ? '#f1f1f1' : 'transparent',
                            }}
                            disabled={alignment !== 'Freelance'}
                            value={localisation}
                            onChange={(e) => setLocalisation(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mot de passe"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                      /> */}
                      {/* <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Confirmer le mot de passe"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {passwordError && <span style={{ color: "red" }}>{passwordError}</span>} */}

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
                      {passwordError && <span style={{ color: "red" }}>{passwordError}</span>}

                      <OutlinedInput
                        sx={{ marginTop: 3 }}
                        id="outlined-adornment-password"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        placeholder="Confirmer le mot de passe*"
                        type={showPasswordConfirm ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleTogglePasswordVisibilityConfirm}
                              edge="end"
                            >
                              {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      {passwordError && <span style={{ color: "red" }}>{passwordError}</span>}

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={isButtonDisabled || !isFormValid}
                        onClick={handleClick}
                      >
                        {buttonText}
                      </Button>

                      <Grid className="d-flex align-items-center justify-content-center mt-1">
                        <Typography
                          component="h6"
                          variant="h6 body2"
                          className="text-center fw-lighter fs-6"
                        >
                          Vous n’avez pas de compte?
                        </Typography>
                        <Link
                          href="/login"
                          variant="body2"
                          className="text-center fw-lighter fs-6"
                        >
                          Créer un Compte
                        </Link>
                      </Grid>
                    </Box>
                  </Box>
                </form>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Components.Container>
      </div>
    </>
  );
};

export default Account;
