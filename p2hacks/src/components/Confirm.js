import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import { useDispatch,useSelector } from "react-redux";
import { push } from "connected-react-router";
import QuestionStatement from "./questionStatement";
import RadioButtons from "./radioButtons";
import { postAnswer } from "../actions/index";
import "../styles/Confirm.css"

export default function Comfirm({match}) {
  const ans = useSelector(store => store.question.answers)
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatchPostAnswer=()=>{
    const id = Number(match.params.id)
    if(isNaN(id)){
      return
    }
    dispatch(postAnswer(id,ans));
    dispatch(push(`${match.url.split("/").slice(0, -1).join("/")}/end`));
  }

  return (
      <div id="confirmcontainer">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(x => {
        return (
          < div  id="confirmsentence">
            <QuestionStatement num={x} />
            <RadioButtons num={x} />
          </div>
        );
      })}
      <Button variant="outlined" color="primary" onClick={handleClickOpen} id="confirmbutton">
        送信する
      </Button>
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
          <button onClick={dispatchPostAnswer} color="primary">
            送信する
          </button>
        </DialogActions>
        </Dialog>
            </div>
  );
}
