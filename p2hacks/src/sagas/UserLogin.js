import { call, put, takeEvery } from 'redux-saga/effects';
import LoginApi from '../apis/UserLogin';
import { LoginSuccess, LoginFailed, LOGIN_REQUEST } from '../actions/index';

function* getLoginRequestSaga(action) {
  const data = { email: action.payload.email, address: action.payload.address };
  const {newToken,error}= yield call(LoginApi, data);
    if (error) {
        yield put(LoginFailed(error));
  } else {
      yield put(LoginSuccess({ token: newToken, email: data.email, address: data.address }));
  }
}

const saga = [
  takeEvery(LOGIN_REQUEST, getLoginRequestSaga)
];
export default saga;