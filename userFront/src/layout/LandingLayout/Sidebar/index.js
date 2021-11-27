// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';

// third-party
import { BrowserView, MobileView } from 'react-device-detect';

// project imports
import LogoSection from 'layout/MainLayout/LogoSection';
import { drawerWidth } from 'store/constant';


// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = (props) => {    
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const drawer = (
        <>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
                    <LogoSection />
                </Box>
            </Box>
            <BrowserView></BrowserView>
            <MobileView></MobileView>
        </>
    );

    const container = props.window !== undefined ? () => props.window.document.body : undefined;

    return (
        <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }} aria-label="mailbox folders">
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={false}
                onClose={props.drawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        background: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '88px'
                        }
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

// Sidebar.propTypes = {
//     drawerOpen: PropTypes.bool,
//     drawerToggle: PropTypes.func,
//     window: PropTypes.object,
//     userData: PropTypes.object
// };

export default Sidebar;
