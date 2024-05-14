import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container } from '@mui/material';
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import URL_SERVER from '../../services/appApi.js';
import { deleteAtdelete, deleteAtdeleteGps, deleteAtdeleteImagerie } from '../../services/DeleteFunction/DeleteEmployer/delete.js';
import { getarticleByCategorieAndUserFirst, getarticleByCategorieAndUserSecond, getarticleByCategorieAndUserThird } from '../../services/GetFunction/GetEmployers/getEmployersFunctions.js';
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import Sidebar from './Sidebar.js';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 648,
    height: 266,
    bgcolor: 'background.paper',
    borderRadius: 8,
    boxShadow: 24,
    p: 4,
};

const CommandeProduit = () => {
    const [value, setValue] = React.useState('1');
    const [imageries, setImagerie] = useState([]);

    const [alert, setAlert] = React.useState({ variant: "", message: "" });


    /** recuperation du user connecter */

    const users = useSelector((state) => state.userElement);
    console.log(users.id);
    const user = users.id;

    /** end user */

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    /**affichage(recuperation des donnees) des imagerie */

    useEffect(() => {
        const fectData = async () => {
            try {
                const response = await getarticleByCategorieAndUserFirst(user);
                setImagerie(response);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, [user]);

    /** end imagerie */

    /**modal from imagerie */
    const [openModalImagerie, setOpenModalImagerie] = useState(false);
    const handleCloseImagerie = () => setOpenModalImagerie(false);
    const [selectedIdImagerie, setSelectedIdImagerie] = useState(null);

    const handleOpenModalAcceptImagerie = (id) => {
        setSelectedIdImagerie(id);
        setOpenModalImagerie(true);
    };
    /**traitement de la requette */

    const handleValiderClickImagerie = async () => {
        // Vérifiez si l'ID du projet sélectionné est valide

        if (selectedIdImagerie) {
            await deleteAtdeleteImagerie(selectedIdImagerie)
            // axios.delete(`/article/${selectedIdImagerie}`)
                .then(response => {
                    console.log('Article supprimer avec sucess:', response.data);

                    setAlert({ variant: "success", message: "Article supprimer avec sucess" });
                    // Close the modal and fetch updated projects
                    handleCloseImagerie();
                })
                .catch(error => {
                    console.error('Error delete article:', error);
                    setAlert({ variant: "warning", message: "Une erreur est survenu." });
                });
        }

    };

    /** end modal from imagerie */


    /** section gps */

    /**affichage(recuperation des donnees) des GPS */
    const [gps, setGps] = useState([]);
    console.log("mes donnee gps", gps);
    useEffect(() => {
        const fectData = async () => {
            try {
                const response = await getarticleByCategorieAndUserSecond(user);
                setGps(response);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };
        fectData();
    }, [user]);


    const [openModalGps, setOpenModalGps] = useState(false);
    const handleCloseGps = () => setOpenModalGps(false);

    const [selectedIdGps, setSelectedIdGps] = useState(null);

    const handleOpenModalAcceptGps = (id) => {
        setSelectedIdGps(id);
        setOpenModalGps(true);
    };

    const handleValiderClickGps = async () => {
        if (selectedIdGps) {
            await deleteAtdeleteGps(selectedIdGps)
            // axios.delete(`/article/${selectedIdGps}`)
                .then(response => {
                    console.log('Article supprimer avec sucess:', response.data);

                    setAlert({ variant: "success", message: "Article supprimer avec sucess" });
                    // Close the modal and fetch updated projects
                    handleCloseImagerie();
                })
                .catch(error => {
                    console.error('Error delete article:', error);
                    setAlert({ variant: "warning", message: "Une erreur est survenu." });
                });
        }

    };
    /**end section */


    /**section donne metherologique */

    /**affichage(recuperation des donnees) des metheorologique */
    const [metheorologique, setmetheorologique] = useState([]);
    console.log(metheorologique);
    useEffect(() => {
        const fectData = async () => {
            try {
                const response = await getarticleByCategorieAndUserThird(user);
                setmetheorologique(response);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, []);

    /**modal from Gps */
    const [openModalmetheorologique, setOpenModalmetheorologique] = useState(false);
    const handleClosemetheorologique = () => setOpenModalmetheorologique(false);

    const [selectedIdmetheorologique, setSelectedIdmetheorologique] = useState(null);

    const handleOpenModalAcceptmetheorologique = (id) => {
        setSelectedIdmetheorologique(id);
        setOpenModalmetheorologique(true);
    };
    const handleValiderClickmetheorologique = async () => {
        // Vérifiez si l'ID du projet sélectionné est valide

        if (selectedIdmetheorologique) {
            await deleteAtdelete(selectedIdmetheorologique)
            // axios.delete(`/article/${selectedIdmetheorologique}`)
                .then(response => {
                    console.log('Article supprimer avec sucess:', response.data);

                    setAlert({ variant: "success", message: "Article supprimer avec sucess" });
                    // Close the modal and fetch updated projects
                    handleCloseImagerie();
                })
                .catch(error => {
                    console.error('Error delete article:', error);
                    setAlert({ variant: "warning", message: "Une erreur est survenu." });

                });
        }

    };

    /** end modal from metheorologique */

    return (

        <>
            <NavBar />
            <Box className='mt-5' sx={{ display: 'flex', flexDirection: 'column' }} style={{ width: '70%', marginLeft: '20%' }}>
                <Sidebar />
                <Container className='mt-5' direction="column" >
                    <Box sx={{
                        marginBottom: 2,
                        display: 'flex',
                        justifyContent: 'end'
                    }}>
                        <Button variant="contained" >Supprimer</Button>

                    </Box>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{}}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Imageries" value="1" />
                                    <Tab label="GPS" value="2" />
                                    <Tab label="Données métheorologiques" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div className='row'>
                                    {imageries.length === 0 ? (
                                        <h3>Pas d'articles trouves</h3>
                                    ) : imageries.map((image) => (
                                        <div className='col-4'>
                                            <Fab size="small" color="white" aria-label="add" sx={{ zIndex: 1, top: 60, left: 20 }} onClick={() => handleOpenModalAcceptImagerie(image.id)}>
                                                <DeleteForeverIcon color="warning" />
                                            </Fab>
                                            <Modal
                                                aria-labelledby="transition-modal-title"
                                                aria-describedby="transition-modal-description"
                                                open={openModalImagerie}
                                                onClose={handleCloseImagerie}
                                                closeAfterTransition
                                                slots={{ backdrop: Backdrop }}
                                                slotProps={{
                                                    backdrop: {
                                                        timeout: 500,
                                                    },
                                                }}
                                            >
                                                <Fade in={openModalImagerie}>
                                                    <Box sx={style}>
                                                        <div className={alert.variant ? "alert variant" : "alert alert-danger text-center"} role="alert" fontWeight="bold">
                                                            {alert.variant ? alert.message : "Alert voulez vous supprimer l'article correspondant ?"}
                                                        </div>
                                                        {alert.variant && (
                                                            <Alert variant="filled" severity={alert.variant} className="alert-message">
                                                                {alert.message}
                                                            </Alert>
                                                        )}
                                                        <div className="row mt-5" >
                                                            <div className='col-6'>
                                                                <Button style={{ width: '100%' }} color="warning" variant="primary" onClick={handleCloseImagerie}>Annuler</Button>
                                                            </div>
                                                            <div className='col-6'>
                                                                <Button style={{ width: '100%' }} variant="contained" onClick={handleValiderClickImagerie}>Confirmer</Button>
                                                            </div>
                                                        </div>
                                                    </Box>
                                                </Fade>
                                            </Modal>
                                            <Card sx={{ maxWidth: 345 }}>
                                                <Box>

                                                    <CardMedia
                                                        sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                                        image={`${URL_SERVER}${image.photo}`}
                                                    />
                                                </Box>
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="div"
                                                        className="text-end text-primary"
                                                    >
                                                        PRIX: <span style={{ color: "black" }}>{image.prix}</span>
                                                    </Typography>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        {image.nom}
                                                    </Typography>
                                                    <Typography variant="h6" color="text.secondary">
                                                        Description: {image.description}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                <div className='row'>
                                    {gps.length === 0 ? (
                                        <h3>Pas d'articles trouves</h3>
                                    ) : gps.map((donneeGps) => (
                                        <div className='col-4'>
                                            <Fab size="small" color="white" aria-label="add" sx={{ zIndex: 1, top: 60, left: 20 }} onClick={() => handleOpenModalAcceptGps(donneeGps.id)}>
                                                <DeleteForeverIcon color="warning" />
                                            </Fab>
                                            <Modal
                                                aria-labelledby="transition-modal-title"
                                                aria-describedby="transition-modal-description"
                                                open={openModalGps}
                                                onClose={handleCloseGps}
                                                closeAfterTransition
                                                slots={{ backdrop: Backdrop }}
                                                slotProps={{
                                                    backdrop: {
                                                        timeout: 500,
                                                    },
                                                }}
                                            >
                                                <Fade in={openModalGps}>
                                                    <Box sx={style}>
                                                        <Typography sx={{ mb: 1.5 }} color="text.dark" fontWeight="bold" className='fs-5 text-center'>
                                                            Detail de l'article
                                                        </Typography>
                                                        <div className={alert.variant ? "alert variant" : "alert alert-danger text-center"} role="alert" fontWeight="bold">
                                                            {alert.variant ? alert.message : "Alert voulez vous supprimer l'article correspondant ?"}
                                                        </div>
                                                        {alert.variant && (
                                                            <Alert variant="filled" severity={alert.variant} className="alert-message">
                                                                {alert.message}
                                                            </Alert>
                                                        )}
                                                        <div className="row mt-5" >
                                                            <div className='col-6'>
                                                                <Button style={{ width: '100%' }} color="warning" variant="primary" onClick={handleCloseGps}>Annuler</Button>
                                                            </div>
                                                            <div className='col-6'>
                                                                <Button style={{ width: '100%' }} variant="contained" onClick={handleValiderClickGps}>Confirmer</Button>
                                                            </div>
                                                        </div>
                                                    </Box>
                                                </Fade>
                                            </Modal>
                                            <Card sx={{ maxWidth: 345 }}>
                                                <Box>
                                                    <CardMedia
                                                        sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                                        image={`${URL_SERVER}${donneeGps.photo}`}
                                                    />
                                                </Box>
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="div"
                                                        className="text-end text-primary"
                                                    >
                                                        prix: {donneeGps.prix}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        {donneeGps.nom}
                                                    </Typography>
                                                    <Typography variant="h6" color="text.secondary">
                                                        Description: {donneeGps.description}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                            <TabPanel value="3">
                                <div className='row'>
                                    {metheorologique.length === 0 ? (
                                        <h3>Pas d'articles trouves</h3>
                                    ) : metheorologique.map((metheo) => (
                                        <div className='col-4'>
                                            <Fab size="small" color="white" aria-label="add" sx={{ zIndex: 1, top: 60, left: 20 }} onClick={() => handleOpenModalAcceptmetheorologique(metheo.id)}>
                                                <DeleteForeverIcon color="warning" />
                                            </Fab>
                                            <Modal
                                                aria-labelledby="transition-modal-title"
                                                aria-describedby="transition-modal-description"
                                                open={openModalmetheorologique}
                                                onClose={handleClosemetheorologique}
                                                closeAfterTransition
                                                slots={{ backdrop: Backdrop }}
                                                slotProps={{
                                                    backdrop: {
                                                        timeout: 500,
                                                    },
                                                }}
                                            >
                                                <Fade in={openModalmetheorologique}>
                                                    <Box sx={style}>
                                                        <div className={alert.variant ? "alert variant" : "alert alert-danger text-center"} role="alert" fontWeight="bold">
                                                            {alert.variant ? alert.message : "Alert voulez vous supprimer l'article correspondant ?"}
                                                        </div>
                                                        {alert.variant && (
                                                            <Alert variant="filled" severity={alert.variant} className="alert-message">
                                                                {alert.message}
                                                            </Alert>
                                                        )}
                                                        <div className="row mt-5" >
                                                            <div className='col-6'>
                                                                <Button style={{ width: '100%' }} color="warning" variant="primary" onClick={handleClosemetheorologique}>Annuler</Button>
                                                            </div>
                                                            <div className='col-6'>
                                                                <Button style={{ width: '100%' }} variant="contained" onClick={handleValiderClickmetheorologique}>Confirmer</Button>
                                                            </div>
                                                        </div>
                                                    </Box>
                                                </Fade>
                                            </Modal>
                                            <Card sx={{ maxWidth: 345 }}>
                                                <Box>
                                                    <CardMedia
                                                        sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                                        image={`${URL_SERVER}${metheo.photo}`}
                                                    />
                                                </Box>
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="div"
                                                        className="text-end text-primary"
                                                    >
                                                        prix: {metheo.prix}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {metheo.nom}
                                                    </Typography>
                                                    <Typography variant="h6" color="text.secondary">
                                                        Description: {metheo.description}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                        </TabContext>
                    </Box>

                </Container>
            </Box>
            <Footer />
        </>


    )
}

export default CommandeProduit