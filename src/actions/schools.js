import{
	GET_SCHOOLS
} from './types'

export const getSchools =() => async dispatch =>{
	try {
		// var token = localStorage.getItem("accessToken");
			var res = await fetch("http://localhost:4000/school" , {
				method: "GET",
				headers: {
					"Authorization": "Bearer " + localStorage.token
				},
			})
			if (res.ok) {
				var schools = await res.json();
				console.log(schools)
		
		dispatch({
			type: GET_SCHOOLS,
			payload: schools
		})
	}
	
	} catch (err) {
		console.log(err)
	}
		
	}