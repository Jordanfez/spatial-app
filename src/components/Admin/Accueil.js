import React from 'react'
import Box from '@mui/material/Box';
import SidebarAdmin from './SidebarAdmin.js';
import NavBarAdmin from './NavBarAdmin.js';

// import Footer from './Footer.js'




const Accueil = () => {
    


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

export default Accueil