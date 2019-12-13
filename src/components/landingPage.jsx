import React , {useState} from 'react';
import TopNavBar from './navbars/topNavBar'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/auth';
import PropTypes from 'prop-types';
import { Box,Container, Columns,Column} from 'react-bulma-components'



const LandingPage = ({register,isRegistered}) => {
	const [formData, setFormData] = useState({
		name: '',
    surname:'',
    username:'',
		email: '',
		password: '',
		role:'',
		schoolName:'',
		gitURL:''
	  });

	  const onChange = e =>
	  setFormData({ ...formData, [e.target.name]: e.target.value });


	  const onSubmit = async e => {
		e.preventDefault();
		register({ name ,surname,username, email,password,role,schoolName, gitURL, username: email  });

       console.log(formData)
	  }
	
	  const { name ,surname, username, email,password,role, schoolName,gitURL   } = formData;
	  
	



	return(
<Container>
<TopNavBar/>
<form className="form"  onSubmit={e => onSubmit(e)}> 
<div className="columns">
  <div className="column"></div>
  <div className="column"></div>
  <div className="column is-one-third registerColumn">
  <div className="field">
  <label className="label">REGISTER</label>
</div>

<div className="field">
  <label className="label"><small>NAME</small></label>
  <div className="control">
    <input name='name' value={name} className="input" type="text" placeholder="name" onChange={e => onChange(e)}/>
  </div>
  
</div>

<div className="field">
  <label className="label"><small>SURNAME</small></label>
  <div className="control">
    <input name='surname' className="input" type="text" placeholder="surname" value={surname} onChange={e => onChange(e)}/>
  </div>
 
</div>


{/* <div className="field">
  <label className="label"><small>USERNAME</small></label>
  <div className="control">
    <input name='username' className="input" type="text" placeholder="username" value={surname} onChange={e => onChange(e)}/>
  </div>
 
</div> */}


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

<div className="field">
  <label className="label"><small>ROLE</small></label>
  <div className="control">
    <div className="select">
      <select name="role" value={role} onChange={e => onChange(e)}   id="roleOption" >
        <option>School Manager</option>
        <option>Student</option>
        <option>Admin</option>
      </select>
    </div>
  </div>
</div>

<div className="field">
  <label className="label"><small>SCHOOL NAME</small></label>
  <div className="control">
    <input name='schoolName' className="input" type="text" placeholder="school name" value={schoolName} onChange={e => onChange(e)}/>
  </div>
 
</div>

<div className="field">
  <label className="label"><small>githubURL</small></label>
  <div className="control">
    <input name='gitURL' className="input" type="text" placeholder="url" value={gitURL}  onChange={e => onChange(e)}/>
  </div>
  
</div>


{/* <div className="field">
  <div className="control">
    <label className="checkbox">
      <input type="checkbox"/>
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div> */}

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
</Container>

  )
 
}


LandingPage.propTypes = {
	register: PropTypes.func.isRequired,
	isRegistered: PropTypes.bool
  };

  const mapStateToProps = state => ({
	isRegistered: state.auth.isAuthenticated
  });

  export default connect(
	mapStateToProps,
	{ register }
  )(LandingPage);
