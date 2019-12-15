import { EDITANSWER} from "../actions/index"

const initState={
  answers: JSON.parse(sessionStorage.getItem("p2_ans")) || Array(17).fill(1)
};

function questionReducer(state=initState,action){
  switch(action.type){
    case EDITANSWER:
      let answers= state.answers.slice()
      answers[action.targetID] = action.answer;
      sessionStorage.setItem("p2_ans",JSON.stringify(answers));
      return {answers};
    default:
      return state;
  }
}

export default questionReducer;
