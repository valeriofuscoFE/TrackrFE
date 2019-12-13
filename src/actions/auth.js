
import axios from 'axios';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
} from './types';
import setAuthToken from '../utils/setAuthToken'


//Load User 
export const loadUser = ()=> async dispatch => {


	if(localStorage.token){
    setAuthToken(localStorage.token);
	}
   
	try {
		const res = await axios.get(process.env.REACT_APP_URL + 'user/me');
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
export const register = ({name ,surname, email,password,role,schoolName, gitURL}) => async dispatch => {
	 const config = {
		 headers:{
			 'Content-Type':'application/json'
		 }
	 }

	 const body = JSON.stringify({name ,surname, email,password,role,schoolName, gitURL})

	 try {
		 const res = await axios.post(process.env.REACT_APP_URL + 'user/register',body,config);
		 dispatch({
			 type:REGISTER_SUCCESS,
			 payload:res.data
		
		});

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

		const res = await axios.post(process.env.REACT_APP_URL + "user/login",body,config);

		dispatch({
			type: LOGIN_SUCCESS,
			payload:res.data.token,
	   
	   });
	   dispatch(loadUser())
	} catch (err) {
		dispatch({
			type: LOGIN_FAIL
		})
	}
}
