// material-ui
import {  Chip, CircularProgress, Grid} from '@mui/material';

// project imports
// import axios from 'axios';

import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
// import AlertDialog from './dialog_alert'

import TextField from '@mui/material/TextField';
import EditHeadCard from 'views/utilities/cards/userman/compoents/UsermanEditHeadCard.js';



// import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';


// import axios from 'axios';

// ===============================|| COLOR BOX ||=============================== //

const Content = (props) =>{

	const timer = React.useRef();

	// const [insufPermission, setInsufPermission] = React.useState(true);
	// const [loading, setLoading] = React.useState(true);
	// const [newData, setNewData] = React.useState({'Name':'null'});

	const [validationErrors, setValidationErrors] = React.useState('nil');
	const [validationErrorAlertOpen, setValidationErrorAlertOpen] = React.useState(false);


	// const [confirmDialogState, setConfirmDialogState] = React.useState({
	// 	open: false,
	// 	scroll: 'body',
	// 	row: {'name':'null'},
	// 	rows: props.state.rows,
	// 	gotData: {'Name':'null'},
	// });


    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (props.openDialog) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [props.openDialog]);


//     const YellowButton = styled(Button)(({ theme }) => ({
// 	'&.MuiButton-textSecondary': {
// 		color: yellow[700],
// 		'&:hover': {
// 		backgroundColor: alpha(yellow[700], theme.palette.action.hoverOpacity),
// 		},
// 	},
// }));

    const handleCloseValidateAlert = (event) => {
	setValidationErrorAlertOpen(false);

	timer.current = window.setTimeout(() => {
		setValidationErrors('nil');
	}, 200);
}



    const handleCancelDialog = (event) => {

	// console.log('cancel');

	if(props.state.loading)return;

	// props.setSnackState({
	// 	open: true,
	// 	message: '操作已取消',
	// 	undo: false,
	// })

      props.setState({
		open: false,
		scroll: 'body',
		// row: {'name':props.state.row.name},
		loading: false,
		gotData:{'Name':''}
	})


    };



//     const afterSuccessfulGetData = () =>{
// 		setConfirmButtonSuccess(true);
// 		setConfirmButtonLoading(false);

// 		timer.current = window.setTimeout(() => {
// 			props.setSnackState({
// 				open: true,
// 				message:props.state.row.name+ ' 信息已更新',
// 				undo: true,
// 			})
		
// 			props.setState({
// 				open: false,
// 				scroll: 'body',
// 				row: {'name':props.state.row.name},
// 			})

// 				timer.current = window.setTimeout(() => {
// 					setConfirmButtonSuccess(false);
// 					setConfirmButtonLoading(false);	
// 				}, 350);

// 			}, 1000);

	
//     }


//     const handleConfirmDialog = (event) => {

// 	// console.log('cancel');

//       setConfirmDialogState({
// 		open: true,
// 		scroll: 'body',
// 		row: props.state.row,
// 		rows: props.state.rows,
// 		gotData: props.state.gotData,
// 	})

//     };

	const handleTextChange = (event) => {
		// console.log(event.target.value);
		// console.log(event.target.id);
		var theState=props.state;
		theState.gotData[event.target.id]=event.target.value;
		// console.log(theState.gotData);
		props.setState(theState);
	}


    return(
        <>
       
      {/* <AlertDialog
            open={openAlert}
            setOpen={setOpenAlert}
      /> */}


<Dialog
		open={validationErrorAlertOpen}
		onClose={handleCloseValidateAlert}
		scroll={"body"}
		aria-labelledby="scroll-dialog-title"
		aria-describedby="scroll-dialog-description"
	>
            <DialogTitle id="scroll-dialog-title" variant="h3">    
			<Grid container direction="row"  rowSpacing={5} sx={{minWidth:'200px'}}>
				<Grid item>
					<Grid container direction="row" columnSpacing={5} rowSpacing={1} justifyContent="flex-start">
						<Grid item xs={10}></Grid>
							<Grid item>
								{"错误"}
								<Divider sx={{ my: 1 }} />
							</Grid>
					</Grid>
				</Grid>
			</Grid>
            </DialogTitle>

		<DialogContent dividers={props.scroll === 'paper'}>
			{validationErrors}
		</DialogContent >

		<DialogActions>
				<Button  variant="text" onClick={handleCloseValidateAlert}>好</Button>
		</DialogActions>

	</Dialog>


       <Dialog
        open={props.state.open}
        onClose={handleCancelDialog}
        scroll={props.state.scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
            <DialogTitle id="scroll-dialog-title" variant="h3">    
			<Grid container direction="row"  rowSpacing={5}>
				<Grid item>
					<Grid container direction="row" columnSpacing={5} rowSpacing={1} justifyContent="flex-start">
						<Grid item xs={10}></Grid>
						{props.state.loading?
							<Grid item>
								{"加载用户  信息..."}
								<Divider sx={{ my: 1 }} />
							</Grid>
						:
							<Grid item>
								{"编辑用户 "}
								<Divider sx={{ my: 1 }} />
							</Grid>
						}
						
					</Grid>
				</Grid>
			</Grid>
            </DialogTitle>

        <DialogContent dividers={props.scroll === 'paper'}>
	 

	 {/* <Grid container justifyContent="center" direction="column"> */}
		{props.state.loading?
			<Grid container justifyContent="center">
				<Grid item>
					<CircularProgress/> 
				</Grid>
			</Grid>
			:
			<Grid  container spacing={2} direction="column" sx={{pt:2}} justifyContent="center">
				<Grid item sx={{ml:'5%',mr:'5%'}}>
					<EditHeadCard/>
					{/* <Typography >
							姓名
					</Typography> */}
				</Grid>
				
				<Grid item  sx={{ml:'5%',mr:'5%'}}>


								<Grid container spacing={2}  alignItems="center" sx={{pb:2}} >
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<Chip label="姓名"  color="primary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={9} xs={12} >
										<TextField 
											id="Name"
											variant="outlined"  
											color="primary" 
											defaultValue={props.state.gotData===undefined?'':props.state.gotData.Name} 
											onChange={handleTextChange}
											fullWidth 
										/>
									</Grid>
								</Grid>

								

				</Grid>
				

			</Grid>

		}     

        </DialogContent>

		{(!props.state.loading)&&
			<DialogActions>
				<Button onClick={handleCancelDialog}>取消</Button>
				{/* <Button onClick={validate}>提交</Button> */}
			</DialogActions>
		}
    
      </Dialog>

    </>
    );
}

export default Content;
