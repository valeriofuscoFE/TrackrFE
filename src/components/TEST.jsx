import React, { Component } from 'react';
import {fetchApplications} from '../actions/appActions'
import { connect } from 'react-redux';


class TEST extends Component {
	componentWillMount(){
		this.props.fetchApplications();
	}
	
	render() { 
		return ( <h1>TEST</h1> );
	}
}
 
export default connect(null,{fetchApplications})(TEST)