import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL
} from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated:null,
	loading:false,
	user:null
}

export default function(state = initialState,action){
	const{type, payload} =action;
switch(type){
	case USER_LOADED:
		return {
			...state,
			isAuthenticated:true,
			loading:false,
			user:payload
		}
   case REGISTER_SUCCESS:
	   return {
		   ...state
	   }
   case LOGIN_SUCCESS:
	   localStorage.setItem('token',payload.token);
	   return {
		   ...state,
		   ...payload,
		   isAuthenticated:true,
		   loading:false
	   }
	   case REGISTER_FAIL:
		   return {
			   ...state,
			   isAuthenticated:false,
			   loading:true
		   }
	   case LOGIN_FAIL:
	   case AUTH_ERROR:
	   
		   localStorage.remove('token');
		   return {
			   ...state,
			   token:null,
			   isAuthenticated:false,
			   loading:false

		   }
		   
	   default:
		   return state;
}
}