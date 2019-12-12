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
export const reloadChange = (data) => {
  return {
    type: "RELOAD",
    data: data
  }
}
export default addAnswer;
