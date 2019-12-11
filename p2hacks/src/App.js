import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Question from './question'
function App() {
  return (
    <Question />
  );
}

export default connect()(App);
