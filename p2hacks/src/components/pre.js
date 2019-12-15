
import React,{useState} from 'react';
import {TextField,Button,Typography} from "@material-ui/core";
import {userRegister} from "../actions/index";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import ScrollDialog from "./ScrollDialog";
import "../styles/pre.css";
import logo from "../image/logo.png"

const Pre = (props) => {
    const dispatch = useDispatch()
    const [mail, setMail] = useState("");
    const [address, setAddress] = useState("");
    const sendRegisterRequest = () => {
        dispatch(userRegister(mail, address))
    }
    return (
        <div id = "PreContainer" >
            <div className="title-logo" >
                <img src = {logo} />
                <div>
                    <div className="work-title">
                    Present Selector
                    </div>
                </div>
            </div>
            <div id="PrePosition">
            <ScrollDialog />
                <p >
            <TextField id="PreForm" placeholder="mail address" onChange={(e) => setMail(e.target.value)} />
                </p>
                <p>
            <TextField id="PreForm" placeholder="address" onChange={(e) => setAddress(e.target.value)} />
                </p>
            <Button variant="outlined" color="primary" id="prebutton" onClick={sendRegisterRequest}>送信</Button>
                <p>
                    <p>
            <Typography variant="subtitle2">すでに登録していて結果を知りたい方は<Link to="/searchResult">こちら</Link></Typography>
                    </p>
                </p>
            </div>
        </div>

    )
}

export default Pre;
