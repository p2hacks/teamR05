import { call, put, takeEvery } from 'redux-saga/effects';
import getUserMail from "../apis/UserMail";
import { UserMailSuccess, UserMailFailed, MAIL_REQUEST } from "../actions/index";

function* getUserMailSaga(action) {
    const id=action.payload;
    const { res, err } = yield call(getUserMail, id);
    if (err) {
        yield put(UserMailFailed(err));
    } else {
        yield put(UserMailSuccess(res));
    }
}

const saga = [
    takeEvery(MAIL_REQUEST, getUserMailSaga)
];

export default saga;