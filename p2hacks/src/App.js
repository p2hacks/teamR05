import React from 'react';
import '././styles/App.css';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import Pre from './components/pre';
import PreSent from './components/preSent';
import Results from "./components/Results";
import Survey from "./components/Survey";
import SearchResult from "./components/SearchResult";
import snowflake from "./image/snowflake.png"

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      < div id = "backimg" >
        <section id="snow">
          <div class="inner">
          <img className = "snowflake1 flakes" src={snowflake}/>
          <img className = "snowflake2 flakes" src={snowflake}/>
          <img className = "snowflake3 flakes" src={snowflake}/>
          <img className = "snowflake4 flakes" src={snowflake}/>
          <img className = "snowflake5 flakes" src={snowflake}/>
          <img className = "snowflake6 flakes" src={snowflake}/>
          <img className = "snowflake7 flakes" src={snowflake}/>
          <img className = "snowflake8 flakes" src={snowflake}/>
          </div>
        </section>
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
