import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Action -> Describes a task
const increment = () => {
  return {
    type: 'INCREMENT' //type is same thing as name
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}
//Reducer -> bridge between Action and Store
const counter = (state = 0, action) => {
  switch(action.type){
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
  }

}

//Store is my centralized data
let store = createStore(counter);
//displaying store in console
store.subscribe(() => console.log(store.getState()))

//Dispatch -> Perform the Action and send it to the Reducer
store.dispatch(increment());


reportWebVitals();

