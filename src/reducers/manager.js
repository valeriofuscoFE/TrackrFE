import {GET_RECENTACTIVITIES, GET_STUD_NAME,GET_APPLICATION_COUNT} from '../actions/types';
<<<<<<< HEAD
const initialState ={
    applications:[],
    studeName:[],
    loading:true
}
=======

const initialState ={
	applications:[],
	studeName:[],
	loading:true
}

>>>>>>> 48cb99a2cb798fa960429cd254a6f4fed9a0c8d7
export default function(state = initialState, action ){
 const {type,payload} = action; 
 switch(type){
       
<<<<<<< HEAD
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


=======
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
>>>>>>> 48cb99a2cb798fa960429cd254a6f4fed9a0c8d7
