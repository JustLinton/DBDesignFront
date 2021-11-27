
// import { useState } from 'react';

// material-ui
// import { useTheme } from '@mui/material/styles';
import {CardContent, Divider, Grid, Stack, Typography } from '@mui/material';
// import { ListItemButton } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { yellow } from '@mui/material/colors';

// project imports
// import BajajAreaChartCard from './BajajAreaChartCard';
import SubCard from 'ui-component/cards/SubCard';
import SkeletonNewPostCard from 'ui-component/cards/Skeleton/NewPostCard';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //



const NewpostCard = (props) => {
//     const theme = useTheme();

//     const [anchorEl, setAnchorEl] = useState(null);

//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const ScrollTo = () => {
//         let scrollToptimer = setInterval(function() {
//           var top = document.body.scrollTop || document.documentElement.scrollTop;
//           var speed = top / 30;
//           document.documentElement.scrollTop -= speed;
//           if (top === 0) {
//             clearInterval(scrollToptimer);
//           }
//         }, 5);
//       }

    return (
        <>
            {props.isLoading ? (
                <SkeletonNewPostCard />
            ) : (
                <SubCard content={false}>
                    <CardContent>
                        
                        <Stack spacing={2} sx={{pl:1,pr:1}}>

                              <Grid container sx={{ pt: 2 }}/>
                                
                              <Grid container alignContent="center" justifyContent="space-between">
                                    <Stack direction="row" spacing={1}>
                                    <ChevronRightOutlinedIcon />
                                    <Typography variant="h3">{props.type}</Typography>
                                    </Stack>
                              </Grid>

                              <Divider/>

                              <Typography variant="h3">
                                    {props.type}
                              </Typography>

                        </Stack>
                    
                        


        

                    </CardContent>
 
                </SubCard>
            )}
        </>
    );
};

export default NewpostCard;
