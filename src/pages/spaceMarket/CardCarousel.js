import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from "react";
import Fichier from '../../img/Fichier.svg';
import Courone from '../../img/couronne.svg';
import Graphs from '../../img/graphs.svg';
import Vue from '../../img/vue.svg';
import "./carousel.css";

export function ProfilFisrt() {

    const myFirstProfile = (
        <div className='smoothie-card '>

            <Stack spacing={2} direction="row" className='mt-5'>
                <img className="rectangle" alt="Rectangle" src={Fichier} style={{ width: '30%', height: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                <div className="frame">
                    <Typography variant="h4">
                        Données Derrière
                        Les Graphiques
                    </Typography>
                </div>
            </Stack>
        </div>
    );

    return (
        <div>
            {myFirstProfile}
        </div>
    );
}

export function ProfilSecond() {

    const mySecondProfile = (
        <div className='smoothie-card '>
            <Stack spacing={2} direction="row" className='mt-5'>
                <img className="rectangle" alt="Rectangle" src={Courone} style={{ width: '30%', height: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                <div className="frame">
                    <Typography variant="h4">
                        Contenu De Qualité
                    </Typography>
                </div>
            </Stack>
        </div>
    );

    return (
        <div>
            {mySecondProfile}
        </div>
    )
}

export function ProfilThird() {


    const myThirdProfile = (
        <div className='smoothie-card '>
            <Stack spacing={2} direction="row" className='mt-5'>
                <img className="rectangle" alt="Rectangle" src={Graphs} style={{ width: '30%', height: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                <div className="frame">
                    <Typography variant="h4">
                        Graphiques Dynamiques
                    </Typography>
                </div>
            </Stack>
        </div>
    );

    return (
        <div>
            {myThirdProfile}
        </div>
    )
}

export function ProfilFour() {


    const myFourProfile = (
        <div className='smoothie-card '>
            <Stack spacing={2} direction="row" className='mt-5'>
                <img className="rectangle" alt="Rectangle" src={Vue} style={{ width: '30%', height: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: 'center' }} />
                <div className="frame">
                    <Typography variant="h4">
                        Données Derrière
                        Les Graphiques
                    </Typography>
                </div>
            </Stack>
        </div>
    );

    return (
        <div>
            {myFourProfile}
        </div>
    )
}