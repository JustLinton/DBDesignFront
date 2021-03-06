// import { useTheme } from '@mui/material/styles';
import { MenuItem, Stack } from '@mui/material';

// material-ui
import {  Grid, Typography} from '@mui/material';

// project imports
// import axios from 'axios';

import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
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
import StyledMenu from '../essentials/styledMenu'

// ===============================|| COLOR BOX ||=============================== //

const Content = (props) =>{
    // const theme = useTheme();
    
    // const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(props.anchorEl);

    const handleClose = () => {
        props.setAnchorEl(null);
    };

    const handleSelectInfoEdit = () => {
        props.setAnchorEl(null);
        console.log("info.");
      };

    return(
        <>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={props.anchorEl}
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
                        <Typography variant="h5">  {props.name} </Typography>
                    </Stack>
                    <Divider sx={{ my: 1 }} />
                </Grid>
            </Grid>
          
          {/* ????????????????????? */}
              <MenuItem onClick={handleSelectInfoEdit} disableRipple>
                <HomeWorkRoundedIcon />
                ????????????
            </MenuItem>

            <MenuItem onClick={handleClose} disableRipple>
                <PeopleRoundedIcon />
                ????????????
            </MenuItem>

            <Divider sx={{ my: 0.5 }} />

            <MenuItem onClick={handleClose} disableRipple>
                <InvertColorsRoundedIcon />
                ???????????????
            </MenuItem>

            {/* ????????????????????? */}
     

        </StyledMenu>
    
    </>
    );
}

export default Content;
