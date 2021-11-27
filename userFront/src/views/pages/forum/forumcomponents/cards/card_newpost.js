import PropTypes from 'prop-types';
// import { useState } from 'react';
import * as React from 'react';

// material-ui
// import { useTheme } from '@mui/material/styles';
import { CardContent, Divider, Grid, Stack } from '@mui/material';
// import { ListItemButton } from '@mui/material';

// project imports
// import BajajAreaChartCard from './BajajAreaChartCard';
import SubCard from 'ui-component/cards/SubCard';
import SkeletonNewPostCard from 'ui-component/cards/Skeleton/NewPostCard';
import TextField from '@mui/material/TextField';

import SendButtonLoadable from 'views/pages/forum/forumcomponents/compoents/button_send_loadable.js'
// import Button from '@mui/material/Button';
// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //


import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatPaintRoundedIcon from '@mui/icons-material/FormatPaintRounded';
import Box from '@mui/material/Box';

const VerticalDividers= ()=> {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 0.7,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
            <InsertEmoticonRoundedIcon onClick={()=>{console.log(1);}}/>
            <InsertPhotoRoundedIcon />  
            <Divider orientation="vertical" flexItem />
            <FormatBoldIcon />
            <FormatItalicIcon />
            <Divider orientation="vertical" flexItem />
            <FormatPaintRoundedIcon/>
      </Box>
    </div>
  );
}

const NewpostCard = ({ isLoading }) => {
//     const theme = useTheme();
    
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();

    const [postContent, setPostContent] = React.useState("");

      const handleTextChange = (event) => {
            setPostContent(event.target.value);
      };


//     const handleClose = () => {
//       //   setAnchorEl(null);
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


const handleButtonClick = () => {
      console.log(postContent);
      if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
            setSuccess(true);
            setLoading(false);

            timer.current = window.setTimeout(() => {
                  setSuccess(false);
                  setLoading(false);
            }, 400);
      }, 400);
      }
};

    return (
        <>
            {isLoading ? (
                <SkeletonNewPostCard />
            ) : (
                <SubCard content={false}>
                    <CardContent>
                        
                        <Stack spacing={2} sx={{pl:1,pr:1}}>
                              <TextField
                                    id="outlined-multiline-static"
                                    label="What's Going On?"
                                    multiline
                                    rows={5}
                                    fullWidth
                                    onChange={handleTextChange}
                              />

                              <Grid container justifyContent="flex-end" sx={{width:'100%'}}>
                                    <Grid item xs={6}>
                                          <Stack direction="row" spacing={2}>
                                                <VerticalDividers/>
                                          </Stack>       
                                    </Grid>
                                    <Grid item xs={6}>
                                          <Grid container justifyContent="flex-end" sx={{width:'100%'}}>
                                                <SendButtonLoadable
                                                      handleButtonClick={handleButtonClick}
                                                      loading={loading}
                                                      success={success}
                                                />
                                          </Grid>
                                    </Grid>
                              </Grid>

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
