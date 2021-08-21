import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //allows us to view in browser
)


ReactDOM.render(
  <React.StrictMode>
    <Producer store={store}>
      <App />
    </Producer>
  </React.StrictMode>,
  document.getElementById('root')
);



reportWebVitals();

