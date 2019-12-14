import React from "react";
import Button from "@material-ui/core/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

const PreSent = props => {
  const Sentlink = "http://localhost:3000/";

  const handleCopy = () => {
    alert("リンクがコピーされました");
  };
  return (
    <div>
      <p>ご記入ありがとうございました。</p>
      <p>下記のボタンをおしてリンクコピーしてください。</p>
      <p>リンクをプレゼントしたい人に送信して質問に答えてもらいましょう!!</p>
      <CopyToClipboard text={Sentlink} onCopy={handleCopy}>
        <Button>リンクをコピー</Button>
      </CopyToClipboard>
    </div>
  );
};

export default PreSent;
