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
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { useEffect, useState } from "react";
import { fetchAdminIdFunction, fetchEvenementsFunction } from '../../services/GetFunction/GetAdmin/getAdminFunctions.js';
import { postEvenement } from '../../services/Post/PostAdminFunction/postAdminFunction.js';
import URL_SERVER from "../../services/appApi.js";
import { putArticleupdate } from '../../services/putFunction/Admin/putFunction.js';
import SidebarAdmin from './SidebarAdmin.js';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 648,
    height: 606,
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


const AddEvenement = () => {

    const [nom, setName] = useState("");
    const [prix, setPrix] = useState("");
    const [description, setDescription] = useState("");
    const [sousTitle, setSousTitle] = useState("");

    const [selectedDate, setSelectedDate] = useState(null);
    const dateCreation = selectedDate
    const [selectedDelay, setSelectedDelay] = useState(null);
    const delay = selectedDelay
    const handleDateChanges = (date) => {
        setSelectedDelay(date);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);


    /**modal from Actualiter */
    const [openModalevenements, setopenModalevenements] = useState(false);
    const handleCloseevenements = () => setopenModalevenements(false);

    const [selectedIdActualiter, setSelectedIdevenements] = useState(null);

    const handleOpenModalAcceptevenements = (id) => {
        setSelectedIdevenements(id);
        setopenModalevenements(true);
    };

    /** upload image */

    const [selectedPhotos, setSelectedPhotos] = useState(null);

    const handlePhotoChanges = (event) => {
        const file = event.target.files[0];
        setSelectedPhotos(file);
    };

    /**affichage(recuperation des donnees) des imagerie */
    const [admin, setAdmincheck] = useState([]);
    console.log(admin);
    useEffect(() => {
        const fectData = async () => {
            try {
                const request = await fetchAdminIdFunction();
                setAdmincheck(request);
                console.log(request);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, []);
    /** end upload image */

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
        } else if (description === "") {
            setErrorDescription("Veuillez remplir ce champ.");
        } else if (delay === "") {
            setErrorDelay("Veuillez fournir une date.");
        } else if (selectedPhotos === "") {
            setErrorPhoto("Veuillez remplir ce champ.");
        } else {
            try {
                const formData = new FormData();
                console.log("valeur a envoyer", formData);
                formData.append("image", selectedPhotos);
                formData.append("bigTitle ", nom);
                formData.append("datePublication", delay);
                formData.append("sousTitle", sousTitle);
                formData.append("description", description);
                // formData.append("admin", admin.id);

                const request = await postEvenement(formData);
                setSelectedPhotos("");
                setName("");
                setDescription("");
                setShowMessage("sucess")
                // setErrorValidateTrue("evenement creer avec success");
                // setResponseStatus(request.data.status);
                console.log("valeur envoyer avec success", request);
                setErrorValidateTrue("");
                setErrorValidateFalse("");
            } catch (error) {
                // Gestion des erreurs de l'API ici
                console.error(error);
                setAlertVariant("danger");
                setAlertMessage(error.response?.data.message);
                setResponseStatus(error.response.status);
                setErrorValidateFalse(
                    "Une erreur est survenu lors de l'enregistrement veuillez verifier le type de donne et les valeur entrer"
                );

            }
        }
    };


    /*modification*/
    const [titleModifieActualiter, setNomdifieImagerie] = useState('')
    const [descriptionModifieActualite, setDescriptiondifieActualite] = useState('')

    const [selectedPhotosModifieImagerie, setSelectedPhotosModifieImagerie] = useState(null);
    const handlePhotoChangesModifieImagerie = (event) => {
        const file = event.target.files[0];
        setSelectedPhotosModifieImagerie(file);
    };

    const handleValiderClickImagerie = async () => {
        // Vérifiez si l'ID du projet sélectionné est valide

        const formData = new FormData();
        console.log("valeur a envoyer", formData);
        formData.append("image", selectedPhotosModifieImagerie);
        formData.append("title ", titleModifieActualiter);
        formData.append("dateCreation", dateCreation);
        formData.append("description", descriptionModifieActualite);
        formData.append("admin", admin.id);

        if (titleModifieActualiter === "") {
            setErrorNom("Veuillez remplir ce champ.");
        } else if (descriptionModifieActualite === "") {
            setErrorDescription("Veuillez remplir ce champ.");
        } else if (selectedPhotos === "") {
            setErrorPhoto("Veuillez remplir ce champ.");
        } else {
            console.log('valuer selected image', selectedIdActualiter);

            if (selectedIdActualiter) {
                console.log('valuer selected image', selectedIdActualiter);
                await putArticleupdate(selectedIdActualiter, formData)
                    .then(response => {
                        console.log('New module created:', response.data);

                        alert('Article mis a jours')
                        // Close the modal and fetch updated projects
                        handleCloseevenements();
                    })
                    .catch(error => {
                        console.error('Error update article:', error);
                    });

            }
        }
    };

    /**affichage(recuperation des donnees) des evenements */
    const [Getevenements, setActualite] = useState([]);
    console.log(Getevenements);
    useEffect(() => {
        const fectData = async () => {
            try {
                const request = await fetchEvenementsFunction();
                setActualite(request);
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
                            Publier un evenement
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
                                        <Alert variant="filled" severity="success">evenement creer avec success!</Alert>
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
                                        Publier une Actualiter
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
                                                <FormHelperText id="outlined-projet-helper-text">Date de publication</FormHelperText>
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
                                        <div className="col">
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
                                                        Télécharger une photos
                                                    </Button>
                                                    {selectedPhotos && (
                                                        <p>Votre Actu: {selectedPhotos.name}</p>
                                                    )}
                                                </label>
                                                {errorPhoto && (
                                                    <span style={{ color: "red" }}>{errorPhoto}</span>
                                                )}
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
                            {Getevenements.length === 0 ? (
                                <h3>Pas d'événements trouvés</h3>
                            ) : Getevenements.map((event) => (
                                <div className="col-4" style={{marginTop:'3%'}}>
                                    <Card sx={{ maxWidth: 345, height:490 }}>
                                        <Box>
                                            <CardMedia
                                                sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                                image={`${URL_SERVER}${event.image}`}
                                            />
                                        </Box>
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                                className="text-end text-primary"
                                            >
                                                Date de publication: <span style={{ color: "black" }}>{event.datePublication}</span>
                                            </Typography>
                                            <Typography gutterBottom variant="h4" component="div">
                                                Titre: {event.bigTitle}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Description: {event.description}
                                            </Typography>
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

export default AddEvenement