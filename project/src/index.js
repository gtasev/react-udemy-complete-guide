import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import App49 from './containers/App49';
import App61 from './containers/App61';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App appTitle="Person Manager" />, document.getElementById('root'));
// ReactDOM.render(<App49 />, document.getElementById('root'));      // this is for lesson 49 (practice)
ReactDOM.render(<App appTitle="Person Manager" />, document.getElementById('root'));      // this is for lesson 49 (practice)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
