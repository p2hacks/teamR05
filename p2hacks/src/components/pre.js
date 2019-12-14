import React,{useState} from 'react';
import {TextField,Button} from "@material-ui/core";
import {userRegister} from "../actions/index";
import {useDispatch} from "react-redux";

const Pre = (props) => {
    const dispatch=useDispatch()
    const [mail,setMail]=useState("");
    const [address,setAddress]=useState("");
    const sendRegisterRequest=()=>{
        dispatch(userRegister(mail,address))
    }
    return (
        <div>
            <TextField placeholder="mail address" onChange={(e)=>setMail(e.target.value)}/>
            <TextField placeholder="address" onChange={(e) => setAddress(e.target.value)} />
            <Button onClick={sendRegisterRequest}>送信</Button>
        </div>
    )
}

export default Pre;