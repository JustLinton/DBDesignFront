// material-ui
// import { styled } from '@mui/material/styles';

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //


// import UserLintonBGPNG from 'assets/images/elements/authbgmax.svg'
import {  styled } from '@mui/material/styles';
// import MainCard from 'ui-component/cards/MainCard';
// project imports
// import Customization from '../Customization';

// ==============================|| MINIMAL LAYOUT ||============================== //

// const StyledMainCard = styled('div')((props) => ({
    
//     backgroundImage: `url(${UserLintonBGPNG})`,
//     backgroundSize:`${props.bgSizeX} 300%`,
//     backgroundRepeat:"no-repeat",
//     backgroundPositionX:"center",
//     backgroundPositionY:"0px",
//     minHeight: '100vh',
//     backgroundColor: props.theme.palette.secondary.light,
//     // color: '#fff',
//     // position: 'relative',
//     width:'100%',
// }));

const AuthWrapper1 = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    minHeight: '100vh'
}));

export default AuthWrapper1;
