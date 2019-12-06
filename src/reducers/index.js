import {combineReducers} from 'redux';
import auth from './auth';
import profile from './profile'
import schools from './schools'
import applications from './manager'
import students from './manager'
import AppCount from './manager'

export default combineReducers({
	auth,
	profile,
	applications,
	students,
	AppCount,
	schools
})