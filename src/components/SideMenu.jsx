import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getJobApplications, loadId } from '../actions/jobapplications';
import 'react-bulma-components/dist/react-bulma-components.min.css';

const SideMenu = ({ getJobApplications, auth, jobapplications, loadId }) => {
	useEffect(
		() => {
			if (auth.user) {
				getJobApplications(auth.user._id);
			}
		},
		[ auth.user ]
	);

	const onClick = (id) => {
		loadId(id);
	};

	return (
		<aside className="menu">
			<p className="menu-label">YOUR JOB APPLICATIONS</p>
			<ul className="menu-list">
				{jobapplications.map((jobapplication) => (
					<li key={jobapplication._id}>
						<div>
							<a onClick={(id) => onClick(jobapplication._id)}>{jobapplication.companyName}</a>
						</div>
					</li>
				))}
			</ul>
		</aside>
	);
};

SideMenu.propTypes = {
	getJobApplications: PropTypes.func.isRequired,
	loadId: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	jobapplications: state.jobapplications.jobapplications
});

export default connect(mapStateToProps, { getJobApplications, loadId })(SideMenu);
