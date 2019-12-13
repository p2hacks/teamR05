//======繰り返し処理関連========
// actioncreator
const addAnswer = (num) => {
    return {
        type: 'ADD',
        num: num
    }
};
export const changeAnswer = (answernum, num) => {
  return {
    type: "CHANGE",
    answernum: answernum,
    num: num
  };
};
export const reloadChange = (data) => {
  return {
    type: "RELOAD",
    data: data
  }
};
export default addAnswer

//=========非同期処理関連===========
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const MAIL_REQUEST = 'MAIL_REQUEST';
export const MAIL_SUCCESS = 'MAIL_SUCCESS';
export const MAIL_FAILED = 'MAIL_FAILED';
export const ANSWER_REQUEST = 'ANSWER_REQUEST';
export const ANSWER_SUCCESS = 'ANSWER_SUCCESS';
export const ANSWER_FAILED = 'ANSWER_FAILED';
export const RESULT_REQUEST = 'RESULT_REQUEST';
export const RESULT_SUCCESS = 'RESULT_SUCCESS';
export const RESULT_FAILED = 'RESULT_FAILED';
export const ALLUSERS_REQUEST = 'ALLUSERS_REQUEST';
export const ALLUSERS_SUCCESS = 'ALLUSERS_SUCCESS';
export const ALLUSERS_FAILED = 'ALLUSERS_FAILED';

export const LoginRequest = (info) => {
    return {
        type: 'LOGIN_REQUEST',
        payload: info
    }
}
export const LoginSuccess = (info) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload:info
    }
}
export const LoginFailed = (err) => {
    return {
        type: 'LOGIN_FAILED',
        payload: err
    }
};
export const getMailRequest = (id) => {
    return {
        type: 'MAIL_REQUEST',
        payload: id
    }
}
export const getMailSuccess = (id) => {
    return {
        type: 'MAIL_SUCCESS',
        payload: id
    }
};
export const getMailFailed = (err) => {
    return {
        type: 'MAIL_FAILED',
        payload: err
    }
};
export const AnsewrRequest = (info) => {
    return {
        type: 'ANSWER_REQUEST',
        payload: info
    }
}
export const AnswerSuccess = (info) => {
    return {
        type: 'ANSWER_SUCCESS',
        payload: info
    }
}
export const AnswerFailed = (err) => {
    return {
        type: 'ANSWER_FAILED',
        payload: err
    }
};
export const getUserResultRequest = (id) => {
    return {
        type: 'RESULT_REQUEST',
        payload: id
    }
}
export const getUserResultSuccess = (id) => {
    return {
        type: 'RESULT_SUCCESS',
        payload: id
    }
}
export const getUserResultFailed = (err) => {
    return {
        type: 'RESULT_FAILED',
        payload: err
    }
};
export const getAllUsersRequest = (id) => {
    return {
        type: 'ALLUSERS_REQUEST',
        payload: id
    }
}
export const getAllUsersSuccess = (id) => {
    return {
        type: 'ALLUSERS_SUCCESS',
        payload: id
    }
}
export const getAllUsersFailed = (err) => {
    return {
        type: 'ALLUSERS_FAILED',
        payload: err
    }
};
