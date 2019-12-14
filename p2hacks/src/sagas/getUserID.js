import { getUserIDFailed,getUserIDSuccess,USERID_REQUEST} from "../actions/index";
import { call,put,takeEvery} from "redux-saga/effects";
import {getUserID } from "../apis/getUserID";

function* getUserIDSaga(action){
    const mail=action.payload;
    const {res,err}=yield call(getUserID,mail);
    if(err){
        yield put(getUserIDFailed(err));
    }else{
        yield put(getUserIDSuccess(res));
    }
}

const sagas=[takeEvery(USERID_REQUEST,getUserIDSaga)];

export default sagas;