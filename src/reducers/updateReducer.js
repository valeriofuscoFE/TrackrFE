import {UPDATE_USERS} from '../actions/types';

const initialState ={
	updateusers:[],
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

		default:
			return state;	

 }
}