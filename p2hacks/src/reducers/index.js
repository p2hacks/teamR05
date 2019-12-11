import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import  questionReduser from './Question'

const rootReducer = (history) => combineReducers({
  questionReduser,
  router: connectRouter(history)
})

export default rootReducer