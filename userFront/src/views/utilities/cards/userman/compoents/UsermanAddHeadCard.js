import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
// import { Avatar} from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';


// assets
// import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const chartData = {
    height: 200,
    type: 'radialBar',
            options: {
              chart: {
    
              },
              plotOptions: {
                radialBar: {
                  offsetY: 0,
                  startAngle: 0,
                  endAngle: 270,
                  hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                  },
                  track: {
                    background: '#fcd539',
                    strokeWidth: '89%'
                  },
                  dataLabels: {
                    name: {
                    show: true,
                        fontSize: '12px',
                        color: '#fff',
                        offsetY: -3
                    },
                    value: {
                      show: true,
                      fontSize: '15px',
                      color: '#fff',
                      offsetY: -2
                    }
                  }
                }
              },
              colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff'],
              labels: ['完善度', '个人信息', '家庭信息', '帐号安全'],
              legend: {
                show: false,
              },
            },

    series: [76, 67, 61, 90],
};


const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&>div': {
        position: 'relative',
        zIndex: 5
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        zIndex: 1,
        top: -85,
        right: -95,
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
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const UserFeeCard = ({ isLoading }) => {
    const theme = useTheme();

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
                    <Box sx={{ p: 0 ,m:-1 }}>
                        <Grid container direction="row">
                            {/* <Grid item>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.largeAvatar,
                                                backgroundColor: theme.palette.primary[800],
                                                color: '#fff',
                                                mt: 1
                                            }}
                                        >
                                            <LocalMallOutlinedIcon fontSize="inherit" />
                                        </Avatar>
                                    </Grid>
                                    <Grid item>
                                         <Button
                                            disableElevation
                                            variant={timeValue ? 'contained' : 'text'}
                                            size="small"
                                            sx={{ color: 'inherit' }}
                                            onClick={(e) => handleChangeTime(e, true)}
                                        >
                                            水费
                                        </Button> 
                                         <Button
                                            disableElevation
                                            variant={!timeValue ? 'contained' : 'text'}
                                            size="small"
                                            sx={{ color: 'inherit' }}
                                            onClick={(e) => handleChangeTime(e, false)}
                                        >
                                            电费
                                        </Button> 
                                    </Grid>
                                </Grid>
                            </Grid> */}
                            <Grid item xs={12} sx={{ mb: 0,pl:'10%',pr:'10%',pt:'3%',pb:'3%'}} >
                                <Grid container alignItems="flex-start"  direction="row"  >
                                    <Grid item xs={12} md={6} >
                                        <Grid container alignItems="center"  sx={{ mt:'5%'}}>
                                            <Grid item >
                                                {/* {timeValue ? (
                                                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>
                                                        水费
                                                    </Typography>
                                                ) : ( */}
                                                    <Typography sx={{ fontSize: '2.0rem', fontWeight: 500, mr: 0, mt: 1.75, mb: 0.3 }}>
                                                        信息添加
                                                    </Typography>
                                                {/* )} */}
                                            </Grid>
                                            {/* <Grid item>
                                                <Avatar
                                                    sx={{
                                                        ...theme.typography.smallAvatar,
                                                        cursor: 'pointer',
                                                        backgroundColor: theme.palette.primary[200],
                                                        color: theme.palette.primary.dark
                                                    }}
                                                >
                                                    <ArrowDownwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                                                </Avatar>
                                            </Grid> */}
                                            <Grid item xs={12} >
                                                <Typography
                                                    sx={{
                                                        fontSize: '0.8rem',
                                                        fontWeight: 500,
                                                        color: theme.palette.paper,
                                                    }}
                                                >
                                                    *图为信息完善度
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        {/* {timeValue ? 
                                        <Chart {...ChartDataMonth} /> :  */}
                                        <Chart {...chartData} />
                                    </Grid>
                                </Grid>
                            </Grid>
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
