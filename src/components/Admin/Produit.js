import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Modal from '@mui/material/Modal';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import URL_SERVER from '../../services/appApi.js';
import { fetcharticlesFunction, fetcharticlesRejetteFunction, fetcharticlesValideFunction } from '../../services/GetFunction/GetAdmin/getAdminFunctions.js';
import { putAtProduit, putAtProduitrejette } from '../../services/putFunction/Admin/putFunction.js';
import NavBarAdmin from './NavBarAdmin.js';
import SidebarAdmin from './SidebarAdmin.js';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 648,
    height: 566,
    bgcolor: 'background.paper',
    borderRadius: 8,
    boxShadow: 24,
    p: 4,
};

const Produit = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    /**affichage recuperation des articles */
    const [articles, setArticle] = useState([]);
    console.log('les article', articles);
    useEffect(() => {
        const fectData = async () => {
            try {
                const request = await fetcharticlesFunction();
                setArticle(request);
                console.log(request);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, []);

    const [selectedId, setSelectedId] = useState(null);
    console.log("ID =", selectedId);
    const handleOpenModalAccept = (id) => {
        setSelectedId(id);
        setOpen2(true);
    };

    /** valider un article */
    const handleValiderClick = async () => {
        // Vérifiez si l'ID du projet sélectionné est valide
        if (selectedId) {
            try {
                const response =  await putAtProduit({selectedId});
                console.log('Article accepter avec success', response);
                alert('Article Valider avec success')

            } catch (error) {
                console.error('Article failled', error);
            }
        }
    };

    /**rejeter candidature */
    const handleRejeterrClick = async () => {
        // Vérifiez si l'ID du projet sélectionné est valide
        if (selectedId) {
            // Effectuez la requête PUT vers l'API
            await putAtProduitrejette(selectedId)
                .then(response => {
                    // Traitement de la réponse de la requête
                    console.log('Article Rejeter avec success', response);
                    alert('Vous avez Rejeter l\'Article')
                })
                .catch(error => {
                    // Gestion des erreurs de la requête
                    console.error('probleme', error);
                });
        }
    };

    /**affichage recuperation des articles  */
    const [articlesValide, setArticleValide] = useState([]);
    console.log('les article', articlesValide);
    useEffect(() => {
        const fectData = async () => {
            try {
                const response = await fetcharticlesValideFunction();
                setArticleValide(response);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, []);

    /**affichage recuperation des articles */
    const [articlesRejette, setArticlearticlesRejette] = useState([]);
    console.log('les article', articlesRejette);
    useEffect(() => {
        const fectData = async () => {
            try {
                const response = await fetcharticlesRejetteFunction();
                setArticlearticlesRejette(response);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        fectData();
    }, []);

    return (

        <>
            <NavBarAdmin />
            <Box className='mt-5' sx={{ display: 'flex', flexDirection: 'column' }} >
                <SidebarAdmin />
                <Container className='mt-5' direction="column" >
                    <Box sx={{
                        marginBottom: 2,
                        display: 'flex',
                        justifyContent: 'end'
                    }}>

                    </Box>
                    <Box sx={{ width: '100%', typography: 'body1' }} style={{ width: '80%', marginLeft: '15%' }}>
                        <TabContext value={value}>
                            <Box sx={{}}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Tout" value="1" />
                                    <Tab label="Accepter" value="2" />
                                    <Tab label="Refuser" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div className='row'>
                                    {articles.length === 0 ? (
                                        <h1>Pas d'articles trouves</h1>
                                    ) : articles.map((article) => (
                                        <div className='col-4'>
                                            <Fab size="small" color="white" aria-label="add" sx={{ zIndex: 1, top: 60, left: 20 }} onClick={() => handleOpenModalAccept(article.id)}>
                                                <RemoveRedEyeOutlinedIcon color="primary" />
                                            </Fab>
                                            <Modal
                                                aria-labelledby="transition-modal-title"
                                                aria-describedby="transition-modal-description"
                                                open={open2}
                                                onClose={handleClose2}
                                                closeAfterTransition
                                                slots={{ backdrop: Backdrop }}
                                                slotProps={{
                                                    backdrop: {
                                                        timeout: 500,
                                                    },
                                                }}
                                            >
                                                <Fade in={open2}>
                                                    <Box sx={style}>
                                                        <Typography sx={{ mb: 1.5 }} color="text.dark" fontWeight="bold" className='fs-5 text-center'>
                                                            Detail de l'article
                                                        </Typography>
                                                        <div className="row ">
                                                            <div className='col'>
                                                                <FormControl fullWidth sx={{ m: 1 }} variant="outlined" size="small">
                                                                    <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Nom</FormHelperText>
                                                                    <OutlinedInput className='bg-white'
                                                                        id="outlined-adornment-projet"
                                                                        aria-describedby="outlined-projet-helper-text"
                                                                        inputProps={{
                                                                            'aria-label': 'projet',
                                                                        }}
                                                                        defaultValue={`${article.nom}`} disabled
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                        </div>
                                                        <div className="row ">
                                                            <div className='col'>
                                                                <FormControl fullWidth sx={{ m: 1 }} variant="outlined" size="small">
                                                                    <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Prix</FormHelperText>
                                                                    <OutlinedInput className='bg-white'
                                                                        id="outlined-adornment-projet"
                                                                        aria-describedby="outlined-projet-helper-text"
                                                                        inputProps={{
                                                                            'aria-label': 'projet',
                                                                        }}
                                                                        defaultValue={`${article.prix}€`} disabled
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                        </div>
                                                        <div className="row ">
                                                            <div className='col'>
                                                                <FormControl fullWidth sx={{ m: 1 }} variant="outlined" size="small">
                                                                    <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Catégorie</FormHelperText>
                                                                    <OutlinedInput className='bg-white'
                                                                        id="outlined-adornment-projet"
                                                                        aria-describedby="outlined-projet-helper-text"
                                                                        inputProps={{
                                                                            'aria-label': 'projet',
                                                                        }}
                                                                        defaultValue={`${article.categorie.name}`} disabled
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                        </div>

                                                        <div className="row ">

                                                            <div className='col'>
                                                                <FormControl fullWidth sx={{ m: 1, height: '40' }} variant="outlined" >
                                                                    <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Description</FormHelperText>
                                                                    <OutlinedInput className='bg-white'
                                                                        id="outlined-adornment-projet"
                                                                        aria-describedby="outlined-projet-helper-text"
                                                                        inputProps={{
                                                                            'aria-label': 'projet',
                                                                        }}
                                                                        defaultValue={`${article.description}`} disabled
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                        </div>
                                                        <div className='mt-5 d-flex justify-content-end'>

                                                            <Stack direction="row" spacing={2}>

                                                                <Button variant="outlined" color="error" onClick={handleRejeterrClick}>
                                                                    Refuser
                                                                </Button>
                                                                <Button variant="contained" onClick={handleValiderClick}>
                                                                    Accepter
                                                                </Button>
                                                            </Stack>
                                                        </div>
                                                    </Box>
                                                </Fade>
                                            </Modal>
                                            <Card sx={{ maxWidth: 345 }}>
                                                <Box>

                                                    <CardMedia
                                                        sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                                        image={`${URL_SERVER}${article.photo}`}
                                                    />
                                                </Box>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div" className='text-end text-primary'>
                                                        Prix:  {article.prix}€
                                                    </Typography>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Titre: {article.nom}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {article.description}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                <div className='row'>
                                    {articlesValide.length === 0 ? (
                                        <h1>Pas d'articles trouves</h1>
                                    ) : articlesValide.map((article) => (
                                        <div className='col-4'>
                                            <Fab size="small" color="white" aria-label="add" sx={{ zIndex: 1, top: 60, left: 20 }} onClick={() => handleOpenModalAccept(article.id)}>
                                                <RemoveRedEyeOutlinedIcon color="primary" />
                                            </Fab>
                                            <Modal
                                                aria-labelledby="transition-modal-title"
                                                aria-describedby="transition-modal-description"
                                                open={open2}
                                                onClose={handleClose2}
                                                closeAfterTransition
                                                slots={{ backdrop: Backdrop }}
                                                slotProps={{
                                                    backdrop: {
                                                        timeout: 500,
                                                    },
                                                }}
                                            >
                                                <Fade in={open2}>
                                                    <Box sx={style}>
                                                        <Typography sx={{ mb: 1.5 }} color="text.dark" fontWeight="bold" className='fs-5 text-center'>
                                                            Detail de l'article
                                                        </Typography>
                                                        <div className="row ">
                                                            <div className='col'>
                                                                <FormControl fullWidth sx={{ m: 1 }} variant="outlined" size="small">
                                                                    <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Nom</FormHelperText>
                                                                    <OutlinedInput className='bg-white'
                                                                        id="outlined-adornment-projet"
                                                                        aria-describedby="outlined-projet-helper-text"
                                                                        inputProps={{
                                                                            'aria-label': 'projet',
                                                                        }}
                                                                        defaultValue={`${article.nom}`} disabled
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                        </div>
                                                        <div className="row ">
                                                            <div className='col'>
                                                                <FormControl fullWidth sx={{ m: 1 }} variant="outlined" size="small">
                                                                    <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Prix</FormHelperText>
                                                                    <OutlinedInput className='bg-white'
                                                                        id="outlined-adornment-projet"
                                                                        aria-describedby="outlined-projet-helper-text"
                                                                        inputProps={{
                                                                            'aria-label': 'projet',
                                                                        }}
                                                                        defaultValue={`${article.prix}€`} disabled
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                        </div>
                                                        <div className="row ">
                                                            <div className='col'>
                                                                <FormControl fullWidth sx={{ m: 1 }} variant="outlined" size="small">
                                                                    <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Catégorie</FormHelperText>
                                                                    <OutlinedInput className='bg-white'
                                                                        id="outlined-adornment-projet"
                                                                        aria-describedby="outlined-projet-helper-text"
                                                                        inputProps={{
                                                                            'aria-label': 'projet',
                                                                        }}
                                                                        defaultValue={`${article.categorie.name}`} disabled
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                        </div>

                                                        <div className="row ">

                                                            <div className='col'>
                                                                <FormControl fullWidth sx={{ m: 1, height: '40' }} variant="outlined" >
                                                                    <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Description</FormHelperText>
                                                                    <OutlinedInput className='bg-white'
                                                                        id="outlined-adornment-projet"
                                                                        aria-describedby="outlined-projet-helper-text"
                                                                        inputProps={{
                                                                            'aria-label': 'projet',
                                                                        }}
                                                                        defaultValue={`${article.description}`} disabled
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                        </div>
                                                        <div className='mt-5 d-flex justify-content-end'>

                                                            <Stack direction="row" spacing={2}>

                                                                <Button variant="outlined" color="error" onClick={handleRejeterrClick}>
                                                                    Refuser
                                                                </Button>
                                                                <Button variant="contained" onClick={handleValiderClick}>
                                                                    Accepter
                                                                </Button>
                                                            </Stack>
                                                        </div>
                                                    </Box>
                                                </Fade>
                                            </Modal>
                                            <Card sx={{ maxWidth: 345 }}>
                                                <Box>

                                                    <CardMedia
                                                        sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                                        image={`${URL_SERVER}${article.photo}`}
                                                    />
                                                </Box>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div" className='text-end text-primary'>
                                                        Prix: {article.prix}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Titre: {article.nom}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {article.description}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                            <TabPanel value="3">
                                <div className='row'>
                                    {articlesRejette.length === 0 ? (
                                        <h3>Pas d'articles Rejeter trouves</h3>
                                    ) : articlesRejette.map((article) => (
                                        <div className='col-4'>
                                            <Fab size="small" color="white" aria-label="add" sx={{ zIndex: 1, top: 60, left: 20 }} onClick={() => handleOpenModalAccept(article.id)}>
                                                <RemoveRedEyeOutlinedIcon color="primary" />
                                            </Fab>
                                            <Modal
                                                aria-labelledby="transition-modal-title"
                                                aria-describedby="transition-modal-description"
                                                open={open2}
                                                onClose={handleClose2}
                                                closeAfterTransition
                                                slots={{ backdrop: Backdrop }}
                                                slotProps={{
                                                    backdrop: {
                                                        timeout: 500,
                                                    },
                                                }}
                                            >
                                                <Fade in={open2}>
                                                    <Box sx={style}>
                                                        <Typography sx={{ mb: 1.5 }} color="text.dark" fontWeight="bold" className='fs-5 text-center'>
                                                            Detail de l'article
                                                        </Typography>
                                                        <div className="row ">
                                                            <div className='col'>
                                                                <FormControl fullWidth sx={{ m: 1 }} variant="outlined" size="small">
                                                                    <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Nom</FormHelperText>
                                                                    <OutlinedInput className='bg-white'
                                                                        id="outlined-adornment-projet"
                                                                        aria-describedby="outlined-projet-helper-text"
                                                                        inputProps={{
                                                                            'aria-label': 'projet',
                                                                        }}
                                                                        defaultValue={`${article.nom}`} disabled
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                        </div>
                                                        <div className="row ">
                                                            <div className='col'>
                                                                <FormControl fullWidth sx={{ m: 1 }} variant="outlined" size="small">
                                                                    <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Prix</FormHelperText>
                                                                    <OutlinedInput className='bg-white'
                                                                        id="outlined-adornment-projet"
                                                                        aria-describedby="outlined-projet-helper-text"
                                                                        inputProps={{
                                                                            'aria-label': 'projet',
                                                                        }}
                                                                        defaultValue={`${article.prix}€`} disabled
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                        </div>
                                                        <div className="row ">
                                                            <div className='col'>
                                                                <FormControl fullWidth sx={{ m: 1 }} variant="outlined" size="small">
                                                                    <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Catégorie</FormHelperText>
                                                                    <OutlinedInput className='bg-white'
                                                                        id="outlined-adornment-projet"
                                                                        aria-describedby="outlined-projet-helper-text"
                                                                        inputProps={{
                                                                            'aria-label': 'projet',
                                                                        }}
                                                                        defaultValue={`${article.categorie.name}`} disabled
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                        </div>

                                                        <div className="row ">

                                                            <div className='col'>
                                                                <FormControl fullWidth sx={{ m: 1, height: '40' }} variant="outlined" >
                                                                    <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Description</FormHelperText>
                                                                    <OutlinedInput className='bg-white'
                                                                        id="outlined-adornment-projet"
                                                                        aria-describedby="outlined-projet-helper-text"
                                                                        inputProps={{
                                                                            'aria-label': 'projet',
                                                                        }}
                                                                        defaultValue={`${article.description}`} disabled
                                                                    />
                                                                </FormControl>
                                                            </div>
                                                        </div>
                                                        <div className='mt-5 d-flex justify-content-end'>

                                                            <Stack direction="row" spacing={2}>

                                                                <Button variant="outlined" color="error" onClick={handleRejeterrClick}>
                                                                    Refuser
                                                                </Button>
                                                                <Button variant="contained" onClick={handleValiderClick}>
                                                                    Accepter
                                                                </Button>
                                                            </Stack>
                                                        </div>
                                                    </Box>
                                                </Fade>
                                            </Modal>
                                            <Card sx={{ maxWidth: 345 }}>
                                                <Box>

                                                    <CardMedia
                                                        sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                                        image={`${URL_SERVER
                                                        }${article.photo}`}
                                                    />
                                                </Box>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div" className='text-end text-primary'>
                                                        Prix: {article.prix}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Titre: {article.nom}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {article.description}
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
            {/* <Footer /> */}
        </>


    )
}

export default Produit