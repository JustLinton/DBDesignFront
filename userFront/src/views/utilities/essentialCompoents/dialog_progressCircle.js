import * as React from 'react';
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
// import {  Typography} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function AlertDialog(props) {


  // const handleClose = () => {
  //   props.setOpen(false);
  // };


  return (
    <Dialog
      open={props.open}
      // onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >

      <DialogContent>

      <CircularProgress />

      </DialogContent>

    </Dialog>
  );
}