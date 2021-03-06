import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

// project imports
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';
// import Customization from '../Customization';
import navigation from 'menu-items';
import { drawerWidth } from 'store/constant';
import { SET_MENU } from 'store/actions';

// assets
import { IconChevronRight } from '@tabler/icons';
import axios from 'axios';


// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginRight: '10px'
        }
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        }
    })
}));

// ==============================|| MAIN LAYOUT ||============================== //

var userData = {'Name':'?????????...'};
var notiRows = [{'Title':'?????????...'},{'Title':'?????????...'}];
var notiRowsTotalNum = 0;

const MainLayout = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));

    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened);
    const dispatch = useDispatch();
    const handleLeftDrawerToggle = () => {
        dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
    };

    useEffect(() => {
        dispatch({ type: SET_MENU, opened: !matchDownMd });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownMd]);

    const [loading, setLoading] = useState(true);

    const getNotificationList = () =>{

        axios.get("/api/notilist", {
            ??????params: { 'test': 'false' }
            }).then(function (response) {
            // ??????alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
            if(response.status===200){
            
            //     console.log(response);
                if(response.data==="notlogged"){
                    window.location='/auth/login';
                }

		    	notiRows=response.data['Rows'];	
                notiRowsTotalNum=response.data['TotalNum'];	
			//     console.log(notiRows);

			setLoading(false);
                }
            }).catch(function (error) {
            // ??????alert(error);
            });
    }

    axios.defaults.baseURL = ""
    axios.get("/api/checkLoggedIn", {
    ??????params: { 'key': 'value' }
    }).then(function (response) {
    // ??????alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
    if(response.status===200){
       
        // console.log(response);
        if(response.data==="notlogged"){
            window.location='/auth/login';
        }
    }

    }).catch(function (error) {
    // ??????alert(error);
    });

  
    axios.get("/api/profile", {
        ??????params: { 'verbose': 'false' }
        }).then(function (response) {
        // ??????alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
        if(response.status===200){
           
            // console.log(response);
            if(response.data==="notlogged"){
                window.location='/auth/login';
            }

                userData=response.data;
                getNotificationList();

            }
        }).catch(function (error) {
        // ??????alert(error);
        });


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* header */}
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                }}
            >
                <Toolbar>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle}   
			  	notiRows={loading?[{'Title':'?????????...'},{'Title':'?????????...'}]:notiRows} 
			   	userData={loading?{'Name':'?????????...'}:userData} 
                notiRowsTotalNum={notiRowsTotalNum}
			   />
                </Toolbar>
            </AppBar>

            {/* drawer */}
            <Sidebar userData={loading?{'Name':'?????????...'}:userData} drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

            {/* main content */}
            <Main theme={theme} open={false}>
                {/* breadcrumb */}
                <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
                <Outlet />
            </Main>
            {/* <Customization /> */}
        </Box>
    );
};

export default MainLayout;
