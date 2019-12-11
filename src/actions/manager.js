import{
    GET_RECENTACTIVITIES,
    GET_STUD_NAME,
    GET_TOTALAPPLICATIONS,
    GET_WEEKAPPLICATIONS
} from './types'

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
    
        try {
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


        export const getTotalApplications =() => async dispatch =>{
	
            try {
                        var res = await fetch("http://localhost:4000/application/totApp", {
                        method: "GET",
                        headers: {
                            "Authorization": "Bearer " + localStorage.token
                        },
                    })
                    if (res.ok) {
                        var appCount = await res.json();
                        appCount = appCount.totApp		
                dispatch({
                    type: GET_TOTALAPPLICATIONS,
                    payload: appCount
                })
            }
            // }
            } catch (err) {
                console.log(err)
            }
                
            }

            export const getTotalAppsInAWeek =() => async dispatch =>{
	
                try {
                            var res = await fetch("http://localhost:4000/application/AppsWeek", {
                            method: "GET",
                            headers: {
                                "Authorization": "Bearer " + localStorage.token
                            },
                        })
                        if (res.ok) {
                            var weekApps = await res.json();
                            weekApps = weekApps.lastWeek		
                    dispatch({
                        type: GET_WEEKAPPLICATIONS,
                        payload: weekApps
                    })
                }
                // }
                } catch (err) {
                    console.log(err)
                }
                    
                }
    














