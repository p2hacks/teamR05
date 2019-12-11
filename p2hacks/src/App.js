import React from 'react'
import { Route, Switch } from 'react-router'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import Confirm from './components/Confirm'

const App = ({ history }) => {
  return(
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Confirm} />
        </Switch>
      </div>
    </ConnectedRouter>
  )
}
App.propTypes = {
  history: PropTypes.object,
}

export default App