// import { Link } from 'react-router-dom';
import * as React from 'react';
import url from 'url' 


// material-ui
import { useTheme } from '@mui/material/styles';
import {  Badge, Button, Grid, Paper, Stack, Toolbar, Typography } from '@mui/material';
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
import LandingHeadMaskerTop from 'assets/images/elements/landingheadMaskerTop.svg'
import LandingHeadMaskerBottom from 'assets/images/elements/landingheadMaskerBottom.svg'
import LandingHeadMaskerLast from 'assets/images/elements/landingheadMaskerTopLast.svg'
import StudioExample from 'assets/images/elements/studioExample.jpg'
import {  styled } from '@mui/material/styles';


import AppbarTop from 'views/pages/landing/landingcomponents/compoents/appbar_top.js'
import ButtonPicture from 'views/pages/landing/landingcomponents/compoents/button_picture.js'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

import { Parallax, Background } from "react-parallax";

// assets

// ===============================|| AUTH3 - REGISTER ||=============================== //


const insideStyles = {
background: "white",
padding: 20,
position: "absolute",
top: "50%",
left: "50%",
transform: "translate(-50%,-50%)"
};

const imageMain = "https://z3.ax1x.com/2021/11/29/oMNxII.jpg";
const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 = "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
    

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


  const StyledBGGrid = styled(Grid)((props) => ({
    
	backgroundColor:'#fff',
	backgroundImage:`url(${StudioExample})`,
	width:'100%',
	borderRadius:'10px',
  }));


  const StyledSlopeBottomGrid = styled(Grid)((props) => ({
    
	backgroundImage: `url(${LandingHeadMaskerBottom})`,
	backgroundSize:`1917px 632px`,
	backgroundRepeat:"no-repeat",
	backgroundPositionX:"center",
	backgroundPositionY:"0px",
	height: '140vh',
	paddingBottom :'-35vh',
	// backgroundColor: props.theme.palette.secondary.light,
	// color: '#fff',
	// position: 'relative',
	width:'100%',
  }));

  const StyledSlopeTopGrid = styled(Grid)((props) => ({
    
	backgroundImage: `url(${LandingHeadMaskerTop})`,
	backgroundSize:`1917px 632px`,
	backgroundRepeat:"no-repeat",
	backgroundPositionX:"center",
	backgroundPositionY:"0px",
	height: '140vh',
	paddingBottom :'-35vh',
	// backgroundColor: props.theme.palette.secondary.light,
	// color: '#fff',
	// position: 'relative',
	width:'100%',
  }));


  const StyledSmallSlopeTopGrid = styled(Grid)((props) => ({
    
	backgroundImage: `url(${LandingHeadMaskerTop})`,
	backgroundSize:`1917px 632px`,
	backgroundRepeat:"no-repeat",
	backgroundPositionX:"center",
	backgroundPositionY:"0px",
	height: '90vh',
	paddingBottom :'-35vh',
	// backgroundColor: props.theme.palette.secondary.light,
	// color: '#fff',
	// position: 'relative',
	width:'100%',
  }));

  const StyledSlopeLastGrid = styled(Grid)((props) => ({
    
	backgroundImage: `url(${LandingHeadMaskerLast})`,

	backgroundRepeat:"no-repeat",
	backgroundPositionX:"center",
	backgroundPositionY:"0px",
	height: '40vh',
	// backgroundColor: props.theme.palette.secondary.light,
	// color: '#fff',
	// position: 'relative',
	width:'100%',
  }));


