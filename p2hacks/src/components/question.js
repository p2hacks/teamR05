import React, { Component } from "react";
import { editAnswer } from "../actions";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import QuestionStatement from "./questionStatement";
import { push } from "connected-react-router";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionID: 0,
      isQuestionEnd: false
    }
  }

  handleClick = (num) => () => {
    const { questionID } = this.state;
    this.props.editAnswer(questionID, num);
    this.setQuestionID(questionID + 1);
  }

  setQuestionID = (newID) => {
    if (newID < 0 || newID >= 17) {
      if (newID >= 17) this.setState({ isQuestionEnd: true })
      return
    }
    this.setState({
      questionID: newID,
    })
  }
  render() {
    const { questionID, isQuestionEnd } = this.state;
    return (
      <div>
        {!isQuestionEnd ? (
          <>
            <QuestionStatement num={questionID} />
            <Button onClick={this.handleClick(5)}>
              {questionID === 3 ? "~51" : questionID === 5 ? "女" : "そう"}</Button>
            <Button onClick={this.handleClick(4)}>
              {questionID === 3 ? "40~50" : questionID === 5 ? null : "そうかもしれない"}
            </Button>
            <Button onClick={this.handleClick(3)}>
              {questionID === 3 ? "31~40" : questionID === 5 ? "どちらでもない" : "わからない"}</Button>
            <Button onClick={this.handleClick(2)}>
              {questionID === 3 ? "21~30" : questionID === 5 ? null : "そうではないかもしれない"}
            </Button>
            <Button onClick={this.handleClick(1)}>
              {questionID === 3 ? "20~" : questionID === 5 ? "男" : "そうではない"}
            </Button>
          </>
        ) : (
            <Button onClick={this.props.movePage}>終わり</Button>
          )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editAnswer: (ID, ans) => dispatch(editAnswer(ID, ans)),
    movePage: () => dispatch(push("/Confirm"))
  }
}

export default connect(null, mapDispatchToProps)(Question);
