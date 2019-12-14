import React from 'react';
import Button from "@material-ui/core/Button";
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import "../styles/Home.css";
export default function Home({match}) {
    const id=match.params.id
    const dispatch = useDispatch();
    const movetoQuestion = () => {
        dispatch(push(`${match.url.split("/").slice(0, -1).join("/")}/question`))
    }
  return (
    < div id="HomeContainer" >
      < div id="HomePosition">
        <p >
          アンケートにご協力お願いします。
            </p>
        <Button variant="outlined" color="primary" id="homebutton"onClick={movetoQuestion} >開始する</Button>
        </div>
        </div>
    );
}
