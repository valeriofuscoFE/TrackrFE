import {GET_RECENTACTIVITIES, GET_STUD_NAME,GET_APPLICATION_COUNT} from '../actions/types';

const initialState ={
	applications:[],
	studeName:[],
	loading:true
}

export default function(state = initialState, action ){
 const {type,payload} = action; 
 switch(type){
       
	 case GET_RECENTACTIVITIES:
	
		 return{
			 ...state,
			 applications:payload,
			 loading:false
		 };
	    case GET_STUD_NAME:	
				return{
					...state,
					students:payload,
					loading:false
				};
		case GET_APPLICATION_COUNT:	
				return{
					...state,
					AppCount:payload,
					loading:false
				}
		default:
			return state;

 }
}