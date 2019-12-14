import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import Pre from './components/pre';
import PreSent from './components/preSent';
import Survey from "./components/Survey";
import img from "./image/snow.JPG";

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div id = "backimg">
        <Switch>
          <Route exact path="/Pre" component={Pre} />
          <Route path="/survey" component={Survey}/>
        </Switch>
      </div>
    </ConnectedRouter>
  )
}
App.propTypes = {
  history: PropTypes.object,
}

export default App;
