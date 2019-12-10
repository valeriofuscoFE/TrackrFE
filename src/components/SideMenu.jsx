import React, { useEffect } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import {getJobApplications} from '../actions/jobapplications'

import 'react-bulma-components/dist/react-bulma-components.min.css';

const SideMenu = () => {
	const dispatch = useDispatch();
	useEffect(() => {
	  dispatch(getJobApplications());
	}, [])
	
	const jobApplicationsArray = useSelector((state) => state.jobapplications);
	
	return (
		<aside className="menu">
			<p className="menu-label">YOUR JOB APPLICATIONS</p>
			<ul className="menu-list">
				<li>
					{jobApplicationsArray.jobapplications.map(jobApp => 
						<div>
							<a>{jobApp.companyName}</a>
						</div>
					)}
				</li>
				<li>
					<a>Facebook</a>
				</li>
			</ul>
		</aside>
	);
};




export default SideMenu;
