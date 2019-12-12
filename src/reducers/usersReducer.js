import {FETCH_USERS} from '../actions/types';

const initialState ={
	users:[],
	// loading:true
}

export default function(state = initialState, action ){
 const {type,payload} = action;
 

 switch(type){
	 case FETCH_USERS:
		 console.log("reducer")
		 return{
			 ...state,
			 users:payload,
			//  loading:false
		 }
	
		default:
			return state;	

 }
}