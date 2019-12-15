import React,{useState} from "react";
import {TextField,Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import { push } from "connected-react-router";
import "../styles/SearchResult.css";
import {getAnswerRequest} from "../actions/index";

const SearchResult=()=>{
    const [mail,setMail]=useState("");
    const dispatch=useDispatch();
    return (
        <div id="SearchResultContainer">
            <div id="SearchResultPosition">
                <p >
            <TextField id="SearchResultForm" placeholder="mail"
                onChange={(e)=>setMail(e.target.value)}
                />
                </p>
                <p>
            <Button id="SearchResultButton" onClick={()=>{
                dispatch(getAnswerRequest(mail))
            }}>検索</Button>
                </p>
            </div>

            <TextField placeholder="mail"
                onChange={(e)=>setMail(e.target.value)}
            />
            <Button onClick={()=>{
                dispatch(getAnswerRequest(mail))
                }}>検索</Button>
            <div>
                <TextField placeholder="mail"
                    onChange={(e)=>setMail(e.target.value)}
                />
                <Button onClick={()=>{
                    dispatch(getAnswerRequest(mail))
                    }}>検索</Button>
            </div>
        </div>
    );
}

export default SearchResult;