const TopSubCard = () =>{
	const theme = useTheme();
	return(
		<Stack sx={{width:"100%"}}>
		<Grid container sx={{width:"100%",mb:-6}} justifyContent="center">
				<Grid item>
					<Avatar
						alt="Remy Sharp"
						sx={{ width: 80,
						height: 80,
						bgcolor: theme.palette.secondary.main,
						color: theme.palette.secondary.light,
						border: {md:`5px solid ${theme.palette.background.paper}`,xs:`5px solid ${theme.palette.background.paper}`}, 
						}}
					><CheckCircleOutlineRoundedIcon sx={{ fontSize: 50 }} /></Avatar>
				</Grid>
			</Grid>

		<StyledSubCard >
			
			<Grid container justifyContent="center">
					<Grid item>
						<Stack sx={{width:"100%",pt:6,maxWidth:250}} >
					
							<Grid container justifyContent="center">
								<Grid item>
									<Typography sx={{ fontSize: '1.7rem', fontWeight: 600, mr: 0, mt: 0, mb: 0.3 }}>
										Linton
									</Typography>
								</Grid>
							</Grid>


							<Grid container justifyContent="center">
								<Grid item>
									<Typography sx={{ fontSize: '1.2rem', fontWeight: 600, mr: 0, mt: 0, mb: 0.3 }}>
										Lintonasd<br/>
										Lintonasd<br/>
												Lintonasd<br/>
												Lintonasd<br/>
												Lintonasd<br/>
												Lintonasd<br/>
												Lintonasd<br/>
												Lintonasd<br/>
												Lintonasd<br/>	Lintonasd<br/>
												Lintonasd<br/>	Lintonasd<br/>
												Lintonasd<br/>
											
									</Typography>
								</Grid>
							</Grid>

						
						</Stack>
				

					</Grid>
			</Grid>
			
		</StyledSubCard >
	</Stack>
	);
}



const SecondSubCard = () =>{
	const theme = useTheme();
	return(
	
		<StyledSubCard >
			
			<StyledBGGrid bgi={image2} sx={{height:300}} container justifyContent="center"/>
			
		</StyledSubCard >

	);
}


const ProfileLayout = () => {
	const theme = useTheme();
	
	const [pBody, setPBody] = React.useState(0);
	
	    return (
		    <>
		

			<LandingPageWrapper>
				<Grid container direction="column" alignItems="flex-start" sx={{ minHeight: '100vh' }} >
				
				{/* <TestPara/> */}

				<Grid item sx={{width:"100%",zIndex:-1}} >

						<Parallax bgImage={imageMain} strength={300} >
							<div style={{ height: "130vh" }}>
							<div style={insideStyles}>HTML inside the parallax</div>							
							</div>
						</Parallax>
				</Grid>


						
				<Grid item sx={{width:"100%",background:"#eee"}}>
					<StyledSlopeTopGrid sx={{width:"100%",zIndex:1,mt:'-288px',mb:{xs:90,md:'-450px'}}}>

							<Stack sx={{pt:10,pl:'10%',pr:'10%'}} direction={{xs:"column",md: "row"}} justifyContent="space-evenly" spacing={10}>
										
								<TopSubCard/>
								<TopSubCard/>
								<TopSubCard/>
									
							</Stack>

						</StyledSlopeTopGrid>
				</Grid>


				<Grid item sx={{width:"100%",background:"#eeeeee"}}>
					
					<StyledSlopeBottomGrid sx={{width:"100%",zIndex:1,mt:{xs:80,md:'0px'},mb:'-600px'}}>

						<Stack sx={{pt:10,pl:'10%',pr:'10%'}} direction={{xs:"column",md: "row"}} justifyContent="space-evenly" spacing={10}>
										
							
						<Grid container justifyContent="center" sx={{
							mt:{xs:-70,md:0},
							width:{xs:"100%",md:"300%"},
							}}>
							
								<Grid item xs={12}>
									<ButtonPicture/>
								</Grid>
							</Grid>

						<Grid container justifyContent="center" >
							<Grid item>
								<Stack sx={{width:"100%",pt:6,maxWidth:250}} >
							

									<Grid container justifyContent="center">
										<Grid item>
											<Typography sx={{ fontSize: '1.7rem', fontWeight: 600, mr: 0, mt: 0, mb: 0.3 }}>
												Linton
											</Typography>
										</Grid>
									</Grid>


									<Grid container justifyContent="center">
										<Grid item>
											<Typography sx={{ fontSize: '1.2rem', fontWeight: 600, mr: 0, mt: 0, mb: 0.3 }}>
												Lintonasd<br/>
											</Typography>
										</Grid>
									</Grid>

								
								</Stack>
						

							</Grid>
					</Grid>



						
					
								
						</Stack>

						</StyledSlopeBottomGrid>
				</Grid>


				<Grid item sx={{width:"100%",zIndex:-1}}>

						<Parallax bgImage={image1} strength={300} blur={{ min: -1, max: 3 }}>
							<div style={{ height: "140vh" }}>
							<div style={insideStyles}>HTML inside the parallax</div>
							</div>
						</Parallax>
	
				</Grid>
				
			
		

				
				<Grid item sx={{width:"100%",background:"#eee"}}>
					<StyledSmallSlopeTopGrid sx={{width:"100%",zIndex:1,mt:'-288px',mb:'-450px'}}></StyledSmallSlopeTopGrid>
				</Grid>


				<Grid item sx={{width:"100%",background:"#eeeeee"}}>
					
					<StyledSlopeBottomGrid sx={{width:"100%",zIndex:1,mt:{xs:80,md:'0px'},mb:'-600px'}}>

						<Stack sx={{pt:10,pl:'10%',pr:'10%'}} direction={{xs:"column",md: "row"}} justifyContent="space-evenly" spacing={10}>
										
							
						<Grid container justifyContent="center" sx={{
							mt:{xs:-70,md:0},
							width:{xs:"100%",md:"300%"},
							}}>
							
								<Grid item xs={12}>
									<ButtonPicture/>
								</Grid>
							</Grid>

						<Grid container justifyContent="center" >
							<Grid item>
								<Stack sx={{width:"100%",pt:6,maxWidth:250}} >
							

									<Grid container justifyContent="center">
										<Grid item>
											<Typography sx={{ fontSize: '1.7rem', fontWeight: 600, mr: 0, mt: 0, mb: 0.3 }}>
												Linton
											</Typography>
										</Grid>
									</Grid>


									<Grid container justifyContent="center">
										<Grid item>
											<Typography sx={{ fontSize: '1.2rem', fontWeight: 600, mr: 0, mt: 0, mb: 0.3 }}>
												Lintonasd<br/>
											</Typography>
										</Grid>
									</Grid>

								
								</Stack>
						

							</Grid>
					</Grid>



						
					
								
						</Stack>

						</StyledSlopeBottomGrid>
				</Grid>
				
				
				
				<Grid item sx={{width:"100%",zIndex:-1}}>

						<Parallax bgImage={image1} strength={300} blur={{ min: -1, max: 3 }}>
							<div style={{ height: "140vh" }}>
							<div style={insideStyles}>HTML inside the parallax</div>
							</div>
						</Parallax>
	
				</Grid>

				<Grid item sx={{width:"100%"}}>
					<StyledSlopeLastGrid sx={{width:"100%",zIndex:1,mt:'-218px',mb:-100}}>

					

						</StyledSlopeLastGrid>
				</Grid>
				
				
				</Grid>
		
				<Grid item xs={12} sx={{ m: 3, pt: 10 }}>
					<AuthFooter />
				</Grid>
			</LandingPageWrapper>
			<AppbarTop sx={{pt:10}}/>
		  </>
	    );
	};
	

