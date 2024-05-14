import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ProgressBar } from "react-bootstrap";
import * as Componentprofil from "./Compomentprofil";
import "./profil.css";
import { useNavigate } from "react-router-dom";
//import DatePicker from "react-datepicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import {
  setOrganisation,
  setIndustrie,
  setCreationDate,
  setTeamLength,
  setSite,
  setDescription,
} from "../../features/entrepriseSlice";
import axios from "../../axios";

const ProfilEntreprise = () => {
  const navigate = useNavigate();
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

  /** progress bar  */
  const progress = 30;

  /** zone de texte */
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  // function data picker
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
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

    navigate("/profil/reseau-sociaux");
  };

  /** fin */

  //navigate return to
  const handleReturn = (event) => {
    event.preventDefault();

    if (name === "" || name !== "") {
      navigate("/profil");
    }
  };

  return (
    <Componentprofil.Employeur11>
      {/** progress bar */}
      <div style={{ width: "25%", marginLeft: "67%" }}>
        <label style={{ opacity: "40%" }}>setup progress</label>
        <label style={{ color: "blue", marginLeft: "50%" }}>30% Complet</label>
        <ProgressBar>
          <ProgressBar now={progress} style={{ backgroundColor: "blue" }} />
          <ProgressBar
            now={100 - progress}
            style={{ backgroundColor: "lightgray" }}
          />
        </ProgressBar>
      </div>
      <Componentprofil.Frame82>
        <Componentprofil.FirstCheckBox>
          <Componentprofil.BxUserCircle1></Componentprofil.BxUserCircle1>
          <Componentprofil.Fondation>{`Entreprise`}</Componentprofil.Fondation>
        </Componentprofil.FirstCheckBox>
        <Componentprofil.FirstCheckBox1>
          <Componentprofil.BxUserCircle1></Componentprofil.BxUserCircle1>
          {`informations générales`}
        </Componentprofil.FirstCheckBox1>
        <Componentprofil.FirstCheckBox2>
          <Componentprofil.BxGlobe1></Componentprofil.BxGlobe1>
          <Componentprofil.RéseauxSociaux>
            {`Réseaux Sociaux`}
          </Componentprofil.RéseauxSociaux>
        </Componentprofil.FirstCheckBox2>
        <Componentprofil.FirstCheckBox3>
          <Componentprofil.BxAt1></Componentprofil.BxAt1>
          <Componentprofil.Contact>{`Contact`}</Componentprofil.Contact>
        </Componentprofil.FirstCheckBox3>
      </Componentprofil.Frame82>
      <Componentprofil.LogoBannière>
        {/** onglet numero 2 */}
        <div className="content content-2">
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col">
                <FormControl fullWidth sx={{ width: 300 }}>
                  <FormHelperText id="outlined-projet-helper-text"  style={{ opacity: "80vh", fontSize: "20px" }}>
                    Type d’Organisation
                  </FormHelperText>
                  <InputLabel id="demo-select-label"></InputLabel>
                  <Select value={selectedType} onChange={handleSelectChange}>
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
              </div>
              <div className="col">
                <FormControl fullWidth sx={{ width: 300 }}>
                  <FormHelperText id="outlined-projet-helper-text"  style={{ opacity: "80vh", fontSize: "20px" }}>
                    Type d’Industrie
                  </FormHelperText>
                  <InputLabel id="demo-select-label"></InputLabel>
                  <Select value={selectedTypes} onChange={handleSelectChanges}>
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
              </div>
              <div className="col">
                <FormControl fullWidth sx={{ width: 300 }}>
                  <FormHelperText id="outlined-projet-helper-text"  style={{ opacity: "80vh", fontSize: "20px" }}>
                    Taille Des Equipes
                  </FormHelperText>
                  <InputLabel id="demo-select-label"></InputLabel>
                  <Select
                    value={taille}
                    onChange={(event) => setTailles(event.target.value)}
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
              </div>
            </div>
          </div>
          <br /> <br />
          {/**select group 2 */}
          <div className="row">
            <div className="col-md-6">
              <div>
                <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                  <FormHelperText id="outlined-projet-helper-text"  style={{ opacity: "80vh", fontSize: "20px" }}>
                    Date De creation
                  </FormHelperText>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={selectedDate}
                      onChange={handleDateChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>
            </div>
            <div className="col" style={{ marginLeft: "0%", marginTop: "0.5%"}}>
              <FormControl fullWidth sx={{ width: 465 }} variant="outlined">
                <FormHelperText id="outlined-projet-helper-text"  style={{ opacity: "80vh", fontSize: "20px" }}>
                    Site Web
                </FormHelperText>
                <OutlinedInput
                  id="outlined-adornment-projet"
                  // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-projet-helper-text"
                  inputProps={{
                    "aria-label": "nom",
                  }}
                  placeholder="EX: https://name.com/"
                  onChange={handleNameChange}
                  value={name}
                />
              </FormControl>
            </div>
          </div>
          <br />
        </div>
      </Componentprofil.LogoBannière>
      <Componentprofil.ÀPropos style={{ marginTop: "-12%", width: "190px",opacity: "80vh", fontSize: "20px"  }} >
        {`Vision de l’entreprise`}
        <ReactQuill
          style={{ width: "952px", height: "80px" }}
          value={content}
          onChange={handleChange}
          placeholder="Faites connaître votre entreprise. Faites savoir au candidat qui vous êtes ..."
          required
        />
      </Componentprofil.ÀPropos>
      <Componentprofil.Copyright>{`PSI`}</Componentprofil.Copyright>
      <button
        type="button"
        class="btn btn-light"
        onClick={handleReturn}
        style={{
          position: `absolute`,
          width: `264px`,
          left: `469px`,
          top: `685px`,
        }}
      >
        Précedant
      </button>
      <Button
        class="btn btn-primary "
        onClick={handleFormSubmit}
        style={{
          position: `absolute`,
          width: `264px`,
          left: `769px`,
          top: `685px`,
        }}
      >
        Suivant
      </Button>
      <Componentprofil.Line1></Componentprofil.Line1>
      <Componentprofil.Line41></Componentprofil.Line41>
      <Componentprofil.LineFondation></Componentprofil.LineFondation>
    </Componentprofil.Employeur11>
  );
};

export default ProfilEntreprise;
