import getAnswerSagas from "./getAnswer";
import getUserIDSagas from "./getUserID";
import postAnswerSagas from "./postAnswer";
import userRegisterSagas from "./userRegister";
import {all} from "redux-saga/effects";

export default function* rootSaga(){
    yield all([
        ...getAnswerSagas,
        ...getUserIDSagas,
        ...postAnswerSagas,
        ...userRegisterSagas
    ]);
}