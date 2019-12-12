import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import questionReduser from './Question'
import login from './login';

const rootReducer = (history) => combineReducers({
  login,
  questionReduser,
  router: connectRouter(history)
})

export default rootReducer;