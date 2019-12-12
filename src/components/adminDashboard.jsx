import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import TopNavBarAdmin from '../components/navbars/topNavBarAdmin';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box, Container, Columns, Column } from 'react-bulma-components'
import { getSchools, addSchool, deleteSchool, updateSchool, getSchoolbyId } from '../actions/schools'

import { connect } from 'react-redux';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  getSchoolsThunk: () => dispatch(getSchools()),
  addSchoolThunk: state => dispatch(addSchool(state)),
  deleteSchoolThunk: id => dispatch(deleteSchool(id)),
  updateSchoolThunk: (state, id) => dispatch(updateSchool(state, id)),
  getSchoolByIdThunk: (id) => dispatch(getSchoolbyId(id))
});

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      school: {
        name: '',
        email: '',
        address: ''
      }
    };
  }

  handleInput = async input => {
    var newSchool = this.state.school; //we are taking one object here        
    var currentId = input.currentTarget.id; //this is when we type smthng in textbox or any input        
    if (currentId === "name") {
      newSchool[currentId] = (input.currentTarget.value);
    }
    else if (currentId === "email") {
      newSchool[currentId] = input.currentTarget.value;
    }
    else {
      newSchool[currentId] = input.currentTarget.value;
    }
    this.setState({ school: newSchool });
  }

  fetchSchoolForUpdate = async e => {
    var schoolId = e.currentTarget.value;
    await this.props.getSchoolByIdThunk(schoolId);
    this.setState({ showModal: true })
  }


  componentDidMount = async () => {
    await this.props.getSchoolsThunk();
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  updateSchool = async e => {
    var schoolId = e.currentTarget.value;
    await this.props.updateSchoolThunk(this.state.school, schoolId)
    await this.props.getSchoolsThunk()
  }

  deleteSchool = async e => {
    var schoolId = e.currentTarget.value;
    await this.props.deleteSchoolThunk(schoolId)
    await this.props.getSchoolsThunk()
  }

  render() {
    return (
      <>
        <TopNavBarAdmin />
        <Container>

          <div className="columns  is-centered">
            <div className="column topColumn">
              School List
  </div>
          </div>
          <div className="columns  is-centered"  >
            <Button className="column plusColumn is-4 mt-4" onClick={() => this.setState({ showModal: true })}  >
              Add School
  </Button>
          </div>
          <div className="row">
            {this.props.schools.schools.length >= 0 && this.props.schools.schools.map((school, y) => (
              <div className="col-md-3" key={y}>
                <div className="column bottomColumn" id="bottomColumn1">
                  <button className="logoButton" value={school._id} onClick={this.fetchSchoolForUpdate} >
                    <strong>{school.name.substring(0, 1)}</strong></button>
                  <b>{school.name}</b><button style={{ float: "right" }} value={school._id} onClick={this.deleteSchool} >x</button><hr></hr>
                  <small>{school.address}</small><br></br>
                  <small>{school.email}</small>
                </div>
              </div>
            ))
            }
          </div>
          <div>
          </div>
        </Container>
        <Modal show={this.state.showModal} onHide={this.toggleModal}>
          <Modal.Header style={{ backgroundColor: "#2867B2" }} closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="school name"
                aria-label="schoolName"
                onChange={this.handleInput}
                id="name"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Email"
                aria-label="email"
                onChange={this.handleInput}
                id="email"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Address"
                as="textarea" style={{ height: "100px" }}
                aria-label="address"
                onChange={this.handleInput}
                id="address"
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.toggleModal()}>
              Close
                     </Button>
            <Button variant="primary" style={{ backgroundColor: "#2867B2" }}
              onClick={() => { this.toggleModal(); this.props.addSchoolThunk(this.state.school); this.props.getSchoolsThunk() }}>
              Add
                   </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);


