import {FETCH_APPLICATIONS , NEW_APPLICATION} from '../actions/types'


const initialState = {
	items:[],
	item:{}
}

export default function(state = initialState, action){
  switch(action.type){
	  case FETCH_APPLICATIONS:
		  return {
			  ...state,
			  items:action.payload
		  }
	  default:
		  return state;

  }
}