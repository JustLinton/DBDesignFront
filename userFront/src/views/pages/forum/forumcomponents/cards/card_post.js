// import PropTypes from 'prop-types';
// import { useState } from 'react';
import * as React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, CardContent, Grid, Stack, Typography } from '@mui/material';
// import { ListItemButton } from '@mui/material';

// project imports
// import BajajAreaChartCard from './BajajAreaChartCard';
import SubCard from 'ui-component/cards/SubCard';
import SkeletonNewPostCard from 'ui-component/cards/Skeleton/NewPostCard';
import {  Badge, Avatar} from '@mui/material';
// import TextField from '@mui/material/TextField';

// import SendButtonLoadable from 'views/pages/forum/forumcomponents/compoents/button_send_loadable.js'
// import Button from '@mui/material/Button';
// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //


import BadgeContent from 'views/pages/forum/forumcomponents/compoents/badgecontent'
import PostReplyCard from 'views/pages/forum/forumcomponents/compoents/card_postreply.js'
import PostMenu from 'views/pages/forum/forumcomponents/compoents/menu_post.js'
import UserLintonAvaPNG from 'assets/images/users/usr_linton.png'
import CommentCompoent from 'views/pages/forum/forumcomponents/compoents/compoent_comment.js';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const NewpostCard = (props) => {
    const theme = useTheme();
    

    const [displayCommentComp, setDisplayCommentComp] = React.useState(false);
    const [liked, setLiked] = React.useState(false);
    const [likes, setLikes] = React.useState(72);

//     const [loading, setLoading] = React.useState(false);
//     const [success, setSuccess] = React.useState(false);
//     const timer = React.useRef();

//     const [postContent, setPostContent] = React.useState("");

      // const handleTextChange = (event) => {
      //       setPostContent(event.target.value);
      // };


//     const handleClose = () => {
//       //   setAnchorEl(null);
//     };

//     const ScrollTo = () => {
//         let scrollToptimer = setInterval(function() {
//           var top = document.body.scrollTop || document.documentElement.scrollTop;
//           var speed = top / 30;
//           document.documentElement.scrollTop -= speed;
//           if (top === 0) {
//             clearInterval(scrollToptimer);
//           }
//         }, 5);
//       }


// const handleButtonClick = (props) => {
//       console.log(postContent);
//       if (!loading) {
//       setSuccess(false);
//       setLoading(true);
//       timer.current = window.setTimeout(() => {
//             setSuccess(true);
//             setLoading(false);

//             timer.current = window.setTimeout(() => {
//                   setSuccess(false);
//                   setLoading(false);
//             }, 400);
//       }, 400);
//       }
// };

    return (
        <>
            {props.isLoading ? (
                <SkeletonNewPostCard />
            ) : (
                <SubCard content={false}>
                    <CardContent>
                        
                        <Stack spacing={0} sx={{pl:1,pr:1}}> 
				{/* 因为有隐藏组件，所以spacing设置为0，否则就算隐藏了仍然要占用spacing */}
                     
			   		<Grid container sx={{width:'100%',mb:1}} > {/* 头像+菜单行 */}	
						
						<Grid item xs={6}>{/* 头像区 */}	
							<Stack direction="row">
								<Grid>
									<Badge
										overlap="circular"
										anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
										badgeContent={
											<BadgeContent 
												width={15}
												height={15}
												border={0} 
												content="auth"
											/>
										}
									>
										<Avatar
												alt="Remy Sharp"
												src={UserLintonAvaPNG}
												sx={{ width: 50,
												height: 50,
												border: {md:`3px solid ${theme.palette.background.paper}`,xs:`4px solid ${theme.palette.background.paper}`}, 
												}}
											/>
									</Badge>
								</Grid>

								<Stack sx={{pl:1}}>
									<Typography  sx={{ fontSize: '1.0rem', fontWeight: 600, mr: 0, mt: 1.4, mb: 0.3 }}>
										Linton
									</Typography>
									<Typography  sx={{ fontSize: '0.7rem', fontWeight: 500, mr: 0,  mb: 0.3 }}>
										业主用户,学生
									</Typography>
								</Stack>
							
							</Stack>
						</Grid>

						<Grid item xs={6}>{/* 时间+菜单区 */}
							<Stack direction="row" justifyContent="flex-end">
								<Stack direction="row" spacing={{md:1,xs:0}}>
									<Typography  sx={{ fontSize: '0.8rem', fontWeight: 600, mr: 0, mt: 1.4, mb: 0.3 }}>
										1 分钟前
									</Typography>

									<Grid>
										<PostMenu/>
									</Grid>
								</Stack>
							</Stack>
						</Grid>
					</Grid>
			   		

					<Grid sx={{width:'100%',pl:1,pr:1,mb:1}}>{/* 正文行 */}	
						<Typography  sx={{ fontSize: '1.1rem', fontWeight: 400, mr: 0, mt: 1.4, mb: 0.3 }}>
							这里是正文！<br/>而且很多行<br/>而且很多行<br/>而且很多行
						</Typography>
					</Grid>

   					 <Grid sx={{width:'100%'}} >{/* 点赞行 */}	

						<Stack direction="row" spacing={3}>
							
							
							<Stack direction="row">
								<Button 
									variant="text"  
									color={liked?"error":"secondary"} 
									startIcon={liked?<FavoriteRoundedIcon/>:<FavoriteBorderRoundedIcon />}
									onClick={()=>{
										setLiked(!liked);
										if(liked)setLikes(likes-1);
										else setLikes(likes+1);
									}}
								>
									{likes}
								</Button>

								<Button 
									variant="text"  
									color="secondary" 
									startIcon={displayCommentComp?<ForumRoundedIcon />:<ForumOutlinedIcon/>}
									onClick={()=>{
										setDisplayCommentComp(!displayCommentComp);
									}}
									>
									8
								</Button>
							</Stack>
							
{/* 
							<Grid container justifyContent="flex-end" >
                                                <SendButtonLoadable
                                                      handleButtonClick={handleButtonClick}
                                                      loading={loading}
                                                      success={success}
                                                />
                                          </Grid> */}

						</Stack>
                                         
                              </Grid>
					   

                              <Grid sx={{width:'100%'}}>{/* 回复操作行 */}	

						<CommentCompoent
							disp={displayCommentComp}
							setDisp={setDisplayCommentComp}
						/>
                                         
                              </Grid>


					<Grid sx={{width:'100%',pt:1}}>{/* 回复行 */}	
						<Stack spacing={2}>
							<PostReplyCard/>
							<PostReplyCard/>
						</Stack>
					</Grid>

                        </Stack>

                    </CardContent>
                </SubCard>
            )}
        </>
    );
};

export default NewpostCard;
