import React , {useState, useEffect, Component} from 'react';
import TopNavBarManager from './navbars/topNavBarManager';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components';
import {fetchUsers} from '../actions/usersActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import StudentsFilter from "./studentsFilter";


const StudentsList = ({fetchUsers,usersReducer}) => {

useEffect(()=>{
 
  fetchUsers();
},[])



//filter

// function filter(){
//   var input, filter , ul,li,a,i;

//   input = document.getElementById('value');
//   filter = input.value.toUpperCase();

//   ul = document.getElementById('wrapper');
//   li = document.getElementById('name');

//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByID("a")[0];
//     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//     } else {
//         li[i].style.display = "none";
//     }
// }
// }
// console.log(filter)


// const [search, filterSearch] = useState()

//  const  searchHandler = (e) => {
//   filterSearch({...search, search: e.target.value});
//   console.log("searchHandler submitted", search);
// };


// const searchStudents = usersReducer.map(student=> {

//   if (student.name === search)
//   return(
//   <div id="myTable">
//    <div  key={student._id} class="columns is-centered" >
//    <div id="name" class="column is-2 topColumn"><a id="a">{student.name}</a></div>
//    <div id="name" class="column is-2 topColumn">{student.surname}</div>
//  </div>
//  <hr></hr>
//  </div>


//   );
// })

const studentsList = usersReducer.map(student=>(
  <div>
   <div  key={student._id} class="columns is-gapless is-centered" >
   <div  class="column is-2 topColumn">{student.name}</div>
   <div  class="column is-2 topColumn">{student.surname}</div>
   <div  class="column is-3 topColumn">{student.email}</div>
   <div  class="column is-3 topColumn">{student.githubUrl}</div>
   <div  class="column is-2 topColumn">{student.school}</div>
 </div>
 <hr></hr>
 </div>
 
))

const [searchStudent, setSearchStudent] = useState("");
const [searchResult, setSearchResult] = useState(usersReducer);
// const [searchResult, setSearchResult] = useState([]);

const searchHandler = e =>{
  setSearchStudent(e.target.value);
}
console.log(searchStudent)

useEffect(() => {
  const results = usersReducer.filter(student=>
    student.toString().includes(searchStudent)
  );
  setSearchResult(results);
}, [searchStudent]);

console.log(searchResult)


  // const searchResult = !searchStudent
  // ? usersReducer
  // : usersReducer.filter(student =>
  //     student.toString().toLowerCase().includes(searchStudent.toLocaleLowerCase())
  //   );


// console.log("studentList",usersReducer)

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
        </div>
        {/* SECOND ROW */}

        <div>
          {searchResult.map(search => (
            <div key={search._id}>{search}</div>
          ))}
        </div>
        


        <div>
          {/* {searchStudents} */}
          {/* <StudentsFilter
          usersReducer={usersReducer.filter(
            student =>
              student.name
          )}/> */}
        </div>

        <div class="columns is-centered">
          <div class="column topColumn">Name</div>
          <div class="column topColumn">Surname</div>
          <div class="column topColumn">Email</div>
          <div class="column topColumn">githubURL</div>
          <div class="column topColumn">Batch</div>
        </div>
        <hr></hr>

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
