import { object } from "prop-types";

const predata = {
    mail: "",
    adless: "",
    isFetching:false,
}
export default function login(state = predata, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      // ログイン成功時に呼ばれる
      state = action.payload;
          return Object.assign({}, state, {
          isFetching:true
      });
    case 'LOGIN_FAILURE':
      // ログイン失敗時に呼ばれる
      state = action.payload;
          return object.assign({}, state, {
              isFetching:false
      });
    default:
      return predata;
  }
}
