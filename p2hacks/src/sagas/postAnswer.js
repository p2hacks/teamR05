import { postAnswerSuccess,postAnswerFailed,POSTANSWER_REQUEST } from "../actions/index";
import { postAnswer} from "../apis/postAnswer";
import {call,put,takeEvery} from "redux-saga/effects";

function* postAnswerSaga(action){
    const {id,result}=action.payload;
    const {res,err}=yield call(postAnswer,id,result);
    if(err){
        yield put(postAnswerFailed(err));
    }else{
        yield put(postAnswerSuccess(res));
    }
}

const sagas=[takeEvery(POSTANSWER_REQUEST,postAnswerSaga)];

export default sagas;