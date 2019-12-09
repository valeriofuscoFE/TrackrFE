import {GET_JA , JA_ERROR} from '../actions/types';

const initialState ={
	jobapplications:[],
	loading:true
}

export default function(state = initialState, action ){
 const {type,payload} = action;
 
 switch(type){
	 case GET_JA:
		console.log('########',payload)
		 return{
			 ...state,
			 jobapplications: [...payload],
			 loading:false
		 }
		 case JA_ERROR :
			 return {
				 ...state
			 }
		default:
			return state;

 }
}