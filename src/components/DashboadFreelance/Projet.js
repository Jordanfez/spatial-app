import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
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
import { fetchpaysFunction, fetchvillesFunction } from '../../services/GetFunction/GetEmployers/getEmployersFunctions.js';
import { fetchdomainsFunction } from '../../services/GetFunction/GetFreelance/getFreelanceFunctions.js';
import { postProjet } from '../../services/Post/PostFreelanceFunction/postFreelanceFunction.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Stepper from './Stepper.js';

const Projet = () => {
  const [Domaine, setDomaine] = React.useState('');

  const handleChange = (event) => {
    setDomaine(event.target.value);
  };
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
    width: 320px;
    height: 20px;
    font-family: IBM Plex Sans, sans-serif;
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
  /** recuperation des pays*/
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    const fectData = async () => {
      try {
        const request = await fetchpaysFunction();
        setCountries(request.data);
        console.log(request.data);
      } catch (error) {
        console.log(error);
      }
    };
    fectData();
  }, []);

  const handleCountryChange = event => {
    setSelectedCountry(event.target.value);
  };


  // ville
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const fectData = async () => {
      try {
        const request = await fetchvillesFunction();
        setCities(request.data);
        console.log(request.data);
      } catch (error) {
        console.log(error);
      }
    };
    fectData();
  }, []);


  const handleCityChange = event => {
    setSelectedCity(event.target.value);
  };

  /** recuperationdes domaine */
  const [domains, setDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState('');

  useEffect(() => {
    fetchDomains();
  }, []);

  const fetchDomains = async () => {
    try {
      const response = await fetchdomainsFunction();
      setDomains(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedDomain(event.target.value);
  };


  /** ajouter un projet */

  const [title, setTitle] = useState("");
  const [wording, setWording] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [selectedDelay, setSelectedDelay] = useState(null);
  const [monnaie, setMonnaie] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const handleDateChanges = (date) => {
    setSelectedDelay(date);
  };

  const dateCreation = selectedDate

  const delay = selectedDelay

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postProjet({
        title,
        wording,
        minAmount,
        maxAmount,
        delay,
        monnaie,
        dateCreation,
        selectedDomain,
        selectedCity,
        selectedCountry,
      });

      if (response.status === 200) {
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
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />

      <Box className='mt-5' sx={{ display: 'flex', flexDirection: 'column' }}>
        <Stepper />
        <Box sx={{ p: 3 }}>
          <Typography fontWeight="bold" noWrap className='fs-3 text-center'>
            Ajouter Un Projtes
          </Typography>
        </Box>
        <Grid className='mt-5 mt-sm-0'>
          <Grid>
            <Container className='mt-5'>
              <div className="row ">
                <div className="row ">
                  <div className='col'>
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
                    </FormControl>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div class="col-6">
                    <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                      <FormHelperText id="outlined-projet-helper-text">Tag</FormHelperText>
                      <OutlinedInput
                        id="outlined-adornment-projet"
                        // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="outlined-projet-helper-text"
                        inputProps={{
                          'aria-label': 'projet',
                        }}
                        value={wording}
                        onChange={(e) => setWording(e.target.value)}
                      />
                    </FormControl>
                  </div>
                  <div class="col-4">
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <FormHelperText id="outlined-projet-helper-text">Domaine</FormHelperText>
                      <InputLabel id="demo-select-small-label"></InputLabel>
                      <Select value={selectedDomain} onChange={handleSelectChange}>
                        <MenuItem value="">Sélectionnez un domaine</MenuItem>
                        {domains.map((domain) => (
                          <MenuItem key={domain.id} value={domain.id}>
                            {domain.titled}
                          </MenuItem>
                        ))}
                      </Select>
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
                        value={minAmount}
                        onChange={(e) => setMinAmount(e.target.value)}
                      />
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
                        value={maxAmount}
                        onChange={(e) => setMaxAmount(e.target.value)}
                      />
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
                  <div className='col-4'>
                    <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                      <FormHelperText id="outlined-projet-helper-text">Date De creation</FormHelperText>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={selectedDate}
                          onChange={handleDateChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </FormControl>
                  </div>
                  <div className='col-4'>
                    <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                      <FormHelperText id="outlined-projet-helper-text">Date D’expiration</FormHelperText>
                      <LocalizationProvider dateAdapter={AdapterDayjs}  >
                        <DatePicker
                          value={selectedDelay}
                          onChange={handleDateChanges}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </FormControl>
                  </div>
                  <div class="col-4">
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <FormHelperText id="outlined-projet-helper-text">Modules</FormHelperText>
                      <InputLabel id="demo-select-label"></InputLabel>
                      <Select
                        labelId="demo-select-label"
                        id="demo-select-small"
                        value={Domaine}
                        // label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                      </Select>
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
                                  <MenuItem value="">Select a country</MenuItem>
                                  {countries.map(country => (
                                    <MenuItem key={country.id} value={country.id}>
                                      {country.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </div>
                            <div className="col-6">
                              <FormControl fullWidth sx={{ m: 1 }}>
                                <FormHelperText id="outlined-projet-helper-text">Ville</FormHelperText>
                                <InputLabel id="demo-select-label"></InputLabel>
                                <Select value={selectedCity} onChange={handleCityChange}>
                                  <MenuItem value="">Select a city</MenuItem>
                                  {cities.map(city => (
                                    <MenuItem key={city.id} value={city.id}>
                                      {city.name}
                                    </MenuItem>
                                  ))}
                                </Select>
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
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                  // defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  //   ut labore et dolore magna aliqua."
                  />
                </div>
                <div className='mt-5'>
                  <Button variant="contained" onClick={handleSubmit}>Ajouter</Button>
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

export default Projet