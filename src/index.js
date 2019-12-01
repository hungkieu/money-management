import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './containers/App';

const startApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

if(window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}
