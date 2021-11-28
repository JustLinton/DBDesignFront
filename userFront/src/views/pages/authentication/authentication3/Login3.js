import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

import { isBrowser, isMobile} from 'react-device-detect';
// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../auth-forms/AuthLogin';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';

// assets
import axios from 'axios';

// ================================|| AUTH3 - LOGIN ||================================ //



import AuthBGSVG from 'assets/images/elements/authbgmax.svg'
import {  styled } from '@mui/material/styles';
// import MainCard from 'ui-component/cards/MainCard';
// project imports
// import Customization from '../Customization';

// ==============================|| MINIMAL LAYOUT ||============================== //

const StyledAuthBg = styled('div')((props) => ({
    
    backgroundImage: `url(${AuthBGSVG})`,
    backgroundSize:`1400px 3500px`,
    backgroundRepeat:"no-repeat",
    backgroundPositionX:"center",
    backgroundPositionY:"0px",
    minHeight: '100vh',
    backgroundColor: props.theme.palette.secondary.light,
    // color: '#fff',
    // position: 'relative',
    width:'100%',
}));

const StyledAuthMobileBg = styled('div')((props) => ({
    
    backgroundImage: `url(${AuthBGSVG})`,
    backgroundSize:`1200px 3000px`,
    backgroundRepeat:"no-repeat",
    backgroundPositionX:"-50px",
    backgroundPositionY:"0px",
    minHeight: '100vh',
    backgroundColor: props.theme.palette.secondary.light,
    // color: '#fff',
    // position: 'relative',
    width:'100%',
}));

const Login = () => {
    
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    // console.log("login!");

    const MobileLoginLayout = () =>{
        return (
            <StyledAuthMobileBg>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 3 }}>
                                        <Link to="#">
                                            <Logo />
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography
                                                        color={theme.palette.secondary.main}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                        欢迎回来～
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        fontSize="16px"
                                                        textAlign={matchDownSM ? 'center' : 'inherit'}
                                                    >
                                                        请使用凭证登录以继续。
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <AuthLogin />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                component={Link}
                                                to="/auth/register"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                没有帐号？立即注册叭OvO
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </StyledAuthMobileBg>
        );
    }

    const LoginLayout = () =>{
        return (
            <StyledAuthBg>
            <Grid container direction="row"  sx={{ minHeight: '100vh'}}>
            <Grid item md={6}xs={0}></Grid>
                <Grid item md={5} xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} sx={{ maxWidth: '360px'}} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 3 }}>
                                        <Link to="#">
                                            <Logo />
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography
                                                        color={theme.palette.secondary.main}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                        欢迎回来～
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        fontSize="16px"
                                                        textAlign={matchDownSM ? 'center' : 'inherit'}
                                                    >
                                                        请使用凭证登录以继续。
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <AuthLogin />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                component={Link}
                                                to="/auth/register"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                没有帐号？立即注册叭OvO
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={1}xs={0} ></Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </StyledAuthBg>
        );
    }

    axios.defaults.baseURL = ""
    axios.get("/api/checkLoggedIn", {
    　　params: { 'key': 'value' }
    }).then(function (response) {
    // 　　alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
    if(response.status===200){
       
        // console.log(response);
        if(response.data==="ok"){
            window.location='/onion';
        }
    }

    }).catch(function (error) {
    　　alert(error);
    });

    return (
        <>
            {isBrowser?<LoginLayout/>:isMobile?<MobileLoginLayout/>:<LoginLayout/>}
            {/* {isMobile?<LoginLayout/>:<MobileLoginLayout/>} */}
       </>
    );
};

export default Login;
