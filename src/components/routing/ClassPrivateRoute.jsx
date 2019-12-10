import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import studentDashboard from "components/studentDashboard";
import ManagerDashboard from "components/managerDashboard";


const mapStateToProps = state => ({
	auth: state.auth,
  });


class ClassPrivateRoute extends React.Component {

	state = {
		loading: true
	}
	render(){
		console.log("aaa", this.props.auth)
  return (
    <>
		
		{this.props.auth.isAuthenticated == false &&
		   <Redirect to="/Login" /> 
		}
		{this.props.auth.isAuthenticated == true && (
			<>
		   { this.props.auth.user.role === "Student" && <h1>STUDENT</h1> }
		   { this.props.auth.user.role === "Manager" && <h1>MANAGER</h1> }
		   </>
		//   <Redirect to={user.role == 'Student' ? '/dashboard' : '/manager'} />
        )}
		{this.state.loading && <h1>loading</h1>}
		</>
  )}

componentDidMount = () => {
	console.log(this.props.auth)
	this.setState({
		loading: false
	})
}


}

 
export default connect(mapStateToProps)(ClassPrivateRoute);