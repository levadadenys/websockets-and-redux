import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { default as thunk } from 'redux-thunk' ;
import reducers from './js/reducers';
import { init as websocketInit, emit } from './js/actions/websocket';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/main.css';

import App from './js/App';
import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(thunk.withExtraArgument(emit), logger);
const store = createStore(combineReducers(reducers), middleware);

websocketInit(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
