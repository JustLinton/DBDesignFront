// import { Link } from 'react-router-dom';
import * as React from 'react';
import url from 'url' 

// material-ui
import { useTheme } from '@mui/material/styles';
import {  Grid, Stack, Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';

// project imports
import ForumPageWrapper from '../forumPageWrapper';
// import CardWrapper from '../cardWrapper';
// import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';

import SubCard from 'ui-component/cards/SubCard';
import ProfileTabs from'views/pages/forum/forumcomponents/compoents/profileTabs.js'
import Avatar from '@mui/material/Avatar';
import BackGroundPicCard from 'views/pages/forum/forumcomponents/cards/card_backGroundPic.js'

// import Badge from '@mui/material/Badge';
import UserLintonAvaPNG from 'assets/images/users/usr_linton.png'
import ProfileAbout from 'views/pages/forum/forumcomponents/cards/card_aboutuser.js'
import ProfileNewPost from 'views/pages/forum/forumcomponents/cards/card_newpost.js'
import ProfileGallery from 'views/pages/forum/forumcomponents/cards/card_gallery.js'


// assets

// ===============================|| AUTH3 - REGISTER ||=============================== //


const ProfileHead = (props) =>{

	const theme = useTheme();
	// const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));


    return(
	<SubCard >
		<Grid container spacing={2} direction="column" >

			<Grid item sx={{mb:-12}} >
					<Grid container  alignItems="flex-end" >
						<BackGroundPicCard/>
					</Grid>
			</Grid>

			<Grid item >
					<Grid container  alignItems="flex-end"  >

						<Grid item xs={1} md={1}/>

						<Grid item xs={6} md={5}>
						
							{/* <Grid container  alignItems="flex-end" justifyContent="flex-end" > */}
							<Stack spacing={{xs: 0, md: 2 }}direction={{xs: "column", md: "row" }}>
								{/* <Grid item xs={12} md={5} > */}
	
								<Avatar
										alt="Remy Sharp"
										src={UserLintonAvaPNG}
										sx={{ width: {md:158,xs:110},
										 height: {md:158,xs:110},
										 border: {md:`6px solid ${theme.palette.background.paper}`,xs:`4px solid ${theme.palette.background.paper}`}, 
										}}
									/>
									
								{/* </Grid> */}
			

								{/* <Grid item xs={12} md={5} > */}
									<Stack spacing={0} justifyContent="flex-end">
										<Typography sx={{ fontSize: '1.7rem', fontWeight: 500, mr: 0, mt: 1.75, mb: 0.3 }}>
											Linton
										</Typography>
										<Typography sx={{ fontSize: '0.8rem', fontWeight: 500, mr: 0, mt: 0, mb: 0.3 }}>
											 业主用户
										</Typography>
										<Typography sx={{ fontSize: '0.5rem', color:theme.palette.grey[500], fontWeight: 500, mr: 0, mt: 0, mb: 0 }}>
											 143 关注
										</Typography>
									</Stack>
								{/* </Grid> */}

								{/* <Grid item xs={12} md={2} /> */}

							{/* </Grid> */}
							</Stack>

						</Grid>

						<Grid item xs={5} md={1}/>

						<Grid item xs={12} md={5} >
							<Grid container >
								<Grid item xs={4}/>
								<Grid item xs={8} sx={{mb:-3 }}>
									<ProfileTabs pBody={props.pBody} setPBody={props.setPBody}/>
								</Grid>
							</Grid>
						</Grid>
						
				</Grid>
				
			</Grid>

		</Grid>

    </SubCard>
    );
}


const ProfileMain = () =>{

	// const theme = useTheme();
	// const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));


    return(

	<Grid container  sx={{width:'100%'}}  justifyContent="center" >
		<Grid item xs={12} md={4} sx={{pr:{xs:0,md:2},pb:{xs:2,md:0}  }} >
			<Stack>

				<ProfileAbout/>

			</Stack>
		</Grid>

		<Grid item xs={12} md={8} sx={{pl:{xs:0,md:1},pt:{xs:1,md:0} }}>
			<Stack>

				<ProfileNewPost/>

			</Stack>
		</Grid>

	</Grid>

    );
}


const ProfileSingle = (props) =>{

	// const theme = useTheme();
	// const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));


    return(

	<Grid container  sx={{width:'100%'}}  justifyContent="center" >
		<Grid item xs={12} md={12} sx={{pb:{xs:2,md:0}  }} >
			<Stack>

				<ProfileGallery type={props.type}/>

			</Stack>
		</Grid>
	</Grid>

    );
}

const ProfileBody = (props) =>{
	switch(props.pBody){
		case 0:
			return <ProfileMain/>;
			// break;
		case 1:
			return <ProfileSingle type="gallery"/>;
			// break;
		case 2:
			return <ProfileSingle type="post"/>;
			// break;	
		case 3:
			return <ProfileSingle type="board"/>;
			// break;		
		default:
			return <ProfileMain/>;
			// break;
	}
}

const ProfileLayout = () => {
	//     const theme = useTheme();
	
	const [pBody, setPBody] = React.useState(0);
	
	    return (
		  <ForumPageWrapper>
			<Grid container direction="column" alignItems="flex-start" sx={{ minHeight: '100vh' }} >
			    <Grid item xs={12} sx={{width:'100%'}}>
				  <Grid container justifyContent="center" alignItems="fllex-start" sx={{width:'100%', minHeight: 'calc(100vh - 68px)' }}>
					
					<Grid item sx={{width:'100%'}} >
					    
						<Stack spacing={3}>
	
							<ProfileHead pBody={pBody} setPBody={setPBody}/>
							<ProfileBody pBody={pBody}/>
	
						</Stack>
	
					</Grid>
				  
				  </Grid>
			    </Grid>
			    
			    
			</Grid>
	
			<Grid item xs={12} sx={{ m: 3, pt: 10 }}>
				  <AuthFooter />
			    </Grid>
		  </ForumPageWrapper>
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
