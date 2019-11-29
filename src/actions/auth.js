import axios from 'axios';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR 
} from './types';

import setAuthToken from '../utils/setAuthToken'

//Load User
export const loadUser = ()=> async dispatch => {
	if(localStorage.token){
    setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get('/path/for/auth');
		dispatch({
			type:USER_LOADED,
			payload:res.data
		})
	} catch (err) {
		dispatch({
			type:AUTH_ERROR
		})
	}
}








//Register User 
export const register = ({name,email,password}) => async dispatch => {
	 const config = {
		 headers:{
			 'Content-Type':'application/json'
		 }
	 }

	 const body = JSON.stringify({name,email,password})

	 try {
		 const res = await axios.post('/api/route/change/it',body,config);
		 dispatch({
			 type:REGISTER_SUCCESS,
			 payload:res.data  //RESPONSE OF OUR POST ACTION
		
		});

		dispatch(loadUser());

	 } catch (err) {
		 dispatch({
			 type:REGISTER_FAIL
		 })
	 }
}


//User Login
export const login = (email,password) => async dispatch => {
	const config = {
		headers:{
			'Content-Type':'application/json'
		}
	}

	const body = JSON.stringify({email,password})

	try {
		const res = await axios.post('/api/route/change/it',body,config);
		dispatch({
			type:LOGIN_SUCCESS,
			payload:res.data  //RESPONSE OF OUR POST ACTION
	   
	   });
	   dispatch(loadUser());
	} catch (err) {
		dispatch({
			type:LOGIN_FAIL
		})
	}
}