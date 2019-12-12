

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
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGYxMDMyMThkN2IxNTNmNDhlN2Y2ZmIiLCJpYXQiOjE1NzYwNzYwNzksImV4cCI6MTU3NzA3Njg3OX0.Ia456IrjdznKM-ksWCuWChT2lk2irik66zTWZ4oPsQw"
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

