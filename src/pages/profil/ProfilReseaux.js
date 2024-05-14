import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ProgressBar  } from 'react-bootstrap';
import * as Componentprofil from './Compomentprofil'
import  './profil.css'
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import {   
  setfacebookLink ,
  setLieninstagramLink,
  setLienlinkedLink,
  setLientwitterLink } from '../../features/entrepriseSlice';

const ProfilReseaux = () => {

    // navigation
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [facebook, setFacebook] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [linkedLink, setLinkedLink] = useState('');

  console.log(facebook);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Envoyer la valeur au store
    dispatch(setfacebookLink(facebook));
    dispatch(setLieninstagramLink(instagramLink));
    dispatch(setLienlinkedLink(twitterLink));
    dispatch(setLientwitterLink(linkedLink));

    navigate('/profil/contact');
  };

   //navigate return to
   const handleReturn = (event) => {
    event.preventDefault();

      navigate('/profil/fondation');
    
  };
  
    /** progress bar  */
    const progress = 60;

    /** ajout d'onglet 
    const [inputs, setInputs] = useState(['']); // Tableau initial avec un champ de saisie vide

    const handleAddInput = () => {
      setInputs([...inputs, '']); // Ajoute un champ de saisie vide à la fin du tableau
    };

    const handleRemoveInput = (index) => {
        const updatedInputs = [...inputs];
        updatedInputs.splice(index, 1); // Supprime l'élément du tableau à l'index donné
        setInputs(updatedInputs);
      };
    
      const handleInputChange = (index, value) => {
        const updatedInputs = [...inputs];
        updatedInputs[index] = value;
        setInputs(updatedInputs);
      };*/

  return (
    <Componentprofil.Employeur11>
        {/** progress bar */}
        <div style={{ width: '25%', marginLeft:"67%"}}>
            <label style={{opacity:"40%"}}>setup progress</label>
            <label style={{color:"blue",marginLeft:"50%"}}>60% Complet</label>
            <ProgressBar>
                <ProgressBar now={progress} style={{ backgroundColor: 'blue' }} />
                <ProgressBar now={100 - progress} style={{ backgroundColor: 'lightgray' }} />
            </ProgressBar>
        </div>
    <Componentprofil.Frame82>
        <Componentprofil.FirstCheckBox>
        <Componentprofil.BxUserCircle1>
            </Componentprofil.BxUserCircle1>
            <Componentprofil.Fondation>
                {`Entreprise`}
            </Componentprofil.Fondation>
        </Componentprofil.FirstCheckBox>
        <Componentprofil.FirstCheckBox1>
            <Componentprofil.BxUserCircle1>
            </Componentprofil.BxUserCircle1>
            <Componentprofil.RéseauxSociaux>
                {`informations générales`}
            </Componentprofil.RéseauxSociaux>
        </Componentprofil.FirstCheckBox1>
        <Componentprofil.FirstCheckBox2>
            <Componentprofil.BxGlobe1>
            </Componentprofil.BxGlobe1>
                {`Réseaux Sociaux`}
        </Componentprofil.FirstCheckBox2>
        <Componentprofil.FirstCheckBox3>
            <Componentprofil.BxAt1>
            </Componentprofil.BxAt1>
            <Componentprofil.Contact>
                {`Contact`}
            </Componentprofil.Contact>
        </Componentprofil.FirstCheckBox3>
    </Componentprofil.Frame82>
    <Componentprofil.LogoBannière>
        {/** onglet numero 2 */}
        <div className="content content-3">
            <div className="container" >
              <FormControl fullWidth sx={{ width: 920 }} variant="outlined">
                <FormHelperText id="outlined-projet-helper-text" style={{ opacity: "80vh", fontSize: "20px" }}>
                    lien facebook
                </FormHelperText>
                <OutlinedInput
                  id="outlined-adornment-projet"
                  // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-projet-helper-text"
                  inputProps={{
                    "aria-label": "nom",
                  }}
                  placeholder="EX: https://facebook.com/"
                  value={facebook} 
                  onChange={(event) => setFacebook(event.target.value)}
                />
              </FormControl><br/><br/>

              <FormControl fullWidth sx={{ width: 920 }} variant="outlined">
                <FormHelperText id="outlined-projet-helper-text" style={{ opacity: "80vh", fontSize: "20px" }}>
                    lien instagram
                </FormHelperText>
                <OutlinedInput
                  id="outlined-adornment-projet"
                  // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-projet-helper-text"
                  inputProps={{
                    "aria-label": "nom",
                  }}
                  placeholder="EX: https://instagramLink.com/"
                  value={instagramLink} 
                  onChange={(event) => setInstagramLink(event.target.value)}
                />
              </FormControl><br/><br/>

              <FormControl fullWidth sx={{ width: 920 }} variant="outlined">
                <FormHelperText id="outlined-projet-helper-text" style={{ opacity: "80vh", fontSize: "20px" }}>
                    lien twitterLink
                </FormHelperText>
                <OutlinedInput
                  id="outlined-adornment-projet"
                  // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-projet-helper-text"
                  inputProps={{
                    "aria-label": "nom",
                  }}
                  placeholder="EX: https://twitterLink.com/"
                  value={twitterLink} 
                  onChange={(event) => setTwitterLink(event.target.value)}
                />
              </FormControl><br/><br/>


              <FormControl fullWidth sx={{ width: 920 }} variant="outlined">
                <FormHelperText id="outlined-projet-helper-text" style={{ opacity: "80vh", fontSize: "20px" }}>
                    lien twitterLink
                </FormHelperText>
                <OutlinedInput
                  id="outlined-adornment-projet"
                  // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-projet-helper-text"
                  inputProps={{
                    "aria-label": "nom",
                  }}
                  placeholder="EX: https://linkedLink.com/"
                  value={linkedLink} 
                  onChange={(event) => setLinkedLink(event.target.value)}
                />
              </FormControl><br/><br/>


            {/* <br /><br />
                {inputs.map((input, index) => (
                    <div key={index}>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon3">https://example.com</span>
                        </div>
                        <input
                                type='text'
                                value={input}
                                className='form-control input-group-text'
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                placeholder='entrer une adresse'
                                style={{width: "650px"}}
                        />&nbsp;&nbsp;
                        <Button className='btn btn-light' style={{borderRadius: "5px"}} onClick={() => handleRemoveInput(index)}>X</Button>
                      </div>
                    </div>
                ))} */}
                {/* <Button className='btn btn-light btn-sm' onClick={handleAddInput} style={{width: "95%"}}>+Ajouter</Button>
                <br /><br /> */}
            </div>
        </div>
    </Componentprofil.LogoBannière>
    <Componentprofil.Copyright>
        {`PSI`}
    </Componentprofil.Copyright>
        <button type="button" class="btn btn-light"onClick={handleReturn} style={{position: `absolute`, width: `264px`, left: `469px`, top: `665px`}}>Précedant</button>
        <Button class="btn btn-primary " onClick={handleFormSubmit} style={{position: `absolute`, width: `264px`, left: `769px`, top: `665px`}}>Suivant</Button>
    <Componentprofil.Line1>
    </Componentprofil.Line1>
    <Componentprofil.Line41>
    </Componentprofil.Line41>
    <Componentprofil.LineResau>
    </Componentprofil.LineResau>
</Componentprofil.Employeur11>
  )
}

export default ProfilReseaux
