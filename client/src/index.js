import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createRouter,applyMiddleware, createStore} from 'redux';
import promiseMiddleware from 'redux-promise';
import reduxThunk from 'redux-thunk';


import Routes from './routes';
import Reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);


