import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../common/api';
import { loginSuccess, loginFailure } from '../actions/actions';

function* handleRequest(action) {
  let { payload } = action;
  payload = yield call(api, payload);

  // サーバーからのレスポンスデータによる分岐処理
  if(  ) {
    // 成功時アクション呼び出し
    yield put(loginSuccess(payload));
  } else {
    // 失敗時アクション呼び出し
    yield put(loginFailure(payload));
  }
}

// 「LOGIN_REQUEST」アクションが呼ばれるのを待つ呼ばれたhandleRequestを実行
const loginSaga = [takeEvery('LOGIN_REQUEST', handleRequest)];
export default loginSaga;