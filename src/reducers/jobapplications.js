import { GET_JA, JA_ERROR, JA_SUCCESS } from '../actions/types';

const initialState = {
	jobapplications: [],
	jobapplication: null,
	loading: true
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_JA:
			return {
				...state,
				jobapplications: [ ...payload ],
				loading: false
			};
		case JA_ERROR:
			return {
				...state
			};
		case JA_SUCCESS:
			return {
				...state
			};
		default:
			return state;
	}
}
