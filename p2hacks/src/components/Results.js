import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getAnswerRequest} from "../actions/index";

import convertTag2Word from "../util/convertTag2Word";

const renderResults=(results)=>{
    return (
        <div>
            <ol>
                {results.map((item, index) => {
                    return (<li key={index}>
                        <ul>
                            {item.map((con, j) => {
                                return (
                                    <li key={j}>
                                        {convertTag2Word(con)}
                                    </li>
                                )
                            })}
                        </ul>
                    </li>)
                })}
            </ol>
        </div>
    )
}

const ShowResults=({match})=>{
    const {mail}=match.params;
    const dispatch=useDispatch();
    const {results} = useSelector(state => state.calcedAnswer)
    return <>{(results.length>0?(renderResults(results)):(<p>まだ結果は来ていません</p>))}</>
}

export default ShowResults;