import React, { useEffect, useState } from 'react';
import '../App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box, Container, Columns, Column } from 'react-bulma-components';
import Modal from './modals/Modal';
import SideMenu from './SideMenu';
import useModal from './modals/useModal';
import JaDetails from './jaDetails';
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
					<SideMenu />
				</div>

				<div className="column is-three-fifths">
					<JaDetails />
				</div>
			</div>
		</div>
	);
};

export default StudentDashboard;
