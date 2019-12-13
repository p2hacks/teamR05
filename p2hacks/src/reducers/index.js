<<<<<<< HEAD
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import questionReduser from "./Question";

const rootReducer = history =>
  combineReducers({
    question: questionReduser,
    router: connectRouter(history)
  });

export default rootReducer;
=======
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
>>>>>>> cf8cce8f3358dcccd1c24dedcfc5bd7e062a07a4
