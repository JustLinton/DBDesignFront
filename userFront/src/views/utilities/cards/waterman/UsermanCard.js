import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Checkbox, Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// project imports
// import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonNewPostCard from 'ui-component/cards/Skeleton/NewPostCard';
import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import { createTheme, darken, lighten } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PostItem = (props)=>{
    const handleClick = () => {

    };


    const defaultTheme = createTheme();
    const useStyles = makeStyles(
      (theme) => {
        const getBackgroundColor = (color) =>
          theme.palette.mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);
    
        const getHoverBackgroundColor = (color) =>
          theme.palette.mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);
    
        return {
          root: {
            '& .super-app-theme--Open': {
              backgroundColor: getBackgroundColor(theme.palette.info.main),
              '&:hover': {
                backgroundColor: getHoverBackgroundColor(theme.palette.info.main),
              },
            },
            '& .super-app-theme--Filled': {
              backgroundColor: getBackgroundColor(theme.palette.success.main),
              '&:hover': {
                backgroundColor: getHoverBackgroundColor(theme.palette.success.main),
              },
            },
            '& .super-app-theme--PartiallyFilled': {
              backgroundColor: getBackgroundColor(theme.palette.warning.main),
              '&:hover': {
                backgroundColor: getHoverBackgroundColor(theme.palette.warning.main),
              },
            },
            '& .super-app-theme--Rejected': {
              backgroundColor: getBackgroundColor(theme.palette.error.main),
              '&:hover': {
                backgroundColor: getHoverBackgroundColor(theme.palette.error.main),
              },
            },
          },
        };
      },
      { defaultTheme },
    );
    const classes = useStyles();

    return(
       <Grid container direction="column" sx={{pl:5,pr:2,pt:5}}>
<div style={{ height: 400, width: '100%' }} className={classes.root}>
<DataGrid
                    columns={[{ field: 'username' }, { field: 'age' }]}
                    rows={[
                        {
                            id: 1,
                            username: '@MUI',
                            age: 20,
                        },
                        {
                            id: 2,
                            username: '@MUI',
                            age: 20,
                        },
                        {
                            id: 3,
                            username: '@MUI',
                            age: 20,
                        },
                        {
                            id: 4,
                            username: '@MUI',
                            age: 20,
                        },
                        {
                            id: 5,
                            username: '@MUI',
                            age: 20,
                        },
                        {
                            id: 6,
                            username: '@MUI',
                            age: 20,
                        },
                    ]}
                    />
                    
    </div>
           
{/* 
                <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between"  sx={{ pt:2,pb:2, pl:3,pr:3}} >
                        
                        <Checkbox
                                        // checked={handleClick}
                                        // onChange={handleClick}
                                        name="checked"
                                        color="primary"
                                    />
                         <Divider orientation="vertical"   flexItem />                

                        <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                                {props.title}
                            </Typography>
                            
                        </Grid>
                    
                        <Divider orientation="vertical"   flexItem />
                        <Grid item>
                  
                            <Typography variant="subtitle1" color="inherit">
                                {props.title}
                            </Typography>
                        
                        </Grid>
                        <Divider orientation="vertical"   flexItem />

                        <Grid item >
                            <Typography variant="subtitle1" color="inherit">
                                {props.title}
                            </Typography>
                        </Grid>
                        <Divider orientation="vertical"   flexItem />
                        <Grid item >
                            <Typography variant="subtitle1" color="inherit">
                                {props.title}
                            </Typography>
                        </Grid>
                        <Divider orientation="vertical"   flexItem />
                        <Grid item >
                            <Typography variant="subtitle1" color="inherit">
                                {props.title}
                            </Typography>
                        </Grid>
                        <Divider orientation="vertical"   flexItem />
                        

                        <Grid item >
                            <Stack spacing={1} direction="row">
                                <Button variant="outlined">功能</Button>
                                <Button variant="outlined">功能</Button>
                            </Stack>
                        </Grid>
                    </Grid>

                    
                </Grid> */}
                            
            </Grid>
    );
}

const PostList = (props) =>{

  

    return(
        <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
        // <Grid item xs={12}>    
 
        //     <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
        // </Grid>
    );
}

const NewpostCard = ({ isLoading }) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonNewPostCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>

                        <Grid item xs={12} sx={{ pt: '43px !important' }}>
                                
                                </Grid>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item xs={1}>
                                        <ChevronRightOutlinedIcon />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="h2">管理被查水表的业主</Typography>
                                        <Typography variant="body">FBI OPEN THE DOOR.</Typography>
                                    </Grid>

                                    <Grid item xs={1}>
                                        <MoreHorizOutlinedIcon
                                            fontSize="small"
                                            sx={{
                                                color: theme.palette.primary[200],
                                                cursor: 'pointer'
                                            }}
                                            aria-controls="menu-popular-card"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        />
                                        <Menu
                                            id="menu-popular-card"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            variant="selectedMenu"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right'
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}> Today</MenuItem>
                                            <MenuItem onClick={handleClose}> This Month</MenuItem>
                                            <MenuItem onClick={handleClose}> This Year </MenuItem>
                                        </Menu>
                                    </Grid>

                                </Grid>
                            </Grid>


                            <PostList theme={theme} />

   

                        </Grid>

                    </CardContent>
 
                </MainCard>
            )}
        </>
    );
};

NewpostCard.propTypes = {
    isLoading: PropTypes.bool
};

export default NewpostCard;
