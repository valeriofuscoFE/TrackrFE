import {combineReducers} from 'redux';
import auth from './auth';
import usersReducer from './usersReducer'
import profile from './profile'
import schools from './schools'
import applications from './manager'
import students from './manager'
import AppCount from './manager'


export default combineReducers({
	auth,	
	profile,
	usersReducer,
	applications,
	students,
	AppCount,
	schools
})