import { Home } from '@mui/icons-material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
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
import { loginUser } from "../../features/UserElement";

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


  const Sidebar = () => {
    const theme = useTheme();
    const [open,setOpen] = React.useState(true);
    const [isCollapse,setIsCollapse] = React.useState(false);
    
    const handleCollapse = () => {
      setIsCollapse(!isCollapse);
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = { id: '', userName: '', email: '', password: '', userFunction: '' }
    const handleLogout = () => {
      dispatch(loginUser(logout)) 
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
         <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate("/DashProfil")}>
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
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate("/ProfilDash")}>
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
                  <AccountCircleOutlinedIcon /> 
                </ListItemIcon>
                <ListItemText primary='Profil' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate("/Projet")}>
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
                  <BusinessCenterOutlinedIcon /> 
                </ListItemIcon>
                <ListItemText primary='Mes Projets' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}onClick={()=>navigate("/AddProjet")}>
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
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate("/Freelance")}>
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
                  < PersonAddAltOutlinedIcon  /> 
                </ListItemIcon>
                <ListItemText primary='Freelance' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={handleCollapse}>
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
                  <BusinessCenterOutlinedIcon /> 
                </ListItemIcon>
                <ListItemText primary='Mes Produits' sx={{ opacity: open ? 1 : 0 }} />
                {isCollapse ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
              </ListItemButton>
            </ListItem>
            <Collapse in = {isCollapse} timeout="auto" unmountOnExit>
              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate("/liste")}>
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
                      mr: open ? 6 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    < FormatListBulletedIcon   /> 
                  </ListItemIcon>
                  <ListItemText primary='Liste' sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>navigate("/commande")}>
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
                      mr: open ? 6: 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    < AddShoppingCartIcon   /> 
                  </ListItemIcon>
                  <ListItemText primary='Commande' sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Collapse>
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

export default Sidebar