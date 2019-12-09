import {combineReducers} from 'redux';
import auth from './auth';
import jobapplications from './jobapplications'


export default combineReducers({
	auth,
	jobapplications
})