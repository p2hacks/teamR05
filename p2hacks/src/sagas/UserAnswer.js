import { call, put, takeEvery } from 'redux-saga/effects';
import AnswerApi from '../apis/UserAnswer';
import {
    UserAnswerSuccess, UserAnswerFailed, ANSWER_REQUEST
} from '../actions/index';

function* getUserAnswerRequestSaga(action) {
  const data = { id: action.payload.id, result: action.payload.result };
  const {newToken,error}= yield call(AnswerApi, data);
    if (error) {
        yield put(UserAnswerFailed(error));
  } else {
      yield put(UserAnswerSuccess({ token: newToken, id: data.id, result: data.result }));
  }
}

const saga = [
  takeEvery(ANSWER_REQUEST, getUserAnswerRequestSaga)
];
export default saga;