import{
    GET_RECENTACTIVITIES,
    GET_STUD_NAME
} from './types'
import setAuthToken from '../utils/setAuthToken'

export const getRecentActivities =() => async dispatch =>{
	
	try {
        		var res = await fetch("http://localhost:4000/application", {
				method: "GET",
				headers: {
                    "Authorization": "Bearer " 
                    + 
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGVmNzUxMjRlZTY3ZDE4YjhmMDBhMzIiLCJpYXQiOjE1NzU5NzQxODcsImV4cCI6MTU3Njk3NDk4N30.tpJSFIwV-y9-q2iLibvdFUP7FxKUYJ_emd0ybpo_waM"
                    // localStorage.token
                    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGVlNTQwYmZmMzU3NTJlMDA5YzJmOTciLCJpYXQiOjE1NzU5MDAyMTYsImV4cCI6MTU3NTkxMTAxNn0.rNhBrlvXFICwizub4tbQhOoc7Dt5lJ11i62gOPaVbcc"
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
    
        try {
            if(localStorage.token){
                setAuthToken(localStorage.token);
                }

                  var res = await fetch("http://localhost:4000/user/", {
                        method: "GET",
                        headers: {
                            "Authorization": "Bearer " + localStorage.token
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
        }


















