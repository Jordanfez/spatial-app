import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import URL_SERVER from '../services/appApi';

export default function ProfileAccount() {
    const navigate = useNavigate();
    const userPhoto = useSelector(state => state.user.profile?.photo);

    console.log('tof', userPhoto);

    const userid = useSelector(state => state.user.userFunction?.id);
    const useridEmployeur = useSelector(state => state.userElement.userFunction?.id);
    // const adminID = useSelector(state => state.Admin.AdminId?.AdminId);
    // console.log('user id', adminID);

    const getUserId = (userid, useridEmployeur) => {
        if (userid) {
            return userid;
        } else {
            return useridEmployeur;
        }
    };

    const userIdToUse = getUserId( userid, useridEmployeur);
    console.log(userIdToUse);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const [enterprises, setEnterprises] = React.useState([]);
    console.log('MON ENTREPRISE', enterprises);
    const userPhotoEmployeur = enterprises[0]?.banniere
    console.log('MON ', userPhotoEmployeur);

    React.useEffect(() => {
        const fetchEnterprises = async () => {
            try {
                const response = await axios.get(`/entrepriseByUser/${useridEmployeur}`);
                setEnterprises(response.data);
            } catch (error) {
                console.error('Error fetching enterprises:', error);
            }
        };

        fetchEnterprises();
    }, 2000);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleGo = () => {
        navigate(userIdToUse === 1 ? "/DashProfil" : "/DahProfilFreelance" );
    }
    // const redirectPath = userIdToUse === 1 ? "/ProfilDash" : (userIdToUse === 2 ? "/DahProfilFreelance" : "/produitAdmin");

    // Ensuite, vous pouvez utiliser cette variable `redirectPath` pour rediriger où vous en avez besoin

    const handleGoDash = () => {
        navigate(userIdToUse === 1 ? "/ProfilDash" : "/DahProfilFreelance" );
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleGo}>Mon Profile</MenuItem>
            <MenuItem onClick={handleGoDash}>Mon compte</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    {userPhoto || userPhotoEmployeur ? (
                        <img src={`${URL_SERVER}${userPhoto || userPhotoEmployeur}`} alt="User Profile" className="w-30 h-30 rounded-full" style={{ width: '40px', height: '40px', borderRadius: ' 50%', marginTop: '-20%' }} />
                    ) : (
                        <AccountCircle style={{ fontSize: '40px' }} />
                    )}
                </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                    <MoreIcon />
                </IconButton>
            </Box>
            {renderMenu}
        </Box>
    );
}