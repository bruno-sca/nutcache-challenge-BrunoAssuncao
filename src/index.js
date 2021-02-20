import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import MainPage from './pages/MainPage';

import './assets/css/global.scss';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-widgets/dist/css/react-widgets.css';

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('root')
);
