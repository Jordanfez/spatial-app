import { Alert, Container } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Fade from "@mui/material/Fade";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Modal from "@mui/material/Modal";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { default as React, useEffect, useState } from 'react';
import URL_SERVER from "../../services/appApi.js";
import { fetchtendancesFunction } from '../../services/GetFunction/GetAdmin/getAdminFunctions.js';
import { postTendance } from '../../services/Post/PostAdminFunction/postAdminFunction.js';
import SidebarAdmin from './SidebarAdmin.js';


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 'auto',
    height: 'auto',
    bgcolor: "background.paper",
    borderRadius: 8,
    boxShadow: 24,
    p: 4,
};

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    height: 1,
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});


const AddTendance = () => {


    const [nom, setName] = useState("");
    const [description, setDescription] = useState("");
    const [sousTitle, setSousTitle] = useState("");

    const [selectedDelay, setSelectedDelay] = useState(null);
    const delay = selectedDelay
    const handleDateChanges = (date) => {
        setSelectedDelay(date);
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    /** upload image */

    const [selectedPhotos, setSelectedPhotos] = useState(null);

    const handlePhotoChanges = (event) => {
        const file = event.target.files[0];
        setSelectedPhotos(file);
    };

    /** upload image */

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handlePhotoChange = (event) => {
        const imgs = event.target.files[0];
        setSelectedPhoto(imgs);
    };

    /**Upload fileExtractForEdition */
    const [selectedFile, setSelectedFile] = useState(null);
    const [errorCV, setErrorCV] = useState('');

    const handlefileExtractForEditionChange = (event) => {
        const img = event.target.files[0];
        setSelectedFile(img);
    };

    /** end Upload cv */

    /**Upload filePresseCommunicate */
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [errorfiles, setErrorfiles] = useState('');

    const handlefilePresseCommunicateChange = (event) => {
        const fil = event.target.files[0];
        setSelectedFiles(fil);
    };

    /** end Upload cv */
    const [errorNom, setErrorNom] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    const [errorPhoto, setErrorPhoto] = useState("");
    const [errorDelay, setErrorDelay] = useState('');
    const [erroValidateTrue, setErrorValidateTrue] = useState("");
    const [erroValidateFalse, setErrorValidateFalse] = useState("");

    const [showMessage, setShowMessage] = useState(false);
    const [responseStatus, setResponseStatus] = useState(null);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertVariant, setAlertVariant] = useState("");

    const handleSubmit = async () => {
        if (nom === "") {
            setErrorNom("Veuillez remplir ce champ.");
        } else if (sousTitle === "") {
            setErrorDescription("Veuillez remplir ce champ.");
        } else if (delay === "") {
            setErrorDelay("Veuillez fournir une date.");
        } else if (selectedPhotos === "") {
            setErrorPhoto("Veuillez remplir ce champ.");
        } else {
            try {
                const formData = new FormData();
                console.log("valeur a envoyer", formData);
                formData.append("image1", selectedPhotos);
                formData.append("characteristics ", nom);
                formData.append("editionYear", delay);
                formData.append("editionNews", sousTitle);
                // formData.append("description", description);
                formData.append("image2", selectedPhoto);
                formData.append("fileExtractForEdition", selectedFile);
                formData.append("filePresseCommunicate", selectedFiles);

                const request = await postTendance(formData);
                console.log("valeur envoyer avec success", request);
                setSelectedPhotos("");
                setName("");
                setDescription("");
                setShowMessage("sucess")
                // setErrorValidateTrue("evenement creer avec success");
                // setResponseStatus(request.data.status);
                setErrorValidateTrue("");
                setErrorValidateFalse("");
            } catch (error) {
                // Gestion des erreurs de l'API ici
                console.error(error);
                setAlertVariant("danger");
                setAlertMessage(error.response?.message);
                setResponseStatus(error.response.status);
            }
        }
    };

    /**affichage(recuperation des donnees) des imagerie */
    const [GetTendance, setTendance] = useState([]);
    console.log(GetTendance);
    useEffect(() => {
        const fectData = async () => {
            try {
                const request = await fetchtendancesFunction();
                setTendance(request);
                console.log(request);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, []);

    return (
        <>
            <Box className="mt-5" sx={{ display: "flex", flexDirection: "column" }}>
                <SidebarAdmin />
                <Container className="mt-5" direction="column">
                    <Box
                        sx={{
                            marginBottom: 2,
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <Button onClick={handleOpen} variant="contained">
                            Publier une Tendance
                        </Button>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            slots={{ backdrop: Backdrop }}
                            slotProps={{
                                backdrop: {
                                    timeout: 500,
                                },
                            }}
                        >
                            <Fade in={open}>
                                <Box sx={style}>
                                    {erroValidateTrue && (
                                        <span class="alert alert-success" role="alert">
                                            {erroValidateTrue}
                                        </span>
                                    )}

                                    {showMessage === "sucess" ? (
                                        <Alert variant="filled" severity="success">Tendance creer avec success !</Alert>
                                    ) : responseStatus === 400 ? (
                                        <Alert variant="filled" severity="warning" className="text-white">{alertMessage}</Alert>
                                    ) : responseStatus === 500 ? (
                                        <Alert variant="filled" severity="warning" className="text-white">{alertMessage}</Alert>
                                    ) : (
                                        <Alert variant="filled" severity={alertVariant}>{alertMessage}</Alert>
                                    )}

                                    <Typography
                                        sx={{ mb: 1.5 }}
                                        color="text.dark"
                                        fontWeight="bold"
                                        className="fs-5 text-center"
                                    >
                                        Publier une Tendance
                                    </Typography>
                                    <div className="row ">
                                        <div className="col">
                                            <FormControl
                                                fullWidth
                                                sx={{ m: 1 }}
                                                variant="outlined"
                                                size="small"
                                            >
                                                <FormHelperText
                                                    id="outlined-projet-helper-text"
                                                    className="fs-6 text-dark fw-bold"
                                                >
                                                    Caractéristiques
                                                </FormHelperText>
                                                <OutlinedInput
                                                    className="bg-white"
                                                    id="outlined-adornment-projet"
                                                    aria-describedby="outlined-projet-helper-text"
                                                    inputProps={{
                                                        "aria-label": "projet",
                                                    }}
                                                    value={nom}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                                {errorNom && (
                                                    <span style={{ color: "red" }}>{errorNom}</span>
                                                )}
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                                                <FormHelperText id="outlined-projet-helper-text">Date d'édition</FormHelperText>
                                                <LocalizationProvider dateAdapter={AdapterDayjs} value={delay}>
                                                    <DatePicker
                                                        value={selectedDelay}
                                                        onChange={handleDateChanges}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                    {errorDelay && <span style={{ color: "red" }}>{errorDelay}</span>}
                                                </LocalizationProvider>
                                            </FormControl>
                                        </div>
                                    </div>

                                    <div className="row ">
                                        <div className="col">
                                            <FormControl
                                                fullWidth
                                                sx={{ m: 1, height: "40" }}
                                                variant="outlined"
                                                size="small"
                                            >
                                                <FormHelperText
                                                    id="outlined-projet-helper-text"
                                                    className="fs-6 text-dark fw-bold"
                                                >
                                                    sousTitle
                                                </FormHelperText>
                                                <OutlinedInput
                                                    className="bg-white"
                                                    id="outlined-adornment-projet"
                                                    aria-describedby="outlined-projet-helper-text"
                                                    inputProps={{
                                                        "aria-label": "projet",
                                                    }}
                                                    value={sousTitle}
                                                    onChange={(e) => setSousTitle(e.target.value)}
                                                    placeholder="sousTitle..."
                                                />
                                            </FormControl>
                                        </div>
                                    </div>

                                    <div className="row ">
                                        <div className="col">
                                            <FormControl
                                                fullWidth
                                                sx={{ m: 1, height: "40" }}
                                                variant="outlined"
                                                size="small"
                                            >
                                                <FormHelperText
                                                    id="outlined-projet-helper-text"
                                                    className="fs-6 text-dark fw-bold"
                                                >
                                                    Description
                                                </FormHelperText>
                                                <OutlinedInput
                                                    className="bg-white"
                                                    id="outlined-adornment-projet"
                                                    aria-describedby="outlined-projet-helper-text"
                                                    inputProps={{
                                                        "aria-label": "projet",
                                                    }}
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    placeholder="Description..."
                                                />
                                                {errorDescription && (
                                                    <span style={{ color: "red" }}>
                                                        {errorDescription}
                                                    </span>
                                                )}
                                            </FormControl>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                                                <label htmlFor="upload-cv">
                                                    <input
                                                        style={{ display: "none" }}
                                                        id="upload-cv"
                                                        name="upload-cv"
                                                        type="file"
                                                        onChange={handlePhotoChanges}
                                                    />

                                                    <Button
                                                        color="secondary"
                                                        variant="contained"
                                                        component="span"
                                                    >
                                                        Télécharger une Image principale
                                                    </Button>
                                                    {selectedPhotos && (
                                                        <p>Votre Image: {selectedPhotos.name}</p>
                                                    )}
                                                </label>
                                                {errorPhoto && (
                                                    <span style={{ color: "red" }}>{errorPhoto}</span>
                                                )}
                                            </FormControl>
                                        </div>
                                        <div className="col-6">
                                            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                                                <label htmlFor="upload-img">
                                                    <input
                                                        style={{ display: "none" }}
                                                        id="upload-img"
                                                        name="upload-img"
                                                        type="file"
                                                        onChange={handlePhotoChange}
                                                    />

                                                    <Button
                                                        color="secondary"
                                                        variant="contained"
                                                        component="span"
                                                    >
                                                        Télécharger une seconde Image
                                                    </Button>
                                                    {selectedPhoto && (
                                                        <p>Votre Image: {selectedPhoto.name}</p>
                                                    )}
                                                </label>
                                                {errorPhoto && (
                                                    <span style={{ color: "red" }}>{errorPhoto}</span>
                                                )}
                                            </FormControl>
                                        </div>
                                    </div>

                                    <div className="row text-center">
                                        <div className='col-6'>
                                            <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                                                <label htmlFor="upload-édition" style={{ marginLeft: -25 }}>
                                                    <input
                                                        style={{ display: "none" }}
                                                        id="upload-édition"
                                                        name="upload-édition"
                                                        type="file"
                                                        onChange={handlefileExtractForEditionChange}
                                                    />

                                                    <Button
                                                        color="secondary"
                                                        variant="contained"
                                                        component="span"
                                                        sx={{ width: '80%' }}
                                                    // startIcon={<CloudUploadIcon />}
                                                    >
                                                        Télécharger l’extrait de l’édition
                                                    </Button>
                                                    {selectedFile && <p>Fichier d'édition: {selectedFile.name}</p>}
                                                    {errorCV && <span style={{ color: "red" }}>{errorCV}</span>}
                                                </label>
                                            </FormControl>
                                        </div>
                                        <div className='col-6'>
                                            <FormControl fullWidth sx={{ m: 1, w: 50 }} variant="outlined">
                                                <label htmlFor="upload-presse" style={{ marginLeft: -25 }}>
                                                    <input
                                                        style={{ display: "none" }}
                                                        id="upload-presse"
                                                        name="upload-presse"
                                                        type="file"
                                                        onChange={handlefilePresseCommunicateChange}
                                                    />

                                                    <Button
                                                        color="secondary"
                                                        variant="contained"
                                                        component="span"
                                                        sx={{ width: '80%' }}
                                                    // startIcon={<CloudUploadIcon />}
                                                    >
                                                        Télécharger un communiquer de presse
                                                    </Button>
                                                    {selectedFiles && <p>Fichier de presse: {selectedFiles.name}</p>}
                                                    {errorfiles && <span style={{ color: "red" }}>{errorfiles}</span>}
                                                </label>
                                            </FormControl>
                                        </div>

                                    </div>

                                    <div className="mt-2 d-flex justify-content-between">
                                        <div>
                                            <Button variant="outlined" type="reset" value="Reset">
                                                Annuler
                                            </Button>
                                        </div>
                                        <div>
                                            <Button variant="contained" onClick={handleSubmit}>
                                                Publier
                                            </Button>
                                        </div>
                                    </div>
                                </Box>
                            </Fade>
                        </Modal>
                    </Box>
                    <Box sx={{ width: "100%", typography: "body1" }} style={{ width: 'auto', marginLeft: '15%' }}>
                        <div className="row">
                            {GetTendance.length === 0 ? (
                                <h3>Pas de Tendance trouvées</h3>
                            ) : GetTendance.map((event) => (
                                <div className="col-4">
                                    {/* <Fab
                                size="small"
                                color="white"
                                aria-label="add"
                                sx={{ zIndex: 1, top: 60, left: 20 }}
                                onClick={() => handleOpenModalAcceptevenements(event.id)}
                            >
                                <RemoveRedEyeOutlinedIcon color="primary" />
                            </Fab> */}
                                    {/** modal from imagerie */}
                                    {/* <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={openModalevenements}
                                onClose={handleCloseevenements}
                                closeAfterTransition
                                slots={{ backdrop: Backdrop }}
                                slotProps={{
                                    backdrop: {
                                        timeout: 500,
                                    },
                                }}
                            >
                                <Fade in={openModalevenements}>
                                    <Box sx={style}>
                                        <Typography
                                            sx={{ mb: 1.5 }}
                                            color="text.dark"
                                            fontWeight="bold"
                                            className="fs-5 text-center"
                                        >
                                            Detail de l'événements
                                        </Typography>
                                        <div className="row ">
                                            <div className="col">
                                                <FormControl
                                                    fullWidth
                                                    sx={{ m: 1 }}
                                                    variant="outlined"
                                                    size="small"
                                                >
                                                    <FormHelperText
                                                        id="outlined-projet-helper-text"
                                                        className="fs-6 text-dark fw-bold"
                                                    >
                                                        Titre
                                                    </FormHelperText>
                                                    <OutlinedInput
                                                        className="bg-white"
                                                        id="outlined-adornment-projet"
                                                        aria-describedby="outlined-projet-helper-text"
                                                        inputProps={{
                                                            "aria-label": "projet",
                                                        }}
                                                        placeholder={`${event.title}`}
                                                        value={titleModifieActualiter}
                                                        onChange={(e) => setNomdifieImagerie(e.target.value)}
                                                    />
                                                    {errorNom && (
                                                        <span style={{ color: "red" }}>{errorNom}</span>
                                                    )}
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col">
                                                <FormControl
                                                    fullWidth
                                                    sx={{ m: 1, height: "40" }}
                                                    variant="outlined"
                                                >
                                                    <FormHelperText
                                                        id="outlined-projet-helper-text"
                                                        className="fs-6 text-dark fw-bold"
                                                    >
                                                        Description
                                                    </FormHelperText>
                                                    <OutlinedInput
                                                        className="bg-white"
                                                        id="outlined-adornment-projet"
                                                        aria-describedby="outlined-projet-helper-text"
                                                        inputProps={{
                                                            "aria-label": "projet",
                                                        }}
                                                        value={descriptionModifieActualite}
                                                        onChange={(e) => setDescriptiondifieActualite(e.target.value)}
                                                        placeholder={`${event.description}`}
                                                    />
                                                    {errorDescription && (
                                                        <span style={{ color: "red" }}>
                                                            {errorDescription}
                                                        </span>
                                                    )}
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col">
                                                <FormControl fullWidth sx={{ m: 1, }} variant="outlined">
                                                    <FormHelperText id="outlined-projet-helper-text">Date De publication</FormHelperText>
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

                                        <div className="row">
                                            <div className="col">
                                                <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                                                    <label htmlFor="upload-cv">
                                                        <input
                                                            style={{ display: "none" }}
                                                            id="upload-image"
                                                            name="upload-image"
                                                            type="file"
                                                            onChange={handlePhotoChangesModifieImagerie}
                                                        />

                                                        <Button
                                                            color="secondary"
                                                            variant="contained"
                                                            component="span"
                                                        >
                                                            Télécharger une photos
                                                        </Button>
                                                        {selectedPhotosModifieImagerie && (
                                                            <p>Votre produit: {selectedPhotosModifieImagerie.name}</p>
                                                        )}
                                                    </label>
                                                    {errorPhoto && (
                                                        <span style={{ color: "red" }}>{errorPhoto}</span>
                                                    )}
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="mt-5 d-flex justify-content-end">
                                            <Button variant="contained" onClick={handleValiderClickImagerie}>Modifier</Button>
                                        </div>
                                    </Box>
                                </Fade>
                            </Modal> */}

                                    <Card sx={{ maxWidth: 345 }}>
                                        <Box>
                                            <CardMedia
                                                sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                                image={`${URL_SERVER}${event.image1}`}
                                            />
                                        </Box>
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                                className="text-end text-primary"
                                            >
                                                Date d'édition: <span style={{ color: "black" }}>{event.editionYear}</span>
                                            </Typography>
                                            <Typography gutterBottom variant="h4" component="div">
                                                editionNews: {event.editionNews}
                                            </Typography>
                                            {/* <Typography variant="body2" color="text.secondary">
                                                Description: {event.characteristics}
                                            </Typography> */}
                                        </CardContent>
                                    </Card>

                                </div>
                            ))}
                        </div>

                    </Box>
                </Container>
            </Box>

        </>
    )
}

export default AddTendance