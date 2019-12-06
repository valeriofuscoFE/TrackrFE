import {combineReducers} from 'redux';
import auth from './auth';
import profile from './profile'
<<<<<<< HEAD
import schools from './schools'
=======
>>>>>>> 48cb99a2cb798fa960429cd254a6f4fed9a0c8d7
import applications from './manager'
import students from './manager'
import AppCount from './manager'

export default combineReducers({
	auth,
	profile,
	applications,
	students,
<<<<<<< HEAD
	AppCount,
	schools
=======
	AppCount
>>>>>>> 48cb99a2cb798fa960429cd254a6f4fed9a0c8d7
})