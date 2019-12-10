import{GET_SCHOOLS} from '../actions/types'

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
		 }
		default:
			return state;

 }
}