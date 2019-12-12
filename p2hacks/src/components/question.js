import React, { Component } from "react";
import addAnswer from "../actions";
import { connect, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import QuestionStatement from "./questionStatement";

class Question extends Component {
  constructor(props) {
    super(props);
  }


  handleClick = num => {
    this.props.dispatch(addAnswer(num));
    console.log(this.props.question.answer)
  };

  movePage = () => {
    sessionStorage.setItem('state', [...this.props.question.answer]);
    console.log("inquestion" + this.props.question.answer);
    window.location.href = "/Confirm"
  }
  render() {
    const isQuestion = this.props.question.i;


    return (
      <div>
        {isQuestion < 17 ? (
          <>
            {console.log(this.props)}
            <QuestionStatement num={this.props.question.i} />
            <Button onClick={this.handleClick.bind(this, 5)}>そう</Button>
            <Button onClick={this.handleClick.bind(this, 4)}>
              そうかもしれない
            </Button>
            <Button onClick={this.handleClick.bind(this, 3)}>わからない</Button>
            <Button onClick={this.handleClick.bind(this, 2)}>
              そうではないかもしれない
            </Button>
            <Button onClick={this.handleClick.bind(this, 1)}>
              そうではない
            </Button>
          </>
        ) : (
            <Button onClick={this.movePage}>終わり</Button>
          )}
      </div>
    );
  }
}

export default connect(state => state)(Question);
