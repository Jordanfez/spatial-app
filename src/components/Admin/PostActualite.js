import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Alert, Container } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Fab from "@mui/material/Fab";
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
import { format } from 'date-fns';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchActualityFunction, fetchAdminIdFunction } from '../../services/GetFunction/GetAdmin/getAdminFunctions.js';
import { postActualites } from '../../services/Post/PostAdminFunction/postAdminFunction.js';
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


const PostActualite = () => {

    const adminId = useSelector((state) => state.Admin?.AdminId);
    console.log(adminId);

    const [nom, setName] = useState("");
    const [prix, setPrix] = useState("");
    const [description, setDescription] = useState("");

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
    const [openModalActualiter, setopenModalActualiter] = useState(false);
    const handleCloseActualiter = () => setopenModalActualiter(false);

    const [selectedIdActualiter, setSelectedIdActualiter] = useState(null);

    const handleOpenModalAcceptActualiter = (id) => {
        setSelectedIdActualiter(id);
        setopenModalActualiter(true);
    };

    /** upload image */

    const [selectedPhotos, setSelectedPhotos] = useState(null);

    const handlePhotoChanges = (event) => {
        const file = event.target.files[0];
        setSelectedPhotos(file);
    };

    /**affichage(recuperation des donnees) de l'admin */
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
                formData.append("title ", nom);
                formData.append("dateCreation", delay);
                formData.append("description", description);
                formData.append("admin", adminId);

                const request = await postActualites(formData);
                console.log("valeur envoyer avec success", request);
                setShowMessage("sucess")
                setSelectedPhotos("");
                setName("");
                setDescription("");
                setShowMessage("sucess")
                // setErrorValidateTrue("Actualite creer avec success");
                // setResponseStatus(request.data.status);
                setErrorValidateFalse(
                    "Une erreur est survenu lors de l'enregistrement veuillez verifier le type de donne et les valeur entrer"
                );
                setErrorValidateTrue("");
                setErrorValidateFalse("");
                setResponseStatus(request.data?.status);
            } catch (error) {
                // Gestion des erreurs de l'API ici
                console.error(error);
                // alert(error.response.data.message);
                setAlertVariant("danger");
                setAlertMessage(error.response?.data.message);
                setResponseStatus(error.response.status);

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
            console.log('valuer selected image', formData);
            if (selectedIdActualiter) {
                console.log('valuer selected image', selectedIdActualiter);
                await putArticleupdate(selectedIdActualiter, formData)
                    .then(response => {
                        console.log('New module created:', response);

                        alert('Article mis a jours')
                        // Close the modal and fetch updated projects
                        handleCloseActualiter();
                    })
                    .catch(error => {
                        console.error('Error created module:', error);
                    });
            }
        }
    };

    /**affichage(recuperation des donnees) des actualitees */
    const [actualiter, setActualite] = useState([]);
    console.log(actualiter);
    useEffect(() => {
        const fetchDataActuality = async () => {
            try {
                const data = await fetchActualityFunction();
                setActualite(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataActuality();
    }, []);

    function formatDate(date) {
        return format(new Date(date), 'dd-MM-yyyy')
    }

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
                            Publier une Actualiter
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
                                        <Alert variant="filled" severity="success">Actualiter creer avec success !</Alert>
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
                            {actualiter.length === 0 ? (
                                <h3>Pas d'Actualiter trouves</h3>
                            ) : actualiter.map((actu) => (
                                <div className="col-4">
                                    <Fab
                                        size="small"
                                        color="white"
                                        aria-label="add"
                                        sx={{ zIndex: 1, top: 60, left: 20 }}
                                        onClick={() => handleOpenModalAcceptActualiter(actu.id)}
                                    >
                                        <RemoveRedEyeOutlinedIcon color="primary" />
                                    </Fab>
                                    {/** modal from imagerie */}
                                    <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        open={openModalActualiter}
                                        onClose={handleCloseActualiter}
                                        closeAfterTransition
                                        slots={{ backdrop: Backdrop }}
                                        slotProps={{
                                            backdrop: {
                                                timeout: 500,
                                            },
                                        }}
                                    >
                                        <Fade in={openModalActualiter}>
                                            <Box sx={style}>
                                                <Typography
                                                    sx={{ mb: 1.5 }}
                                                    color="text.dark"
                                                    fontWeight="bold"
                                                    className="fs-5 text-center"
                                                >
                                                    Detail de l'Actualiter
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
                                                                placeholder={`${actu.title}`}
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
                                                                placeholder={`${actu.description}`}
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
                                                            <label htmlFor="upload-file">
                                                                <input
                                                                    style={{ display: "none" }}
                                                                    id="upload-file"
                                                                    name="upload-file"
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
                                    </Modal>

                                    <Card sx={{ maxWidth: 345 }}>
                                        <Box>
                                            <CardMedia
                                                sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                                image={`${URL_SERVER}${actu.image}`}
                                            />
                                        </Box>
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                                className="text-end text-primary"
                                            >
                                                Date de publication: <span style={{ color: "black" }}>{formatDate(actu.dateCreation)}</span>
                                            </Typography>
                                            <Typography gutterBottom variant="h4" component="div">
                                                Titre: {actu.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Description: {actu.description}
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

export default PostActualite