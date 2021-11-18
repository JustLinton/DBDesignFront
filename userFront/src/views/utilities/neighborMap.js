import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { CardContent, Menu, MenuItem, Stack } from '@mui/material';

// material-ui
import {  Grid, Typography} from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';
import axios from 'axios';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';

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
        vertical: 'top',
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

const Block1 = (props) => {
    const theme = useTheme();
    
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
        <Grid item xs={1}>
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
            <svg
            sx={{
                    color: theme.palette.primary.main,
                    cursor: 'pointer'
                }}
                aria-controls="menu-popular-card"
                aria-haspopup="true"
                onClick={handleClick} 
                onMouseOver={MouseHoverHandler} 
                onMouseOut={MouseOutHandler} 
                width="70" 
                height="70" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path  d="M42,30.1c0-1.7,0-3.4,0-5.1c0-1.2,0-2.3,0.1-3.5c0-1-0.6-2-1.5-2.5c-0.6-0.3-1.1-0.7-1.7-1
                c-0.9-0.5-1.7-1-2.6-1.5c-0.6-0.4-1.3-0.8-1.9-1.2c-0.4-0.3-0.9-0.5-1.4-0.7c-0.7-0.4-1.5-0.8-2.2-1.2c-0.5-0.3-1-0.6-1.5-0.9
                c-0.6-0.4-1.3-0.8-1.9-1.2c-1.1-0.7-2.9-0.7-4,0.1c-0.6,0.4-1.2,0.7-1.8,1.1c-0.8,0.5-1.6,1-2.4,1.4c-0.6,0.3-1.2,0.6-1.7,0.9
                c-0.9,0.5-1.7,1.1-2.6,1.6c-0.7,0.4-1.4,0.7-2.1,1.1c-0.7,0.4-1.4,0.9-2.1,1.3c-0.3,0.2-0.6,0.3-0.9,0.6c-0.6,0.6-1,1.3-1,2.1
                c0,3.5,0,7.1,0,10.6c0,0.4-0.1,0.8-0.1,1.2c0,0.2,0.1,0.6,0.3,0.7c0.1,0.1,0.5,0,0.6-0.1c0.8-0.8,1.5-1.6,2.3-2.4
                c1.1-1.1,2.2-2.3,3.3-3.4c1.3-1.3,2.6-2.6,3.9-3.9c0.5-0.5,1-1.2,1.6-1.6c0.7-0.5,1.5-0.9,2.3-1.3c0.1-0.1,0.3-0.1,0.4-0.2
                c1.9-1.1,4-0.8,6-0.4c1.4,0.3,2.7,1,3.9,1.9c1.2,1,2.1,2.2,2.8,3.6c0.7,1.3,1.1,2.8,1,4.3c0,0.7-0.3,1-1,1c-1.8,0.2-3.3,1-4.3,2.6
                c-0.5,0.8-0.8,1.7-1,2.6c-0.3,1.1-0.8,2.2-1.4,3.1c-0.1,0.1-0.1,0.2-0.2,0.3c-0.4,1.1-1.2,1.9-2,2.7c-0.9,0.8-1.8,1.7-3,2.1
                c-0.9,0.3-1.7,0.8-2.6,1.1c-0.4,0.2-0.9,0.3-1.4,0.3c-1.4,0-2.7,0-4.1,0c-0.9,0-1.7-0.3-2.5-0.6c-0.8-0.3-1.5-0.6-2.2-1
                c-0.7-0.5-1.5-0.8-2-1.5c-0.2-0.3-0.2-0.5,0.1-0.8c0.6-0.6,1.1-1.1,1.7-1.7c0.3-0.3,0.5-0.3,0.9-0.1c0.8,0.5,1.6,1,2.4,1.4
                c0.7,0.3,1.6,0.5,2.4,0.6c0.6,0.1,1.3,0.1,1.9,0.2c0,0,0.1,0,0.1,0c1-0.5,2.2-0.2,3.1-0.9c0.4-0.3,0.9-0.4,1.3-0.8
                c0.8-0.7,1.6-1.4,2.3-2.2c0.5-0.6,0.7-1.4,1.1-2.1c0.1-0.3,0.3-0.5,0.4-0.8c0.1-0.3,0.3-0.7,0.3-1c0.1-0.6,0.3-1.1,0.6-1.7
                c0.4-0.6,0.6-1.2,1.1-1.7c0.7-0.8,1.4-1.5,2.2-2.1c0.4-0.2,0.8-0.5,1.1-0.8c0.3-0.2,0.3-0.5,0.1-0.8c-0.7-1.1-1.4-2.2-2.6-2.7
                c-0.6-0.2-1.1-0.5-1.6-0.7c-1.2-0.3-2.5-0.2-3.6,0.2c-1.1,0.4-1.9,1.1-2.7,1.9c-0.7,0.7-1.4,1.4-2.2,2.1c-0.6,0.6-1.3,1.3-1.9,1.9
                c-0.7,0.7-1.4,1.4-2.1,2.2c-0.7,0.7-1.4,1.4-2.1,2.1c-0.6,0.6-1.3,1.3-2,1.9c-0.6,0.6-1.3,1.3-1.9,2c-0.7,0.7-1.4,1.4-2.1,2
                c-0.7,0.7-1.3,1.3-2,2c-0.3,0.3-0.5,0.5-0.8,0.8c-0.8,0.8-1.5,1.6-2.3,2.3c-0.4,0.4-0.6,0.3-1-0.1c-0.4-0.4-0.8-0.9-1.3-1.2
                c-0.5-0.4-0.6-1.1-0.1-1.6c0.9-0.8,1.7-1.7,2.6-2.5c0.8-0.8,1.6-1.7,2.5-2.5c0.3-0.4,0.3-0.8,0.2-1.2C5,35.8,5,34.5,5,33.2
                c0-3.9,0-7.9,0-11.8c0-1.7,0.6-3.2,1.8-4.4c0.8-0.8,1.8-1.3,2.8-2c0.6-0.4,1.2-0.7,1.8-1c0.8-0.5,1.6-0.9,2.4-1.4
                c1.1-0.7,2.3-1.4,3.4-2c0.7-0.4,1.4-0.8,2.1-1.2c0.7-0.4,1.4-0.8,2.1-1.3c1.4-0.9,2.8-1.3,4.5-1.2c1.4,0,2.5,0.7,3.7,1.4
                c0.5,0.3,1.1,0.6,1.6,1c0.9,0.5,1.8,1.1,2.7,1.6c0.7,0.4,1.4,0.7,2.1,1.1c0.7,0.4,1.5,0.9,2.2,1.3c0.4,0.3,0.9,0.5,1.3,0.8
                c0.7,0.4,1.3,0.7,2,1.1c1,0.6,2.1,1.2,2.9,2.2c1,1.4,1.6,3,1.6,4.8c0,3.2,0,6.5,0,9.7c0,1.7,0.1,3.4,0,5c-0.1,1.4-0.3,2.7-0.7,4
                c-0.3,0.9-0.9,1.8-1.6,2.6c-1,1.1-2.1,2-3.6,2.6c-1.4,0.6-2.8,0.7-4.2,0.7c-1.9,0-3.8,0-5.7,0c-0.8,0-1-0.2-1-1c0-0.6,0-1.2,0-1.8
                c0-0.9,0.3-1.1,1.2-1.1c1.1,0.1,2.3,0,3.4,0c1,0,2.1,0,3.1,0c1.4,0,2.5-0.6,3.4-1.5c0.6-0.5,1-1.1,1.3-1.9c0.3-0.7,0.4-1.4,0.4-2.2
                C42,34.9,42,32.5,42,30.1C42,30.1,42,30.1,42,30.1z"  fill={chosen? props.fillColorC: props.fillColorNC}/>
                <path d="M27.4,26.1c0.9-0.1,1.5,0.9,1.5,1.5c0.1,0.8-0.7,1.4-1.6,1.4c-0.7,0-1.4-0.7-1.4-1.5
                    C25.9,26.8,26.6,26.1,27.4,26.1z" fill={chosen? props.fillColorC: props.fillColorNC} />
                </svg>
        </Grid>
        </>
    );
}