class Layout extends React.Component {
	// constructor(props) {
	//   super(props);
	// }


	componentDidMount() {
		// let theUrl = url.parse(document.documentURI,true);    // 解析地址
		// console.log(theUrl.query); //获取http get参数(返回map)
	
		// window.addEventListener('scroll', this.bindHandleScroll)
	}
	
	// bindHandleScroll=(e)=>{
	//  // 滚动的高度(兼容多种浏览器)
	// const scrollTop = (e.srcElement ? e.srcElement.documentElement.scrollTop : false)  || window.pageYOffset || (e.srcElement ? e.srcElement.body.scrollTop : 0);
			 
	//  // 判断用户当前是否进行了横向滚动，如果用户发生了横向滚动，则设置元素为static
	// // const scrollLeft = (e.srcElement ? e.srcElement.documentElement.scrollLeft : false) || window.pageXOffset  || (e.srcElement ? e.srcElement.body.scrollLeft : 0);

	// if(scrollTop>0&&scrollTop<=800){
	// 		console.log("0-800");
	// 	}else if(scrollTop>800&&scrollTop<=1600){
	// 		console.log("800-1600");
	// 	}
	// }

	componentWillUnmount(){
		// window.removeEventListener('scroll', this.bindHandleScroll);
	}
	
     
	componentWillUnmount() {}
          
	render() {
	  return <ProfileLayout/>;
	}

    }

export default Layout;
