import React, { Component } from "react";
import {editAnswer} from "../actions";
import { connect} from "react-redux";
import Button from "@material-ui/core/Button";
import QuestionStatement from "./questionStatement";
import {push} from "connected-react-router";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state={
      questionID:0,
      isQuestionEnd: false
    }
  }

  handleClick=(num)=>()=>{
    const {questionID}=this.state;
    this.props.editAnswer(questionID,num);
    this.setQuestionID(questionID+1);
  }

  setQuestionID=(newID)=>{
    if(newID<0||newID>=17){
      if(newID>=17) this.setState({isQuestionEnd:true})
      return
    }
    this.setState({
      questionID:newID,
    })
  }
  routePages=(address)=>()=>{
    this.props.movePage(address)
  }
  render() {
    const {questionID,isQuestionEnd}=this.state;
    return (
      <div>
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
            <Button onClick={this.routePages(`${this.props.match.url.split("/").slice(0, -1).join("/")}/confirm`)}>終わり</Button>
          )}
      </div>
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
