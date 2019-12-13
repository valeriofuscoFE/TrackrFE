import axios from 'axios';
import { GET_JA, JA_ERROR, JA_SUCCESS, LOAD_ID, GET_JA_BY_ID, UPDATE_JA, DELETE_JA } from './types';

export const getJobApplications = (studentId) => async (dispatch) => {
	console.log(studentId);
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

export const getJobApplicationById = (jaId) => async (dispatch) => {
	console.log(jaId);
	try {
		const res = await axios.get(`http://localhost:4000/application/${jaId}`);
		dispatch({
			type: GET_JA_BY_ID,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: JA_ERROR,
			payload: 'err'
		});
	}
};

export const loadId = (jaId) => async (dispatch) => {
	console.log(jaId);
	dispatch({
		type: LOAD_ID,
		payload: jaId
	});
};

export const addJobApplication = ({ companyName, role, location, description, studentId }) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({ companyName, role, location, description, studentId });

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

export const modifyJobApplication = ({ jaId, formData }) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		const res = await axios.put(`http://localhost:4000/application/${jaId}`, formData, config);

		dispatch({
			type: UPDATE_JA,
			payload: res.data
		});
	} catch (err) {
		console.log(err);
	}
};

export const deleteJobApplication = ( jaId ) => async (dispatch) => {
	try {
	
			await axios.delete(`http://localhost:4000/application/${jaId}`)

			dispatch({
				type: DELETE_JA,
				payload: jaId
			});
		// window.reload("/dashboard")
		} catch (err) {
		console.log(err);
	}
};