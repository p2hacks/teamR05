import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers';
import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas/index';

export const history = createBrowserHistory()


export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware
      ),
    ),
  )
  sagaMiddleware.run(rootSaga);
  return store
}