import React , {useState, useEffect, Component} from 'react';
import {fetchUsers} from '../actions/usersActions';
import {getRecentActivities} from '../actions/manager';
import {connect} from 'react-redux';
import TopNavBarManager from './navbars/topNavBarManager';
import Profilepicture from '../assets/profilepicture.jpg'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components'



const StudentsKPI = ({fetchUsers, usersReducer,getRecentActivities, applications}) => {

  useEffect(()=>{
 
    fetchUsers();
    getRecentActivities();
  },[])


// const getStudentItems =(id)=>{
//        var student = usersReducer.find(a => a._id === id);
//        console.log("student info", student)
//               return (student && [student.name, student.surname ,student.school]
//       )}
const getStudentName =(id)=>{
     
  var student = usersReducer.find(a => a._id === id);
         return (student && student.name
         )}

const getStudentSurname =(id)=>{
     
  var student = usersReducer.find(a => a._id === id);
         return (student && student.surname
         )}

const getStudentSchool =(id)=>{
     
  var student = usersReducer.find(a => a._id === id);
         return (student && student.school
         )}


const listOfKPI = applications.map(kpi=>(

  <div>
   <div  key={kpi._id} class="columns is-gapless is-centered" >
   <div  class="column is-2 topColumn">{getStudentName(kpi.studentId)}</div>
   <div  class="column is-2 topColumn">{getStudentSurname(kpi.studentId)}</div>
   <div  class="column is-2 topColumn">{getStudentSchool(kpi.studentId)}</div>
   <div  class="column is-2 topColumn">{kpi.companyName}</div>
   <div  class="column is-2 topColumn">{kpi.status}</div>
 </div>
 <hr></hr>
 </div>
))



  return (
  <>
    <TopNavBarManager/>

    <Container>
      {/* FIRST ROW */}
      <div class="columns  is-centered">
        <div class="column plusColumn is-4">STUDENTS KPI</div>
        <div class="column is-1">
          <button class=" button is-pulled-left" id="buttonBlack">
            EXPORT
          </button>
        </div>
      </div>
      <hr></hr>

      {/* SECOND ROW */}
      <div class="columns is-gapless  is-centered">
        <div class="column topColumn">Image</div>
        <div class="column topColumn">Student Name</div>
        <div class="column topColumn">Batch</div>
        <div class="column topColumn">Recent Application</div>
        <div class="column topColumn">Status</div>
      </div>
      <hr></hr>
      {/* COLUMNS OF STUDENT KPI */}
      <div class="columns is-gapless  is-centered">
        <div class="column ">{listOfKPI}</div>
      </div>
   
    </Container>
  </>
)};

const mapStateToProps = state => ({
  usersReducer: state.usersReducer.users,
  applications: state.manager.applications
});


export default connect(
	mapStateToProps ,
	{fetchUsers,getRecentActivities}
	) (StudentsKPI);