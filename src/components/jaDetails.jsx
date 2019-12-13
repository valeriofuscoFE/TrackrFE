import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getJobApplicationById } from '../actions/jobapplications';
import 'react-bulma-components/dist/react-bulma-components.min.css';

const JaDetails = ({ getJobApplicationById, jobapplicationId, jobapplication }) => {
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
										<a href="https://twitter.com/codinghorror/status/506010907021828096">Modify</a>
									</span>
								</p>
								<p class="card-footer-item">
									<span>DELETE</span>
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

export default connect(mapStateToProps, { getJobApplicationById })(JaDetails);
