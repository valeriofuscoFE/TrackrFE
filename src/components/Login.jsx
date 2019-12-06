import React, { Fragment, useState} from 'react';
import {Redirect} from 'react-router-dom'
import TopNavBar from './navbars/topNavBar'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../actions/auth'

const Login = ({login , isAuthenticated, user}) => {
	const [formData,setFormData] = useState({
		email:'',
		password:''
	})
const {email,password} = formData;

const onChange = e =>
setFormData({...formData,[e.target.name]: e.target.value});

const onSubmit = async e => {
	e.preventDefault();
	console.log(formData)
	login(email,password)
}

if (isAuthenticated) {
<<<<<<< HEAD
  // return <Redirect to='/admin' />;
  if (user.role =="Student") 
  return <Redirect to='/dashboard'/>
  if (user.role =="Manager") 
  return <Redirect to='/manager'/>
  if (user.role =="Admin") 
  return <Redirect to='/admin'/>
  
} 
// var role = user.user.role
console.log(user, "user")

return (
	<Fragment>
<TopNavBar/>
<form classNameName="form"  onSubmit={e => onSubmit(e)}> 
<div className="columns">
  <div className="column"></div>
  <div className="column"></div>
  <div className="column is-one-third registerColumn">
  <div className="field">
  <label className="label">REGISTER</label>
</div>


<div className="field">
  <label className="label"><small>EMAIL</small></label>
  <div className="control has-icons-left has-icons-right">
    <input name='email' className="input" type="text" placeholder="Email input" value={email} onChange={e => onChange(e)}/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div>

<div className="field">
  <label className="label"><small>PASSWORD</small></label>
  <div className="control has-icons-left has-icons-right">
    <input name='password' className="input" type="password" placeholder="PASSWORD" value={password} onChange={e => onChange(e)}/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div>



<div className="field is-grouped">
  <div className="control">
    <button className="button" id="buttonWhite">Submit</button>
  </div>
  <div className="control">
    <button className="button buttonDelete" id="buttonDelete">Cancel</button>
  </div>
</div>
  </div>
  <div className="column"></div>
</div>
</form>

</Fragment>

)

}


Login.propTypes={
	login: PropTypes.func.isRequired, //SAME ON REGISTER COMPONENT
	isAuthenticated: PropTypes.bool,
}


const mapStateToProps = state => ({  
  isAuthenticated:state.auth.isAuthenticated,
  user: state.auth.user

});

export default connect(
	mapStateToProps,
	{login}
	) (Login);