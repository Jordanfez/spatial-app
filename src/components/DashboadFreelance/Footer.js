import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Sidebar from './Sidebar.js'



const Footer = () => {
  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        
          PSI
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  return ( 

    <>
      <Box component="footer" sx={{ p: 3}} className='border-top mt-5'>
       {/* <Sidebar/>  */}
       <Copyright/>
      
      </Box>  
    </>
   
  
  )
}

export default Footer