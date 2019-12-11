import {combineReducers} from 'redux';
import auth from './auth';
import profile from './profile'
import schools from './schools'
import manager from './manager'


export default combineReducers({
	auth,
	profile,
	manager,
	schools
})