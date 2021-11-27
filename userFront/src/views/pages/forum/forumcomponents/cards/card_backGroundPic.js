import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import {  styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
// import { Avatar} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';

import UserLintonBGPNG from 'assets/images/users/usbg_linton.png'



const CardWrapper = styled(MainCard)(({ theme }) => ({
    // backgroundColor: theme.palette.secondary.dark,
    backgroundImage: `url(${UserLintonBGPNG})`,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    width:'100%',
    height:180,
    '&>div': {
        position: 'relative',
        zIndex: 5
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: "#fff",
        borderRadius: '50%',
        zIndex: 1,
        top: -85,
        right: -95,
        opacity: 0.6,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: 1,
        width: 210,
        height: 210,
        background: "#fff",
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.4,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const UserFeeCard = ({ isLoading }) => {
    // const theme = useTheme();

    // const [timeValue, setTimeValue] = useState(false);
    // const handleChangeTime = (event, newValue) => {
    //     setTimeValue(newValue);
    // };

    return (
        <>
            {isLoading ? (
                <SkeletonTotalOrderCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 0 ,m:-1,width:'100%' }}>
                        <Grid container direction="row" >
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

UserFeeCard.propTypes = {
    isLoading: PropTypes.bool
};

export default UserFeeCard;
