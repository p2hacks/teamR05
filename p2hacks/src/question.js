import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class Qestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      answer: []
    }
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (num) => {
    // console.log(num);
    let newanswer = this.state.answer.slice();
    newanswer[this.state.i] = num;

    this.setState(
      {
        i: this.state.i + 1,
        answer: newanswer
      }
    );
    //console.log(newanswer);
  };

  render() {

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
      "Question10"
    ];
    return (
      <div>
        <p>{question[this.state.i]}</p>
        <Button onClick={this.handleClick.bind(this, 5)}>そう</Button>
        <Button onClick={this.handleClick.bind(this, 4)}>そうかもしれない</Button>
        <Button onClick={this.handleClick.bind(this, 3)}>わからない</Button>
        <Button onClick={this.handleClick.bind(this, 2)}>そうではないかもしれない</Button>
        <Button onClick={this.handleClick.bind(this, 1)}>そうではない</Button>
        {console.log(this.state.i)}
        {console.log(this.state.answer)}
      </div>
    );
  }
}
