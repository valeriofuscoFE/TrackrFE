import {FETCH_APPLICATIONS , NEW_APPLICATION} from './types';

export const fetchApplications = () => dispatch =>{
		fetch('OURURL')
		.then(res=> res.json())
		.then(applications =>dispatch({
			type:FETCH_APPLICATIONS,
			payload:applications
		})
		
		)
	}



