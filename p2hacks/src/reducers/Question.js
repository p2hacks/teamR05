//reducer
const initData = {
    i: 0,
    answer: []
}
const questionReducer=(state = initData, action)=> {
    switch (action.type) {
        case 'ADD':
            return addReduce(state, action);
        default:
            return state;
    }
}

const addReduce=(state, action)=> {
    let newanswer = state.answer.slice();
    newanswer[state.i] = action.num;
    return {
        i: state.i + 1,
        answer: newanswer
    }
}

export default questionReducer