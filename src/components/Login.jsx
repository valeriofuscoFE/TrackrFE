import React, { Fragment,useState } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../../actions/auth'

const Login = ({login , isAuthenticated}) => {
	const [formData,setFormData] = useState({
		email:'',
		password:''
	})
	const {}
}

//FOR REGISTER COMPONENT 


/* const Register = ({register, isAuthenticated}) =>{
	const [formData,setFormData] = useState([
		ALL THE REGISTRATION INFO HERE 
		EXAMPLE : 

		name:'',
		email:'',
		password:''	
	])
	const {name,email,password} = formData;

	const onChange = e =>
	setFormData({...formData,[e.target.name]:e.target.value});
	const onSubmit = async e => {
		e.preventDefault()
		register({name,email,password});
	}

	return (
		HTML
	)
}  */





// YOU HAVE TO DO THE SAME THING ON REGISTER COMPONENT BUT CHANGE THE ACTION WITH register(name,email,password ecc...)
const {email,password} = formData;

const onChange = e =>
setFormData({...formData,[e.target.name]: e.target.value});

const onSubmit = async e => {
	e.preventDefault();
	login(email,password)  //EXAMPLES
}

//Redirect if logged in   SAME THING ON REGISTER COMPONENT
if(isAuthenticated){
	return <Redirect to="/student/dashboard" />
}  //TO DO THIS ACTION U NEED TO SET UP REACT ROUTER ! WITH ALL THE ROUTES 





// FRAGMENT IS  <>  </>
return (
	<Fragment>  
     
	</Fragment>
)

Login.propTypes={
	login: PropTypes.func.isRequired, //SAME ON REGISTER COMPONENT
	isAuthenticated: PropTypes.bool,
}

/* Register.propTypes = {
	register: PropTypes.func.isRequired,
	isAuthenticated:PropTypes.bool
} */

const mapStateToProps = state => ({    // ADD THIS ON REGISTER COMPONENT 
	isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(Login);