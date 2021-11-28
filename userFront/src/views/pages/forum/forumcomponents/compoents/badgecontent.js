import * as React from 'react';
import { styled } from '@mui/material/styles';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

import YellowAvatar from 'views/pages/forum/forumcomponents/compoents/avatar_yellow.js'

export default function BadgeAvatars(props) {
	//add badgeContent as the authorized.
	const SmallAvatar = styled(YellowAvatar)(({ theme }) => ({
		width: props.width,
		height: props.height,
		border: `${props.border}px solid ${theme.palette.background.paper}`,
	}));
	
  return (
	//   <CheckRoundedIcon/>
	<SmallAvatar alt="o">
		{props.content==="auth"&&<CheckCircleOutlineRoundedIcon/>}
	</SmallAvatar>
  );
}