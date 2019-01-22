import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import getStore from './store';
import './style/index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={getStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();

