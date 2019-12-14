import {getAnswerFailed,getAnswerSuccess,GETANSWER_REQUEST} from "../actions/index";
import { call,put,takeEvery} from "redux-saga/effects";
import {getAnswerRequest} from "../apis/getAnswerRequest";

function* getAnswerRequestSaga(action){
    const mail=action.payload;
    const {res,err}=yield call(getAnswerRequest,mail);
    if(err){
        yield put(getAnswerFailed(err));
    }else{
        yield put(getAnswerSuccess(res));
    }
}

const sagas=[takeEvery(GETANSWER_REQUEST,getAnswerRequestSaga)];

export default sagas;