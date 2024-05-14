import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "./Stepper.js";
import Header from "./Header.js";
import Container from "react-bootstrap/Container";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Footer from "./Footer.js";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";
import axios from "../../axios.js";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  height: 1,
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ProfilFreelance = () => {
  /**Upload cv */

  const [selectedFile, setSelectedFile] = useState(null);

  const handleCVChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  /** end Upload cv */

  /** upload photo */

  const [selectedPhotos, setSelectedPhotos] = useState(null);
  console.log(selectedPhotos);
  const handlePhotoChanges = (event) => {
    const photos = event.target.files;
    setSelectedPhotos(photos);
  };

  /** end upload photo */

  /** envoi de donnee */
  const [name, setName] = useState("");
  const [libelle, setLibelle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      Array.from(selectedPhotos).forEach((photo) => {
        formData.append("photo", photo);
      });
      formData.append("cv", selectedFile);
      formData.append("name", name);
      formData.append("libelle", libelle);
      formData.append("description", description);

      await axios.post("/profile", formData);
      // Succès de l'envoi de l'API, effectuez les actions supplémentaires nécessaires ici

      // Réinitialiser les champs après l'envoi
      setSelectedPhotos(null);
      setSelectedFile(null);
      setName("");
      setLibelle("");
      setDescription("");
    } catch (error) {
      // Gérer les erreurs de l'API ici
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <Card sx={{ width: 985, marginLeft: 70, marginTop: 20 }}>
        <CardContent>
          <Box
            className="mt-5"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Stepper />
            <h2>Enregistrer votre profil</h2>
            {/* <Box sx={{ p: 3 }}>
            <h1>Freelance</h1>
            </Box> */}
            <Container className="mt-5">
              <div className="row ">
                <div className="col">
                  <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                    <FormHelperText id="outlined-projet-helper-text">
                      Nom
                    </FormHelperText>
                    <OutlinedInput
                      id="outlined-adornment-projet"
                      // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                      aria-describedby="outlined-projet-helper-text"
                      inputProps={{
                        "aria-label": "projet",
                      }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                </div>
              </div>

              <div className="row ">
                <div className="col">
                  <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                    <FormHelperText id="outlined-projet-helper-text">
                      Libelle
                    </FormHelperText>
                    <OutlinedInput
                      id="outlined-adornment-projet"
                      // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                      aria-describedby="outlined-projet-helper-text"
                      inputProps={{
                        "aria-label": "projet",
                      }}
                      value={libelle}
                      onChange={(e) => setLibelle(e.target.value)}
                    />
                  </FormControl>
                </div>
              </div>

              <div className="row ">
                <div className="col">
                  <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                    <FormHelperText id="outlined-projet-helper-text">
                      Description
                    </FormHelperText>
                    <OutlinedInput
                      id="outlined-adornment-projet"
                      // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                      aria-describedby="outlined-projet-helper-text"
                      inputProps={{
                        "aria-label": "projet",
                      }}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </FormControl>
                </div>
              </div>

              <div className="row ">
                <div className="col">
                  <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                    <label htmlFor="upload-cv">
                      <input
                        style={{ display: "none" }}
                        id="upload-cv"
                        name="upload-cv"
                        type="file"
                        onChange={handleCVChange}
                      />

                      <Button
                        color="secondary"
                        variant="contained"
                        component="span"
                      >
                        Télécharger un CV
                      </Button>
                      {selectedFile && (
                        <p>Votre cv: {selectedFile.name}</p>
                      )}
                    </label>
                  </FormControl>

                  <FormControl
                    fullWidth
                    sx={{ width: 280, marginLeft: 1 }}
                    variant="outlined"
                  >
                    <Button
                      color="success"
                      component="label"
                      variant="contained"
                      startIcon={<CloudUploadIcon />}
                    >
                      Télécharger une photos 
                      <VisuallyHiddenInput
                        type="file"
                        onChange={handlePhotoChanges}
                      />
                    </Button>
                    {selectedPhotos && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "1rem",
                        }}
                      >
                        {Array.from(selectedPhotos).map((photo, index) => (
                          <img
                            key={index}
                            src={URL.createObjectURL(photo)}
                            alt={`Selected file ${index + 1}`}
                            style={{
                              borderRadius: "50%",
                              height: "100px",
                              marginLeft: "0.5rem",
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </FormControl>
                </div>
              </div>
            </Container>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            sx={{ width: 925, marginLeft: 3 }}
            onClick={handleSubmit}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Enregistrer
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProfilFreelance;
