import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

export default function Comfirm() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(push("/End"));
  };

  return (
    <div>
      <button variant="outlined" color="primary" onClick={handleClickOpen}>
        送信する
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description"color={'#FFFFFFF'}>
            上記の内容で送信してよろしいでしょうか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} color="primary">
            キャンセル
          </button>
          <button onClick={handleClose} color="primary" autoFocus>
            送信する
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}