import{
    GET_RECENTACTIVITIES,
    GET_STUD_NAME
} from './types'
<<<<<<< HEAD
export const getRecentActivities =() => async dispatch =>{
    
    try {
                var res = await fetch("http://localhost:4000/application", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + localStorage.token
                },
            })
            if (res.ok) {
                var applications = await res.json();        
        dispatch({
            type: GET_RECENTACTIVITIES,
            payload: applications
        })
    }
    // }
    } catch (err) {
        console.log(err)
    }
        
    }
    
    export const getStudentName =() => async dispatch =>{
    
=======

export const getRecentActivities =() => async dispatch =>{
	
	try {
				var res = await fetch("http://localhost:4000/application", {
				method: "GET",
				headers: {
					"Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGU3ODVlY2YzZTNhZDhhODAzYTEzOGIiLCJpYXQiOjE1NzU1NjMyNDYsImV4cCI6MTU3NTU3NDA0Nn0.BEPysR1yWKI3UWHpypNUoH7Ewoej7JXuDOflkrasQxw"
				},
			})
			if (res.ok) {
				var applications = await res.json();		
		dispatch({
			type: GET_RECENTACTIVITIES,
			payload: applications
		})
	}
	// }
	} catch (err) {
		console.log(err)
	}
		
    }
    
    export const getStudentName =() => async dispatch =>{
	
>>>>>>> 48cb99a2cb798fa960429cd254a6f4fed9a0c8d7
        try {
                  var res = await fetch("http://localhost:4000/user/", {
                        method: "GET",
                        headers: {
<<<<<<< HEAD
                            "Authorization": "Bearer " + localStorage.token
=======
                            "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGU3ODVlY2YzZTNhZDhhODAzYTEzOGIiLCJpYXQiOjE1NzU1NjMyNDYsImV4cCI6MTU3NTU3NDA0Nn0.BEPysR1yWKI3UWHpypNUoH7Ewoej7JXuDOflkrasQxw"
>>>>>>> 48cb99a2cb798fa960429cd254a6f4fed9a0c8d7
                        },
                    })
                    if (res.ok) {
                        var student = await res.json();
                        var students=student
            dispatch({
                type: GET_STUD_NAME,
                payload: students
            })        
        }
        } catch (err) {
            console.log(err)
        }   
<<<<<<< HEAD
        }



















=======
        }
>>>>>>> 48cb99a2cb798fa960429cd254a6f4fed9a0c8d7
