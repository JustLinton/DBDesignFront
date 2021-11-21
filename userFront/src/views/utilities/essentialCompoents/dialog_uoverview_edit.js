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
import ConfirmDialog from 'views/utilities/essentialCompoents/dialog_uoverview_confirm.js';
import TextField from '@mui/material/TextField';
import UsermanDataCard from 'views/utilities/cards/userman/compoents/UsermanDataCard.js';

import axios from 'axios';


// ===============================|| COLOR BOX ||=============================== //

const Content = (props) =>{

	// const timer = React.useRef();
	const [insufPermission, setInsufPermission] = React.useState(true);

	const [confirmDialogState, setConfirmDialogState] = React.useState({
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

	props.setSnackState({
		open: true,
		message: '操作已取消',
		undo: false,
	})

      props.setState({
		open: false,
		scroll: 'body',
		row: {'name':props.state.row.name},
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

//     const getData = () =>{

// 	axios.get("/api/haveperm", {
// 		　　params: { 'permid': 207 }
// 		}).then(function (response) {
// 		// 　　alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
// 		if(response.status===200){
// 		   //鉴权请求
    
// 		    if(response.data==="ok"){
// 			  //该用户有相应的权限
// 			  setInsufPermission(false);
// 		    }
    
// 			  axios.get("/api/userlist", {
// 				　　params: { 'verbose': 'false' }
// 				}).then(function (response) {
// 				    // 　　alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
// 				    if(response.status===200){
					 
// 					  // console.log(response);
// 					  if(response.data==="notlogged"){
// 						window.location='/auth/login';
// 					  }
// 						// userData=response.data['Rows'];
// 						//结束加载
// 						// afterSuccessfulGetData();
// 					  }
// 				    }).catch(function (error) {
// 				    // 　　alert(error);
// 				    });
			  
// 			  // console.log(userData);
// 		    }
// 		}).catch(function (error) {
// 		// 　　alert(error);
// 		});
//     }


    const handleConfirmDialog = (event) => {

	// console.log('cancel');

      setConfirmDialogState({
		open: true,
		scroll: 'body',
		row: props.state.row,
	})

    };

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
						<Grid item>{"编辑用户 "+props.state.row.name}<Divider sx={{ my: 1 }} /></Grid>
					</Grid>
				</Grid>
			</Grid>
            </DialogTitle>

        <DialogContent dividers={props.scroll === 'paper'}>
	 

	 <Grid container>

		<Grid  container spacing={2} direction="column" sx={{pt:2}} justifyContent="center">
			<Grid item md={12} xs={12} sx={{ml:'5%',mr:'5%'}}>
				<UsermanDataCard/>
				{/* <Typography >
						姓名
				</Typography> */}
			</Grid>
			
			<Grid item  md={12} xs={12} sx={{ml:'5%',mr:'5%'}}>
				<Grid container spacing={1}>

					<Grid item  xs={12} sx={{pb:2}} >
						<TextField  fullWidth label="姓名" variant="outlined" defaultValue="测试" />
					</Grid>

					<Grid item  xs={12} sx={{pb:2}} >
						<TextField  fullWidth label="身份证" variant="outlined" defaultValue="测试"/>
					</Grid>

					<Grid item  xs={12} sx={{pb:2}} >
						<TextField  fullWidth label="身份证" variant="outlined" defaultValue="测试"/>
					</Grid>

					<Grid item  xs={12} sx={{pb:2}} >
						<TextField  fullWidth label="身份证" variant="outlined" defaultValue="测试"/>
					</Grid>

					<Grid item  xs={12} sx={{pb:2}} >
						<TextField  fullWidth label="身份证" variant="outlined" defaultValue="测试"/>
					</Grid>

					<Grid item  xs={12} sx={{pb:2}} >
						<TextField  fullWidth label="姓名" variant="outlined" defaultValue="测试" />
					</Grid>

					<Grid item  xs={12} sx={{pb:2}} >
						<TextField  fullWidth label="身份证" variant="outlined" defaultValue="测试"/>
					</Grid>

					<Grid item  xs={12} sx={{pb:2}} >
						<TextField  fullWidth label="身份证" variant="outlined" defaultValue="测试"/>
					</Grid>

					<Grid item  xs={12} sx={{pb:2}} >
						<TextField  fullWidth label="身份证" variant="outlined" defaultValue="测试"/>
					</Grid>
					
					<Grid item  xs={12} sx={{pb:2}} >
						<TextField  fullWidth label="身份证" variant="outlined" defaultValue="测试"/>
					</Grid>

				</Grid>
			</Grid>
			

		</Grid>
	
	 </Grid>

     


        </DialogContent>

        <DialogActions>
          <Button onClick={handleCancelDialog}>取消</Button>
          <Button onClick={handleConfirmDialog}>提交</Button>
        </DialogActions>
      </Dialog>

    </>
    );
}

export default Content;
