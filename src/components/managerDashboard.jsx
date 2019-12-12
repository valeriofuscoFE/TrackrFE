import { connect } from 'react-redux';
import diagrampicture1 from '../styles/diagrampicture1.png'
import diagrampicture2 from '../styles/diagrampicture2.png'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import React from 'react';
import TopNavBarManager from './navbars/topNavBarManager';
import { Container } from 'react-bulma-components'
import { getRecentActivities, getStudentName, getTotalApplications, getTotalAppsInAWeek, getTotalStudents } from '../actions/manager'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  getActivitiesThunk: () => dispatch(getRecentActivities()),
  getStudNameThunk: (id) => dispatch(getStudentName(id)),
  getTotalApplicationsThunk: () => dispatch(getTotalApplications()),
  getTotalAppsInAWeekThunk: () => dispatch(getTotalAppsInAWeek()),
  getTotalStudentsThunk: () => dispatch(getTotalStudents()),
})

class ManagerDashboard extends React.Component {
  state = {}

  componentDidMount = async () => {
    await this.props.getActivitiesThunk();
    await this.props.getStudNameThunk();
    await this.props.getTotalApplicationsThunk();
    await this.props.getTotalAppsInAWeekThunk();
    await this.props.getTotalStudentsThunk();

  }

  getName = (id) => {
    var arr = this.props.manager.students
    if (arr !== undefined) {
      var student = []
      student = arr.find(a => a._id === id);
      console.log("student", student)
      return student !== undefined && student.name !== undefined
        ? student.name
        : "";
    }
   
  }

  onClickHandler = async () => {
    let resp = await fetch('http://localhost:4000/application/downloadPdf', {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.token
      },
    })

    const blob = await resp.blob()
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `export.pdf`);
    // 3. Append to html page
    document.body.appendChild(link);
    // 4. Force download
    link.click();
    // 5. Clean up and remove the link
    link.parentNode.removeChild(link);

    //https://medium.com/yellowcode/download-api-files-with-react-fetch-393e4dae0d9e
  }



  render() {
    return (
      <>
        <TopNavBarManager />

        <Container>
          <div className="columns  is-centered">
            {/* KPI */}
            <div className="column plusColumn is-8">

              <div className="columns" >
                <div className="column is-12">
                  <button className=" button is-pulled-left" id="buttonBlack" onClick={this.onClickHandler}>EXPORT</button>
                  TOTAL APPLICATIONS :
                  <b> {this.props.manager.appCount}</b>
                  <br></br>
                  TOTAL APPLICATIONS THIS WEEK :
                  <b>{this.props.manager.weekApps}</b>
                  <br></br>
                  <img
                    src={diagrampicture1}
                    width="40%"
                    class="diagrampicture"
                    alt="diagrampicture"
                  />
                </div>
              </div>

              <div className="columns" >
                <div className="column is-12">
                  STUDENTS LOOKING FOR JOB :
                  <b> {this.props.manager.totStudents}</b>
                  <br></br><br></br>
                  <img
                    src={diagrampicture2}
                    width="50%"
                    class="diagrampicture"
                    alt="diagrampicture"
                  />
                </div>
              </div>

            </div>

            {/* RECENT ACTIVITIES */}
            <div className="column topColumn is-3">RECENT ACTIVITIES
  {this.props.manager.applications && this.props.manager.applications.map((app) => (
              <div className="alert alert-primary" role="alert">
                <b>{this.getName(app.studentId)} -</b>  {app.status}  <b>- {app.companyName}</b>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManagerDashboard);

