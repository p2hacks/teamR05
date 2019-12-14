import React from "react";

const QuestionStatement = props => {
  const question = [
    "Question1  細かいところは気になる?",
    "Question2  外出は好き？",
    "Question3  リラックスする時間がたくさんほしい？",
    "Question4　年齢は？",
    "Question5　こだわりはあるほう？",
    "Question6  性別は？",
    "Question7  おしゃれは好き？",
    "Question8　変化には敏感？",
    "Question9　自分に対する明確なイメージはある？",
    "Question10　身だしなみに気を使う？",
    "Question11　模様替えを年一回行う？",
    "Question12　デスクワークが多い？",
    "Question13　実用性は重視する？",
    "Question14　珍しいものは好き？",
    "Question15　新しいものは好き？",
    "Question16　忙しい時期は多い？",
    "Question17　音楽はよく聞く？"
  ];
  return <p>{question[props.num]}</p>;
};

export default QuestionStatement;