const NMap = ({ bgcolor }) => {
    const theme = useTheme();

    // const [blk1Chosen, setBlk1Chosen] = useState(false);

    return(
        <Grid container spacing={2}>
        <Grid item xs={8}>
          <Block1 fillColorC={theme.palette.secondary.main} fillColorNC={theme.palette.secondary.dark}/>
        </Grid>
        <Grid item xs={4}>
        <Block1 fillColorC={theme.palette.secondary.main} fillColorNC={theme.palette.secondary.dark}/>
        </Grid>
        <Grid item xs={4}>
        <Block1 fillColorC={theme.palette.secondary.main} fillColorNC={theme.palette.secondary.dark}/>
        </Grid>
        <Grid item xs={8}>
        <Block1 fillColorC={theme.palette.secondary.main} fillColorNC={theme.palette.secondary.dark}/>
        </Grid>
      </Grid>
    );
}

NMap.propTypes = {
    bgcolor: PropTypes.string,
};

// ===============================|| UI COLOR ||=============================== //

// var userData;

const NoPermissionContent = () =>{
    return (
        <MainCard title="提示" >
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6}>
                <Grid item>
                    <MuiTypography variant="h3" gutterBottom>抱歉，你似乎没有权限访问此功能。</MuiTypography>
                    <MuiTypography variant="body1" gutterBottom>Errno 101: You don't have permissions to use this function.</MuiTypography>
                </Grid>
            </Grid>
        </Grid>
    </MainCard>
    );
}

