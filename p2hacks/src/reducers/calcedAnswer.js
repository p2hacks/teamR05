import {GETANSWER_SUCCESS,GETANSWER_FAILED} from "../actions/index"

const initState={
    results: JSON.parse(sessionStorage.getItem("p2_calcedResult"))||[],
}

function calcedAnswerReducer(state=initState,action){
    switch(action.type){
        case GETANSWER_SUCCESS:
            sessionStorage.setItem("p2_calcedResult",JSON.stringify(action.payload));
            return {...state,results:action.payload};
        case GETANSWER_FAILED:
            sessionStorage.removeItem("p2_calcedResult");
            return {...state,results:[]};
        default:
            return state;
    }
}

export default calcedAnswerReducer;