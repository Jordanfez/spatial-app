import React from 'react'
import Box from '@mui/material/Box';
import SidebarAdmin from './SidebarAdmin.js';
import NavBarAdmin from './NavBarAdmin.js';


const Utilisateur = () => {
   


    return (

        <>
            <NavBarAdmin />
            <Box className='mt-5' sx={{ display: 'flex', flexDirection: 'column' }} >
                <SidebarAdmin />
               
            </Box>
            {/* <Footer /> */}
        </>


    )
}

export default Utilisateur