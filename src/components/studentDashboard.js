import React , {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import '../App.css'
import {getJobApplications, addJobApplication} from '../actions/jobapplications.js'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components'
import Modal from './modals/Modal'
import SideMenu from './SideMenu'
import useModal from './modals/useModal';


const StudentDashboard = () => {

    const {isShowing, toggle} = useModal();

	
	  return (
		<>
		<div className="App">
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />




	  <SideMenu/>
    </div>
		
		</>
	  );
	}
	

  StudentDashboard.propTypes={
    getJobApplications:PropTypes.func.isRequired,
    jobapplications: PropTypes.object.isRequired,
  }    
  
  const mapStateToProps = state => ({
    auth:state.auth,
    jobapplications:state.jobapplications
  })
  
  
  export default connect(mapStateToProps,{getJobApplications})(StudentDashboard);
