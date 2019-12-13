import {
    call,
    put,
    takeEvery
} from 'redux-saga/effects';
import getUserResult from "../apis/UserResult";
import {
    UserResultSuccess,
    UserResultFailed,
    RESULT_REQUEST
} from "../actions/index";

function* getUserResultSaga(action) {
    const id = action.payload;
    const {
        res,
        err
    } = yield call(getUserResult, id);
    if (err) {
        yield put(UserResultFailed(err));
    } else {
        yield put(UserResultSuccess(res));
    }
}

const saga = [
    takeEvery(RESULT_REQUEST, getUserResultSaga)
];

export default saga;