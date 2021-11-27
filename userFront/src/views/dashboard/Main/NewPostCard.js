import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { ListItemButton } from '@mui/material';

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

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PostItem = (props)=>{
    const handleClick = () => {

    };

    return(
        <ListItemButton onClick={handleClick}
        sx={{
            borderRadius: '15px',
            mb: 0.5,
            alignItems: 'flex-start',
            pl: '24px'
        }}
    >
                <Grid container direction="column">
                <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                                {props.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="subtitle1" color="inherit">
                                            {props.time}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            width: 16,
                                            height: 16,
                                            borderRadius: '5px',
                                            backgroundColor: props.theme.palette.secondary.light,
                                            color: props.theme.palette.secondary.dark,
                                            ml: 2
                                        }}
                                    >
                                        <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                    </Avatar>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2" sx={{ color: props.theme.palette.secondary.dark }}>
                            {props.author}
                    </Typography>
                </Grid>
            </Grid>
        </ListItemButton>
    );
}

const PostList = (props) =>{

  

    return(
        <Grid item xs={12}>
        <Divider sx={{ my: 1 }} />

            <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
            <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
            <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
            <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
            <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
            <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
            <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
            <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
            <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
            <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
            <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
            <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
            <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
            <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
            <PostItem theme={props.theme} title="新系统要上线了！"  author="JustLinton"  time="1天前"/>
      
        <Divider sx={{ my: 1 }} />
        </Grid>
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

    const ScrollTo = () => {
        let scrollToptimer = setInterval(function() {
          var top = document.body.scrollTop || document.documentElement.scrollTop;
          var speed = top / 30;
          document.documentElement.scrollTop -= speed;
          if (top === 0) {
            clearInterval(scrollToptimer);
          }
        }, 5);
      }

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
                                        <Typography variant="h2">社区洋葱圈</Typography>
                                        <Typography variant="body">有新帖子!</Typography>
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

                            <Grid item xs={12}>
                            <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                                <Button size="small" disableElevation  onClick={ScrollTo} >
                                    <ChevronLeftOutlinedIcon />
                                    上一页
                                </Button>
                                <Typography variant="body">1</Typography>
                                <Typography variant="body"> / </Typography>
                                <Typography variant="body">15</Typography>
                                <Button size="small" disableElevation>
                                    下一页
                                    <ChevronRightOutlinedIcon />
                                </Button>
                            </CardActions>
                            </Grid>

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
