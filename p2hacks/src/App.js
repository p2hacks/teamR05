import React from 'react'
import Pre from './pre';
import { Route, Switch } from 'react-router'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import Question from './question'
import Confirm from './components/Confirm'
import { connect } from 'react-redux';
import Home from './components/Home';
import './App.css';
import End from './components/End';

const App = ({ history }) => {
  return(
    <ConnectedRouter history={history}>
      <div>
        <Switch>
   　　　 <Route exact path="/Pre" component={Pre} />
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
