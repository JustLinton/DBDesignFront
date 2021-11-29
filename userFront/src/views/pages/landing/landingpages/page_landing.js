// import { Link } from 'react-router-dom';
import * as React from 'react';
import url from 'url' 


// material-ui
import { useTheme } from '@mui/material/styles';
import {  Badge, Button, Divider, Grid, Paper, Stack, Toolbar, Typography } from '@mui/material';
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
import GitHubIcon from '@mui/icons-material/GitHub';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';

import { Parallax } from "react-parallax";
import { Link} from '@mui/material';

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
	// backgroundSize:`1917px 632px`,
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
	// backgroundSize:`1917px 632px`,
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


  const StyledOpacityGrid = styled(Grid)((props) => ({
	backgroundColor:'rgba(0,0,0,0.5)',
	opacity:0.78,
  }));


const StyledContactButton = styled(IconButton)((props) => ({
	backgroundColor:"#fff",
	color:"#424242",
	'&:hover': {
		backgroundColor:'#ffecb3',
	}
}));


const LandingFooter =()=>{
	return(

	<Grid container  direction="column" justifyContent="flex-start"  backgroundColor="#ffca28">
		<Grid item>
			<Stack  direction={{xs:"column",md:"row"}} spacing={5} sx={{width:"100%",height:{xs:"100vh",md:"35vh"}}}>
				
				
					
				<Grid  container sx={{width:"100%",pt:"10vh"}} justifyContent="center" alignItems="flex-start">
					<Grid item sx={12} >
						<Stack>
							<Typography  sx={{color:"#424242",  fontSize: '2.0rem', fontWeight: 600 }}>
								Try Nesto Now Online!
							</Typography>
							<Typography  sx={{color:"#424242",  fontSize: '1.6rem', fontWeight: 400 }}>
								现在试用 Nesto ,<br/>体验智慧社区新理念
							</Typography>
							<Stack direction="row" spacing={2} sx={{pt:3}}>
								<StyledContactButton onClick={()=>{window.location="https://github.com/justlinton"}} >
									<GitHubIcon />
								</StyledContactButton>
								<StyledContactButton>
									<TwitterIcon />
								</StyledContactButton>
								<StyledContactButton>
									<PinterestIcon />
								</StyledContactButton>
							</Stack>
						</Stack>
					</Grid>
				</Grid>

	

				<Grid  container sx={{width:"100%",pt:"10vh",pl:{xs:"10%",md:"20%"},pr:{xs:"10%",md:0}}} justifyContent="center" alignItems="flex-start">
						<Grid item xs={12} md={6}>
							<Stack>
								<Typography  sx={{color:"#424242",  fontSize: '1.4rem', fontWeight: 600,pb:1.1}}>
									链接
								</Typography>
								<Typography href="https://mui.com" sx={{color:"#424242",  fontSize: '1.1rem', fontWeight: 300,pb:0.7}}  component={Link}  target="_blank" underline="hover">
									Material UI
								</Typography>
								<Typography  href="https://www.sdu.edu.cn" sx={{color:"#424242",  fontSize: '1.1rem', fontWeight: 300,pb:0.7}}  component={Link}  target="_blank" underline="hover">
									山东大学
								</Typography>
								<Typography  href="https://www.sdu.edu.cn" sx={{color:"#424242",  fontSize: '1.1rem', fontWeight: 300,pb:0.7}}  component={Link}  target="_blank" underline="hover">
									IRLab
								</Typography>
								<Typography href="http://a.cupof.beer" sx={{color:"#424242",  fontSize: '1.1rem', fontWeight: 300,pb:0.7}}  component={Link}  target="_blank" underline="hover">
									Linton个人博客
								</Typography>
							</Stack>
						</Grid>
						<Grid item xs={12} md={6} sx={{pt:{xs:3,md:0}}}>
							<Stack>
								<Typography  sx={{color:"#424242",  fontSize: '1.4rem', fontWeight: 600,pb:1.1}}>
									有关信息
								</Typography>
								<Typography  href="#" sx={{color:"#424242",  fontSize: '1.1rem', fontWeight: 300,pb:0.7}}  component={Link}  target="_blank" underline="hover">
									MIT许可证
								</Typography>
								<Typography  href="#" sx={{color:"#424242",  fontSize: '1.1rem', fontWeight: 300,pb:0.7}}  component={Link}  target="_blank" underline="hover">
									Terms & Conditions
								</Typography>
								<Typography href="#" sx={{color:"#424242",  fontSize: '1.1rem', fontWeight: 300,pb:0.7}}  component={Link}  target="_blank" underline="hover">
									小记
								</Typography>
							</Stack>
						</Grid>

				</Grid>
			
			</Stack>
		</Grid>

		<Grid item>
			<Grid container sx={{width:"100%",height:"15vh"}} justifyContent="center" >
				<Grid item sx={3}/>
				<Grid item sx={6}>
					<Stack alignItems="center"  justifyContent="center" spacing={0}>
						<Divider sx={{pl:"50%",pr:"50%",pt:3,mb:2}}/>
						<Typography  sx={{color:"#424242",  fontSize: '0.9rem', fontWeight: 300 }} component={Link} href="http://a.cupof.beer" target="_blank" underline="hover">
						Copyright&copy; 2022 JustLinton
						</Typography>
						<Typography  sx={{color:"#424242",  fontSize: '0.9rem', fontWeight: 300,mt:0.7}}>
						Database System Design 2021
						</Typography>
					</Stack>
				</Grid>
				<Grid item sx={3}/>
			</Grid>
		</Grid>
	</Grid>

	
	);
	
}

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

						<Parallax bgImage={imageMain} strength={350} blur={{ min: -15, max: 12 }}>
							<div style={{ height: "130vh" }}>
								<StyledOpacityGrid container sx={{width:"100%",height:"130vh",pb:"30vh"}} justifyContent="center" alignItems="center">
									<Grid item xs={6} md={6} sx={{pt:{xs:3,md:0}}}>
										<Stack>
											<Typography  sx={{color:"#fff",  fontSize: '2.4rem', fontWeight: 600,pb:1.1}}>
												社区故事，从此开始
											</Typography>
											<Typography  href="#" sx={{color:"#fff",  fontSize: '2.1rem', fontWeight: 300,pb:0.7}}  component={Link}  target="_blank" underline="hover">
												Join Nesto.
											</Typography>
										</Stack>
									</Grid>

								</StyledOpacityGrid>		
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
					
					<StyledSlopeBottomGrid sx={{width:"100%",zIndex:1,mt:{xs:80,md:'0px'},mb:'-650px'}}>

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

						<Parallax bgImage={image1} strength={350} blur={{ min: -15, max: 12 }} >
							<div style={{ height: "140vh" }}>
							<div style={insideStyles}>HTML inside the parallax</div>
							</div>
						</Parallax>
	
				</Grid>
				
			
		

				
				<Grid item sx={{width:"100%",background:"#eee"}}>
					<StyledSmallSlopeTopGrid sx={{width:"100%",zIndex:1,mt:'-288px',mb:'-450px'}}></StyledSmallSlopeTopGrid>
				</Grid>


				<Grid item sx={{width:"100%",background:"#eeeeee"}}>
					
					<StyledSlopeBottomGrid sx={{width:"100%",zIndex:1,mt:{xs:80,md:'0px'},mb:'-650px'}}>

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

						<Parallax bgImage={image1} strength={350} >
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
		
				<Grid item xs={12} sx={{width:"100%",height:"50vh"}} backgroundColor="#ffca28">
					<LandingFooter />
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
