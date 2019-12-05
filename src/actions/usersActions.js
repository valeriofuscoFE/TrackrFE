import axios from 'axios';

import{
	FETCH_USERS
	
} from './types'

export const fetchUsers = () => async dispatch =>{
	console.log("fetching users list")
	try {

			var res = await fetch("http://localhost:4000/user/", {
				method: "GET",
				// headers: {
				// 	"Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGUxMWQ3NGU4YThjZDZhMjQ3YzMwNzkiLCJpYXQiOjE1NzUyNzU3NTAsImV4cCI6MTU3NTI4NjU1MH0.mX1Quoidqr_kNQ3Aw3CbZyaMwYW2pTRuiD7gfuy_hz8"
				// },
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

