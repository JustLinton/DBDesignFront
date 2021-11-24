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
// import AlertDialog from './dialog_alert'
import ButtonLoad from 'views/utilities/essentialCompoents/button_load.js';

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
    const [insufPermission, setInsufPermission] = React.useState(true);

    const handleCancelDialog = (event) => {

	// console.log('cancel');

	if(confirmButtonLoading||confirmButtonSuccess)return;

      props.setState({
		open: false,
		scroll: 'body',
		row: {'name':props.state.row.name},
	})

    };


    const afterSuccessfulRefreshTable = () =>{
		setConfirmButtonSuccess(true);
		setConfirmButtonLoading(false);

		timer.current = window.setTimeout(() => {

			//先更新原表格中的数据
			props.setRows(refreshedData===undefined?initData:refreshedData);
			// props.setRows(initRows);

			timer.current = window.setTimeout(() => {

				//然后再关闭窗口

				props.setSnackState({
					open: true,
					message:props.state.row.name+ ' 信息已更新',
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
	
			}, 900);

		}, 100);


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
			  setInsufPermission(false);
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


    const submitChange = () =>{

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
			  setInsufPermission(false);
		    }
    
		    let data = new FormData();
		    data.append('Name',props.state.gotData.Name);
		    data.append('Email',props.state.gotData.Email);
		    data.append('IdCard',props.state.gotData.IdCard);
		    data.append('PGname',props.state.gotData.PGname);
		    data.append('Phone',props.state.gotData.Phone);
		    data.append('Uid',props.state.gotData.Uid);
		    data.append('Gender',props.state.gotData.Gender);
		    
		    axios.post('/api/userinfo',data)

		    .then(function (response) {
				timer.current = window.setTimeout(() => {
					refreshTable();
				},550)
		    })
		    .catch(function (error) {
			  console.log(error);
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

		submitChange();
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
          		你将更新用户 {props.state.row.name} 的信息。是否继续？
          </Typography>

        </DialogContent>

        <DialogActions>
          <Button disabled={confirmButtonLoading||confirmButtonSuccess} onClick={handleCancelDialog}>取消</Button>
          {/* <Button onClick={handleConfirmDialog}>提交</Button> */}
		<ButtonLoad  
			text="提交"
			setSuccess={setConfirmButtonSuccess}
			setLoading={setConfirmButtonLoading}
			loading={confirmButtonLoading}
			success={confirmButtonSuccess}
			handleButtonClick={handleConfirmDialog}
		/>
        </DialogActions>
      </Dialog>

    </>
    );
}

export default Content;
