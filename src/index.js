import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './Appv2';
import './index.css';

import Amplify from '@aws-amplify/core';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(<App />, document.getElementById('root'));
