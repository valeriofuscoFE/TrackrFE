import React, { useEffect, useState } from 'react';
import '../App.css';
import { loadUser } from '../actions/auth.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box, Container, Columns, Column } from 'react-bulma-components';
import Modal from './modals/Modal';
import SideMenu from './SideMenu';
import useModal from './modals/useModal';

const StudentDashboard = () => {
	const { isShowing, toggle } = useModal();

	return (
		<div className="App">
			<div className="columns">
				<div className="column">
					<button className="button is-primary cust" onClick={toggle}>
						+
					</button>
					<Modal isShowing={isShowing} hide={toggle} />
				</div>
			</div>
			<div className="columns">
				<div className="column">
					<SideMenu jobapplications={{}} />
				</div>

				<div className="column is-three-fifths">
					<h1>JOB APP INFOS</h1>
				</div>
			</div>
		</div>
	);
};

StudentDashboard.propTypes = {};

const mapStateToProps = (state) => ({
	user: state.user,
	jobapplications: state.jobapplications
});

export default connect(mapStateToProps, { loadUser })(StudentDashboard);
