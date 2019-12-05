import React from 'react';
import {useEffect, useState} from 'react';
import TopNavBarAdmin from '../components/navbars/topNavBarAdmin';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components'
import { getCurrentProfile } from '../actions/profile'
import { getSchools } from '../actions/schools'
import PropTypes from 'prop-types';
import store from '../store'
import {loadUser} from '../actions/auth'
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

const AdminDashboard = () => {
// const [profile, setProfile] = useState(null)

  useEffect(()=>{
    console.log("useEffect is running")
    store.dispatch(getCurrentProfile());
    store.dispatch(loadUser());
    // setProfile(profile)
    // getSchools();
  },[]);

  return(
<>
<TopNavBarAdmin/>

<Container>

{/* FIRST ROW */}
 <div class="columns  is-centered">

  <div class="column topColumn">
    School List
  </div>
</div>
{/* SECOND ROW */}
<div class="columns  is-centered">
  <div class="column plusColumn is-4">
    Add School
  </div>
</div>

{/* THIRD ROW */}
<div class="columns  is-centered">
  <div class="column bottomColumn" id="bottomColumn1">
      <button class="logoButton" disabled><strong>S</strong></button>
    School 1<hr></hr><small>Manager:</small>
   
  </div>
  <div class="column bottomColumn"id="bottomColumn2">
  <button class="logoButton" disabled><strong>S</strong></button>
  School 2<hr></hr><small>Manager:</small>
  </div>
  <div class="column bottomColumn"id="bottomColumn3">
  <button class="logoButton" disabled><strong>S</strong></button>
  School 3<hr></hr><small>Manager:</small>
  </div>
  <div class="column bottomColumn"id="bottomColumn4">
  <button class="logoButton" disabled><strong>S</strong></button>
  School 4<hr></hr><small>Manager:</small>
  </div>
  <div class="column bottomColumn"id="bottomColumn5">
  <button class="logoButton" disabled><strong>S</strong></button>
  School 5<hr></hr><small>Manager:</small>
  </div>
</div>

</Container>
</>
  )
}
AdminDashboard.propTypes={
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}     




  export default connect(mapStateToProps,{getCurrentProfile})(AdminDashboard);