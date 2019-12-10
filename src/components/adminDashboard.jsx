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
  constructor(props) {
    super(props);
    this.state = {
        defaultModal: false
    };
}
toggleModal = state => {
    this.setState({
        [state]: !this.state[state]
    });
};

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
<Button  block className="mb-3" type="button" onClick={() => this.toggleModal("defaultModal")}>
    Add School
  </Button>
  <Modal
                                            className="modal-dialog-centered"
                                            isOpen={this.state.defaultModal}
                                            toggle={() => this.toggleModal("defaultModal")}
                                        >
                                            <div className="modal-header">
                                                <h6 className="modal-title" id="modal-title-default">
                                                
                                                </h6>
                                                <Button
                                                    aria-label="Close"
                                                    className="close"
                                                    data-dismiss="modal"
                                                    type="button"
                                                    onClick={() => this.toggleModal("defaultModal")}
                                                >
                                                    <span aria-hidden={true}>×</span>
                                                </Button>
                                            </div>
                                            <div className="modal-body">
                                                <p>
                                                    Email:
                                                </p>
                                                <p>
                                                    Date of birth: 
                                                </p>
                                                <p>
                                                    Projects:
                                                   
                                                </p>
                                            </div>
                                            <div className="modal-footer">
                                                <Button color="primary" type="button">
                                                    Edit Student
                                                   </Button>
                                                <Button
                                                    className="ml-auto"
                                                    color="link"
                                                    data-dismiss="modal"
                                                    type="button"
                                                    onClick={() => this.toggleModal("defaultModal")}
                                                >
                                                    Close
                                                   </Button>
                                            </div>
                                        </Modal>
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
</div>*/}
​
​
</Container>
​
</>
  )
}

componentDidMount=async()=>{
  await this.props.getSchoolsThunk();

 }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);


