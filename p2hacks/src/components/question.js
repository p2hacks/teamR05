import React, { Component } from "react";
import addAnswer from "../actions";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import QuestionStatement from "./questionStatement";

class Question extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = num => {
    let action;
    action = addAnswer(num);
    this.props.dispatch(action);
  };

  render() {
    return (
      <div>
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
        <Button onClick={this.handleClick.bind(this, 1)}>そうではない</Button>
      </div>
    );
  }
}

export default connect(state => state)(Question);
