import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import * as Componentprofil from "./Compomentprofil";
import "./profil.css";
import cloud from '../../img/cloud.svg'
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import {
  setLogo,
  setBanniere,
  setName,
  setDescription,
} from "../../features/entrepriseSlice";

const Profil = () => {
  const dispatch = useDispatch();
  const [name, setNames] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Récupérez les valeurs des champs du formulaire
    // const logoValue = e.target.logo.files[0];
    // const banniereValue = e.target.banniere.files[0];
    // const nameValue = e.target.name.value;
    // const descriptionValue = e.target.description.value;

    // Envoyer les valeurs au store
    dispatch(setLogo(selectedImages));
    dispatch(setBanniere(selectedImage));
    dispatch(setName(name));
    dispatch(setDescription(content));

    navigate("/profil/fondation");
  };

  const handleNameChange = (event) => {
    setNames(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (name !== '') {
  //     navigate('/profil/fondation');
  //   } else {
  //     alert('Veuillez remplir tous les champs.');
  //   }

  //   /** envoi des donnees au service api */
  //   // reutilison le hook  const [name, setName] = useState('');
  //   // reutilison le hook const [content, setContent] = useState('');
  //   const data = {
  //     name: name,
  //     content: content
  //   };

  //   fetch('https://jsonplaceholder.typicode.com', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   .then(response => response.json())
  //   .then(result => {
  //     console.log('Donnee Enregistrer avec success:', result);
  //     console.log(data);
  //     // message de succès
  //   })
  //   .catch(error => {
  //     console.error('Erreur lors de l\'enregistrement des données:', error);
  //     // d'erreur d'erreur
  //   });
  // };

  //   /** progress bar here

  //   const [activeTab, setActiveTab] = useState(1);
  //   const [progress, setProgress] = useState(0);

  //   const handleNextClick = () => {
  //     if (activeTab < 5) {
  //       setActiveTab(activeTab + 1);
  //       setProgress((activeTab + 1) * 20);
  //     }
  //   }; */

  /** zone de texte */
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  //upload file
  const [selectedImages, setSelectedImages] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImages(file);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChanges = (event) => {
    const fil = event.target.files[0];
    setSelectedImage(fil);
  };

  return (
    <Container>
      <Componentprofil.Employeur11>
        <div className="col align-self-end d-flex justify-content-end mt-5 d-sx-none">
          <Componentprofil.Rectangle1362></Componentprofil.Rectangle1362>
        </div>

        <Componentprofil.Frame82>
          <Componentprofil.FirstCheckBox>
            {`Entreprise`}
          </Componentprofil.FirstCheckBox>
          <Componentprofil.FirstCheckBox1>
            <Componentprofil.BxUserCircle1></Componentprofil.BxUserCircle1>
            <Componentprofil.Fondation>
              {`informations générales`}
            </Componentprofil.Fondation>
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
          {`Logo & Bannière`}
        </Componentprofil.LogoBannière>
        <Componentprofil.TéléchargerLeLogo>
          {`Télécharger le Logo`}
        </Componentprofil.TéléchargerLeLogo>
        <Componentprofil.NomDeLEntreprise>
          <FormControl fullWidth sx={{ width: 970 }} variant="outlined">
            <FormHelperText
              id="outlined-projet-helper-text"
              style={{ opacity: "80vh", fontSize: "20px" }}
            >
              Nom de l’Entreprise
            </FormHelperText>
            <OutlinedInput
              id="outlined-adornment-projet"
              // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-projet-helper-text"
              inputProps={{
                "aria-label": "nom",
              }}
              value={name}
              onChange={handleNameChange}
            />
          </FormControl>
        </Componentprofil.NomDeLEntreprise>
        <Componentprofil.ÀPropos>{`À Propos`}</Componentprofil.ÀPropos>
        <Componentprofil.Frame83>
          <Componentprofil.Rectangle13632></Componentprofil.Rectangle13632>
          <Componentprofil.ParcourezLesPhotosOu>
          <img src={cloud} alt="cloud" style={{height:'10vh', marginTop:'-40%'}} />
            <div>
            {`Parcourez les photos`}
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                class="form-control" id="customFile"
              />
              
              {/* <div className="image-container">
                {selectedImages.map((image, index) => (
                  <div key={index} className="image-item">
                    <span className="image-name">{image.name}</span>
                    <span className="image-extension">.{image.extension}</span>
                  </div>
                ))}
              </div> */}
            </div>
          </Componentprofil.ParcourezLesPhotosOu>
          <Componentprofil.BxCloudUpload1></Componentprofil.BxCloudUpload1>
        </Componentprofil.Frame83>
        <Componentprofil.Frame84>
          <Componentprofil.Rectangle13631></Componentprofil.Rectangle13631>
          <Componentprofil.ParcourezLesPhotosOu1>
          <img src={cloud} alt="cloud" style={{height:'10vh', marginTop:'-13%'}} />
            <div>
            {`Parcourez les photos ou déposez-les ici`}<br />
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChanges}
                class="form-control" id="customFile"
              />
              {/* <div className="image-container">
                {selectedImage.map((image, index) => (
                  <div key={index} className="image-item">
                    <span className="image-name">{image.name}</span>
                    <span className="image-extension">.{image.extension}</span>
                  </div>
                ))}
              </div> */}
            </div>
          </Componentprofil.ParcourezLesPhotosOu1>
          <Componentprofil.BxCloudUpload11></Componentprofil.BxCloudUpload11>
        </Componentprofil.Frame84>
        {/** apropos */}
        <Componentprofil.Frame85>
          <ReactQuill
            style={{ width: "975px", height: "80px" }}
            value={content}
            onChange={handleChange}
            placeholder="Faites connaître votre entreprise. Faites savoir au candidat qui vous êtes ..."
            required
          />
        </Componentprofil.Frame85>
        <Componentprofil.Copyright>{`PSI`}</Componentprofil.Copyright>
        <Button
          class="btn btn-primary btn-lg"
          onClick={handleFormSubmit}
          style={{
            position: `absolute`,
            width: `264px`,
            left: `469px`,
            top: `895px`,
          }}
        >
          Suivant
        </Button>
        <Componentprofil.Line1></Componentprofil.Line1>
        <Componentprofil.Line3></Componentprofil.Line3>
        <Componentprofil.Line41></Componentprofil.Line41>
        <Componentprofil.Line2></Componentprofil.Line2>
      </Componentprofil.Employeur11>
    </Container>
  );
};

export default Profil;
