import axios from 'axios';
import { GET_JA, JA_ERROR, JA_SUCCESS } from './types';

export const getJobApplications = (studentId) => async (dispatch) => {
	console.log(studentId)
	try {
		const res = await axios.get(`http://localhost:4000/application?studentId=${studentId}`);

		dispatch({
			type: GET_JA,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: JA_ERROR,
			payload: 'err'
		});
	}
};

export const addJobApplication = ({ companyName, role, location, description ,studentId  }) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({ companyName, role, location, description ,studentId });

	try {
		const res = await axios.post('http://localhost:4000/application', body, config);
		dispatch({
			type: JA_SUCCESS,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: JA_ERROR
		});
	}
};
