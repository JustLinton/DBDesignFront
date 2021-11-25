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
		name: Yup.string().trim().nullable().required("请输入姓名"),
		email: Yup.string().trim().nullable().required("请输入邮箱").email("不是有效的邮箱"),
		phone: Yup.string().trim().nullable().required("请输入手机号").matches(/^[0-9]{11}$/,"手机号无效"),
		idcard: Yup.string().trim().nullable().required("请输入身份证").matches(/^[0-9]{18}$/,"身份证无效"),
		pgname: Yup.string().trim().nullable().required("请指定权限组"),
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

	// name: Yup.string().required('请输入昵称'),
	// email: Yup.string().email('不是有效的邮箱').max(255).required('必须输入邮箱'),
	// password: Yup.string().max(255).required('请输入密码'),
}


    const handleCancelDialog = (event) => {

	// console.log('cancel');

	if(props.state.loading)return;

	props.setSnackState({
		open: true,
		message: '操作已取消',
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

		//为了解决奇怪的bug。没办法。
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
			  //需要重写样式的MUI组件名称
		    defaultProps: {
			// The props to change the default for.即：使用组件时传入的参数的值。
		    },
		    styleOverrides: {
			    //styleOverrides是对css类选择器“	.MuiChip-colorSecondary”的重写。如果要重写其他类选择器
			    //，则可再建立一个新的这样的结构，名称换成那个类的名。
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
			//需要重写样式的MUI组件名称
		  defaultProps: {
		    // The props to change the default for.即：使用组件时传入的参数的值。
		  },
		  styleOverrides: {
			  //styleOverrides是对css类选择器“	.MuiChip-colorSecondary”的重写。如果要重写其他类选择器
			  //，则可再建立一个新的这样的结构，名称换成那个类的名。
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
								{"加载用户 "+props.state.row.name+" 信息..."}
								<Divider sx={{ my: 1 }} />
							</Grid>
						:
							<Grid item>
								{"编辑用户 "+props.state.row.name}
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
											helperText="不提供编辑。"
											defaultValue={props.state.gotData===undefined?'':props.state.gotData.Uid} 
											onChange={handleTextChange}
											fullWidth 
										/>
									</Grid>
								</Grid>


								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<Chip label="电话"  color="primary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={9} xs={12} >
										<TextField 
											id="Phone"
											variant="outlined"  
											color="primary"
											disabled = {true}
											helperText="不提供编辑。"
											defaultValue={props.state.gotData===undefined?'':props.state.gotData.Phone} 
											onChange={handleTextChange}
											fullWidth 
										/>
									</Grid>
								</Grid>

								

								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<Chip label="性别"  color="primary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={9} xs={12} >
									<FormControl component="fieldset">
										<RadioGroup 
										row
										name="Gender"
										// value={"男"} 
										value={props.state.gotData===undefined?"保密":props.state.gotData.Gender} 
										onChange={handleRadioChange}
										>
											<FormControlLabel value="男" control={<Radio />} label="男" />
											<FormControlLabel value="女" control={<Radio />} label="女" />
											<FormControlLabel value="保密" control={<Radio />} label="保密" />
										</RadioGroup>
									</FormControl>
									</Grid>
								</Grid>

								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<Chip label="身份证"  color="primary" variant="outlined" />
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
											<Chip label="权限组"  color="primary" variant="outlined" />
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
											options={props.state.gotData===undefined?['业主用户']:props.state.gotData.PGNameList}
										/>
									</Grid>
								</Grid>


								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<Chip label="邮箱"  color="primary" variant="outlined" />
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
												<Chip sx={{clickable:true}} label="危险区"  color="secondary" variant="outlined" />
											</ThemeProvider>
										</Divider>
									</Grid>
									<Grid item  md={12} xs={12} >
										<Grid container justifyContent="center">

											<Grid item xs={6}>
												
												<FormGroup>
													{/* <FormControlLabel  control={<Switch  color="error" />} label="禁言" /> */}
													<FormControlLabel  disabled={true} control={<YellowSwitch  defaultChecked color="secondary"  />} label="封禁" />
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
														删除帐号
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
				<Button onClick={handleCancelDialog}>取消</Button>
				<Button onClick={validate}>提交</Button>
			</DialogActions>
		}
    
      </Dialog>

    </>
    );
}

export default Content;
