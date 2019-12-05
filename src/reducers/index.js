import {combineReducers} from 'redux';
import auth from './auth';
import profile from './profile';
import usersReducer from './usersReducer'
import applications from './manager'
import students from './manager'
import AppCount from './manager'

export default combineReducers({
	auth,
	profile,
	usersReducer,
	applications,
	students,
	AppCount
})