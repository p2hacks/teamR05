import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import Question from './components/question'
import Confirm from './components/Confirm'
import Home from './components/Home';
import End from './components/End';
import Pre from './components/pre';
import PreSent from './components/preSent';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/Pre" component={Pre} />
          <Route exact path="/PreSent" component={PreSent} />
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Confirm" component={Confirm} />
          <Route exact path="/Question" component={Question} />
          <Route exact path="/End" component={End} />
        </Switch>
      </div>
    </ConnectedRouter>
  )
}
App.propTypes = {
  history: PropTypes.object,

}

export default connect()(App);
