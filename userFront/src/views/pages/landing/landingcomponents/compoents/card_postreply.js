// import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import {  styled } from '@mui/material/styles';
import * as React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid, Stack, Typography } from '@mui/material';
// import { ListItemButton } from '@mui/material';

// project imports

// import SkeletonNewPostCard from 'ui-component/cards/Skeleton/NewPostCard';
import {  Badge, Avatar} from '@mui/material';
// import TextField from '@mui/material/TextField';

// import SendButtonLoadable from 'views/pages/forum/forumcomponents/compoents/button_send_loadable.js'
// import Button from '@mui/material/Button';
// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //


import BadgeContent from 'views/pages/forum/forumcomponents/compoents/badgecontent'
// import PostReplyCard from 'views/pages/forum/forumcomponents/compoents/card_postreply.js'
import PostMenu from 'views/pages/forum/forumcomponents/compoents/menu_post.js'
import UserLintonAvaPNG from 'assets/images/users/usr_linton.png'
import CommentCompoent from 'views/pages/forum/forumcomponents/compoents/compoent_comment.js';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';


import SubCard from 'ui-component/cards/SubCard';

const CardWrapper = styled(SubCard)(({ theme }) => ({
    // backgroundColor: theme.palette.secondary.dark,
    // color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    width:'100%',
//     height:30,
    border: `2px solid ${theme.palette.primary.light}`,
    // '&>div': {
    //     position: 'relative',
    //     zIndex: 5
    // },
    // '&:after': {
    //     content: '""',
    //     position: 'absolute',
    //     width: 210,
    //     height: 210,
    //     background: "#fff",
    //     borderRadius: '50%',
    //     zIndex: 1,
    //     top: -85,
    //     right: -95,
    //     opacity: 0.6,
    //     [theme.breakpoints.down('sm')]: {
    //         top: -105,
    //         right: -140
    //     }
    // },
    // '&:before': {
    //     content: '""',
    //     position: 'absolute',
    //     zIndex: 1,
    //     width: 210,
    //     height: 210,
    //     background: "#fff",
    //     borderRadius: '50%',
    //     top: -125,
    //     right: -15,
    //     opacity: 0.4,
    //     [theme.breakpoints.down('sm')]: {
    //         top: -155,
    //         right: -70
    //     }
    // }
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const ReplyCard = ({ isLoading }) => {
    // const theme = useTheme();

    // const [timeValue, setTimeValue] = useState(false);
    // const handleChangeTime = (event, newValue) => {
    //     setTimeValue(newValue);
    // };

    const theme = useTheme();
    

    const [displayCommentComp, setDisplayCommentComp] = React.useState(false);
    const [liked, setLiked] = React.useState(false);
    const [likes, setLikes] = React.useState(19);

//     const [loading, setLoading] = React.useState(false);
//     const [success, setSuccess] = React.useState(false);
//     const timer = React.useRef();

//     const [postContent, setPostContent] = React.useState("");

//       const handleTextChange = (event) => {
//             setPostContent(event.target.value);
//       };

    return (
        <>
            {isLoading ? (
                <SkeletonTotalOrderCard />
            ) : (
                <CardWrapper >
                    <Stack spacing={0} sx={{pl:0,pr:0,mb:-1}}> 
				{/* 因为有隐藏组件，所以spacing设置为0，否则就算隐藏了仍然要占用spacing */}
                     
			   		<Grid container sx={{width:'100%',pb:1}} > {/* 头像+菜单行 */}	
						
						<Grid item xs={6}>{/* 头像区 */}	
							<Stack direction="row">
								<Grid>
									<Badge
										overlap="circular"
										anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
										badgeContent={
											<BadgeContent 
												width={13}
												height={13}
												border={0} 
												content="auth"
											/>
										}
									>
										<Avatar
												alt="Remy Sharp"
												src={UserLintonAvaPNG}
												sx={{ width: 42,
												height: 42,
												border: {md:`3px solid ${theme.palette.background.paper}`,xs:`4px solid ${theme.palette.background.paper}`}, 
												}}
											/>
									</Badge>
								</Grid>

								<Stack sx={{pl:1}}>
									<Typography  sx={{ fontSize: '1.0rem', fontWeight: 600, mr: 0, mt: 0.6, mb: 0.3 }}>
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
						<Typography  sx={{ fontSize: '1.0rem', fontWeight: 400, mr: 0, mt: 1.4, mb: 0.3 }}>
							这里是回复!
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
									1
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


                              <Grid sx={{width:'100%'}}>{/* 回复行 */}	

						<CommentCompoent
							disp={displayCommentComp}
							setDisp={setDisplayCommentComp}
						/>
                                         
                              </Grid>

                        </Stack>
                </CardWrapper>
            )}
        </>
    );
};

export default ReplyCard;
