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
      show: false,
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
    else {
      if (this.state.show === true) {
        newSchool.name = document.getElementById("name").value
      }
    }
    if (currentId === "email") {
      newSchool[currentId] = input.currentTarget.value;
    }
    else {
      if (this.state.show === true) {
        newSchool.email = document.getElementById("email").value
      }
    }
    if (currentId === "address") {
      newSchool[currentId] = input.currentTarget.value;
    }
    else {
      if (this.state.show === true) {
        newSchool.address = document.getElementById("address").value
      }
    }
    this.setState({ school: newSchool });
    console.log(this.state.school, "fn")
  }

  fetchSchoolForUpdate = async e => {
    var schoolId = e.currentTarget.value;
    await this.props.getSchoolByIdThunk(schoolId);
    this.setState({ showModal: true, show: true })
  }


  componentDidMount = async () => {
    await this.props.getSchoolsThunk();
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

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
        {this.state.show === true ? (
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
                  defaultValue={this.props.schools.schools.name}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Email"
                  aria-label="email"
                  onChange={this.handleInput}
                  id="email"
                  defaultValue={this.props.schools.schools.email}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Address"
                  as="textarea" style={{ height: "100px" }}
                  aria-label="address"
                  onChange={this.handleInput}
                  id="address"
                  defaultValue={this.props.schools.schools.address}
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.toggleModal()}>
                Close
                     </Button>
              <Button variant="primary" style={{ backgroundColor: "#2867B2" }}
                onClick={() => { this.toggleModal(); this.props.updateSchoolThunk(this.state.school, this.props.schools.schools._id); this.props.getSchoolsThunk() }}>
                Update
                   </Button>
            </Modal.Footer>
          </Modal>) : <Modal show={this.state.showModal} onHide={this.toggleModal}>
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
          </Modal>}

      </>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);


