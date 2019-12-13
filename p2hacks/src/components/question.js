import React, { Component } from "react";
import {editAnswer} from "../actions";
import { connect} from "react-redux";
import Button from "@material-ui/core/Button";
<<<<<<< HEAD
import QuestionStatement from "./questionStatement";
import {push} from "connected-react-router";
=======
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux';
const dispatch = useDispatch();
const movetoQuestion = () => {
  return (dispatch(push("/Question")))
}
class Question extends Component {
>>>>>>> cf8cce8f3358dcccd1c24dedcfc5bd7e062a07a4

class Question extends Component {
  constructor(props) {
    super(props);
    this.state={
      questionID:0,
      isQuestionEnd: false
    }
  }

<<<<<<< HEAD
  handleClick=(num)=>()=>{
    const {questionID}=this.state;
    this.props.editAnswer(questionID,num);
    this.setQuestionID(questionID+1);
  }
=======
  handleClick = (num) => {
    let action;
    action = addAnswer(num);
    this.props.dispatch(action);
    {
      (isQuestion === 10) ? (null
      ) : (movetoQuestion)
        }
  };
>>>>>>> cf8cce8f3358dcccd1c24dedcfc5bd7e062a07a4

  setQuestionID=(newID)=>{
    if(newID<0||newID>=17){
      if(newID>=17) this.setState({isQuestionEnd:true})
      return
    }
    this.setState({
      questionID:newID,
    })
  }
  render() {
    const {questionID,isQuestionEnd}=this.state;
    return (
      <div>
<<<<<<< HEAD
        {!isQuestionEnd? (
          <>
            <QuestionStatement num={questionID} />
            <Button onClick={this.handleClick(5)}>そう</Button>
            <Button onClick={this.handleClick(4)}>
              そうかもしれない
            </Button>
            <Button onClick={this.handleClick(3)}>わからない</Button>
            <Button onClick={this.handleClick(2)}>
              そうではないかもしれない
            </Button>
            <Button onClick={this.handleClick(1)}>
              そうではない
            </Button>
          </>
        ) : (
            <Button onClick={this.props.movePage}>終わり</Button>
          )}
=======
          <p>{question[this.props.questionReduser.i]}</p>
        <Button onClick={this.handleClick.bind(this, 5)}>そう</Button>
        <Button onClick={this.handleClick.bind(this, 4)}>そうかもしれない</Button>
        <Button onClick={this.handleClick.bind(this, 3)}>わからない</Button>
        <Button onClick={this.handleClick.bind(this, 2)}>そうではないかもしれない</Button>
        <Button onClick={this.handleClick.bind(this, 1)}>そうではない</Button>
        {/* {console.log(this.props.questionReduser.i)}
            {console.log(this.props.answer)} */}


>>>>>>> cf8cce8f3358dcccd1c24dedcfc5bd7e062a07a4
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    editAnswer: (ID, ans) => dispatch(editAnswer(ID, ans)),
    movePage: () => dispatch(push("/Confirm"))
  }
}

export default connect(null,mapDispatchToProps)(Question);
