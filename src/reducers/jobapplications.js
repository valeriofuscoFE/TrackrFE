import {GET_PROFILE} from '../actions/types';

const initialState ={
	profile:null,
	loading:true
}

export default function(state = initialState, action ){
 const {type,payload} = action;
 

 switch(type){
	 case GET_PROFILE:
		 return{
			 ...state,
			 profile:payload,
			 loading:false
		 }
		default:
			return state;

 }
}