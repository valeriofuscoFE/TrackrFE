import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getJobApplicationById, deleteJobApplication } from '../actions/jobapplications';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import useModal from './modals/useModal';
import JaModal from './modals/JaModal';

const JaDetails = ({ getJobApplicationById, jobapplicationId, jobapplication, deleteJobApplication }) => {
	const { isShowing, toggle } = useModal();

	useEffect(
		() => {
			if (jobapplicationId) {
				getJobApplicationById(jobapplicationId);
			}
		},
		[ jobapplicationId ]
	);
	return (
		<Fragment>
			<div className="container">
				<div class="card">
					{Object.entries(jobapplication).length > 0 && (
						<Fragment>
							<div class="card-content">
								<p class="title">{jobapplication.companyName}</p>
								<p class="subtitle">{jobapplication.role}</p>
								<p>{jobapplication.location}</p>
								<p>{jobapplication.description}</p>
							</div>
							<footer class="card-footer">
								<p class="card-footer-item">
									<span>
										<button className="button is-primary cust" onClick={toggle}>
											Modify
										</button>
										<JaModal isShowing={isShowing} hide={toggle} />
									</span>
								</p>
								<p class="card-footer-item">
								<button className="button is-primary cust" onClick={deleteJobApplication(jobapplicationId)}>
											Delete
										</button>
								</p>
							</footer>
						</Fragment>
					)}
				</div>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	jobapplicationId: state.jobapplications.jobapplicationId,
	jobapplication: state.jobapplications.jobapplication
});

export default connect(mapStateToProps, { getJobApplicationById, deleteJobApplication })(JaDetails);
