import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {createTheme, ThemeProvider} from '@material-ui/core';

export default function ImageUploadDialog(props) {
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
          <DialogTitle id="alert-dialog-title">{'Upload image'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div className="form-upolad-container">
              Upload the form here
                <input type="file" className="form-control" name="file"
                  onChange={(e)=>{
                    props.onClose();
                    props.onUpload(e);
                  }}/>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}
