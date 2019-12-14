import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import questionReduser from "./Question";
import calcedAnswer from "./calcedAnswer";
import userID from "./userID";

const rootReducer = history =>
  combineReducers({
    question: questionReduser,
    router: connectRouter(history),
    calcedAnswer,
    userID
  });

export default rootReducer;
