import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App.js';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import { createStore } from 'redux';
import { rootReducer }from './reducers';

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	 document.getElementById('root'));

serviceWorker.unregister();
