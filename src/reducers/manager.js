import {GET_RECENTACTIVITIES, GET_STUD_NAME, GET_TOTALAPPLICATIONS, GET_WEEKAPPLICATIONS} from '../actions/types';
const initialState ={
    applications:[],
    studeName:[],
    appCount: null,
    weekApps: null,
    loading: true
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
        case GET_TOTALAPPLICATIONS: 
                return{
                    ...state,
                    appCount:payload,
                    loading:false
                };
        case GET_WEEKAPPLICATIONS: 
                return{
                    ...state,
                    weekApps:payload,
                    loading:false
                }
        default:
            return state;
 }
}


