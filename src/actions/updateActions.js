import { UPDATE_USERS,GET_STUDENT } from "./types";

export const updateUsers = (state,id) => async dispatch => {
  try {

    var res = await fetch(process.env.REACT_APP_URL + "user/" + id, {
      method: "PUT",
      body: JSON.stringify(state),
      headers: {
        "Authorization": "Bearer " + localStorage.token,
        "Content-Type": "application/json"
           }	

    });
    if (res.ok) {
      var updateusers = await res.json();
      console.log("updateusers actions",updateusers);


      dispatch({
        type: UPDATE_USERS,
        payload: updateusers
      });
    }

    
  } catch (err) {
    console.log(err);
  }
}

export const getStudentbyId = (id) => async dispatch =>{
	
	try {

			var res = await fetch(process.env.REACT_APP_URL + "user/" +id, {
				method: "GET",
				headers: {
					"Authorization": "Bearer " +    
					 localStorage.token
				
				},
			})
			if (res.ok) {
				var student = await res.json();
				console.log("usersAction STUDENT",student)
		
		dispatch({
			type: GET_STUDENT,
			payload: student
		})
	}
	// }
	} catch (err) {
		console.log(err)
	}
		
	};

