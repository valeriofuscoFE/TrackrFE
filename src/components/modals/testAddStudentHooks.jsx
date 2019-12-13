// import React , {useState, useEffect, Component} from 'react';
// import Profilepicture from '../../assets/profilepicture.jpg'
// import { Button, Modal, FormControl, InputGroup, Form} from 'react-bootstrap';
// import {updateUsers} from '../../actions/updateActions';
// import {fetchUsers} from '../../actions/usersActions';
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';






// const AddStudent =({show,onHide,updateUsers,fetchUsers,usersReducer, updateReducer}) =>{

//     useEffect(()=>{
//         fetchUsers();
//         updateUsers();
//       },[])  
 

//       const [formData, setFormData] = useState({
//             name:"HIHI",
//             surname:"",
//             email:"",
//             school:"",
//             batch:""
//       });

  

// // const { name, surname, email, school, batch } = formData;


// const [modalShow, setModalShow] = useState(false);
// // const [searchStudent, setSearchStudent] = useState();
// // const [searchResult, setSearchResult] = useState([]);

// // useEffect(() => {
// //   const results = usersReducer.filter(student=>
// //     student.name.toString().toLowerCase().includes(searchStudent.toLowerCase())
// //   );

// //   if (searchStudent.length > 2)
// //   return (
// //   setSearchResult(results));
// // }, [searchStudent]);


// const fetchStudent = (student) => {
//  if (student)

//  setFormData(student.name)
//   console.log("formData name",formData.name)
//   console.log("student name",student.name )
 
// }



//   const submitHandler =(e) =>{
//     e.preventDefault();
//     updateUsers(formData)
//   console.log("hi submit formData", formData)
// }

  
//   //MAPPING USERS FOR POTENTIAL BATCH MEMBERS

 
//   const usersList = usersReducer.map(student=>(
  
//     <div>
//      <div  key={student._id} class="columns is-gapless is-centered" >
//      <div  class="column is-2 topColumn">{student.name}</div>
//      <div  class="column is-2 topColumn">{student.surname}</div>
//      <div  class="column is-3 topColumn">{student.email}</div>
//      <div  class="column is-3 topColumn">{student.school}</div>
//      <div  class="column is-3 topColumn">{student.batch}</div>
//      <button class="button" id="buttonBlack" onClick={()=> {fetchStudent(student);setModalShow(true)}}>
//            Add student
//      </button>
//    </div>
//    <hr></hr>
//    </div>
   
//   ));



//   const onValueChanged = (e) => {
//     setFormData({...formData, [e.target.name]:e.target.value})
//   };

 
//     return (
// <>
//       <div>{usersList}</div>
     
//       <Modal
//         show={modalShow}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header>
//           <div class="column">
//             <img
//               src={Profilepicture}
//               class="profilepicture"
//               alt="profilepicture"
//               width="50px"
//             />
//           </div>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Add student to batch
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={e => submitHandler(e)}>
//           <Form.Group>
//               <Form.Label>Name</Form.Label>
              
//               <Form.Control type="text"  name="name" placeholder={formData.name} value={formData.name}
//               onChange={e => onValueChanged(e)}
              
//               // onShow={event => onShowChanged(event)}
//                />
              
//             </Form.Group>
          
//             <Form.Group>
//               <Form.Label>Surname</Form.Label>
//               <Form.Control type="text" name="surname" value={formData.surname}
//               onChange={e => onValueChanged(e)}  />
//             </Form.Group>
        
//             <Form.Group>
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="text" name="email" value={formData.email}
//               onChange={e => onValueChanged(e)}  />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>School</Form.Label>
//               <Form.Control type="text" name="school" value={formData.school}
//               onChange={e => onValueChanged(e)}  />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Batch</Form.Label>
//               <Form.Control type="text" name="batch" value={formData.batch}
//               onChange={e => onValueChanged(e)} />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={() => setModalShow(false)}>Cancel</Button>
//         </Modal.Footer>
//       </Modal>
//    </> 
//     );
//   }

  
//   const mapStateToProps = state => ({
//     usersReducer: state.usersReducer.users,
//     updateReducer: state.updateReducer.updateusers
   
   
//   });


// export default connect(
// 	mapStateToProps ,
// 	{fetchUsers, updateUsers}
// 	) (AddStudent);
