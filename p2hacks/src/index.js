import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import QuestionStore from './store'
import * as serviceWorker from './serviceWorker';
import configureStore, { history } from './Store';

const store = configureStore();
const render = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App history={history}/>
      </Provider>,
    document.getElementById('root')
  )
}
render()
