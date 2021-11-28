// import { Link } from 'react-router-dom';
import * as React from 'react';
import url from 'url' 

// material-ui
import { useTheme } from '@mui/material/styles';
import {  Badge, Button, Grid, Paper, Stack, Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';

// project imports
import LandingPageWrapper from '../landingPageWrapper';
// import CardWrapper from '../cardWrapper';
// import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';

import SubCard from 'ui-component/cards/SubCard';
import ProfileTabs from'views/pages/landing/landingcomponents/compoents/profileTabs.js'
import Avatar from '@mui/material/Avatar';
import BackGroundPicCard from 'views/pages/landing/landingcomponents/cards/card_backGroundPic.js'

import AuthBGSVG from 'assets/images/elements/landingbg.jpg'
import LandingHeadMasker from 'assets/images/elements/landingheadMasker.svg'
import {  styled } from '@mui/material/styles';

// assets

// ===============================|| AUTH3 - REGISTER ||=============================== //


const StyledLandingHead = styled(Grid)((props) => ({
    
	backgroundImage: `url(${AuthBGSVG})`,
	backgroundSize:`100% 100%`,
	backgroundRepeat:"no-repeat",
	backgroundPositionX:"center",
	backgroundPositionY:"0px",
	minHeight: '100vh',
	backgroundColor: props.theme.palette.secondary.light,
	// color: '#fff',
	// position: 'relative',
	width:'100%',
  }));


  const StyledSubCard = styled(SubCard)((props) => ({
	borderColor:"#eeeeee",
	width:"100%",
  }));

  const StyledSlopeGrid = styled(Grid)((props) => ({
    
	backgroundImage: `url(${LandingHeadMasker})`,
	backgroundSize:`1917px 632px`,
	backgroundRepeat:"no-repeat",
	backgroundPositionX:"center",
	backgroundPositionY:"0px",
	height: '140vh',
	marginTop :'-35vh',
	// backgroundColor: props.theme.palette.secondary.light,
	// color: '#fff',
	// position: 'relative',
	width:'100%',
  }));


const ProfileLayout = () => {
	//     const theme = useTheme();
	
	const [pBody, setPBody] = React.useState(0);
	
	    return (
		  <LandingPageWrapper>
			<Grid container direction="column" alignItems="flex-start" sx={{ minHeight: '100vh' }} >
			
			
			
			<StyledLandingHead/>
			
			<StyledSlopeGrid>

				<Stack sx={{pt:10,pl:'5%',pr:'5%'}} direction={{xs:"column",md: "row"}} justifyContent="space-evenly" spacing={10}>
				
					<StyledSubCard >
							asddsa
					</StyledSubCard >
					<StyledSubCard >
							asddsa
					</StyledSubCard >
					<StyledSubCard >
							asddsa
					</StyledSubCard >
					
					</Stack>

			</StyledSlopeGrid>

			
			    
			</Grid>
	
			<Grid item xs={12} sx={{ m: 3, pt: 10 }}>
				  <AuthFooter />
			    </Grid>
		  </LandingPageWrapper>
	    );
	};
	

class Layout extends React.Component {
	// constructor(props) {
	//   super(props);
	// }
     
	componentDidMount() {
		let theUrl = url.parse(document.documentURI,true);    // 解析地址
		console.log(theUrl.query); //获取http get参数(返回map)
	}
     
	componentWillUnmount() {}
          
	render() {
	  return <ProfileLayout/>;
	}
    }

export default Layout;
