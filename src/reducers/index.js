import {combineReducers} from 'redux';
import auth from './auth';
import profile from './profile';
import usersReducer from './usersReducer'



export default combineReducers({
	auth,
	profile,
	usersReducer

})