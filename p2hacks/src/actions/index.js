// actioncreator
const addAnswer = num => {
  return {
    type: "ADD",
    num: num
  };
};
export const changeAnswer = (answernum, num) => {
  return {
    type: "CHANGE",
    answernum: answernum,
    num: num
  };
};
export default addAnswer;
