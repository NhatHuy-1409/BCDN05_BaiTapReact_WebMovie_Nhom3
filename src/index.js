import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
//Ant
import 'antd/dist/antd.css';
// Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { DOMAIN } from './util/setting/setting';

// Đa ngôn ngữ
import './i18n'





ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

