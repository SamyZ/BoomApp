import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { initializeApp } from 'firebase';
import reducers from './reducers';
import Navigation from './utils/Nav';

initializeApp({
  apiKey: "AIzaSyBwdnHYUigYlpff7ilCvu53wvW_faeR8Jk",
  authDomain: "appboom.firebaseapp.com",
  databaseURL: "https://appboom.firebaseio.com",
  storageBucket: "firebase-appboom.appspot.com",
  messagingSenderId: "31218163135"
});

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);

const BoomApp = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default BoomApp;
