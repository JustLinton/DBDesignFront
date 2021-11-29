import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

import {  styled } from '@mui/material/styles';
import { Grid, Slide, Stack } from '@mui/material';

// material-ui
import { ButtonBase } from '@mui/material';
import { Link } from 'react-router-dom';
// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import LogoDark from 'ui-component/Logo_dark';


const StyledAppBar = styled(AppBar)((props) => ({
	backgroundColor: props.bgcolor,
	height: props.height,
}));

const StyledToTopFab = styled(Fab)((props) => ({
	backgroundColor: "#fff",
}));

const ToolBarContent = (props) =>{
	return (
		// <Toolbar>

			<Grid container sx={{width:"100%",height:"100%"}} alignItems="center" >
				<Grid item xs={12} sx={{  pl:{xs:3,md:10},pr:{xs:3,md:10}, height:"100%" }} >
					<Grid container sx={{width:"100%",height:"100%"}} alignItems="center" >

						<Grid item xs={6}>
							<Stack direction="row">

								<Grid>
									<ButtonBase disableRipple component={Link} to={config.defaultPath}>
										{props.sl&&<Logo />}
										{props.tp&&<LogoDark />}
									</ButtonBase>
								</Grid>

							</Stack>
						</Grid>

						<Grid item xs={6}>
							<Stack direction="row">

							

							</Stack>
						</Grid>

					</Grid>
				</Grid>
			</Grid>
		
		// </Toolbar>
	);
}

const ResponsiveAppbar =(props)=> {

  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 400,
    target: window ? window() : undefined,
  });

  return (
	  <>
	  
		{/* transparent state */}
		<Slide in={!trigger} mountOnEnter unmountOnExit>
			<StyledAppBar  bgcolor="transparent" height={86} elevation={0}>
					<ToolBarContent tp/>
			</StyledAppBar>
		</Slide>

	  	{/* solid state */}
		<Fade in={trigger}>
			<StyledAppBar  bgcolor="#fff" height={64} elevation={1}>
				<ToolBarContent sl/>
			</StyledAppBar>
		</Fade>

	</>
	
  );

}


function ScrollTop(props) {
      const { children, window } = props;
      // Note that you normally won't need to set the window ref as useScrollTrigger
      // will default to window.
      // This is only being set here because the demo is in an iframe.
      const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 700,
      });
    
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

      const handleClick = (event) => {	
		ScrollTo();
      };
    
      return (
	<Zoom in={trigger}>
		<Box
		onClick={handleClick}
		role="presentation"
		sx={{ position: 'fixed', bottom: 36, right: 36 }}
		>
			{children}
		</Box>
	</Zoom>
      );
    }
    
    ScrollTop.propTypes = {
      children: PropTypes.element.isRequired,
      window: PropTypes.func,
    };

 const AppbarTop=(props) =>{
      return (
        <React.Fragment>
		  
          	{/* <CssBaseline /> */}
		<ResponsiveAppbar/>
	
		{/* </ElevationScroll> */}


		{/* back to top fab*/}
          {/* <Toolbar id="back-to-top-anchor" /> */}

		<ScrollTop {...props}>
			<StyledToTopFab  aria-label="scroll back to top">
				<KeyboardArrowUpIcon />
			</StyledToTopFab>
		</ScrollTop>
		{/* end of back to top fab*/}



        </React.Fragment>
      );
    }

export default AppbarTop;