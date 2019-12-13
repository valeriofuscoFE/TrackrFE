import React, { Component } from "react";
import TopNavBarManager from '../navbars/topNavBarManager';
import Profilepicture from '../../assets/profilepicture.jpg';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components';
import { Button, Modal, FormControl, InputGroup, Form} from 'react-bootstrap';
import {updateUsers, getStudentbyId} from '../../actions/updateActions';
import {fetchUsers} from '../../actions/usersActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { updateSchool } from './../../actions/schools';


class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name:"",
      // surname:"",
      // email:"",
      school:"",
      batch:"",
      showModal: false,
      
    };
  } 


  componentDidMount = async () => {
    await this.props.fetchUsersThunk();
  }

  getStudentToUpdate = async e => {
    var studentId = e.target.value;
    await this.props.getStudentbyIdThunk(studentId);
    this.setState({showModal:true})
   
  }


  
  onValueChanged = (e) => {

    this.setState({ [e.target.name]: e.target.value });
    console.log("value changed, state:", this.state);
  };


  submitHandler = async (e) =>{
    e.preventDefault();
  console.log("student updated",this.props.updateReducer.student)
  await this.props.fetchUsersThunk();
}

    render() {
    return (
      <>
        <TopNavBarManager />
        <Container>
          {/* MAPPING USERS FOR POTENTIAL BATCH MEMBERS */}
          {this.props.usersReducer.users &&
            this.props.usersReducer.users.map(student => (
              <div>
                <div key={student._id} class="columns is-gapless is-centered">
                  <div class="column is-2 topColumn">{student.name}</div>
                  <div class="column is-2 topColumn">{student.surname}</div>
                  <div class="column is-3 topColumn">{student.email}</div>
                  <div class="column is-3 topColumn">{student.school}</div>
                  <div class="column is-3 topColumn">{student.batch}</div>
                  <button
                    class="button"
                    id="buttonBlack"
                    value={student._id}
                    onClick={this.getStudentToUpdate}
                  >
                   +
                  </button>
                </div>
                <hr></hr>
              </div>
            ))}
          {/* MODAL TO ADD STUDENT/EDIT TO BATCH */}
        </Container>

        <Modal
          show={this.state.showModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <div class="column">
              <img
                src={Profilepicture}
                class="profilepicture"
                alt="profilepicture"
                width="50px"
              />
            </div>
            <Modal.Title id="contained-modal-title-vcenter">
              Add student to batch
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={() => {
                this.submitHandler();
                this.props.updateUsersThunk(
                  this.state,
                  this.props.updateReducer.student._id
                );
              }}
            >
              <Form.Group>
                <Form.Label>{this.props.updateReducer.student.name}</Form.Label>
                <InputGroup>
                </InputGroup>
              </Form.Group>

              <Form.Group>
                <Form.Label>{this.props.updateReducer.student.surname}</Form.Label>
              </Form.Group>

              <Form.Group>
                <Form.Label>{this.props.updateReducer.student.email}</Form.Label>
              </Form.Group>

              <Form.Group>
                <Form.Label>School</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="school"
                    placeholder="write school name . . ."
                    defaultValue={this.state.school}
                    onChange={this.onValueChanged}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group>
                <Form.Label>Batch</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="batch"
                    placeholder="write batch name . . ."
                    defaultValue={this.state.batch}
                    onChange={this.onValueChanged}
                  />
                </InputGroup>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                id="buttonBlack"
                onClick={() => this.setState({ showModal: false })}
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button id="buttonDelete" onClick={() => this.setState({ showModal: false })}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  }

  //   const mapStateToProps = state => ({
//     usersReducer: state.usersReducer.users,
//     updateReducer: state.updateReducer.updateusers     
//     updateStudentReducer: state.updateReducer.student 
//   });
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  updateUsersThunk: (state,id) =>dispatch(updateUsers(state,id)),
  fetchUsersThunk: () => dispatch(fetchUsers()),
  getStudentbyIdThunk: (id) => dispatch(getStudentbyId(id))

});

export default connect(
	mapStateToProps, mapDispatchToProps)(AddStudent);
