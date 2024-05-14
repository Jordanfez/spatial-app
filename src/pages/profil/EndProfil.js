import React from 'react';
import * as Componentprofil from './Compomentprofil'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ProgressBar  } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function EndProfil() {

    /** progress bar  */
    //const progress = 100;

    const navigate = useNavigate();

    const handleDash = () => {
      navigate('/DashProfil');
    };

    const handleFree = () => {
        navigate('/AddProjet');
      };

    return (
        <Componentprofil.Employeur51>
            <Componentprofil.Rectangle1362>
            {/** progress bar 
            <div style={{ width: '390px', marginLeft:"17%", marginTop:"20%"}}>
                <label style={{color:"blue",marginLeft:"70%"}}>100% Complet</label>
                <ProgressBar>
                   <ProgressBar now={progress} style={{ backgroundColor: 'blue' }} />
                   <ProgressBar now={100 - progress} style={{ backgroundColor: 'lightgray' }} />
                </ProgressBar>
            </div>*/}
            </Componentprofil.Rectangle1362>
            <Componentprofil.Rectangle1363>
                <div style={{position: `absolute`, left: `27px`, top: `38px`}}>{`GOOD`}</div>
            </Componentprofil.Rectangle1363>
            <Componentprofil.Q100>
                {`100%`}
            </Componentprofil.Q100>
            <Componentprofil.Complet>
                {`Complet`}
            </Componentprofil.Complet>
            <Componentprofil.Copyright>
                {`copyright`}
            </Componentprofil.Copyright>
            <Componentprofil.Frame77>
            </Componentprofil.Frame77>
                <button onClick={handleDash} type="button" class="btn btn-light" style={{position: `absolute`, width: `214px`, left: `720px`, top: `645px`}}>Voir votre Dashboard</button>
               <Button onClick={handleFree} class="btn btn-primary " style={{position: `absolute`,  width: `214px`, left: `942px`, top: `645px`}}>Poster un travail</Button>
            <Componentprofil.Frame88>
            </Componentprofil.Frame88>
            <Componentprofil.Line4>
            </Componentprofil.Line4>
            <Componentprofil.FélicitationProfilCr>
                {`Félicitation profil crée  avec succès`}
            </Componentprofil.FélicitationProfilCr>
            <Componentprofil.LoremIpsumDolorSitAm>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id purus sodales, pulvinar purus `}
            </Componentprofil.LoremIpsumDolorSitAm>
            <Componentprofil.BxCheckDouble1>
            </Componentprofil.BxCheckDouble1>
        </Componentprofil.Employeur51>);
    }

export default EndProfil;