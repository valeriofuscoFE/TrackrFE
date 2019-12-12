import {combineReducers} from 'redux';
import auth from './auth';
import usersReducer from './usersReducer'
import updateReducer from './updateReducer'
import profile from './profile'
import schools from './schools'
import applications from './manager'
import students from './manager'
import AppCount from './manager'


export default combineReducers({
	auth,	
	profile,
	usersReducer,
	updateReducer,
	applications,
	students,
	AppCount,
	schools
})