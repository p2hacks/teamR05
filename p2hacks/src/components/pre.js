import React,{useState} from 'react';
import {TextField,Button,Typography} from "@material-ui/core";
import {userRegister} from "../actions/index";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

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
            <Typography variant="subtitle2">すでに登録していて結果を知りたい方は<Link to="/searchResult">こちら</Link></Typography>
        </div>
    )
}

export default Pre;
