import {USERREGSTER_SUCCESS,USERID_SUCCESS} from "../actions/index";

const initState={
    id:0,
}

export default function(state=initState,action){
    switch(action.type){
        case USERREGSTER_SUCCESS:
        case USERID_SUCCESS:
            return {id:action.payload};
        default:
            return state
    }
}