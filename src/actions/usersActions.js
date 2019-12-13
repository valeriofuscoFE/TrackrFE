

import{
	FETCH_USERS
	
	
} from './types'

export const fetchUsers = () => async dispatch =>{
	console.log("fetching users list")
	try {

			var res = await fetch(process.env.REACT_APP_URL + "user/", {
				method: "GET",
				headers: {
					"Authorization": "Bearer " +    
					 localStorage.token
					// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGYyMWE0Mjg2OGE5NjQ4ZTQ3ZWRiZDQiLCJpYXQiOjE1NzYxNDc1NTUsImV4cCI6MTU3NzE0ODM1NX0.Wd5wxc8l-Z2NeaTwNdJRQN0ZbgbwCCVo8d5Y8k814uQ"
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

	

