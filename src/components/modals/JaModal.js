import React, { useState } from 'react';
import { connect } from 'react-redux';
import { modifyJobApplication, getJobApplicationById } from '../../actions/jobapplications';
import ReactDOM from 'react-dom';

const JaModal = ({ isShowing, hide, auth, modifyJobApplication, jobapplicationId }) => {
	const [ formData, setFormData ] = useState({
		companyName: '',
		role: '',
		location: '',
		description: ''
	});

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const { companyName, role, location, description } = formData;

	const onSubmit = async (e) => {
		e.preventDefault();
		modifyJobApplication({
			jaId: `${jobapplicationId}`,
			formData
		});

		console.log(formData);
	};

	return isShowing
		? ReactDOM.createPortal(
				<React.Fragment>
					<div className="modal-overlay1" />
					<div className="modal-wrapper1" aria-modal aria-hidden tabIndex={-1} role="dialog">
						<div className="modal1">
							<div className="modal-header1">
								<button
									type="button"
									className="modal-close-button"
									data-dismiss="modal"
									aria-label="Close"
									onClick={hide}
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>

							<form classNameName="form" onSubmit={(e) => onSubmit(e)}>
								<div class="control">
									<h1 className="modalH1">Company Name</h1>
									<input
										class="input"
										name="companyName"
										value={companyName}
										onChange={(e) => onChange(e)}
										type="text"
										placeholder="Normal input"
									/>
								</div>

								<div class="control">
									<h1 className="modalH1">Role</h1>
									<input
										class="input"
										name="role"
										value={role}
										onChange={(e) => onChange(e)}
										type="text"
										placeholder="Normal input"
									/>
								</div>

								<div class="control">
									<h1 className="modalH1">Location</h1>
									<input
										class="input"
										name="location"
										value={location}
										onChange={(e) => onChange(e)}
										type="text"
										placeholder="Normal input"
									/>
								</div>

								<div class="control">
									<h1 className="modalH1">Description</h1>
									<input
										class="input"
										name="description"
										value={description}
										onChange={(e) => onChange(e)}
										type="text"
										placeholder="Normal input"
									/>
								</div>
								<button class="button is-primary bModal">Primary</button>
							</form>
						</div>
					</div>
				</React.Fragment>,
				document.body
			)
		: null;
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	jobapplicationId: state.jobapplications.jobapplicationId,
	companyName: state.jobapplications.jobapplication.companyName,
	role: state.jobapplications.jobapplication.role,
	location: state.jobapplications.jobapplication.location,
	description: state.jobapplications.jobapplication.description
});

export default connect(mapStateToProps, { modifyJobApplication })(JaModal);
