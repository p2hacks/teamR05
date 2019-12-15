import React from 'react';
import Button from "@material-ui/core/Button";
import "../styles/End.css";

export default function End() {
    Window = window.close();
    return (
        <div id="EndContainer">
        < div id = "EndPosition" >
            <p id="EndSentence">
                アンケートへのご協力ありがとうございました。
            </p>
            <Button variant="outlined" color="primary" onClick={Window} id="EndButton">終了する</Button>
        </div>
        </div>
  );
}