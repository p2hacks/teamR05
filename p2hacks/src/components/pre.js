import React,{useState} from 'react';
import {TextField,Button} from "@material-ui/core";
import {userRegister} from "../actions/index";
import {useDispatch} from "react-redux";
import "../styles/pre.css"
const Pre = (props) => {
    const dispatch=useDispatch()
    const [mail,setMail]=useState("");
    const [address,setAddress]=useState("");
    const sendRegisterRequest=()=>{
        dispatch(userRegister(mail,address))
    }
    return (
        < div id = "container" >
        <div id="preposition">

            <p>
            <TextField id="preform" placeholder="mail address" onChange={(e)=>setMail(e.target.value)}/>
            </p>
            <p>
            <TextField id="preform" placeholder="address" onChange={(e) => setAddress(e.target.value)} />
            </p>
            <p>
            <Button variant="outlined" color="primary" id="prebutton" onClick={sendRegisterRequest}>送信する</Button>
            </p>
            </div>
        </div>
    )
}

export default Pre;
