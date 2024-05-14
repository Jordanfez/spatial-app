import { Home } from '@mui/icons-material';
import Business from '@mui/icons-material/Business';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from "../../features/UserSlice";


// import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';





const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );


  const Stepper = () => {
    const theme = useTheme();
    const [open,setOpen] = React.useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = { id: '', userName: '', email: '', password: '', userFunction: '' }
    const handleLogout = () => {
      dispatch(setUser(logout))
      navigate("/")
    }

    return (
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* < AppBar /> */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === 'rtl' ?  (
             <ChevronRightIcon />
            ) : (
             <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate("/DashAccueil")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  < Home  /> 
                </ListItemIcon>
                <ListItemText primary='Accuiel' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate("/DahProfilFreelance")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Business /> 
                </ListItemIcon>
                <ListItemText primary='Parametre' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            {/* <ListItem disablePadding sx={{ display: 'block' }}onClick={()=>navigate("/Projets")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                < AddCircleOutlineOutlinedIcon /> 
                </ListItemIcon>
                <ListItemText primary='Ajouter Un Projet' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem> */}
            {/* <ListItem disablePadding sx={{ display: 'block' }}onClick={()=>navigate("/ProfilFreelance   ")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                < AddToPhotos /> 
                </ListItemIcon>
                <ListItemText primary='Ajouter Un Profil' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem> */}
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate("/Parametre")}>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={handleLogout}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <LogoutOutlinedIcon  /> 
                </ListItemIcon>
                <ListItemText primary='Déconnexion' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
       
      </Drawer>
     
    </Box>
  )
}

export default Stepper