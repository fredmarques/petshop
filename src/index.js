import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
// import promise from 'redux-promise';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { getAllProducts } from './actions';
// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

store.dispatch(getAllProducts())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
// registerServiceWorker();