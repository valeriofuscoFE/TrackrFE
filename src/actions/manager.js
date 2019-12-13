import{
    GET_RECENTACTIVITIES,
    GET_STUD_NAME,
    GET_TOTALAPPLICATIONS,
    GET_WEEKAPPLICATIONS,
    GET_TOTAL_STUDENTS
} from './types'


export const getRecentActivities =() => async dispatch =>{
    
    try {
                var res = await fetch(process.env.REACT_APP_URL + "application", {
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
                  var res = await fetch(process.env.REACT_APP_URL + "user", {
            if(localStorage.token){
                setAuthToken(localStorage.token);
                }

                  var res = await fetch(process.env.REACT_APP_URL + "user/", {
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
                        var res = await fetch(process.env.REACT_APP_URL + "application/totApp", {
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
            } catch (err) {
                console.log(err)
            }   
            }

            export const getTotalAppsInAWeek =() => async dispatch =>{
	
                try {
                            var res = await fetch(process.env.REACT_APP_URL + "application/AppsWeek", {
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
                } catch (err) {
                    console.log(err)
                }                    
                }
    

                export const getTotalStudents =() => async dispatch =>{
	
                    try {
                                var res = await fetch(process.env.REACT_APP_URL + "user/student", {
                                method: "GET",
                                headers: {
                                    "Authorization": "Bearer " + localStorage.token
                                },
                            })
                            console.log(process.env.REACT_APP_URL)
                            if (res.ok) {
                                var totStudents = await res.json();
                                totStudents = totStudents.studentUsers		
                        dispatch({
                            type: GET_TOTAL_STUDENTS,
                            payload: totStudents
                        })
                    }
                    } catch (err) {
                        console.log(err)
                    }
                        
                    }














