import React from 'react';
import {Modal, Button} from "reactstrap";
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
  <button class="column plusColumn is-4">
    Add School
  </button>
  
</div>
{/* <div className = "row"> */}
<div class="columns  is-centered">
{/* THIRD ROW */}
{this.props.schools.schools && this.props.schools.schools.map((school) => {
         return (
           

  <div class="column bottomColumn" id="bottomColumn1">
<button class="logoButton" disabled><strong>{school.name.substring(0, 1)}</strong></button>
         {school.name}<hr></hr><small>Email: {school.email}</small><br></br><small>Address: {school.address}</small>
   
  </div>


         )
})}
  </div>
  

</Container>

</>
  )
}

componentDidMount=async()=>{
  await this.props.getSchoolsThunk();

 }
}
   



export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);