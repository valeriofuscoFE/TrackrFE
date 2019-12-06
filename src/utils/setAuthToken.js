import axios from 'axios';




const setAuthToken = token => {
	if(token){
		console.log("in token")
		axios.defaults.headers.common['Authorization'] = 'Bearer '+token;	
	} else {
		delete axios.defaults.headers.common['Authotization']; 
	}
}

export default setAuthToken;