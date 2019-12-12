import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getJobApplications } from '../actions/jobapplications';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { ifStatement } from '@babel/types';

const SideMenu = ({ getJobApplications, auth, jobapplications }) => {
	useEffect(
		() => {
			if (auth.user) {
				getJobApplications(auth.user._id);
			}
		},
		[ auth.user ]
	);

	return (
		<aside className="menu">
			<p className="menu-label">YOUR JOB APPLICATIONS</p>
			<ul className="menu-list">
				{jobapplications.map((jobapplication) => (
					<li key={jobapplication._id}>
						<div>
							<a>{jobapplication.companyName}</a>
						</div>
					</li>
				))}
			</ul>
		</aside>
	);
};

SideMenu.propTypes = {
	getJobApplications: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	jobapplications: state.jobapplications.jobapplications
});

export default connect(mapStateToProps, { getJobApplications })(SideMenu);
