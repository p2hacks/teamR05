import React,{useEffect} from "react";
import Button from "@material-ui/core/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {useSelector,useDispatch} from "react-redux";
import {getUserID} from "../actions/index";

const PreSent = ({match}) => {
  const {id}=useSelector(store=>store.userID);
  const dispatch=useDispatch();
  useEffect(()=>{
    const mail=match.params.mail
    dispatch(getUserID(mail));
  },[])
  const handleCopy = () => {
    alert(`リンクがコピーされました.
    http://localhost:3000/survey/${id}/home`);
  };
  return (
    <div>
      <p>ご記入ありがとうございました。</p>
      <p>下記のボタンをおしてリンクコピーしてください。</p>
      <p>リンクをプレゼントしたい人に送信して質問に答えてもらいましょう!!</p>
      <CopyToClipboard text={`http://localhost:3000/survey/${id}/home`} onCopy={handleCopy}>
        <Button>リンクをコピー</Button>
      </CopyToClipboard>
    </div>
  );
};

export default PreSent;
