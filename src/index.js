/* global document */
import WebFontLoader from 'webfontloader';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Root from './Root';
import configureStore from './utils/configureStore';
import rootSaga from './sagas';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
