import React, { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";
// import Item from "./Item";
// import "./styles.css";
import StarIcon from '@mui/icons-material/Star';
import { Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import URL_SERVER from '../../services/appApi';
// import { ProfilFisrt } from '../CardForCarrouselProfil';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { fetchprofilesFunction } from '../../services/GetFunction/GetEmployers/getEmployersFunctions';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
const Carouselle = () => {

    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const response = await fetchprofilesFunction();
                setProfiles(response.slice(-9)); // On récupère les 9
                console.log('valeurs profile', response);
            } catch (error) {
                console.error('Error fetching profiles:', error);
            }
        };

        fetchProfiles();
    }, [])
    return (
        <div className='App'>
            <Carousel breakPoints={breakPoints}>
                {profiles.map(item =>
                    <Grid >
                        <Grid key={item.id} >
                            <Paper elevation={0} sx={{ padding:'5%' }}>
                                <Card sx={{ width: '300px',borderRadius: '2%', boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.1)' } }>
                                    <CardMedia
                                        component="img"
                                        style={{
                                            borderRadius: '50%',
                                            width: '150px',
                                            height: '150px', marginTop: '5%', marginLeft: '25%'
                                        }}
                                        image={`${URL_SERVER}${item.photo}`}
                                        alt="Live from space album cover"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" className='text-center'>
                                            About me: <br /> <Typography className='text-center'> {item.description} </Typography>
                                        </Typography>
                                        <Typography >
                                            <Typography variant="h6" component="div"> what he says about me: </Typography>"I am very satisfied to work with this freelancer. very talented and rigorous in his work."
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                        <Link style={{ cursor: 'pointer' }} underline="none">
                                            <StarIcon ></StarIcon>
                                            <StarIcon ></StarIcon>
                                            <StarIcon ></StarIcon>
                                            <StarIcon ></StarIcon>
                                            <StarIcon ></StarIcon>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>
                    </Grid>

                )}
            </Carousel>
        </div>)
}

export default Carouselle
