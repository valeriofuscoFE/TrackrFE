import { combineReducers } from 'redux';
import auth from './auth';
import usersReducer from './usersReducer';
import updateReducer from './updateReducer';
import jobapplications from './jobapplications';
import profile from './profile';
import schools from './schools';
import manager from './manager';
import message from './errMess';

// import students from './students'
// import applications from './applications'

export default combineReducers({
	auth,
	profile,
	usersReducer,
	updateReducer,
	manager,
	schools,
	jobapplications,
	message
});
