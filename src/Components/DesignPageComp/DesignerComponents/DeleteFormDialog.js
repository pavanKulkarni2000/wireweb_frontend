import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {createTheme, ThemeProvider} from '@material-ui/core';

export default function DeleteFormDialog(props) {
  const theme = createTheme({
    typography: {
      fontSize: 30,
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Dialog
          open={props.openDialog}
          onClose={props.onClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{'Delete form'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete form <h3 style={{display: 'inline'}} >{props.formName}</h3>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={()=>{
              props.onClose();
              props.onDelete();
            }} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
