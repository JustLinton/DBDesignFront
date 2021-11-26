// material-ui
import {  Grid, Typography} from '@mui/material';

// project imports
// import axios from 'axios';

import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
// import AlertDialog from './dialog_alert'
import ButtonLoad from 'views/utilities/essentialCompoents/button_del_load.js';


import axios from 'axios';


// ===============================|| COLOR BOX ||=============================== //


function createData(name, calories, fat, carbs, protein) {
	return {
	  name,
	  calories,
	  fat,
	  carbs,
	  protein,
	};
    }

    var initData = [
	createData('-', 0, 0, 0, 0),
    ];
    
    var refreshedData = initData;


const Content = (props) =>{

	const timer = React.useRef();

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (props.openDialog) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [props.openDialog]);

    const [confirmButtonLoading, setConfirmButtonLoading] = React.useState(false);
    const [confirmButtonSuccess, setConfirmButtonSuccess] = React.useState(false);
//     const [insufPermission, setInsufPermission] = React.useState(true);

    const [nameWrong, setNameWrong] = React.useState(false);
    const [clickedTextField, setClickedTextField] = React.useState(false);

    const handleCancelDialog = (event) => {

	// console.log('cancel');

	if(confirmButtonLoading||confirmButtonSuccess)return;

	setNameWrong(false);
	setClickedTextField(false);

      props.setState({
		open: false,
		scroll: 'body',
		row: {'name':props.state.row.name},
	})

    };


    const handleTextChange = (event) => {
	    setClickedTextField(true);
	    if(event.target.value!==props.state.row.name){
		    setNameWrong(true);
	    }else{
		    setNameWrong(false);
	    }
	// console.log(event.target.value);
	// console.log(event.target.id);
	// var theState=props.state;
	// theState.gotData[event.target.id]=event.target.value;
	// console.log(theState.gotData);
	// props.setState(theState);
}


    const afterSuccessfulRefreshTable = () =>{
		setConfirmButtonSuccess(true);
		setConfirmButtonLoading(false);

		setNameWrong(false);
		setClickedTextField(false);	


		//先更新原表格中的数据
		props.setRows(refreshedData===undefined?initData:refreshedData);

		timer.current = window.setTimeout(() => {
			props.setSnackState({
				open: true,
				message:props.state.row.name+ ' 已被删除',
				undo: true,
			})
		
			props.setState({
				open: false,
				scroll: 'body',
				row: {'name':props.state.row.name},
			})

			props.setEditState({
				open: false,
				scroll: 'body',
				row: {'name':props.state.row.name},
			})

			timer.current = window.setTimeout(() => {
				setConfirmButtonSuccess(false);
				setConfirmButtonLoading(false);	
			}, 350);

		}, 250);

    }


    const refreshTable = () =>{

	axios.get("/api/haveperm", {
		　　params: { 'permid': 207 }
		}).then(function (response) {
		// 　　alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
		if(response.status===200){
		   //鉴权请求
    
		   if(response.data==="notlogged"){
			//未登录，则去登录
			 window.location='/auth/login';
		   }

		    if(response.data==="ok"){
			  //该用户有相应的权限
			//   setInsufPermission(false);
		    }
    
			  axios.get("/api/userlist", {
				　　params: { 'verbose': 'false' }
				}).then(function (response) {
				    // 　　alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
				    if(response.status===200){
					 
					  // console.log(response);
					  if(response.data==="notlogged"){
						window.location='/auth/login';
					  }
					  	refreshedData=response.data['Rows'];
						//结束加载
						afterSuccessfulRefreshTable();
					  }
				    }).catch(function (error) {
				    // 　　alert(error);
				    });
			  
			  // console.log(userData);
		    }
		}).catch(function (error) {
		// 　　alert(error);
		});
    }

    const delUser = () =>{

	axios.get("/api/haveperm", {
		　　params: { 'permid': 209 }
		}).then(function (response) {
		// 　　alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
		if(response.status===200){
		   //鉴权请求
    
		   if(response.data==="notlogged"){
			//未登录，则去登录
			 window.location='/auth/login';
		   }


		    if(response.data==="ok"){
			  //该用户有相应的权限
			//   setInsufPermission(false);
		    }
    
			  axios.get("/api/deluser", {
				　　params: { 'uid': props.state.row.uid }
				}).then(function (response) {
				    // 　　alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
				    if(response.status===200){
					 
						// console.log(response);
						if(response.data==="notlogged"){
						window.location='/auth/login';
						}

						timer.current = window.setTimeout(() => {
							refreshTable();
						},300)

					  }
				    }).catch(function (error) {
				    // 　　alert(error);
				    });
			  
			  // console.log(userData);
		    }
		}).catch(function (error) {
		// 　　alert(error);
		});
    }


    const handleConfirmDialog = (event) => {
	if (!confirmButtonLoading) {
		setConfirmButtonSuccess(false);
		setConfirmButtonLoading(true);

		delUser();		
	    }

    };



    return(
        <>
       
      {/* <AlertDialog
            open={openAlert}
            setOpen={setOpenAlert}
      /> */}


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
						<Grid item>{"确认"}<Divider sx={{ my: 1 }} /></Grid>
					</Grid>
				</Grid>
			</Grid>
            </DialogTitle>

        <DialogContent dividers={props.scroll === 'paper'}>
	 


          <Typography gutterBottom>
          		你将彻底删除用户 {props.state.row.name} 。<br/> 输入该用户的姓名以继续。
          </Typography>

	    <TextField 
			id="Phone"
			variant="outlined"  
			color="secondary"
			helperText={nameWrong&&"请输入 "+props.state.row.name+" 。"}
			onChange={handleTextChange}
			fullWidth 
		/>

        </DialogContent>

        <DialogActions>
          <Button disabled={confirmButtonLoading||confirmButtonSuccess} variant="text" color="secondary" onClick={handleCancelDialog}>取消</Button>
          {/* <Button onClick={handleConfirmDialog}>提交</Button> */}
		<ButtonLoad  
			text="确定"
			setSuccess={setConfirmButtonSuccess}
			setLoading={setConfirmButtonLoading}
			loading={confirmButtonLoading}
			success={confirmButtonSuccess}
			handleButtonClick={handleConfirmDialog}
			disabled={(!clickedTextField)||nameWrong}
		/>
        </DialogActions>
      </Dialog>

    </>
    );
}

export default Content;
