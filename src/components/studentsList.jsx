import React , {useState, useEffect, Component} from 'react';
import TopNavBarManager from './navbars/topNavBarManager';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components';
import {fetchUsers} from '../actions/usersActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const StudentsList = ({fetchUsers, usersReducer}) => {

useEffect(()=>{
 
  fetchUsers();
},[])


//DELETE STUDENT

const deleteUserHandler = async (id) => {

  await fetch("http://localhost:4000/user/" + id , {
    method: "DELETE"
   
  });

  console.log("id", id)
}


const studentsList = usersReducer.map(student=>(

  <div>
   <div  key={student._id} class="columns is-gapless is-centered" >
   <div  class="column is-2 topColumn">{student.name}</div>
   <div  class="column is-2 topColumn">{student.surname}</div>
   <div  class="column is-3 topColumn">{student.email}</div>
   <div  class="column is-3 topColumn">{student.githubUrl}</div>
   <div  class="column is-2 topColumn">{student.school}</div>
   <button class="button" id="buttonDelete" onClick={()=> deleteUserHandler(student._id)}>
         X
   </button>
 </div>
 <hr></hr>
 </div>
))


const [searchStudent, setSearchStudent] = useState("");
const [searchResult, setSearchResult] = useState([]);

const searchHandler = e =>{
  setSearchStudent(e.target.value);
}

useEffect(() => {
  const results = usersReducer.filter(student=>
    student.name.toString().toLowerCase().includes(searchStudent.toLowerCase())
  );

  if (searchStudent.length > 2)
  return (
  setSearchResult(results));
}, [searchStudent]);

console.log("searchResult",searchResult)




  // const searchResult = !searchStudent
  // ? usersReducer
  // : usersReducer.filter(student =>
  //     student.toString().toLowerCase().includes(searchStudent.toLowerCase())
  //   );

  return (
    <>
      <TopNavBarManager />

      <Container>
        {/* SEARCH BAR */}
        <div class="columns">
          <div class="column is-3 is-offset-9">
            <input
              class="input"
              type="text"
              placeholder="SEARCH STUDENT"
              onChange={searchHandler}
              value={searchStudent}
            />
          </div>
        </div>
        {/* FIRST ROW */}
        <div class="columns  is-centered">
          <div class="column plusColumn is-4">STUDENTS LIST</div>
          <div class="column is-1">
            <button class=" button is-pulled-right" id="buttonBlack">
              EXPORT
            </button>
          </div>
          <div class="column is-1">
          <button class=" button is-pulled-left" id="buttonBlack">
            ADD STUDENT
          </button>
        </div>
        </div>
   
        {/* SECOND ROW */}
        <div class="columns is-gapless is-centered">
          <div class="column topColumn">Name</div>
          <div class="column topColumn">Surname</div>
          <div class="column topColumn">Email</div>
          <div class="column topColumn">githubURL</div>
          <div class="column topColumn">Batch</div>
        </div>
        <hr></hr>

             {/* SEARCH MAPPING*/}

             <div>
          {searchResult.map(search => (
              <div>
              <div  key={search._id} class="columns is-gapless is-centered" >
              <div  class="column is-2 filteredColumn">{search.name}</div>
              <div  class="column is-2 filteredColumn">{search.surname}</div>
              <div  class="column is-3 filteredColumn">{search.email}</div>
              <div  class="column is-3 filteredColumn">{search.githubUrl}</div>
              <div  class="column is-2 filteredColumn">{search.school}</div>
              <button class="button" id="buttonDelete" onClick={()=>deleteUserHandler(search._id)}>
                   X
              </button>
            </div>
            <hr></hr>
            </div>
          ))}
        </div>
      {/* STUDENT LIST */}  
        <div>{studentsList}</div>
      </Container>
    </>
  );};
  


  const mapStateToProps = state => ({
    usersReducer: state.usersReducer.users
   
  });


export default connect(
	mapStateToProps ,
	{fetchUsers}
	) (StudentsList);
