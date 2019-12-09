import{
	GET_SCHOOLS
} from './types'

export const getSchools =() => async dispatch =>{
	try {
		var token = localStorage.getItem("accessToken");
		console.log(token)
		if (token) {
		// var username = this.props.match.params.username;
			var res = await fetch("http://localhost:4000/school" , {
				method: "GET",
				headers: {
					"Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGUxMWQ3NGU4YThjZDZhMjQ3YzMwNzkiLCJpYXQiOjE1NzUyNzU3NTAsImV4cCI6MTU3NTI4NjU1MH0.mX1Quoidqr_kNQ3Aw3CbZyaMwYW2pTRuiD7gfuy_hz8"
				},
			})
			if (res.ok) {
				var schools = await res.json();
		
		dispatch({
			type: GET_SCHOOLS,
			payload: schools
		})
	}
	}
	} catch (err) {
		console.log(err)
	}
		
	}