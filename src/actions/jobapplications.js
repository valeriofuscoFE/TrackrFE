import axios from 'axios'
import {
	GET_JA,
	JA_ERROR
} from './types';



  export const getJobApplications = () => async dispatch => {
	try {
	  const res = await axios.get('http://localhost:4000/application?studentId=5de63815f242030f60e0e5b2');
	  console.log(res.data)
  
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


  