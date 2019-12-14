import {userRegisterSuccess,userRegisterFailed,USERREGSTER_REQUEST} from "../actions/index";
import {takeEvery,call,put} from "redux-saga/effects";
import {userRegister} from "../apis/userRegister";


// action.payloadにはmailとaddressが入っていることが期待される
function* userRegisterSaga(action){
    const {mail,address}=action.payload;
    const {res,err}=yield call(userRegister,mail,address);
    if(err){
        yield put(userRegisterFailed(err));
    }else{
        yield put(userRegisterSuccess(res));
    }
}
// 個人的には上のコードはより改善できるように思える
// 具体的にはエラー時の処理を書き足したりすることが挙げられる

const sagas=[takeEvery(USERREGSTER_REQUEST,userRegisterSaga)];

export default sagas;