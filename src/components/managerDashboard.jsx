import { connect } from 'react-redux';
import store from 'store'
import diagrampicture1 from '../styles/diagrampicture1.png'
import diagrampicture2 from '../styles/diagrampicture2.png'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import React from 'react';
import TopNavBarManager from './navbars/topNavBarManager';
import { Container} from 'react-bulma-components'
import { Alert } from 'react-bootstrap';
import { getRecentActivities,getStudentName, getTotalApplications } from '../actions/manager'
const mapStateToProps = state =>state

const mapDispatchToProps = dispatch => ({
  getActicitiesThunk :()=>dispatch(getRecentActivities()),
  getStudNameThunk:(id)=>dispatch(getStudentName(id)),
  getTotalApplicationsThunk :()=>dispatch(getTotalApplications()),
});

class ManagerDashboard  extends React.Component {
  state = { 
    week:0,
    students:[]
   }

   componentDidMount=async()=>{
    await this.props.getActicitiesThunk();
    await this.props.getStudNameThunk();      
    await this.props.getTotalApplicationsThunk();
    this.getTotalApplsInAWeek();
    this.getTotalStudents()
   }

    getName=(id)=>{
      var arr = this.props.manager.students        
       if(arr !==undefined)
       {
         var student=[]
           student = arr.find(a => a._id === id);
           console.log("student", student)
                  return student !== undefined && student.name !== undefined
                    ? student.name 
                    : "";
      } 
     }

    //  getTotalApplictaions=()=>{
    //    var arrApps=this.props.applications.applications       
    //    return arrApps.length
    //  }


     getTotalStudents=()=>{
      var arrStudents=this.props.manager.students
      
      this.setState({
        students:arrStudents
      })
    }

     getTotalApplsInAWeek=()=>{
      let curr = new Date() 
      let week = []
      
      for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i 
        let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
        week.push(day)
      }
      var finalArr=[]
      var arrApps=this.props.manager.applications

      var Newapplications = arrApps.filter(function(application) {
        return application.status =="applied";
      });
     
      Newapplications.forEach((e1)=>week.forEach((e2)=>{
        if(e1.createdAt.substr(0,10)==e2)
        {
          finalArr.push(e1)
        }
      }))
       this.setState({
        week:finalArr.length
      }       
      )
     }


  render() { 
    return ( 
      <>
 <TopNavBarManager />

<Container>
<div className="columns  is-centered">
  {/* KPI */}
  <div className="column plusColumn is-8">
​
    <div className="columns" >
      <div className="column is-12">
          <button className=" button is-pulled-left" id="buttonBlack">EXPORT</button>
          TOTAL APPLICATIONS :
         <b> {this.props.manager.appCount}</b>
          <br></br>
         TOTAL APPLICATIONS THIS WEEK :
    <b>{this.state.week}</b>
     <br></br>   
    <img
        src={diagrampicture1}
        width="40%"
        class="diagrampicture"
        alt="diagrampicture"
      />
      </div>
    </div>
​
    <div className="columns" >
      <div className="column is-12">
          <button className=" button is-pulled-left" id="buttonBlack">EXPORT</button>
          STUDENTS LOOKING FOR JOB :         
    <b> {this.state.students.length}</b>
    <br></br><br></br>
      <img
        src={diagrampicture2}
        width="50%"
        class="diagrampicture"
        alt="diagrampicture"
      />
      </div>
    </div>
​
  </div>
​
  {/* RECENT ACTIVITIES */}
  <div className="column topColumn is-3">RECENT ACTIVITIES
  { this.props.manager.applications && this.props.manager.applications.map((app) => (
      <div className="alert alert-primary" role="alert">
     <b>{this.getName(app.studentId)}</b>  {app.status}  <b>- {app.companyName}</b>
     </div>
    )
    )}
    </div>
</div>
</Container>
      </>
     );
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(ManagerDashboard);

