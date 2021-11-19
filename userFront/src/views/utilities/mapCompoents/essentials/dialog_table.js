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
import MyTable from './table'
import Divider from '@mui/material/Divider';
// import AlertDialog from './dialog_alert'


// ===============================|| COLOR BOX ||=============================== //

const Content = (props) =>{

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (props.openDialog) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [props.openDialog]);


//     const [openAlert, setOpenAlert] = React.useState(false);

    const handleCloseDialog = () => {
      // setOpenAlert(true);
      props.setOpenDialog(false);
    };

    return(
        <>
       
      {/* <AlertDialog
            open={openAlert}
            setOpen={setOpenAlert}
      /> */}

       <Dialog
        open={props.openDialog}
        onClose={handleCloseDialog}
        scroll={props.scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
            <DialogTitle id="scroll-dialog-title" variant="h2">    
			<Grid container direction="row"  rowSpacing={5}>
				<Grid item xs={10}></Grid>
				<Grid item>
					<Grid container direction="row" columnSpacing={5} rowSpacing={1} justifyContent="flex-end">
						<Grid item xs={10}></Grid>
						<Grid item>{props.title}<Divider sx={{ my: 1 }} /></Grid>
					</Grid>
				</Grid>
			</Grid>
            </DialogTitle>
        <DialogContent dividers={props.scroll === 'paper'}>
          <MyTable/>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleCloseDialog}>Subscribe</Button>
        </DialogActions>
      </Dialog>

    </>
    );
}

export default Content;
