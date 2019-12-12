import{
	GET_SCHOOLS,
	ADD_SCHOOL,
	DELETE_SCHOOL,
	UPDATE_SCHOOL,
	GET_SCHOOL_BYID
} from './types'

export const getSchools =() => async dispatch =>{
	try {
		var res = await fetch(process.env.REACT_APP_URL + "school" , {
				method: "GET",
				headers: {
					"Authorization": "Bearer " + localStorage.token
				},
			})
			if (res.ok) {
				var schools = await res.json();		
		dispatch({
			type: GET_SCHOOLS,
			payload: schools
		})
	}	
	} catch (err) {
		console.log(err)
	}		
	}

	export const getSchoolbyId =(id) => async dispatch =>{
		try {
			// var token = localStorage.getItem("accessToken");
				var res = await fetch(process.env.REACT_APP_URL + "school/"+id , {
					method: "GET",
					headers: {
						"Authorization": "Bearer " + localStorage.token
					},
				})
				if (res.ok) {
					var school = await res.json();			
			dispatch({
				type: GET_SCHOOL_BYID,
				payload: school
			})
		}
		
		} catch (err) {
			console.log(err)
		}
			
		}
	

	export const addSchool =(state) => async dispatch =>{
		try {
			   var res = await fetch(process.env.REACT_APP_URL + "school/create" , {
					method: "POST",
					body: JSON.stringify(state),
					headers: {
						"Authorization": "Bearer " + localStorage.token,
						"Content-Type": "application/json"
					}
				})
				if (res.ok) {
					var school = await res.json();
				
			dispatch({
				type: ADD_SCHOOL,
				payload: school
			})
		}
		
		} catch (err) {
			console.log(err)
		}			
		}

		export const deleteSchool =(id) => async dispatch =>{
			try {
				var res = await fetch(process.env.REACT_APP_URL + "school/"+id , {
						method: "DELETE",						
						headers: {
							"Authorization": "Bearer " + localStorage.token,						
						}
					})
					if (res.ok) {
						var school = await res.json();				
				dispatch({
					type: DELETE_SCHOOL,
					payload: school
				})
			}
			
			} catch (err) {
				console.log(err)
			}
				
			}


export const updateSchool =(state,id) => async dispatch =>{
				try {
			
						var res = await fetch(process.env.REACT_APP_URL + "school/"+id , {
							method: "PUT",
                            body: JSON.stringify(state),
					        headers: {
						    "Authorization": "Bearer " + localStorage.token,
						    "Content-Type": "application/json"
					         }														
						})
						if (res.ok) {
							var school = await res.json();					
					dispatch({
						type: UPDATE_SCHOOL,
						payload: school
					})
				}				
				} catch (err) {
					console.log(err)
				}
					
	}