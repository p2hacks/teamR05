import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import createSagaMiddleware from 'redux-saga';
import rootSagas from "./sagas/index"

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
         // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  )
  sagaMiddleware.run(rootSagas)
  return store
}