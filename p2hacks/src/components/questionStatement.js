import React from "react";

const QuestionStatement = props => {
  const question = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5",
    "Question6",
    "Question7",
    "Question8",
    "Question9",
    "Question10",
    "Question11",
    "Question12",
    "Question13",
    "Question14",
    "Question15",
    "Question16",
    "Question17"
  ];
  return <p>{question[props.num]}</p>;
};

export default QuestionStatement;
