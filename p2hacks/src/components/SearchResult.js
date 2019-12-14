import React,{useState} from "react";
import {TextField,Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {push} from "connected-react-router";

const SearchResult=()=>{
    const [mail,setMail]=useState("");
    const dispatch=useDispatch();
    return (
        <div>
            <TextField placeholder="mail"
                onChange={(e)=>setMail(e.target.value)}
            />
            <Button onClick={()=>{
                dispatch(push(`/results/${mail}`))
                }}>検索</Button>
        </div>
    );
}

export default SearchResult;