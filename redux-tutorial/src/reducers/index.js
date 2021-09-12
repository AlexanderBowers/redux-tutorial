import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    form: formReducer

});
export default allReducers