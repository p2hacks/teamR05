import { call, put, takeEvery } from 'redux-saga/effects';
import getAllUsers from "../apis/AllUsers";
import { AllUsersSuccess, AllUsersFailed, ALLUSERS_REQUEST } from "../actions/index"

function* getAllUsersSaga(action) {
    const id=action.payload;
    const { res, err } = yield call(getAllUsers, id);
    if (err) {
        yield put(AllUsersFailed(err));
    } else {
        yield put(AllUsersSuccess(res));
    }
}

const saga = [
    takeEvery(ALLUSERS_REQUEST, getAllUsersSaga)
];

export default saga;