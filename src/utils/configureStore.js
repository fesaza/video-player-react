
/* eslint-disable no-underscore-dangle */
/* global window */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(
      rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(sagaMiddleware),
    ),
    runSaga: sagaMiddleware.run,
  };
}

/* eslint-enable */
