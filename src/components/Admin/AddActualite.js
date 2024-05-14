import React from 'react'
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import SidebarAdmin from './SidebarAdmin.js'
import NavBarAdmin from './NavBarAdmin.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Fab from '@mui/material/Fab';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// import Footer from './Footer.js'

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

const AddActualite = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [categorie, setCategorie] = React.useState('');

    const handleChangeAge = (event) => {
        setCategorie(event.target.value);
    };
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
                        <Button onClick={handleOpen} variant="contained" >Ajouter</Button>
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
                                    <Typography sx={{ mb: 1.5 }} color="text.dark" fontWeight="bold" className='fs-5 text-center'>
                                        Ajouter un article
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
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className='row'>

                                        <div className="col">
                                            <FormControl fullWidth sx={{ m: 1, }} variant="outlined" size="small">
                                                <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Catégorie</FormHelperText>
                                                <InputLabel id="demo-select-small-label"></InputLabel>
                                                <Select
                                                    labelId="demo-select-small-label"
                                                    id="demo-select-small"
                                                    value={categorie}
                                                    label="Categorie"
                                                    onChange={handleChangeAge}
                                                >

                                                    <MenuItem value="">Imagerie</MenuItem>
                                                    <MenuItem value={20}>GPS</MenuItem>
                                                    <MenuItem value={30}>Données métheorologiques</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>



                                    </div>
                                    <div className="row ">
                                        <div className='col'>
                                            <FormControl fullWidth sx={{ m: 1, height: '40' }} variant="outlined" size="small">
                                                <FormHelperText id="outlined-projet-helper-text" className='fs-6 text-dark fw-bold'>Description</FormHelperText>
                                                <OutlinedInput className='bg-white'
                                                    id="outlined-adornment-projet"
                                                    aria-describedby="outlined-projet-helper-text"
                                                    inputProps={{
                                                        'aria-label': 'projet',
                                                    }}
                                                    placeholder='Description...'
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className='mt-5 d-flex justify-content-between'>
                                        <div><Button variant="outlined">Annuler</Button></div>
                                        <div><Button variant="contained">Ajouter</Button></div>
                                    </div>
                                </Box>
                            </Fade>
                        </Modal>
                    </Box>
                    <Box sx={{ width: '100%', typography: 'body1' }}>

                        <div className='row'>
                            <div className='col-4'>
                                <Fab size="small" color="white" aria-label="add" sx={{ zIndex: 1, top: 60, left: 20 }} onClick={handleOpen2}>
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
                                                            placeholder='Prix'
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
                                                            placeholder='Imagerie'
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
                                                            placeholder='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div className='mt-5 d-flex justify-content-end'>
                                                <Button variant="contained">Modifier</Button>
                                            </div>
                                        </Box>
                                    </Fade>
                                </Modal>
                                <Card sx={{ maxWidth: 345 }}>
                                    <Box>

                                        <CardMedia
                                            sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                            image="data:image/jpeg;base64,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"
                                        />
                                    </Box>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className='text-end text-primary'>
                                            prix
                                        </Typography>
                                        <Typography gutterBottom variant="h4" component="div">
                                            titre
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className='col-4'>
                                <Fab size="small" color="white" aria-label="add" sx={{ zIndex: 1, top: 60, left: 20 }} onClick={handleOpen2}>
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
                                                            placeholder='Prix'
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
                                                            placeholder='Imagerie'
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
                                                            placeholder='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div className='mt-5 d-flex justify-content-end'>
                                                <Button variant="contained">Modifier</Button>
                                            </div>
                                        </Box>
                                    </Fade>
                                </Modal>
                                <Card sx={{ maxWidth: 345 }}>
                                    <Box>

                                        <CardMedia
                                            sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                            image="data:image/jpeg;base64,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"
                                        />
                                    </Box>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className='text-end text-primary'>
                                            prix
                                        </Typography>
                                        <Typography gutterBottom variant="h4" component="div">
                                            titre
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className='col-4'>
                                <Fab size="small" color="white" aria-label="add" sx={{ zIndex: 1, top: 60, left: 20 }} onClick={handleOpen2}>
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
                                                            placeholder='Prix'
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
                                                            placeholder='Imagerie'
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
                                                            placeholder='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div className='mt-5 d-flex justify-content-end'>
                                                <Button variant="contained">Modifier</Button>
                                            </div>
                                        </Box>
                                    </Fade>
                                </Modal>
                                <Card sx={{ maxWidth: 345 }}>
                                    <Box>

                                        <CardMedia
                                            sx={{ height: 200, margin: 1, borderRadius: 2 }}
                                            image="data:image/jpeg;base64,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"
                                        />
                                    </Box>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className='text-end text-primary'>
                                            prix
                                        </Typography>
                                        <Typography gutterBottom variant="h4" component="div">
                                            titre
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Box>

                </Container>
            </Box>
            {/* <Footer /> */}
        </>
    )
}

export default AddActualite