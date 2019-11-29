import axios from 'axios';

import{
	GET_PROFILE
} from './types'


// GET THE USER PROFILE 
//@GET MY PROFILE FROM BE

export const getCurrentProfile =() => async dispatch =>{
try {
	const res = await axios.get('/my/api/myprofile/yo/rob/prepare/pancakes');

	dispatch({
		type:GET_PROFILE,
		payload:res.data
	})
} catch (err) {
	console.log(err)
}
}