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
import ConfirmDialog from 'views/utilities/essentialCompoents/dialog_uoverview_addconfirm';

import TextField from '@mui/material/TextField';
import AddHeadCard from 'views/utilities/cards/userman/compoents/UsermanAddHeadCard.js';
import MyAutocomplete from 'views/utilities/essentialCompoents/textfield_autocomp.js';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

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

	const [inputValuePGname, setInputValuePGname] = React.useState('');

	const [validationErrors, setValidationErrors] = React.useState('nil');
	const [validationErrorAlertOpen, setValidationErrorAlertOpen] = React.useState(false);

	const [confirmDialogState, setConfirmDialogState] = React.useState({
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
		props.setState(theState);

		// console.log(props.state.gotData);
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

		// console.log(props.state.gotData);
	}

	const handleAutoCompleteChange = (event,newValue) => {
		// console.log(newValue);
		// console.log(event.target.value);
		// console.log(event.target.id);
		var theState=props.state;
		theState.gotData['PGname']=newValue;
		// console.log(theState.gotData);
		props.setState(theState);

		// console.log(props.state.gotData);
	}


	const YellowChip = styled(Chip)(({ theme }) => ({
		'&.MuiChip-colorPrimary': {
			color: yellow[700],
			borderColor: yellow[700],
		},
	}));


	const YellowButton = styled(Button)(({ theme }) => ({
		'&.MuiButton-textSecondary': {
			color: yellow[700],
			'&:hover': {
			backgroundColor: alpha(yellow[700], theme.palette.action.hoverOpacity),
			},
		},
	}));

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
				<YellowButton  variant="text" color="secondary" onClick={handleCloseValidateAlert}>好</YellowButton>
		</DialogActions>

	</Dialog>


	<ConfirmDialog
		state={confirmDialogState}
		setState={setConfirmDialogState}
		editState={props.state}
		setEditState={props.setState}
		setSnackState={props.setSnackState}
		setRows={props.setRows}
	/>

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
								{"生成UUID..."}
								<Divider sx={{ my: 1 }} />
							</Grid>
						:
							<Grid item>
								{"添加用户"}
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
					<CircularProgress color="secondary" /> 
				</Grid>
			</Grid>
			:
			<Grid  container spacing={2} direction="column" sx={{pt:2}} justifyContent="center">
				<Grid item sx={{ml:'5%',mr:'5%'}}>
					<AddHeadCard/>
					{/* <Typography >
							姓名
					</Typography> */}
				</Grid>
				
				<Grid item  sx={{ml:'5%',mr:'5%'}}>


								<Grid container spacing={2}  alignItems="center" sx={{pb:2}} >
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<YellowChip label="姓名"  color="primary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={9} xs={12} >
										<TextField 
											id="Name"
											variant="outlined"  
											color="secondary" 
											onChange={handleTextChange}
											fullWidth 
										/>
									</Grid>
								</Grid>

								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<YellowChip label="UID"  color="primary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={9} xs={12} >
										<TextField 
											id="Uid"
											variant="outlined"  
											color="secondary"
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
											<YellowChip label="电话"  color="primary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={9} xs={12} >
										<TextField 
											id="Phone"
											variant="outlined"  
											color="secondary"
											defaultValue={props.state.gotData===undefined?'':props.state.gotData.Phone} 
											onChange={handleTextChange}
											fullWidth 
										/>
									</Grid>
								</Grid>

								

								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<YellowChip label="性别"  color="primary" variant="outlined" />
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
											<FormControlLabel value="男" control={<Radio  color="secondary" />} label="男" />
											<FormControlLabel value="女" control={<Radio  color="secondary" />} label="女" />
											<FormControlLabel value="保密" control={<Radio   color="secondary" />} label="保密" />
										</RadioGroup>
									</FormControl>
									</Grid>
								</Grid>

								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<YellowChip label="身份证"  color="primary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={9} xs={12} >
										<TextField 
											id="IdCard"
											variant="outlined"  
											color="secondary"
											onChange={handleTextChange}
											fullWidth 
										/>
									</Grid>
								</Grid>


								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<YellowChip label="权限组"  color="primary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={9} xs={12} >
										<MyAutocomplete 
											id="PGName"
											value={props.state.gotData===undefined?'':props.state.gotData.PGname}
											onChange={handleAutoCompleteChange}
											inputValue={inputValuePGname}
											disabled={false}
											color="secondary"
											setInputValue={setInputValuePGname}
											options={props.state.gotData===undefined?['业主用户']:props.state.gotData.PGNameList}
										/>
									</Grid>
								</Grid>


								<Grid container spacing={2}  alignItems="center" sx={{pb:2}}>
									<Grid item  md={3} xs={12} >
										<Divider textAlign="left" variant="fullwidth">
											<YellowChip label="邮箱"  color="primary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={9} xs={12} >
										<TextField 
											id="Email"
											variant="outlined"  
											color="secondary"
											onChange={handleTextChange}
											fullWidth 
										/>
									</Grid>
								</Grid>

								

				</Grid>
				

			</Grid>

		}

	 {/* </Grid> */}

     


        </DialogContent>

		{(!props.state.loading)&&
			<DialogActions>
				<YellowButton  variant="text" color="secondary" onClick={handleCancelDialog}>取消</YellowButton>
				<YellowButton  variant="text" color="secondary" onClick={validate}>提交</YellowButton>
			</DialogActions>
		}
    
      </Dialog>

    </>
    );
}

export default Content;
