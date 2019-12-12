const initialState = {};
export default function login(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      // ログイン成功時に呼ばれる
      state = action.payload;
      return state;
    case 'LOGIN_FAILURE':
      // ログイン失敗時に呼ばれる
      state = action.payload;
      return state;
    default:
      return initialState;
  }
}