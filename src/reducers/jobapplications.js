import { GET_JA, JA_ERROR, JA_SUCCESS, LOAD_ID, GET_JA_BY_ID } from '../actions/types';

const initialState = {
	jobapplications: [],
	jobapplicationId: null,
	jobapplication: {},
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
		case GET_JA_BY_ID:
			return {
				...state,
				jobapplication: { ...payload },
				loading: false
			};
		case LOAD_ID:
			return {
				...state,
				jobapplicationId: payload,
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
