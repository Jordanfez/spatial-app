import StarIcon from '@mui/icons-material/Star';
import Skeleton from '@mui/material/Skeleton';
import React, { useEffect, useState } from "react";
import URL_SERVER from "../services/appApi";
import { fetchprofilesFunction } from '../services/GetFunction/GetEmployers/getEmployersFunctions';
import "./CardForCarrouselProfil.css";
export function ProfilFisrt() {

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetchprofilesFunction();
        setProfiles(response);
        console.log('valeurs de result', response);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, [])

  const myFirstProfile = profiles.length > 0 ? (
    <div  style={{ width: '70%', height: '100px', marginLeft: '20%', marginLeft: '20%' }}>
      <img alt="Rectangle" src={`${URL_SERVER}${profiles[0].photo}`} style={{ width: '150px', height: '150px',borderRadius: '50%', marginTop:'20%', marginLeft:'25%' }} />
      <div className="frame">
        <p className="text-wrapper">
          {profiles[0].description}
        </p>
      </div>
      <div className="div">
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <div className="frame-2"><br />
          <div className="text-wrapper-2" style={{ marginLeft: '-45%' }}>"Je suis très satisfait de travailler avec ce freelance.<br /> Il a fait preuve d'un excellent professionnalisme et a <br /> livré un travail de haute qualité dans les délais impartis"</div>
        </div>
      </div>
    </div>
  ) : (
    <div className='smoothie-card '>
        <Skeleton variant="rectangular" width="70%" />      
        <div className="frame">
        <Skeleton variant="rectangular" sx={{ borderRadius: 2 }} />
      </div>
      <div className="div">
        <Skeleton variant="circular">
        </Skeleton>
        <Skeleton variant="circular">
        </Skeleton>
        <Skeleton variant="circular">
        </Skeleton>
        <div className="frame-2"><br />
          <Skeleton variant="rectangular" sx={{ borderRadius: 2 }} />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {myFirstProfile}
    </div>
  );
}

export function ProfilSecond() {

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetchprofilesFunction();
        setProfiles(response);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, [])


  const mySecondProfile = profiles.length > 1 ? (
    <div className='smoothie-card ' style={{ width: '70%', height: '400px', marginLeft: '20%'}}>
      <img className="rectangle" alt="Rectangle" src={`${URL_SERVER}${profiles[1].photo}`} style={{ width: 'auto', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
      <div className="frame">
        <p className="text-wrapper">
          {profiles[0].description}
        </p>
      </div>
      <div className="div">
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <div className="frame-2"><br />
          <div className="text-wrapper-2" style={{ marginLeft: '-45%' }}>"Je suis très satisfait de travailler avec ce freelance.<br /> Il a fait preuve d'un excellent professionnalisme et a <br /> livré un travail de haute qualité dans les délais impartis"</div>
        </div>
      </div>
    </div>
  ) : (
    <div className='smoothie-card '>
        <Skeleton variant="rectangular" width="70%" />      
      <div className="frame">
        <Skeleton variant="rectangular" sx={{ borderRadius: 2 }} />
      </div>
      <div className="div">
        <Skeleton variant="circular">
        </Skeleton>
        <Skeleton variant="circular">
        </Skeleton>
        <Skeleton variant="circular">
        </Skeleton>
        <div className="frame-2"><br />
          <Skeleton variant="rectangular" sx={{ borderRadius: 2 }} />
        </div>
      </div>
    </div>
  );


  return (
    <div>
      {mySecondProfile}
    </div>
  )
}

export function ProfilThird() {

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetchprofilesFunction();
        setProfiles(response);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, [])

  const myThirdProfile = profiles.length > 2 ? (
    <div className='smoothie-card ' style={{ width: '70%', height: '400px', marginLeft: '15%'}}>
      <img className="rectangle" alt="Rectangle" src={`${URL_SERVER}${profiles[2].photo}`} style={{ width: 'auto', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
      <div className="frame">
        <p className="text-wrapper">
          {profiles[0].description}
        </p>
      </div>
      <div className="div">
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <div className="frame-2"><br />
          <div className="text-wrapper-2" style={{ marginLeft: '-45%' }}>"Je suis très satisfait de travailler avec ce freelance.<br /> Il a fait preuve d'un excellent professionnalisme et a <br /> livré un travail de haute qualité dans les délais impartis"</div>
        </div>
      </div>
    </div>
  ) : (
    <div className='smoothie-card '>
        <Skeleton variant="rectangular" width="70%" />      
      <div className="frame">
        <Skeleton variant="rectangular" sx={{ borderRadius: 2 }} />
      </div>
      <div className="div">
        <Skeleton variant="circular">
        </Skeleton>
        <Skeleton variant="circular">
        </Skeleton>
        <Skeleton variant="circular">
        </Skeleton>
        <div className="frame-2"><br />
          <Skeleton variant="rectangular" sx={{ borderRadius: 2 }} />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {myThirdProfile}
    </div>
  )
}

export function ProfilFour() {

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetchprofilesFunction();
        setProfiles(response);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, [])


  const myFourProfile = profiles.length > 3 ? (
    <div className='smoothie-card ' style={{ width: '70%', height: '400px', marginLeft: '20%'}}>
      <img className="rectangle" alt="Rectangle" src={`${URL_SERVER}${profiles[3].photo}`} style={{ width: 'auto', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
      <div className="frame">
        <p className="text-wrapper">
          {profiles[0].description}
        </p>
      </div>
      <div className="div">
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <StarIcon ></StarIcon>
        <div className="frame-2"><br />
          <div className="text-wrapper-2" style={{ marginLeft: '-45%' }}>"Je suis très satisfait de travailler avec ce freelance.<br /> Il a fait preuve d'un excellent professionnalisme et a <br /> livré un travail de haute qualité dans les délais impartis"</div>
        </div>
      </div>
    </div>
  ) : (
    <div className='smoothie-card '>
        <Skeleton variant="rectangular" width="70%" />      
      <div className="frame">
        <Skeleton variant="rectangular" sx={{ borderRadius: 2 }} />
      </div>
      <div className="div">
        <Skeleton variant="circular">
        </Skeleton>
        <Skeleton variant="circular">
        </Skeleton>
        <Skeleton variant="circular">
        </Skeleton>
        <div className="frame-2"><br />
          <Skeleton variant="rectangular" sx={{ borderRadius: 2 }} />
        </div>
      </div>
    </div>
  );


  return (
    <div>
      {myFourProfile}
    </div>
  )
}