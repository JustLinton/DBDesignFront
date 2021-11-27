import PropTypes from 'prop-types';
// import {useState} from 'react'

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// project imports全部直接导入管理layout的东西
// import LogoSection from 'layout/MainLayout/LogoSection';
import SearchSection from 'layout/MainLayout/Header/SearchSection';
import ProfileSection from 'layout/MainLayout/Header/ProfileSection';
import NotificationSection from 'layout/MainLayout/Header/NotificationSection';

import { ButtonBase } from '@mui/material';

// project imports
// import config from 'config';
import { Link } from 'react-router-dom';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = (props) => {
    const theme = useTheme();

    // console.log(userData);

    return (
        <>
            {/* logo & toggler button */}
            <Box
                sx={{
                    width: 114,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
			<Box component="span" sx={{ display: { xs: 'block', md: 'block' }, flexGrow: 1 }}>
				<ButtonBase disableRipple component={Link} to='/onion'>
					<Logo />
				</ButtonBase>
			</Box>
            </Box>

        

            {/* header search */}
		<Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />
            <SearchSection  displayIcon/>
        

            {/* notification & profile */}
            <NotificationSection 
                notiRows={props.notiRows}
                notiRowsTotalNum={props.notiRowsTotalNum}
            />
            <ProfileSection  userData={props.userData}/>
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
