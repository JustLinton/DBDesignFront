// material-ui
import { useTheme, styled } from '@mui/material/styles';

import {
    Avatar,
    // Button,
    // Card,
    // CardContent,
    Chip,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    // Stack,
    Typography
} from '@mui/material';

// assets
// import { IconBrandTelegram, IconBuildingStore, IconMailbox, IconPhoto } from '@tabler/icons';
import UserLintonAvaPNG from 'assets/images/users/usr_linton.png';
import UserJohnsonAvaPNG  from 'assets/images/users/user-round.svg';

// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    padding: 16,
    '&:hover': {
        background: theme.palette.primary.light
    },
    '& .MuiListItem-root': {
        padding: 0
    }
}));


// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = (props) => {
    const theme = useTheme();

    var rawRowsArray = props.notiRows;

//     console.log(props.notiRows);

const DefaultItem = (props) =>{
	return(
		<>
			<Divider />
			<ListItemWrapper>
			<ListItem alignItems="center">
				<ListItemAvatar>
					<Avatar alt="John Doe" />
				</ListItemAvatar>
				<ListItemText primary="Linton" />
				<ListItemSecondaryAction>
					<Grid container justifyContent="flex-end">
					<Grid item xs={12}>
						<Typography variant="caption" display="block" gutterBottom>
							2 分钟前
						</Typography>
					</Grid>
					</Grid>
				</ListItemSecondaryAction>
			</ListItem>
			<Grid container direction="column" className="list-container">
				<Grid item xs={12} sx={{ pb: 2 }}>
					<Typography variant="subtitle2">通知中心正在做了！已经建文件夹了！</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container>
						{props.unread&&
							<Grid item>
								<Chip label="未读" />
							</Grid>
						}
					<Grid item>
						<Chip label="好友" />
					</Grid>
					</Grid>
				</Grid>
			</Grid>
			</ListItemWrapper>  
			<Divider />
		</>
	);
}


const handleClickItem = (rowNum) =>{
	props.setNotiDialogState({
		open: true,
		scroll: 'body',
		// row: {'name':props.state.row.name},
		loading: false,
		gotData:{'Name':''}
	});
	props.setListOpen(false);
	console.log(rowNum);
}

const TextItem = (props) =>{

	// console.log(props);

	return(
		<>
			<Divider />
			<ListItemWrapper
				onClick={()=> {handleClickItem(props.rowNum)}}
			>

				<ListItem alignItems="center" >

					<ListItemAvatar>
						{props.senderAva}
					</ListItemAvatar>
					<ListItemText primary={props.senderName} />
					<ListItemSecondaryAction>
						<Grid container justifyContent="flex-end">
						<Grid item xs={12}>
							<Typography variant="caption" display="block" gutterBottom>
								{props.SendTimePassed}
							</Typography>
						</Grid>
						</Grid>
					</ListItemSecondaryAction>
				</ListItem>

				<Grid container direction="column" className="list-container" 
					// onClick={()=> {handleClickItem(props.rowNum)}}
				>
					<Grid item xs={12} sx={{ pb: 2 }}>
						<Typography variant="subtitle2">{props.title}</Typography>
					</Grid>
					<Grid item xs={12}>
						<Grid container>
							{props.unread&&
								<Grid item>
									<Chip label="未读" />
								</Grid>
							}
						{/* <Grid item>
							<Chip label="好友" />
						</Grid> */}
						</Grid>
					</Grid>
				</Grid>

			</ListItemWrapper>  
			<Divider />
		</>
	);
}


const avatarGetter = (ava) =>{
	if(ava==="linton") return UserLintonAvaPNG;
	if(ava==="john") return UserJohnsonAvaPNG;
	return "2";
}

const rowsRenderer = (row) =>{

	if(row.Title==="加载中...")return(<DefaultItem/>);
	if(row.Type==="text")return(
		<TextItem
			title={row.Title}
			unread={row.HaveRead==="false"}
			rowNum={row.RowNum}
			senderName={row.SenderName}
			senderAva={<Avatar alt={row.SenderName} src={avatarGetter(row.SenderAva)} />}
			SendTimePassed={row.SendTimePassed}
			SendTime={row.SendTime}
		/>
	);
}

