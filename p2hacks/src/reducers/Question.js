//reducer
const initData = {
  i: 0,
  answer: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
};
const questionReducer = (state = initData, action) => {
  switch (action.type) {
    case "ADD":
      let newanswer = state.answer;
      newanswer[state.i] = action.num;
      return {
        ...state,
        i: state.i + 1,
        answer: newanswer
      };
    case "CHANGE":
      let newchangeanswer = state.answer;
      newchangeanswer[action.num] = action.answernum;
      return {
        ...state,
        answer: newchangeanswer
      };
    default:
      return state;
  }
};

const addReduce = (state, action) => {
  let newanswer = state.answer.slice();
  newanswer[state.i] = action.num;
  return {
    i: state.i + 1,
    answer: newanswer
  };
};

export default questionReducer;
