 import axios from 'axios';



//Set the header for our token  auth-token is an example but you can change it with the header that you have on our server  

 const setAuthToken = token => {
	 if(token){
		 axios.defaults.headers.common['auth-token'] = token;
	 } else {
		 delete axios.defaults.headers.common['auth-token']; 
	 }
 }

 export default setAuthToken;