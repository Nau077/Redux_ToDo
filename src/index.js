import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './redux_modules/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux_modules/store';

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
),document.getElementById('root'));
 
 
serviceWorker.unregister();
