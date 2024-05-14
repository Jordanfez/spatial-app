import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocationOn from "@mui/icons-material/LocationOn";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import Autocomplete from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { grey, red } from "@mui/material/colors";
import { format } from 'date-fns';
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from "../axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { setProjetId } from '../features/projetsSlice';


const AllProjet = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Domaine, setDomaine] = React.useState("");

  const handleChange = (event) => {
    setDomaine(event.target.value);
  };

  /**recuperation des projets */
  const [projects, setProjects] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  let val;

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/projects");
        setProjects(response.data);
        console.log(response.data);
        val = response.data[2].pays.name;
        console.log(val);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  /** ffitered */
  const handleSearchTermChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    generateSuggestions(term);
    searchProjects(term);
  };

  const generateSuggestions = (value) => {
    if (typeof value !== "string") {
      return;
    }

    const filteredProjects = projects.filter(
      (project) =>
        project.title &&
        project.title.toLowerCase().includes(value.toLowerCase())
    );
    const suggestions = filteredProjects.map((project) => project.title);
    setSuggestions(suggestions);
  };

  const searchProjects = (term) => {
    if (typeof term !== "string") {
      return;
    }
    const filteredProjects = projects.filter((project) =>
      project.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredProjects);
  };

  // const [filteredProjects, setFilteredProjects] = useState(projects);
  // console.log(filteredProjects);

  /** recuperation des pays*/
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    axios
      .get("/pays")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  // ville
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    axios
      .get("/villes")
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  /** recuperationdes domaine */
  const [domains, setDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState("");

  useEffect(() => {
    fetchDomains();
  }, []);

  const fetchDomains = async () => {
    try {
      const response = await axios.get("/domains");
      setDomains(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  const handleVoirClick = () => {
    navigate('/DetailProjet');
  };

  function formatDate(date) {
    return format(new Date(date), 'dd-MM-yyyy')
  }

  return (
    <>
      <Header />
      {/* section header */}
      <Grid
        fluid
        component="main"
        style={{
          backgroundImage:
            "url(https://www.rheagroup.com/wp-content/uploads/2021/05/rhea-group-space-banner-768x425.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          flexDirection: "start",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            // height: '770px',
            backgroundColor: "#30509dbf",
            padding: {
              xs: "10px",
              sm: "50px",
              md: "200px",
            },
            margin: "auto",
          }}
        >
          <Grid className="mt-5 mt-sm-0">
            <Grid className="my-5 my-sm-0">
              <Box>
                <Typography className="text-white mb-2 fs-1 fw-normal fs-sm-5">
                  Dernières nouvelles des projets
                </Typography>
                <Typography className="text-white mb-5">
                  Consultez les derniers communiqués de projet et les nouvelles
                  liee a ses derniers
                </Typography>
                <Typography
                  className="text-white mb-5"
                  style={{ marginTop: "12" }}
                >
                  Freelance > Projets
                </Typography>
                <Box>
                  {/* <Typography className='mb-5 text-white lh-sm text-wrap' paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
                    purus sodales, pulvinar purus dsld;woefjnwamsacda;ellqwfnmwa
                  </Typography> */}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container fluid className="my-5 pb-5">
        <Container>
          <Container>
            <Container className="px-5">
              <Box>
                <Container className="px-5">
                  <Box className="px-5">
                    <Container className="px-5">
                      <div className="row px-5">
                        <Box className="pb-4">
                          <div className="row">
                            <div className="col-4">
                              {/* <input
                              type="text"
                              value={searchTerm}
                              onChange={handleSearchTermChange}
                              placeholder="Search projects..."
                            /> */}
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={suggestions}
                                sx={{ width: 500 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    value={searchTerm}
                                    onChange={handleSearchTermChange}
                                    label="Search projects..."
                                  />
                                )}
                              />
                              {searchResults.length === 0 &&
                                searchTerm !== "" && <p>No projects found.</p>}
                              {/* <FormControl fullWidth sx={{ m: 1 }}>
                                <FormHelperText id="outlined-projet-helper-text">
                                  Pays
                                </FormHelperText>
                                <InputLabel id="demo-select-label"></InputLabel>
                                <Select
                                  value={selectedCountry}
                                  onChange={handleCountryChange}
                                >
                                  <MenuItem value="">Select a country</MenuItem>
                                  {countries.map((country) => (
                                    <MenuItem
                                      key={country.id}
                                      value={country.name}
                                    >
                                      {country.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl> */}
                            </div>
                            {/* <div className="col-4">
                              <FormControl fullWidth sx={{ m: 1 }}>
                                <FormHelperText id="outlined-projet-helper-text">
                                  Ville
                                </FormHelperText>
                                <InputLabel id="demo-select-label"></InputLabel>
                                <Select
                                  value={selectedCity}
                                  onChange={handleCityChange}
                                >
                                  <MenuItem value="">Select a city</MenuItem>
                                  {cities.map((city) => (
                                    <MenuItem key={city.id} value={city.name}>
                                      {city.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </div>
                            <div className="col-4">
                              <FormControl fullWidth sx={{ m: 1 }}>
                                <FormHelperText id="outlined-projet-helper-text">
                                  Domaine
                                </FormHelperText>
                                <InputLabel id="demo-select-label"></InputLabel>
                                <Select
                                  value={selectedDomain}
                                  onChange={handleSelectChange}
                                >
                                  <MenuItem value="">
                                    Sélectionnez un domaine
                                  </MenuItem>
                                  {domains.map((domain) => (
                                    <MenuItem key={domain.id} value={domain.titled}>
                                      {domain.titled}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </div> */}
                          </div>
                        </Box>
                      </div>
                    </Container>
                  </Box>
                </Container>
              </Box>

              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  {/* {filteredProjects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                      <Card className="shadow rounded">
                        <CardActions disableSpacing>
                          <IconButton aria-label="calender">
                            <CalendarMonthRoundedIcon />
                          </IconButton>
                          <Typography>{project.dateCreation}</Typography>
                        </CardActions>
                        <CardContent>
                          <Typography
                            variant="h5"
                            className="text-primary mb-2 fs-4 fw-normal text-center"
                          >
                            {project.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {project.wording}
                          </Typography>
                        </CardContent>
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ bgcolor: red[500] }}
                              aria-label="recipe"
                            >
                              R
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <RemoveRedEyeRoundedIcon />
                            </IconButton>
                          }
                          title={
                            <Typography
                              variant="h5"
                              className="text-dark  fs-5 fw-bold text-start"
                            >
                              Roland Herves
                            </Typography>
                          }
                          subheader={
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              className="text-start"
                            >
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                <LocationOn sx={{ color: grey[500] }} />{" "}
                                
                              </Typography>
                              ITC {val}
                            </Typography>
                          }
                        />
                      </Card>
                    </Grid>
                     ))} */}
                  {/* {searchResults.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                      <Card className="shadow rounded">
                        <CardActions disableSpacing>
                          <IconButton aria-label="calendar">
                            <CalendarMonthRoundedIcon />
                          </IconButton>
                          <Typography>{project.dateCreation}</Typography>
                        </CardActions>
                        <CardContent>
                          <Typography
                            variant="h5"
                            className="text-primary mb-2 fs-4 fw-normal text-center"
                          >
                            {project.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {project.wording}
                          </Typography>
                        </CardContent>
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ bgcolor: red[500] }}
                              aria-label="recipe"
                            >
                              R
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <RemoveRedEyeRoundedIcon />
                            </IconButton>
                          }
                          title={
                            <Typography
                              variant="h5"
                              className="text-dark  fs-5 fw-bold text-start"
                            >
                              Roland Herves
                            </Typography>
                          }
                          subheader={
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              className="text-start"
                            >
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                <LocationOn sx={{ color: grey[500] }} />{" "}
                                {project.location}
                              </Typography>
                              ITC {project.val}
                            </Typography>
                          }
                        />
                      </Card>
                    </Grid>
                  ))} */}
                  {searchTerm === '' ? (
                    // Afficher les valeurs lorsque la recherche n'a pas été lancée
                    projects.map((project) => (
                      <Grid item xs={12} sm={6} md={4} key={project.id}>
                      <Card className="shadow rounded">
                        <CardActions disableSpacing>
                          <IconButton aria-label="calendar">
                            <CalendarMonthRoundedIcon />
                          </IconButton>
                          <Typography>{formatDate(project.dateCreation)}</Typography>
                        </CardActions>
                        <CardContent>
                          <Typography
                            variant="h5"
                            className="text-primary mb-2 fs-4 fw-normal text-center"
                          >
                            {project.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {project.wording}
                          </Typography>
                        </CardContent>
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ bgcolor: red[500] }}
                              aria-label="recipe"
                            >
                              {project.users.userName.charAt(0)}
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <RemoveRedEyeRoundedIcon onClick={() => handleVoirClick(dispatch(setProjetId(project.id)) )}/>
                            </IconButton>
                          }
                          title={
                            <Typography
                              variant="h5"
                              className="text-dark  fs-5 fw-bold text-start"
                            >
                             {project.users.userName}
                            </Typography>
                          }
                          subheader={
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              className="text-start"
                            >
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                <LocationOn sx={{ color: grey[500] }} />{" "}
                                {project.ville?.pays.name}-{project.ville?.name}
                              </Typography>
                            </Typography>
                          }
                        />
                      </Card>
                      </Grid>
                    ))
                  ) : (
                    // Afficher les searchResults lorsque la recherche est lancée
                    searchResults.map((project) => (
                      <Grid item xs={12} sm={6} md={4} key={project.id}>
                      <Card className="shadow rounded">
                        <CardActions disableSpacing>
                          <IconButton aria-label="calendar">
                            <CalendarMonthRoundedIcon />
                          </IconButton>
                          <Typography>{project.dateCreation}</Typography>
                        </CardActions>
                        <CardContent>
                          <Typography
                            variant="h5"
                            className="text-primary mb-2 fs-4 fw-normal text-center"
                          >
                            {project.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {project.wording}
                          </Typography>
                        </CardContent>
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ bgcolor: red[500] }}
                              aria-label="recipe"
                            >
                              R
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <RemoveRedEyeRoundedIcon />
                            </IconButton>
                          }
                          title={
                            <Typography
                              variant="h5"
                              className="text-dark  fs-5 fw-bold text-start"
                            >
                              Roland Herves
                            </Typography>
                          }
                          subheader={
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              className="text-start"
                            >
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                <LocationOn sx={{ color: grey[500] }} />{" "}
                                {project.location}
                              </Typography>
                              ITC {project.val}
                            </Typography>
                          }
                        />
                      </Card>
                      </Grid>
                    ))
                  )}
                </Grid>
              </Box>
            </Container>
          </Container>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default AllProjet;
