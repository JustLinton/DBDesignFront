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

// import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';


// import axios from 'axios';

// ===============================|| COLOR BOX ||=============================== //

const Content = (props) =>{

	// const timer = React.useRef();

	// const [insufPermission, setInsufPermission] = React.useState(true);
	// const [loading, setLoading] = React.useState(true);
	// const [newData, setNewData] = React.useState({'Name':'null'});

	const [inputValuePGname, setInputValuePGname] = React.useState('');

	const [confirmDialogState, setConfirmDialogState] = React.useState({
		open: false,
		scroll: 'body',
		row: {'name':'null'},
	});

	const [delConfirmDialogState, setDelConfirmDialogState] = React.useState({
		open: false,
		scroll: 'body',
		row: {'name':'null'},
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
	})

    };


    const handleConfirmDialog = (event) => {

	// console.log('cancel');

      setConfirmDialogState({
		open: true,
		scroll: 'body',
		row: props.state.row,
	})

    };

	const handleTextChange = (event) => {
		// console.log(event.target.value);
		// console.log(event.target.id);
		var theState=props.state;
		theState.gotData[event.target.id]=event.target.value;
		console.log(theState.gotData);
		props.setState(theState);
	}

	const handleRadioChange = (event) => {
		// console.log(event.target.value);
		// console.log(event.target.name);
		var theState=props.state;
		theState.gotData[event.target.name]=event.target.value;
		// console.log(theState.gotData);
		props.setState(theState);
	}

	const handleAutoCompleteChange = (event,newValue) => {
		console.log(newValue);
		// console.log(event.target.value);
		// console.log(event.target.id);
		var theState=props.state;
		theState.gotData['PGname']=newValue;
		console.log(theState.gotData);
		props.setState(theState);
	}

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
	/>

	<DelConfirmDialog
		state={delConfirmDialogState}
		setState={setDelConfirmDialogState}
		editState={props.state}
		setEditState={props.setState}
		setSnackState={props.setSnackState}
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
	 

	 <Grid container justifyContent="center">
		{props.state.loading?
			<Grid item>
				<CircularProgress/> 
			</Grid>
			:
			<Grid  container spacing={2} direction="column" sx={{pt:2}} justifyContent="center">
				<Grid item md={12} xs={12} sx={{ml:'5%',mr:'5%'}}>
					<EditHeadCard/>
					{/* <Typography >
							姓名
					</Typography> */}
				</Grid>
				
				<Grid item  md={12} xs={12} sx={{ml:'5%',mr:'5%'}}>


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
										value={props.state.gotData===undefined?'':props.state.gotData.Gender} 
										onChange={handleRadioChange}
										>
											<FormControlLabel value="男" control={<Radio />} label="男" />
											<FormControlLabel value="女" control={<Radio />} label="女" />
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
											setInputValue={setInputValuePGname}
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
											<Chip label="危险区"  color="secondary" variant="outlined" />
										</Divider>
									</Grid>
									<Grid item  md={12} xs={12} >
										<Grid container justifyContent="center">

											<Grid item xs={6}>
												<FormGroup>
													{/* <FormControlLabel  control={<Switch  color="error" />} label="禁言" /> */}
													<FormControlLabel disabled control={<Switch  defaultChecked color="secondary"  />} label="封禁" />
												</FormGroup>
											</Grid>

											<Grid item >
												<Button 
													color="secondary" 
													variant="outlined" 
													onClick={handleDelConfirmDialog}
													startIcon={<DeleteIcon />}
													>
													删除帐号
												</Button>
											</Grid>

										</Grid>
									</Grid>
								</Grid>

								

				</Grid>
				

			</Grid>

		}

	
	 </Grid>

     


        </DialogContent>

		{(!props.state.loading)&&
			<DialogActions>
				<Button onClick={handleCancelDialog}>取消</Button>
				<Button onClick={handleConfirmDialog}>提交</Button>
			</DialogActions>
		}
    
      </Dialog>

    </>
    );
}

export default Content;
