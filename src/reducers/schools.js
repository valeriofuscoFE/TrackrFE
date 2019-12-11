import{GET_SCHOOLS,ADD_SCHOOL,DELETE_SCHOOL,UPDATE_SCHOOL,GET_SCHOOL_BYID} from '../actions/types'

const initialState ={
	schools:[],
	loading:true
}

export default function(state = initialState, action ){
 const {type,payload} = action;
 

 switch(type){
	 case GET_SCHOOLS:
		 return{
			 ...state,
			 schools:payload,
			 loading:false
		 };		 
	 case GET_SCHOOL_BYID:
		return{
			...state.schools,
			schools:payload,
			loading:false
		};
	  case ADD_SCHOOL:
			return{
				...state,
				schools:payload,
				loading:false
			}
			;
	   case DELETE_SCHOOL:
				  return{
					  ...state.schools,
					  schools:payload,
					  loading:false
				  };
	   case UPDATE_SCHOOL:
					return{
						...state.schools,
						schools:payload,
						loading:false
					}
		default:
			return state;

 }
}