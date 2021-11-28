import * as React from 'react';

// import Box from '@mui/material/Box';
// import Switch from '@mui/material/Switch';
// import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
// import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import {Stack, Grid } from '@mui/material';
import {  Badge, Avatar} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import UserLintonAvaPNG from 'assets/images/users/usr_linton.png'
import BadgeContent from 'views/pages/forum/forumcomponents/compoents/badgecontent'
import SendButtonLoadable from 'views/pages/forum/forumcomponents/compoents/button_send_loadable.js'


export default function Compoent(props) {
//   const [disp, setDisp] = React.useState(false);
const theme = useTheme();

const [loading, setLoading] = React.useState(false);
const [success, setSuccess] = React.useState(false);
const timer = React.useRef();

const handleButtonClick = (props) => {
      // console.log(postContent);
      if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
            setSuccess(true);
            setLoading(false);

            timer.current = window.setTimeout(() => {
                  setSuccess(false);
                  setLoading(false);
            }, 400);
      }, 400);
      }
};

  const icon = (
	<Stack direction="row" spacing={2} sx={{display: props.disp?"flex":"none",pt:2,pb:2}}>
							
		<Grid>
			<Badge
				overlap="circular"
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				badgeContent={
					<BadgeContent 
						width={12}
						height={12}
						border={0} 
						content="auth"
					/>
				}
			>
				<Avatar
						alt="Remy Sharp"
						src={UserLintonAvaPNG}
						sx={{ width: 35,
						height: 35,
						border: {md:`1px solid ${theme.palette.background.paper}`,xs:`4px solid ${theme.palette.background.paper}`}, 
						}}
					/>
			</Badge>
		</Grid>

		<Grid sx={{width:'19010px'}}>
			<TextField
				fullWidth
				size="small"
				placeholder="发个友善的评论见证当下"
			/>
		</Grid>

		<Grid container justifyContent="flex-end" >
			<SendButtonLoadable
				handleButtonClick={handleButtonClick}
				loading={loading}
				success={success}
			/>
		</Grid>

	</Stack>
);

  return (
      
      <Grow in={props.disp}>
		{icon}
	</Grow>
	
  );
}
