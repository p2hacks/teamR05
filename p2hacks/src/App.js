import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import Pre from './components/pre';
import PreSent from './components/preSent';
import Results from "./components/Results";
import Survey from "./components/Survey";
import SearchResult from "./components/SearchResult";

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/Pre" component={Pre} />
          <Route exact path="/present/:mail" component={PreSent}/>
          <Route path="/survey" component={Survey}/>
          <Route exact path="/results/:mail" component={Results}/>
          <Route exact path="/searchResult" component={SearchResult}/>
        </Switch>
      </div>
    </ConnectedRouter>
  )
}
App.propTypes = {
  history: PropTypes.object,
}

export default App;
