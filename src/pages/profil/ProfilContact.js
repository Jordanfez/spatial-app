import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ProgressBar } from "react-bootstrap";
import * as Componentprofil from "./Compomentprofil";
import "./profil.css";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { useSelector } from "react-redux";
import axios from "../../axios";
import { setEmail } from "../../features/entrepriseSlice";

const ProfilContact = () => {
  const user = useSelector((state) => state.userElement.id);
  console.log(user);
  const entrepriseData = useSelector((state) => state.entreprise);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Récupérer toutes les données du store
    const {
      logo,
      banniere,
      name,
      description,
      typeOrganisation,
      typeIndustry,
      teamLength,
      siteWebLink,
      facebookLink,
      instagramLink,
      linkedLink,
      twitterLink,
      creationDate,
      email,
    } = entrepriseData;

    // Créer un objet FormData pour envoyer les données
    const formData = new FormData();
    formData.append("logo", logo);
    formData.append("banniere", banniere);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("typeOrganisation", typeOrganisation);
    formData.append("typeIndustry", typeIndustry);
    formData.append("teamLength", teamLength);
    formData.append("siteWebLink", siteWebLink);
    formData.append("facebookLink", facebookLink);
    formData.append("instagramLink", instagramLink);
    formData.append("linkedLink", linkedLink);
    formData.append("twitterLink", twitterLink);
    formData.append("email", email);
    formData.append("localisation", names);
    formData.append("creationDate", creationDate);
    formData.append("contactNumber ", contactNumber);
    formData.append("user", user);

    try {
      // Envoyer la requête POST vers votre API
      const response = await axios.post("/enterprise", formData);
      console.log(response.data);
      // Réinitialiser le store après la réussite de la requête
      // Vous pouvez ajouter les actions de réinitialisation appropriées dans votre slice Redux
      if (response.status === 200) {
        navigate("/endProfil");
      }
    } catch (error) {
      console.error(error);
    }
  };
  // navigation
  const [names, setName] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  //navigate return to
  const handleReturn = (event) => {
    event.preventDefault();

    if (contactNumber === "" || contactNumber !== "") {
      navigate("/profil/reseau-sociaux");
    }
  };

  /** progress bar  */
  const progress = 85;

  /** aujout des indentifiant telephonique */
  const [selectedCountry, setSelectedCountry] = useState("");
  const [contactNumber, setPhoneNumber] = useState("");

  const countryCodes = [
    { country: "Afghanistan", code: "+93" },
    { country: "Algérie", code: "+213" },
    { country: "Angola", code: "+244" },
    // Ajoutez les autres pays africains avec leurs codes téléphoniques ici
  ];

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <Componentprofil.Employeur11>
      {/** progress bar */}
      <div style={{ width: "25%", marginLeft: "67%" }}>
        <label style={{ opacity: "40%" }}>setup progress</label>
        <label style={{ color: "blue", marginLeft: "50%" }}>85% Complet</label>
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
          <Componentprofil.RéseauxSociaux>
            {`informations générales`}
          </Componentprofil.RéseauxSociaux>
        </Componentprofil.FirstCheckBox1>
        <Componentprofil.FirstCheckBox2>
          <Componentprofil.BxGlobe1></Componentprofil.BxGlobe1>
          <Componentprofil.RéseauxSociaux>
            {`Réseaux Sociaux`}
          </Componentprofil.RéseauxSociaux>
        </Componentprofil.FirstCheckBox2>
        <Componentprofil.FirstCheckBox3>
          <Componentprofil.BxAt1></Componentprofil.BxAt1>
          {`Contact`}
        </Componentprofil.FirstCheckBox3>
      </Componentprofil.Frame82>
      <Componentprofil.LogoBannière>
        <div className="content content-4">
          <br />
          <br />
          <div className="form-group">
            <FormControl fullWidth sx={{ width: 920 }} variant="outlined">
              <FormHelperText
                id="outlined-projet-helper-text"
                style={{ opacity: "80vh", fontSize: "20px" }}
              >
                Localisation de l'entreprise
              </FormHelperText>
              <OutlinedInput
                id="outlined-adornment-projet"
                // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                aria-describedby="outlined-projet-helper-text"
                inputProps={{
                  "aria-label": "nom",
                }}
                placeholder="Entrer la Localisation de l'entreprise"
                value={names}
                onChange={handleNameChange}
              />
            </FormControl>
            <br />
            
            <FormControl fullWidth sx={{ width: 920 }} variant="outlined">
              <FormHelperText
                id="outlined-projet-helper-text"
                style={{ opacity: "80vh", fontSize: "20px" }}
              >
                Numero telephonique
              </FormHelperText>
              <OutlinedInput
                id="outlined-adornment-projet"
                // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                aria-describedby="outlined-projet-helper-number"
                inputProps={{
                  "aria-label": "number",
                }}
                placeholder="EX: +237 685958 959"
                value={contactNumber}
                onChange={handlePhoneNumberChange}
              />
            </FormControl>
            
            <FormControl fullWidth sx={{ width: 920 }} variant="outlined">
              <FormHelperText
                id="outlined-projet-helper-text"
                style={{ opacity: "80vh", fontSize: "20px" }}
              >
                Email
              </FormHelperText>
              <OutlinedInput
                id="outlined-adornment-projet"
                // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                aria-describedby="outlined-projet-helper-text"
                inputProps={{
                  "aria-label": "nom",
                }}
                placeholder="Entrer votre mail'"
                value={email}
                onChange={handleEmailChange}
              />
            </FormControl>
            <br />
          </div>
        </div>
      </Componentprofil.LogoBannière>
      <Componentprofil.Copyright>{`PSI`}</Componentprofil.Copyright>
      <button
        type="button"
        class="btn btn-light"
        onClick={handleReturn}
        style={{
          position: `absolute`,
          width: `264px`,
          left: `469px`,
          top: `545px`,
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
          top: `545px`,
        }}
      >
        Suivant
      </Button>
      <Componentprofil.Line1></Componentprofil.Line1>
      <Componentprofil.Line41></Componentprofil.Line41>
      <Componentprofil.LineContact></Componentprofil.LineContact>
    </Componentprofil.Employeur11>
  );
};

export default ProfilContact;
