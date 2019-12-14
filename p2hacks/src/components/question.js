import React, { Component } from "react";
import { editAnswer } from "../actions";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import QuestionStatement from "./questionStatement";
import { push } from "connected-react-router";
import "../styles/Question.css";

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
  routePages=(address)=>()=>{
    this.props.movePage(address)
  }
  render() {
    const { questionID, isQuestionEnd } = this.state;
    return (
      < div id = "QuestionContainer" >
      <div id="QuestionPosition">
        {!isQuestionEnd ? (
          <>
            <QuestionStatement id="QuestionSentence" num={questionID} />
            <Button id="QuestionButton" onClick={this.handleClick(1)}>
              {questionID === 3 ? "~20" : questionID === 5 ? "男" : "そうではない"}
            </Button>
            <Button id="QuestionButton" onClick={this.handleClick(2)}>
              {questionID === 3 ? "21~30" : questionID === 5 ? null : "そうではないかもしれない"}
            </Button>
            <Button id="QuestionButton" onClick={this.handleClick(3)}>
              {questionID === 3 ? "31~40" : questionID === 5 ? "どちらでもない" : "わからない"}</Button>
            <Button id="QuestionButton" onClick={this.handleClick(4)}>
              {questionID === 3 ? "40~50" : questionID === 5 ? null : "そうかもしれない"}
            </Button>
            <Button id="QuestionButton" onClick={this.handleClick(5)}>
              {questionID === 3 ? "51~" : questionID === 5 ? "女" : "そう"}</Button>
          </>
        ) : (
            <Button variant="outlined" color="primary" id="QuestionEndButton"onClick={this.routePages(`${this.props.match.url.split("/").slice(0, -1).join("/")}/confirm`)}>終わり</Button>
          )}
        </div>
        </ div>
    );
  }
}

function mapStateToProps(_,props){
  return {
    match:props.match
  }
}

function mapDispatchToProps(dispatch){
  return {
    editAnswer: (ID, ans) => dispatch(editAnswer(ID, ans)),
    movePage: (targetPageAddress) => dispatch(push(targetPageAddress))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Question);
