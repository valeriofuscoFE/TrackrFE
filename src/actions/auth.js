import axios from 'axios';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR ,
	LOGIN_SUCCESS,
	LOGIN_FAIL
} from './types';

import setAuthToken from '../utils/setAuthToken'

//Load User
export const loadUser = ()=> async dispatch => {
	if(localStorage.token){
    setAuthToken(localStorage.token);
	}
     console.log("ki")
	try {
		const res = await axios.get('http://localhost:4000/user/');
		console.log(res)
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
		 const res = await axios.post('http://localhost:4000/user/register',body,config);
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
		const res = await axios.post('http://localhost:4000/user/login',body,config);
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