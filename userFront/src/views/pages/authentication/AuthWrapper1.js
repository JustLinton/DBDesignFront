// material-ui
// import { styled } from '@mui/material/styles';

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //


import UserLintonBGPNG from 'assets/images/elements/authbg.png'
import {  styled } from '@mui/material/styles';
// import MainCard from 'ui-component/cards/MainCard';
// project imports
// import Customization from '../Customization';

// ==============================|| MINIMAL LAYOUT ||============================== //

const StyledMainCard = styled('div')(({ theme }) => ({
    backgroundImage: `url(${UserLintonBGPNG})`,
    backgroundSize:'100% 100%',
    backgroundColor: theme.palette.primary.light,
    color: '#fff',
    position: 'relative',
    width:'100%',
}));

const AuthWrapper1 = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    minHeight: '100vh'
}));

export default StyledMainCard;
