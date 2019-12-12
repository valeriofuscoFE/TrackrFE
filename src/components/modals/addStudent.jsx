import React , {useState, useEffect, Component} from 'react';
import Profilepicture from '../../assets/profilepicture.jpg'
import { Button, Modal, FormControl, InputGroup, Form} from 'react-bootstrap';
import {updateUsers} from '../../actions/updateActions';
import {fetchUsers} from '../../actions/usersActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';





const AddStudent =({show,onHide,updateUsers,fetchUsers,usersReducer, updateReducer}) =>{

    useEffect(()=>{
        fetchUsers();
        updateUsers();
      },[])  
 


const [findStudent, setFindStudent] = useState([]);
const [modalShow, setModalShow] = useState(false);

const onClickFunctions = (id) => {
    // ()=> handleSubmit(id);
    setModalShow(true)

}

	const updateItems = async (id) =>{
        console.log("updating users list")
    
		try {
	
				var res = await fetch("http://localhost:4000/user/" + id , {
                    method: "PUT",
                    body: JSON.stringify(findStudent),
					headers: {
						"Authorization": "Bearer " +    
						//  localStorage.token
						"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGYxMDMyMThkN2IxNTNmNDhlN2Y2ZmIiLCJpYXQiOjE1NzYwNzYwNzksImV4cCI6MTU3NzA3Njg3OX0.Ia456IrjdznKM-ksWCuWChT2lk2irik66zTWZ4oPsQw"
					},
				})
				if (res.ok) {
					var updateusers = await res.json();
					console.log("users update",updateusers)
                    
                    setFindStudent(updateusers)
                     
		}
		
		} catch (err) {
			console.log(err)
		}
			
		};
  
  //MAPPING USERS FOR POTENTIAL BATCH MEMBERS
  const usersList = usersReducer.map(student=>(
  
    <div>
     <div  key={student._id} class="columns is-gapless is-centered" >
     <div  class="column is-2 topColumn">{student.image}Image</div>
     <div  class="column is-2 topColumn">{student.name}</div>
     <div  class="column is-2 topColumn">{student.surname}</div>
     <div  class="column is-3 topColumn">{student.githubUrl}githubURL</div>
     <button class="button" id="buttonBlack" onClick={()=> onClickFunctions(student._id)}>
           Add student
     </button>
   </div>
   <hr></hr>
   </div>
  ))


      
    return (
<>
      <div>{usersList}</div>
      <Modal
        show={modalShow}
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
          <Form>
          <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="name" />
            </Form.Group>
          
            <Form.Group>
              <Form.Label>Surname</Form.Label>
              <Form.Control type="surname" placeholder="surname" />
            </Form.Group>
        
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="email" />
            </Form.Group>

            <Form.Group>
              <Form.Label>School</Form.Label>
              <Form.Control type="school" placeholder="school" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
   </> 
    );
  }

  
  const mapStateToProps = state => ({
    usersReducer: state.usersReducer.users,
    updateReducer: state.updateReducer.updateusers
   
   
  });


export default connect(
	mapStateToProps ,
	{fetchUsers, updateUsers}
	) (AddStudent);
