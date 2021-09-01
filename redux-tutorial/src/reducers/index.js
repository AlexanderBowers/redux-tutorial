import counterReducer from './counter';
import loggedReducer from './isLogged';
import inputReducer from './input'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    input: inputReducer

});
export default allReducers