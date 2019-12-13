import {ERR_MSG} from '../actions/types';

const initialState = {
	message: null,
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case ERR_MSG:
        return {
          ...state,
            message: state.message
      
        }
        default:
          return state;
    }
}