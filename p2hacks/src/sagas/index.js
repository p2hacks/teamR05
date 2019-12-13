import { all } from 'redux-saga/effects';
import LoginSaga from './UserLogin';
import UserEmailSaga from './UserMail';
import UserAnswerSaga from './UserAnswer';
import UserResultSaga from './UserResult';
import AllUserSaga from './AllUsers';

export default function* rootSaga() {
    yield all([
        ...LoginSaga,...UserEmailSaga,...UserAnswerSaga,...UserResultSaga,...AllUserSaga
    ]);
}