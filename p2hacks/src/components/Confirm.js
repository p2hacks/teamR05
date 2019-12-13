import React, { Component, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";
import { push, connectRouter } from "connected-react-router";
import QuestionStatement from "./questionStatement";
import RadioButtons from "./radioButtons";
import { reloadChange } from "../actions/index";

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

  //const tmpstate = useSelect(state => state.question)

  useEffect(() => {
    //const data = sessionStorage.getItem('state');
    const data = sessionStorage.getItem('state');
    console.log("data", data);
    dispatch(reloadChange(data));
  }, [])

  return (
    <div>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(x => {
        return (
          <div>
            <QuestionStatement num={x} />
            <RadioButtons num={x} />
          </div>
        );
      })}
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
          <DialogContentText id="alert-dialog-description" color={"#FFFFFFF"}>
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
