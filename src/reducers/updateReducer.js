import {UPDATE_USERS, GET_STUDENT} from '../actions/types';

const initialState ={
	updateusers:[],
	student:[]
	// loading:true
}

export default function(state = initialState, action ){
 const {type,payload} = action;
 

 switch(type){
	 
			case UPDATE_USERS:
		 console.log("update user reducer")
		 return{
			 ...state,
			 updateusers:payload,
			//  loading:false
		 }
		 case GET_STUDENT:
		 console.log("get student reducer")
		 return{
			 ...state,
			 student:payload,
			//  loading:false
		 }

		default:
			return state;	

 }
}