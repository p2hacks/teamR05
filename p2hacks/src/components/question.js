import React, { Component } from "react";
import  addAnswer  from '../actions';
import { connect } from 'react-redux';
import Button from "@material-ui/core/Button";
class Question extends Component {

  constructor(props) {
    super(props);
  }

  handleClick = (num) => {
    let action;
    action = addAnswer(num);
    this.props.dispatch(action);
  };

  render() {
    const isQuestion = this.props.questionReduser.i;
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
        {(isQuestion<10) ? (
           < >
          <p>{question[this.props.questionReduser.i]}</p>
        <Button onClick={this.handleClick.bind(this, 5)}>そう</Button>
        <Button onClick={this.handleClick.bind(this, 4)}>そうかもしれない</Button>
        <Button onClick={this.handleClick.bind(this, 3)}>わからない</Button>
        <Button onClick={this.handleClick.bind(this, 2)}>そうではないかもしれない</Button>
        <Button onClick={this.handleClick.bind(this, 1)}>そうではない</Button>
        {/* {console.log(this.props.questionReduser.i)}
            {console.log(this.props.answer)} */}
            </>
        ) : (
            <Button onClick={ window.location.href = "/Confirm"}></Button>)
        }
      </div>
    );
  }
}

export default connect((state) => state)(Question)