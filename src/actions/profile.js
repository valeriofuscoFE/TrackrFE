import axios from 'axios';

import{
	GET_PROFILE
} from './actions/types'


// GET THE USER PROFILE 
//@GET MY PROFILE FROM BE

export const getCurrentProfile =() => async dispatch =>{
try {
	const res = await axios.get('http://localhost:4000/user');

	dispatch({
		type:GET_PROFILE,
		payload:res.data
	})
} catch (err) {
	console.log(err)
}
}