import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

const sagaMidoleware = createSagaMiddleware();
export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                sagaMidoleware
            ),
        ),
    );
    sagaMidoleware.run(rootSaga);

    store.subscribe(() =>
        console.log("store", store.getState())
    );

    return store
}