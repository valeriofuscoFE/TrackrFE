import React from 'react';
import {useEffect, useState} from 'react';
import TopNavBarAdmin from '../components/navbars/topNavBarAdmin';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components'
import { getCurrentProfile } from '../actions/profile'
import { getSchools } from '../actions/schools'

import {connect} from 'react-redux';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  getSchoolsThunk: () =>dispatch(getSchools()),
});

class AdminDashboard extends React.Component {


render() { 

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
<div className = "row">
{/* THIRD ROW */}
{this.props.schools.schools && this.props.schools.schools.map((school) => {
         return (
           
<div class="columns  is-centered">
  <div class="column bottomColumn" id="bottomColumn1">
      <button class="logoButton" disabled><strong>S</strong></button>
    {school.name}<hr></hr><small>Manager:</small>
   
  </div>
  </div>

         )
})}
  </div>
  {/* <div class="column bottomColumn"id="bottomColumn2">
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
  </div> */}


</Container>

</>
  )
}

componentDidMount=async()=>{
  await this.props.getSchoolsThunk();

 }
}
   



export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);