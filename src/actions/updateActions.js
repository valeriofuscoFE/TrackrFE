
import{
	
	UPDATE_USERS
	
} from './types'


	export const updateUsers = (id) => async dispatch =>{
		console.log("updating users list")
		try {
	
				var res = await fetch("http://localhost:4000/user/" + id , {
					method: "PUT",
					body: JSON.stringify(),
					headers: {
						"Authorization": "Bearer " +    
						//  localStorage.token
						"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGYxMDMyMThkN2IxNTNmNDhlN2Y2ZmIiLCJpYXQiOjE1NzYwNzYwNzksImV4cCI6MTU3NzA3Njg3OX0.Ia456IrjdznKM-ksWCuWChT2lk2irik66zTWZ4oPsQw"
					},
				})
				if (res.ok) {
					var updateusers = await res.json();
					console.log(updateusers)
			
			dispatch({
				type: UPDATE_USERS,
				payload: updateusers
			})
		}
		
		} catch (err) {
			console.log(err)
		}
			
		};

