
import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShareIcon from '@mui/icons-material/Share';
import WorkIcon from '@mui/icons-material/Work';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import URL_SERVER from '../../services/appApi.js';
import Footer from './Footer.js';
import NavBar from './Header.js';
import Sidebar from './Stepper.js';

const DahProfilFreelance = () => {

    const userId = useSelector((state) => state.user);
    console.log(userId);
    const [profileData, setProfileData] = useState([userId]);
    console.log(profileData);

    return (
        <>
            <NavBar />
            <Box className='mt-5' sx={{ display: 'flex' }}>
                <Sidebar />
                <Box sx={{ p: 3 }}>
                    {/* <h1>Profll</h1> */}
                </Box>
            </Box>
            <div style={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '20%' }}>
                {profileData && (
                    <Container className='mt-5'>
                        <Box>
                            <div className='row'>
                                <div claassName='col-12'>
                                    <Card sx={{}}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={`${URL_SERVER}${userId.profile?.photo}`}
                                                alt="green iguana"
                                            />
                                            {/* <img  alt="Ellipse" src='http://localhost:8081/banniere/capture.png' /> */}
                                            <CardContent sx={{ display: 'flex' }}>
                                                <Box>
                                                    <Typography variant="h5" color="text.dark" fontWeight="semiBold" className='fs-5 mt-2 p-2'>
                                                        Informations
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {userId.profile?.description}
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>

                            </div>
                        </Box>
                        <Box className='mt-3'>
                            <div className='row'>
                                <div className='col-4'>
                                    <Card sx={{}}>
                                        <CardHeader
                                            title="Informations"
                                        />
                                        <Divider />

                                        <CardContent>
                                            <List sx={{ bgcolor: 'background.paper' }}>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <LinkedInIcon style={{ color: '#005CE8' }} />
                                                    </ListItemAvatar>
                                                    <ListItemText secondary={userId.profile?.linkedInLink} primary="LinkedInLink" />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <WorkIcon style={{ color: '#005CE8' }} />
                                                    </ListItemAvatar>
                                                    <ListItemText primary="competences" secondary={userId.profile?.competences[0].name} />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <WorkIcon style={{ color: '#005CE8' }} />
                                                    </ListItemAvatar>
                                                    <ListItemText primary="domain:" secondary={userId.profile?.domain.titled} />
                                                </ListItem>
                                                {/* <ListItem>
                                                <ListItemAvatar>
                                                    <LocationOn style={{ color: '#005CE8' }} />
                                                </ListItemAvatar>
                                                <ListItemText primary="Localisation" secondary={profileData[0].localisation} />
                                            </ListItem> */}
                                            </List>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon style={{ color: '#005CE8' }} />
                                            </IconButton>
                                            <IconButton aria-label="share">
                                                <ShareIcon style={{ color: '#005CE8' }} />
                                            </IconButton>

                                        </CardActions>

                                    </Card>
                                </div>
                                {/* <div className='col-8'>
                                <Card sx={{}}>
                                    <CardHeader
                                        title="Entreprise"
                                    />
                                    <Divider />

                                    <CardContent className='d-flex justify-content-between'>
                                        <div className='col-4 ' >
                                            <div className='row'>
                                                <Typography sx={{ mb: 1.5 }} color="text.dark">
                                                    Description
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {profileData[0].description}
                                                </Typography>
                                            </div>
                                            <div className='row mt-3'>
                                                <Typography sx={{ mb: 1.5 }} color="text.dark">
                                                    Vision
                                                </Typography>
                                                <Typography variant="body2">
                                                    {profileData[0].name}
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className='col-4'>
                                            <ListItemText secondary={profileData[0].typeIndustry.name} primary="Type d’Organisation" />
                                            <ListItemText secondary={profileData[0].typeOrganisation.name} primary="Type D’industrie:" />
                                            <ListItemText secondary={profileData[0].teamLength} primary="Taille de l’equipe:" />
                                            <ListItemText secondary={profileData[0].creationDate} primary="Date de creation:" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div> */}
                            </div>
                        </Box>
                    </Container>
                )}
            </div>
            <Footer />
        </>
    )
}

export default DahProfilFreelance