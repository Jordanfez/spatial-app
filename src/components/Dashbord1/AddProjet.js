
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setProjetId } from '../../features/projetsSlice';
import { fetchpaysFunction, fetchvillesFunction } from '../../services/GetFunction/GetEmployers/getEmployersFunctions.js';
import { fetchdomainsFunction } from '../../services/GetFunction/GetFreelance/getFreelanceFunctions.js';
import { postProjet } from '../../services/Post/PostEmployeurFunction/postEmployerFunction.js';
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import Sidebar from './Sidebar.js';

const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};
const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);

const AddProjets = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [alert, setAlert] = React.useState({ variant: "", message: "" });

    // Domaine

    /** recuperationdes domaine */
    const [domains, setDomains] = useState([]);
    const [selectedDomain, setSelectedDomain] = useState('');
    const domain = selectedDomain;
    console.log(selectedDomain);
    const handleSelectChange = (event) => {
        setSelectedDomain(event.target.value);
    };
    useEffect(() => {
        fetchDomains();
    }, []);

    const fetchDomains = async () => {
        try {
            const response = await fetchdomainsFunction();
            setDomains(response);
        } catch (error) {
            console.error(error);
        }
    };

    /** recuperation des pays*/
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const pays = selectedCountry;

    useEffect(() => {
        const fectData = async () => {
            try {
                const response = await fetchpaysFunction();
                setCountries(response);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, []);

    const handleCountryChange = event => {
        setSelectedCountry(event.target.value);
    };

    // Ville
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const ville = selectedCity;
    console.log('ville', ville);

    useEffect(() => {
        const fectData = async () => {
            try {
                const response = await fetchvillesFunction();
                setCities(response);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, []);

    const handleCityChange = event => {
        setSelectedCity(event.target.value);
    };


    // Utilisateur
    const user = useSelector((state) => state.userElement);
    const users = user;
    console.log('mon user', users);

    // Formulaire
    const [title, setTitle] = useState("");
    const [wording, setWording] = useState("");
    const [minAmount, setMinAmount] = useState("");
    const [maxAmount, setMaxAmount] = useState("");
    const [selectedDelay, setSelectedDelay] = useState(null);
    const [monnaie, setMonnaie] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);

    //erreur
    const [errorMessage, setErrorMessage] = useState('');
    const [errorWording, setErrorWording] = useState('');
    const [errorMinAmoun, setErrorMinAmoun] = useState('');
    const [errorMaxAmount, setErrorMaxAmount] = useState('');
    const [errorDelay, setErrorDelay] = useState('');
    const [errorMonnaie, setErrorMonnaie] = useState('');
    const [errorDate, setErrorDate] = useState('');
    const [errorDomain, setErrorDomain] = useState('');
    const [errorVille, setErrorVille] = useState('');
    const [errorPays, setErrorPays] = useState('');
    const [errorMessages, setErrorMessages] = useState('');
    const [errorDescriptiom, setErrorDescriptiom] = useState('');

    const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [showMessage, setShowMessage] = React.useState(false);
    const [textMessage, setTextMessage] = React.useState('')
    const [responseStatus, setResponseStatus] = React.useState(null);
    console.log(responseStatus);


    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleDateChanges = (date) => {
        setSelectedDelay(date);
    };

    //isloadin
    const isFormValid = wording !== '' && selectedCity !== '' && selectedCountry !== '' && title !== '' && selectedDomain !== '' && minAmount !== '' && maxAmount !== '' && monnaie !== '' && selectedDate !== null && selectedDelay !== null; //verification des champs vide ou pas

    const buttonText = isLoading ? 'Traitement...' : 'Ajouter';

    React.useEffect(() => {
        if (isLoading) {
            setIsButtonDisabled(true);

            const timer = setTimeout(() => {
                setIsButtonDisabled(false);
                setIsLoading(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    //variable
    const dateCreation = selectedDate
    const delay = selectedDelay
    let maxWords = 100;
    let wordCount = wording.trim().split(/\s+/).length;



    const handleSubmit = async (e) => {
        e.preventDefault();
        // Vérification des champs du formulaire
        // ...
        if (title === "") {
            setErrorMessage('Veuillez remplir ce champ.');
        } else if (wording === "") {
            setErrorWording('Veuillez remplir ce champ.');
        }
        else if (minAmount === "") {
            setErrorMinAmoun('Veuillez remplir ce champ.');
        }
        else if (maxAmount === "") {
            setErrorMaxAmount('Veuillez remplir ce champ.');
        }
        else if (delay === "") {
            setErrorDelay('Veuillez remplir ce champ.');
        }
        else if (monnaie === "") {
            setMonnaie('Veuillez remplir ce champ.');
        }
        else if (dateCreation === "") {
            setErrorDate('Veuillez remplir ce champ.');
        }
        else if (domain === "") {
            setErrorDomain('Veuillez remplir ce champ.');
        }
        else if (ville === "") {
            setErrorVille('Veuillez remplir ce champ.');
        }
        else if (pays === "") {
            setErrorPays('Veuillez remplir ce champ.');
        }
        else if (minAmount > maxAmount) {

            setErrorMessages('Le montant minimum doit être inférieur au montant maximum');

        } else if (wordCount > maxWords) {
            setErrorDescriptiom('Le nombre de mots doit être inférieur ou égal à 300.');
        } else {
            try {
                // Envoi de la requête à l'API
                const response = await postProjet({
                    title,
                    wording,
                    minAmount,
                    maxAmount,
                    delay,
                    monnaie,
                    dateCreation,
                    domain,
                    ville,
                    pays,
                    users,
                });

                console.log('est envoyer', response);
                // Gestion du succès
                setAlert({ variant: "success", message: "Félicitacion Votre projet a été créer avec sucess" });
                setShowMessage("sucess")
                setTimeout(() => {
                    navigate("/AddProjet");
                }, 2000);
                dispatch(setProjetId(response.id));
                console.log(response.id);
                // Réinitialisation du formulaire
                setTitle("");
                setWording("");
                setMinAmount("");
                setMaxAmount("");
                setSelectedDelay("");
                setMonnaie("");
                setSelectedDate("");
                setSelectedDomain("");
                setSelectedCity("");
                setSelectedCountry("");
            } catch (error) {
                // Gestion des erreurs
                console.error(error);
                setAlert({ variant: "error", message: error.message });
                setResponseStatus(error.message);
                setTextMessage(error.message);
            }
        }
    };
    return (
        <>
            <NavBar />

            <Box className='mt-5' sx={{ display: 'flex', flexDirection: 'column' }} style={{ width: '70%', marginLeft: '20%' }}>
                <Sidebar />
                <Box sx={{ p: 3 }}>
                    <div className='fs-3 text-center' style={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10%' }}>
                        {/* {showMessage === "sucess" ? (
                            <Alert variant="filled" severity="success" style={{ width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>La création de votre project à été éffectuer avec sucess !</Alert>
                        ) : responseStatus === "Request failed with status code 400" ? (
                            <Alert variant="filled" severity="warning" className="text-white">{textMessage}</Alert>
                        ) : responseStatus === "Request failed with status code 500" ? (
                            <Alert variant="filled" severity="warning" className="text-white">{textMessage}</Alert>
                        ) : responseStatus !== null ? (
                            <Alert variant="filled" severity="success">La création de votre project à été éffectuer avec sucess !</Alert>
                        ) : ''} */}
                        {alert.variant && (
                            <Alert variant="filled" severity={alert.variant} className="alert-message">
                                {alert.message}
                            </Alert>
                        )}
                    </div>
                    <Typography fontWeight="bold" noWrap className='fs-3 text-center'>
                        Ajouter Un Projtes
                    </Typography>
                </Box>
                <Grid className='mt-5 mt-sm-0'>
                    <Grid>
                        <Container className='mt-5'>
                            <div className="row ">
                                <div className="row justify-content-between">
                                    <div class="col-6">
                                        <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                                            <FormHelperText id="outlined-projet-helper-text">Nom du Projet</FormHelperText>
                                            <OutlinedInput
                                                id="outlined-adornment-projet"
                                                // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                                aria-describedby="outlined-projet-helper-text"
                                                inputProps={{
                                                    'aria-label': 'projet',
                                                }}
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                            {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
                                        </FormControl>
                                    </div>
                                    <div class="col-6">
                                        <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                                            <FormHelperText id="outlined-projet-helper-text">Domaine</FormHelperText>
                                            <InputLabel id="demo-select-small-label"></InputLabel>
                                            <Select value={selectedDomain} onChange={handleSelectChange}>
                                                <MenuItem value="">Sélectionnez un domaine</MenuItem>
                                                {domains.map((domain, index) => (
                                                    <MenuItem key={index} value={domain}>
                                                        {domain.titled}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            {errorDomain && <span style={{ color: "red" }}>{errorDomain}</span>}
                                        </FormControl>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='row'>
                                        <div className='col'>
                                            <Typography variant="h5" color="text.dark" fontWeight="semiBold" className='fs-5 mt-2 p-2'>
                                                Salaires
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                                            <FormHelperText id="outlined-projet-helper-text">Minimum</FormHelperText>
                                            <OutlinedInput
                                                id="outlined-adornment-projet"
                                                endAdornment={<InputAdornment position="end">XAF</InputAdornment>}
                                                aria-describedby="outlined-projet-helper-text"
                                                inputProps={{
                                                    'aria-label': 'projet',
                                                }}
                                                type='number'
                                                value={minAmount}
                                                onChange={(e) => setMinAmount(e.target.value)}
                                            />
                                            {errorMinAmoun && <span style={{ color: "red" }}>{errorMinAmoun}</span>}
                                            {errorMessages && <span style={{ color: "red" }}>{errorMessages}</span>}
                                        </FormControl>
                                    </div>
                                    <div className='col-4'>
                                        <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                                            <FormHelperText id="outlined-projet-helper-text">Maximum</FormHelperText>
                                            <OutlinedInput
                                                id="outlined-adornment-projet"
                                                endAdornment={<InputAdornment position="end">XAF</InputAdornment>}
                                                aria-describedby="outlined-projet-helper-text"
                                                inputProps={{
                                                    'aria-label': 'projet',
                                                }}
                                                type='number'
                                                value={maxAmount}
                                                onChange={(e) => setMaxAmount(e.target.value)}
                                            />
                                            {errorMaxAmount && <span style={{ color: "red" }}>{errorMaxAmount}</span>}
                                        </FormControl>

                                    </div>
                                    <div class="col-4">
                                        <FormControl fullWidth sx={{ m: 1 }}>
                                            <FormHelperText id="outlined-projet-helper-text">Devise</FormHelperText>
                                            <InputLabel id="demo-select-label"></InputLabel>
                                            <Select value={monnaie} onChange={(e) => setMonnaie(e.target.value)}>
                                                <MenuItem value="CFA">CFA</MenuItem>
                                                <MenuItem value="Euro">Euro</MenuItem>
                                                <MenuItem value="Dollar">Dollar</MenuItem>
                                            </Select>
                                            {errorMonnaie && <span style={{ color: "red" }}>{errorMonnaie}</span>}
                                        </FormControl>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='row'>
                                        <div className='col'>
                                            <Typography variant="h5" color="text.dark" fontWeight="semiBold" className='fs-5 mt-2 p-2'>
                                                Informations
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                                            <FormHelperText id="outlined-projet-helper-text">Date De creation</FormHelperText>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                                {errorDelay && <span style={{ color: "red" }}>{errorDelay}</span>}
                                            </LocalizationProvider>
                                        </FormControl>
                                    </div>
                                    <div className='col-6'>
                                        <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                                            <FormHelperText id="outlined-projet-helper-text">Date D’expiration</FormHelperText>
                                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                                <DatePicker
                                                    value={selectedDelay}
                                                    onChange={handleDateChanges}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                                {errorDate && <span style={{ color: "red" }}>{errorDate}</span>}
                                            </LocalizationProvider>
                                        </FormControl>
                                    </div>
                                </div>
                            </div>
                            <Container className='mt-5'>
                                < Box sx={{ backgroundColor: '#F9FAFB' }}>
                                    <Container className='p-3'>
                                        <div className='row'>
                                            <div className='row'>
                                                <div className='col'>
                                                    <Typography variant="h5" color="text.dark" fontWeight="semiBold" className='fs-5 mt-2 p-2 text-center'>
                                                        localisation
                                                    </Typography>
                                                </div>
                                                <Box className='pb-4'>
                                                    <div className='row'>
                                                        <div className="col-6">
                                                            <FormControl fullWidth sx={{ m: 1 }}>
                                                                <FormHelperText id="outlined-projet-helper-text">Pays</FormHelperText>
                                                                <Select value={selectedCountry} onChange={handleCountryChange}>
                                                                    <MenuItem value="">Sélectionnez un pays</MenuItem>
                                                                    {countries.map((country, index) => (
                                                                        <MenuItem key={index} value={country}>
                                                                            {country.name}
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                                {errorPays && <span style={{ color: "red" }}>{errorPays}</span>}
                                                            </FormControl>
                                                        </div>
                                                        <div className="col-6">
                                                            <FormControl fullWidth sx={{ m: 1 }}>
                                                                <FormHelperText id="outlined-projet-helper-text">Ville</FormHelperText>
                                                                <Select value={selectedCity} onChange={handleCityChange}>
                                                                    <MenuItem value="">Sélectionnez une ville</MenuItem>
                                                                    {cities.map((city, index) => (
                                                                        <MenuItem key={index} value={city}>
                                                                            {city.name}
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                                {errorVille && <span style={{ color: "red" }}>{errorVille}</span>}
                                                            </FormControl>
                                                        </div>
                                                    </div>

                                                </Box>
                                            </div>
                                        </div>
                                    </Container>
                                </Box>
                            </Container>
                            <div className='row mt-3'>
                                <div className='row'>
                                    <div className='col'>
                                        <Typography variant="h5" color="text.dark" fontWeight="semiBold" className='fs-5 mt-2 p-2'>
                                            Description
                                        </Typography>
                                    </div>
                                </div>

                                <div className='col-12'>
                                    <Textarea
                                        value={wording}
                                        onChange={(e) => setWording(e.target.value)}
                                        placeholder="Entrer une description de 200 mots..."
                                        required
                                        sx={{ mb: 1 }}
                                    />
                                    {errorWording && <span style={{ color: "red" }}>{errorWording}</span>}
                                    {errorDescriptiom && <span style={{ color: "red" }}>{errorDescriptiom}</span>}
                                </div>

                                <div className='mt-5'>
                                    <Button variant="contained" disabled={isButtonDisabled || !isFormValid} onClick={handleSubmit}>{buttonText}</Button>
                                </div>

                            </div>
                        </Container>
                    </Grid>
                </Grid>


            </Box>
            <Footer />
        </>
    )
}
export default AddProjets