const EmptyContent = () =>{
    return (
        <MainCard title="">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={6}>
                <Grid item>
                    <MuiTypography variant="h3" gutterBottom>加载中...</MuiTypography>
                    <MuiTypography variant="body1" gutterBottom>Loading...</MuiTypography>
                </Grid>
            </Grid>
        </Grid>
    </MainCard>
    );
}

const Contents = () => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MainCard content={false}>
        <CardContent>
            <Grid container spacing={gridSpacing} justifyContent="center">

            <Grid item xs={12} sx={{ pt: '43px !important' }}>
                    
                    </Grid>
                    
                <Grid item xs={12}>
                    <Grid container spacing={1} alignContent="center" >
                        <Grid container item xs={1} justifyContent="flex-end">
                            <ChevronRightOutlinedIcon />
                        </Grid>
                        <Grid  container item xs={10} justifyContent="flex-start" direction="column">
                            <Typography variant="h2">NeighborMap</Typography>
                            <Typography variant="body">平面图管理社区</Typography>
                        </Grid>

                        <Grid item xs={1}>
                            <MenuOpenRoundedIcon
                                sx={{
                                    color: theme.palette.primary.main,
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
          
                    <Grid   item xs={11} justifyContent="center" >
                        <SubCard title="">
                            <NMap/>
                        </SubCard>
                    </Grid>
                    

            </Grid>

        </CardContent>

    </MainCard>
    );
}

const Work = () => {

    const [loading, setLoading] = useState(true);

 //本页面关闭权限验证
    const [insufPermission, setInsufPermission] = useState(false);
        // const [insufPermission, setInsufPermission] = useState(true);

    axios.get("/haveperm", {
        　　params: { 'permid': 204 }
        }).then(function (response) {
        // 　　alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
        if(response.status===200){
           //鉴权请求

            if(response.data==="ok"){
                //该用户有相应的权限
                setInsufPermission(false);
            }

                axios.get("/profile", {
                    　　params: { 'verbose': 'false' }
                    }).then(function (response) {
                        // 　　alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
                        if(response.status===200){
                           
                            // console.log(response);
                            if(response.data==="notlogged"){
                                window.location='/auth/login';
                            }
                
                                // userData=response.data;
                            }
                        }).catch(function (error) {
                        // 　　alert(error);
                        });
                
                //结束加载
                setLoading(false);
            }
        }).catch(function (error) {
        // 　　alert(error);
        });


    return loading? <EmptyContent/> : insufPermission? <NoPermissionContent/> : <Contents/>;
}
    
export default Work;
