import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
// import { useTheme } from '@mui/material/styles';
import { CardContent, Divider, Grid, Stack, Typography } from '@mui/material';

// project imports
// import BajajAreaChartCard from './BajajAreaChartCard';
import SubCard from 'ui-component/cards/SubCard';
import SkeletonNewPostCard from 'ui-component/cards/Skeleton/NewPostCard';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //


import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import YellowAvatar from 'views/pages/forum/forumcomponents/compoents/avatar_yellow.js'

const SocialList = ()=> {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

      <ListItem>
            <ListItemAvatar>
                  <YellowAvatar>
                        <GitHubIcon />
                  </YellowAvatar>
            </ListItemAvatar>

            <ListItemText primary="Github" secondary="github.com/justlinton" />
      </ListItem>

      <Divider/>

      <ListItem>
            <ListItemAvatar>
                  <YellowAvatar>
                        <TwitterIcon />
                  </YellowAvatar>
            </ListItemAvatar>

            <ListItemText primary="Twitter" secondary="twitter.com/linton" />
      </ListItem>

      <Divider/>

      <ListItem>
            <ListItemAvatar>
                  <YellowAvatar>
                        <AccountCircleIcon />
                  </YellowAvatar>
            </ListItemAvatar>

            <ListItemText primary="微信" secondary="wxid_jdu2n8c7h3" />
      </ListItem>

    

    </List>
  );
}

const NewpostCard = ({ isLoading }) => {
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
            {isLoading ? (
                <SkeletonNewPostCard />
            ) : (
                <SubCard content={false}>
                    <CardContent>
                        
                        <Stack spacing={2} sx={{pl:1,pr:1}}>

                              <Grid container sx={{ pt: 2 }}/>
                                
                              <Grid container alignContent="center" justifyContent="space-between">
                                    <Stack direction="row" spacing={1}>
                                    <ChevronRightOutlinedIcon />
                                    <Typography variant="h3">About</Typography>
                                    </Stack>
                              </Grid>

                              <Divider/>

                              <Typography variant="body">
                                    这里是个性签名。God Helps Those Who Help Themselves.
                              </Typography>

                              <SocialList/>

                        </Stack>
                    
                        


        

                    </CardContent>
 
                </SubCard>
            )}
        </>
    );
};

NewpostCard.propTypes = {
    isLoading: PropTypes.bool
};

export default NewpostCard;
