import axios from 'axios';

import{
	FETCH_USERS
	
} from './types'

export const fetchUsers = () => async dispatch =>{
	console.log("fetching users list")
	try {

			var res = await fetch("http://localhost:4000/user/", {
				method: "GET",
				headers: {
					"Authorization": "Bearer " +    
					//  localStorage.token
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGVmNzUxMjRlZTY3ZDE4YjhmMDBhMzIiLCJpYXQiOjE1NzU5NzQxODcsImV4cCI6MTU3Njk3NDk4N30.tpJSFIwV-y9-q2iLibvdFUP7FxKUYJ_emd0ybpo_waM"
				},
			})
			if (res.ok) {
				var users = await res.json();
				console.log(users)
		
		dispatch({
			type: FETCH_USERS,
			payload: users
		})
	}
	// }
	} catch (err) {
		console.log(err)
	}
		
	};

