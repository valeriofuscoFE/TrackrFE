import axios from 'axios';

import{
	GET_PROFILE
} from './types'


// GET THE USER PROFILE 
//@GET MY PROFILE FROM BE
export const getCurrentProfile =() => async dispatch =>{
	
	try {
		// var token = localStorage.getItem("accessToken");
		// console.log(token)
		// if (token) {
		// var username = this.props.match.params.username;
			var res = await fetch("http://localhost:4000/user/5de11d74e8a8cd6a247c3079", {
				method: "GET",
				headers: {
					"Authorization": "Bearer " + localStorage.token
					// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGVlNTQwYmZmMzU3NTJlMDA5YzJmOTciLCJpYXQiOjE1NzU5MDAyMTYsImV4cCI6MTU3NTkxMTAxNn0.rNhBrlvXFICwizub4tbQhOoc7Dt5lJ11i62gOPaVbcc"
				},
			})
			if (res.ok) {
				var profile = await res.json();
				console.log(profile)
		
		dispatch({
			type: GET_PROFILE,
			payload: profile
		})
	}
	// }
	} catch (err) {
		console.log(err)
	}
		
	}