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
import ConfirmDialog from 'views/utilities/essentialCompoents/dialog_uoverview_confirm.js';
import DelConfirmDialog from 'views/utilities/essentialCompoents/dialog_uoverview_deluser_confirm';
import TextField from '@mui/material/TextField';
import EditHeadCard from 'views/utilities/cards/userman/compoents/UsermanEditHeadCard.js';
import MyAutocomplete from 'views/utilities/essentialCompoents/textfield_autocomp.js';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import DeleteIcon from '@mui/icons-material/Delete';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { alpha, styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import * as Yup from 'yup';

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

	const [inputValuePGname, setInputValuePGname] = React.useState('');

	const [confirmDialogState, setConfirmDialogState] = React.useState({
		open: false,
		scroll: 'body',
		row: {'name':'null'},
		rows: props.state.rows,
		gotData: {'Name':'null'},
	});

	const [delConfirmDialogState, setDelConfirmDialogState] = React.useState({
		open: false,
		scroll: 'body',
		row: {'name':'null'},
		rows: props.state.rows,
		gotData: {'Name':'null'},
	});



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

const validate = () =>{
	var hasErr=false;
	setValidationErrors('nil');
	setValidationErrorAlertOpen(false);

	let schema = Yup.object().shape({
		name: Yup.string().trim().nullable().required("???????????????"),
		email: Yup.string().trim().nullable().required("???????????????").email("?????????????????????"),
		phone: Yup.string().trim().nullable().required("??????????????????").matches(/^[0-9]{11}$/,"???????????????"),
		idcard: Yup.string().trim().nullable().required("??????????????????").matches(/^[0-9]{18}$/,"???????????????"),
		pgname: Yup.string().trim().nullable().required("??????????????????"),
	});

	schema.validate(
		{
			name:props.state.gotData.Name,
			email:props.state.gotData.Email,
			phone:props.state.gotData.Phone,
			idcard:props.state.gotData.IdCard,
			pgname:props.state.gotData.PGname,
		}
	)
	.catch(function (err) {
		// console.log(err.errors);
		setValidationErrorAlertOpen(true);
		setValidationErrors(err.errors);
		hasErr=true;
	}).then(function (err){
		if(!hasErr)handleConfirmDialog();
	});

	// name: Yup.string().required('???????????????'),
	// email: Yup.string().email('?????????????????????').max(255).required('??????????????????'),
	// password: Yup.string().max(255).required('???????????????'),
}


    const handleCancelDialog = (event) => {

	// console.log('cancel');

	if(props.state.loading)return;

	props.setSnackState({
		open: true,
		message: '???????????????',
		undo: false,
	})

      props.setState({
		open: false,
		scroll: 'body',
		row: {'name':props.state.row.name},
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
// 				message:props.state.row.name+ ' ???????????????',
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



const handleDelConfirmDialog = (event) => {

	// console.log('cancel');

      setDelConfirmDialogState({
		open: true,
		scroll: 'body',
		row: props.state.row,
		rows: props.state.rows,
		gotData: props.state.gotData,
	})

    };


    const handleConfirmDialog = (event) => {

	// console.log('cancel');

      setConfirmDialogState({
		open: true,
		scroll: 'body',
		row: props.state.row,
		rows: props.state.rows,
		gotData: props.state.gotData,
	})

    };

	const handleTextChange = (event) => {
		// console.log(event.target.value);
		// console.log(event.target.id);
		var theState=props.state;
		theState.gotData[event.target.id]=event.target.value;
		// console.log(theState.gotData);
		props.setState(theState);
	}

	const handleRadioChange = (event,newValue) => {
		// console.log(event.target.value);
		// console.log(event.target.name);
		var theState=props.state;
		theState.gotData[event.target.name]=newValue;
		props.setState(theState);
		// console.log(props.state.gotData.Gender);

		//?????????????????????bug???????????????
		setConfirmDialogState({
			open: false,
			scroll: 'body',
			row: props.state.row,
			rows: props.state.rows,
			gotData: props.state.gotData,
		})
	}

	const handleAutoCompleteChange = (event,newValue) => {
		// console.log(newValue);
		// console.log(event.target.value);
		// console.log(event.target.id);
		var theState=props.state;
		theState.gotData['PGname']=newValue;
		// console.log(theState.gotData);
		props.setState(theState);
	}

	const themeWXQ = createTheme({
		components: {
		  // Name of the component
		  MuiChip: {
			  //?????????????????????MUI????????????
		    defaultProps: {
			// The props to change the default for.?????????????????????????????????????????????
		    },
		    styleOverrides: {
			    //styleOverrides??????css???????????????	.MuiChip-colorSecondary????????????????????????????????????????????????
			    //??????????????????????????????????????????????????????????????????????????????
			colorSecondary:{
				color:yellow[700],
				borderColor:yellow[700],
			},
			outlinedSecondary:{
				color:yellow[700],
				borderColor:yellow[700],
			}
		    },
		  },
		MuiButton: {
			//?????????????????????MUI????????????
		  defaultProps: {
		    // The props to change the default for.?????????????????????????????????????????????
		  },
		  styleOverrides: {
			  //styleOverrides??????css???????????????	.MuiChip-colorSecondary????????????????????????????????????????????????
			  //??????????????????????????????????????????????????????????????????????????????
		    outlinedSecondary:{
			    color:yellow[700],
			    borderColor:yellow[700],
			    '&:hover': {
				color:yellow[700],
				borderColor:yellow[700],
			    },
		    }
		  },
		},
		},
	    });

	const YellowSwitch = styled(Switch)(({ theme }) => ({
		'& .Mui-checked': {
			color: yellow[700],
			'&:hover': {
			backgroundColor: alpha(yellow[700], theme.palette.action.hoverOpacity),
			},
		},
		'& .Mui-checked+ .MuiSwitch-track': {
			backgroundColor: yellow[700],
		},
	}));

    return(
        <>
       
      {/* <AlertDialog
            open={openAlert}
            setOpen={setOpenAlert}
      /> */}

	<ConfirmDialog
		state={confirmDialogState}
		setState={setConfirmDialogState}
		editState={props.state}
		setEditState={props.setState}
		setSnackState={props.setSnackState}
		setRows={props.setRows}
	/>

	<DelConfirmDialog
		state={delConfirmDialogState}
		setState={setDelConfirmDialogState}
		editState={props.state}
		setEditState={props.setState}
		setSnackState={props.setSnackState}
		setRows={props.setRows}
	/>

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
								{"??????"}
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
				<Button  variant="text" onClick={handleCloseValidateAlert}>???</Button>
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
								{"???????????? "+props.state.row.name+" ??????..."}
								<Divider sx={{ my: 1 }} />
							</Grid>
						:
							<Grid item>
								{"???????????? "+props.state.row.name}
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
							??????
					</Typography> */}
				</Grid>
				
				<Grid item  sx={{ml:'5%',mr:'5%'}}>


								<Grid container spacing={2}  alignItems="center" sx={{pb:2}} >
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<Chip label="??????"  color="primary" variant="outlined" />
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

								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<Chip label="UID"  color="primary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={9} xs={12} >
										<TextField 
											id="Uid"
											variant="outlined"  
											color="primary"
											disabled = {true}
											helperText="??????????????????"
											defaultValue={props.state.gotData===undefined?'':props.state.gotData.Uid} 
											onChange={handleTextChange}
											fullWidth 
										/>
									</Grid>
								</Grid>


								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<Chip label="??????"  color="primary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={9} xs={12} >
										<TextField 
											id="Phone"
											variant="outlined"  
											color="primary"
											disabled = {true}
											helperText="??????????????????"
											defaultValue={props.state.gotData===undefined?'':props.state.gotData.Phone} 
											onChange={handleTextChange}
											fullWidth 
										/>
									</Grid>
								</Grid>

								

								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<Chip label="??????"  color="primary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={9} xs={12} >
									<FormControl component="fieldset">
										<RadioGroup 
										row
										name="Gender"
										// value={"???"} 
										value={props.state.gotData===undefined?"??????":props.state.gotData.Gender} 
										onChange={handleRadioChange}
										>
											<FormControlLabel value="???" control={<Radio />} label="???" />
											<FormControlLabel value="???" control={<Radio />} label="???" />
											<FormControlLabel value="??????" control={<Radio />} label="??????" />
										</RadioGroup>
									</FormControl>
									</Grid>
								</Grid>

								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<Chip label="?????????"  color="primary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={9} xs={12} >
										<TextField 
											id="IdCard"
											variant="outlined"  
											color="primary"
											defaultValue={props.state.gotData===undefined?'':props.state.gotData.IdCard} 
											onChange={handleTextChange}
											fullWidth 
										/>
									</Grid>
								</Grid>


								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<Chip label="?????????"  color="primary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={9} xs={12} >
										<MyAutocomplete 
											id="PGName"
											value={props.state.gotData===undefined?'':props.state.gotData.PGname}
											onChange={handleAutoCompleteChange}
											inputValue={inputValuePGname}
											disabled={false}
											color="primary"
											setInputValue={setInputValuePGname}
											options={props.state.gotData===undefined?['????????????']:props.state.gotData.PGNameList}
										/>
									</Grid>
								</Grid>


								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<Chip label="??????"  color="primary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={9} xs={12} >
										<TextField 
											id="Email"
											variant="outlined"  
											color="primary"
											defaultValue={props.state.gotData===undefined?'':props.state.gotData.Email} 
											onChange={handleTextChange}
											fullWidth 
										/>
									</Grid>
								</Grid>



								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={12} xs={12} >
										<Divider  variant="fullwidth">
											<ThemeProvider theme={themeWXQ}>
												<Chip sx={{clickable:true}} label="?????????"  color="secondary" variant="outlined" />
											</ThemeProvider>
										</Divider>
									</Grid>
									<Grid item  md={12} xs={12} >
										<Grid container justifyContent="center">

											<Grid item xs={6}>
												
												<FormGroup>
													{/* <FormControlLabel  control={<Switch  color="error" />} label="??????" /> */}
													<FormControlLabel  disabled={true} control={<YellowSwitch  defaultChecked color="secondary"  />} label="??????" />
												</FormGroup>
											</Grid>

											<Grid item >
												<ThemeProvider theme={themeWXQ}>
													<Button 
														color="secondary" 
														variant="outlined" 
														onClick={handleDelConfirmDialog}
														startIcon={<DeleteIcon />}
														>
														????????????
													</Button>
												</ThemeProvider>
											</Grid>

										</Grid>
									</Grid>
								</Grid>

								

				</Grid>
				

			</Grid>

		}

	
	 {/* </Grid> */}

     


        </DialogContent>

		{(!props.state.loading)&&
			<DialogActions>
				<Button onClick={handleCancelDialog}>??????</Button>
				<Button onClick={validate}>??????</Button>
			</DialogActions>
		}
    
      </Dialog>

    </>
    );
}

export default Content;
