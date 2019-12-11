import { createStore } from 'redux';
// state
const initData = {
    i: 0,
    answer: []
}
//reducer
export function questionReducer(state = initData, action) {
    switch (action.type) {
        case 'ADD':
            return addReduce(state, action);
        default:
            return state;
    }
}
function addReduce(state, action) {
    let newanswer = state.answer.slice();
    newanswer[state.i] = action.num;
    return {
        i: state.i + 1,
        answer: newanswer
    }
}
// actioncreator
export function addAnswer(num) {
    return {
        type: 'ADD',
        num: num
    }
}
export default createStore(questionReducer);