const TheRows = () =>{

	if(props.notiRowsTotalNum===0)
		return (
			<Grid container justifyContent="center" sx={{minWidth:'250px',maxWidth:'300px'}}>
					<Grid item sx={{pt:2,pb:2}}>
						<Chip label="暂无通知" />
					</Grid>
			</Grid>
		);

	return(
		<Grid sx={{minWidth:'250px',maxWidth:'300px'}}>
		{rawRowsArray.map(rowsRenderer)}
		</Grid>
	);
}


    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 330,
                py: 0,
                borderRadius: '10px',
                [theme.breakpoints.down('md')]: {
                    maxWidth: 300
                },
                '& .MuiListItemSecondaryAction-root': {
                    top: 22
                },
                '& .MuiDivider-root': {
                    my: 0
                },
                '& .list-container': {
                    pl: 7
                }
            }}
        >
            

   
            <TheRows/>
        

            {/* <ListItemWrapper>
                <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar
                            sx={{
                                color: theme.palette.success.dark,
                                backgroundColor: theme.palette.success.light,
                                border: 'none',
                                borderColor: theme.palette.success.main
                            }}
                        >
                            <IconBuildingStore stroke={1.5} size="1.3rem" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="subtitle1">Store Verification Done</Typography>} />
                    <ListItemSecondaryAction>
                        <Grid container justifyContent="flex-end">
                            <Grid item xs={12}>
                                <Typography variant="caption" display="block" gutterBottom>
                                    2 min ago
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItemSecondaryAction>
                </ListItem>
                <Grid container direction="column" className="list-container">
                    <Grid item xs={12} sx={{ pb: 2 }}>
                        <Typography variant="subtitle2">We have successfully received your request.</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item>
                                <Chip label="Unread" sx={chipErrorSX} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItemWrapper>
            <Divider />
            <ListItemWrapper>
                <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar
                            sx={{
                                color: theme.palette.primary.dark,
                                backgroundColor: theme.palette.primary.light,
                                border: 'none',
                                borderColor: theme.palette.primary.main
                            }}
                        >
                            <IconMailbox stroke={1.5} size="1.3rem" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="subtitle1">Check Your Mail.</Typography>} />
                    <ListItemSecondaryAction>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Typography variant="caption" display="block" gutterBottom>
                                    2 min ago
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItemSecondaryAction>
                </ListItem>
                <Grid container direction="column" className="list-container">
                    <Grid item xs={12} sx={{ pb: 2 }}>
                        <Typography variant="subtitle2">All done! Now check your inbox as you&apos;re in for a sweet treat!</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item>
                                <Button variant="contained" disableElevation endIcon={<IconBrandTelegram stroke={1.5} size="1.3rem" />}>
                                    Mail
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItemWrapper>
            <Divider />
            <ListItemWrapper>
                <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar alt="John Doe" src={User1} />
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="subtitle1">John Doe</Typography>} />
                    <ListItemSecondaryAction>
                        <Grid container justifyContent="flex-end">
                            <Grid item xs={12}>
                                <Typography variant="caption" display="block" gutterBottom>
                                    2 min ago
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItemSecondaryAction>
                </ListItem>
                <Grid container direction="column" className="list-container">
                    <Grid item xs={12} sx={{ pb: 2 }}>
                        <Typography component="span" variant="subtitle2">
                            Uploaded two file on &nbsp;
                            <Typography component="span" variant="h6">
                                21 Jan 2020
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Card
                                    sx={{
                                        backgroundColor: theme.palette.secondary.light
                                    }}
                                >
                                    <CardContent>
                                        <Grid container direction="column">
                                            <Grid item xs={12}>
                                                <Stack direction="row" spacing={2}>
                                                    <IconPhoto stroke={1.5} size="1.3rem" />
                                                    <Typography variant="subtitle1">demo.jpg</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItemWrapper>
            <Divider />
            <ListItemWrapper>
                <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar alt="John Doe" src={User1} />
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="subtitle1">John Doe</Typography>} />
                    <ListItemSecondaryAction>
                        <Grid container justifyContent="flex-end">
                            <Grid item xs={12}>
                                <Typography variant="caption" display="block" gutterBottom>
                                    2 min ago
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItemSecondaryAction>
                </ListItem>
                <Grid container direction="column" className="list-container">
                    <Grid item xs={12} sx={{ pb: 2 }}>
                        <Typography variant="subtitle2">It is a long established fact that a reader will be distracted</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item>
                                <Chip label="Confirmation of Account." sx={chipSuccessSX} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItemWrapper> */}
        </List>
    );
};

export default NotificationList;
