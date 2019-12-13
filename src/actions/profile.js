import axios from 'axios';

import { GET_PROFILE } from './types';

// GET THE USER PROFILE
//@GET MY PROFILE FROM BE
export const getCurrentProfile = () => async (dispatch) => {
	try {
		// var token = localStorage.getItem("accessToken");
		// console.log(token)
		// if (token) {
		// var username = this.props.match.params.username;
			var res = await fetch(process.env.REACT_APP_URL +"user/5de11d74e8a8cd6a247c3079", {
				method: "GET",
				headers: {
					"Authorization": "Bearer " + 
					localStorage.token
					// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGYyMWE0Mjg2OGE5NjQ4ZTQ3ZWRiZDQiLCJpYXQiOjE1NzYxNDc1NTUsImV4cCI6MTU3NzE0ODM1NX0.Wd5wxc8l-Z2NeaTwNdJRQN0ZbgbwCCVo8d5Y8k814uQ"
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
		console.log(err);
	}
};
