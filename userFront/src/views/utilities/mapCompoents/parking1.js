import { useState } from 'react';
// import { useTheme } from '@mui/material/styles';
import { Menu, MenuItem, Stack } from '@mui/material';

// material-ui
import {  Grid, Typography} from '@mui/material';

// project imports
// import axios from 'axios';

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
// import ArchiveIcon from '@mui/icons-material/Archive';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import InvertColorsRoundedIcon from '@mui/icons-material/InvertColorsRounded';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import Fade from '@mui/material/Fade';

// ===============================|| COLOR BOX ||=============================== //


const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 130,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

const Content = (props) =>{
    // const theme = useTheme();
    
    const [chosen, setChosen] = useState(false);

    const MouseHoverHandler = () =>{
        // console.log("hover");
        setChosen(true);
    }
    
    const MouseOutHandler = () =>{
        // console.log("out");
        setChosen(false);
    }
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.target);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelectInfoEdit = () => {
        setAnchorEl(null);
        console.log("info.");
      };

    return(
        <>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          TransitionComponent={Fade}
        >

            <Grid  container justifyContent="center">
                <Grid>
                    <Divider sx={{ my: 1 }} />
                    

                    <Stack direction="row" >
                        <RoomRoundedIcon  sx={{ pr: 1 }}/>
                        <Typography variant="h5">1号楼</Typography>
                    </Stack>
        
             
                    <Divider sx={{ my: 1 }} />
                </Grid>
            </Grid>

            <MenuItem onClick={handleSelectInfoEdit} disableRipple>
                <HomeWorkRoundedIcon />
                楼幢信息
            </MenuItem>

            <MenuItem onClick={handleClose} disableRipple>
                <PeopleRoundedIcon />
                业主信息
            </MenuItem>

            <Divider sx={{ my: 0.5 }} />

            <MenuItem onClick={handleClose} disableRipple>
                <InvertColorsRoundedIcon />
                水表录入
            </MenuItem>

        </StyledMenu>
<path  d="M86.3,170.5h22.2c0,0,3.5,0.1,3.5,2.5v56.5c0,0,0,2.4-3.7,2.4h-22c0,0-3.5-0.3-3.5-2.2v-57.8
C82.8,171.9,84.5,170.5,86.3,170.5z"  onClick={handleClick}     onMouseOver={MouseHoverHandler} onMouseOut={MouseOutHandler}   fill={chosen? props.fillColorC: props.fillColorNC}/>
    </>
    );
}

export default Content;
