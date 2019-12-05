import React , {useState, useEffect, Component} from 'react';
import TopNavBarManager from './navbars/topNavBarManager';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components';
import {fetchUsers} from '../actions/usersActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const StudentsFilter = ({fetchUsers,usersReducer}) => {

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


const [search, filterSearch] = useState([])

 const  searchHandler = (e) => {
  filterSearch({...search, search: e.target.value});
  console.log("searchHandler submitted", search);
};


const searchStudents = usersReducer.map(student => {

  if (student.name === search)
  return(
  <div id="myTable">
   <div  key={student._id} class="columns is-centered" >
   <div id="name" class="column is-2 topColumn"><a id="a">{student.name}</a></div>
   <div id="name" class="column is-2 topColumn">{student.surname}</div>
 </div>
 <hr></hr>
 </div>


  );
})


  return (
    <>
   
      <Container>
        {/* SEARCH BAR */}
        <div class="columns">
          <div class="column is-3 is-offset-9">
            <input
              class="input"
              type="text"
              placeholder="SEARCH STUDENT"
              onKeyUp={searchHandler}
              id="value"
            
            />
          </div>
        </div>
        <div>
          {searchStudents}
        </div>
      </Container>
    </>
  );};
  


  const mapStateToProps = state => ({
    usersReducer: state.usersReducer.users
  });


export default connect(
	mapStateToProps ,
	{fetchUsers}
	) (StudentsFilter);
