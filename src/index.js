import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';
import './index.css';

import '../node_modules/grommet/scss/vanilla/index.scss';


ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);
