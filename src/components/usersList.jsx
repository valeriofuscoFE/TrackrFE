import React , {useState, useEffect, Component} from 'react';
import TopNavBarAdmin from './navbars/topNavBarAdmin';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components';
import {fetchUsers} from '../actions/usersActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';



const UsersList = ({fetchUsers,usersReducer}) => {

  useEffect(()=>{
    fetchUsers();
  },[])
 

  //DELETE USER

const deleteUserHandler = (_id) => {

  fetch(process.env.REACT_APP_URL + "user/"  +_id , {
    method: "DELETE"
   
  });
  fetchUsers();
}

  const usersList = usersReducer.map(user=>(
    <div>
       <div key={user._id} class="columns is-gapless is-centered">
       <div class="column topColumn">{user.role}</div>
       <div class="column topColumn">{user.name}</div>
       <div class="column topColumn">{user.surname}</div>
       <div class="column topColumn">{user.email}</div>
       <div class="column topColumn">{user.school}</div>
       <button class="button" id="buttonDelete" onClick={()=>deleteUserHandler(user._id)}>
         X
   </button>
     </div>
     <hr></hr>
     </div>
  
))

const [searchUser, setsearchUser] = useState("");
const [searchResult, setSearchResult] = useState([]);

const searchHandler = e =>{
  setsearchUser(e.target.value);
}

useEffect(() => {
  const results = usersReducer.filter(user=>
    user.name.toString().toLowerCase().includes(searchUser.toLowerCase())
    || user.surname.toString().toLowerCase().includes(searchUser.toLowerCase())
  );

  if (searchUser.length > 2)
  return (
  setSearchResult(results));
}, [searchUser]);

console.log("searchResult",searchResult)

  return (
  <>
    <TopNavBarAdmin />

    <Container>
      {/* SEARCH BAR */}
      {/* SEARCH BAR */}
      <div class="columns">
          <div class="column is-3 is-offset-9">
            <input
              class="input"
              type="text"
              placeholder="SEARCH USER"
              onChange={searchHandler}
              value={searchUser}
            />
          </div>
        </div>
      {/* FIRST ROW */}
      <div class="columns  is-centered">
        <div class="column plusColumn is-4">USERS LIST</div>
        <div class="column is-1">
          <button class=" button is-pulled-right" id="buttonBlack">
            EXPORT
          </button>
        </div>
      </div>
      <hr></hr>

      {/* SECOND ROW */}
      <div class="columns is-gapless  is-centered">
        <div class="column topColumn">Role</div>
        <div class="column topColumn">Name</div>
        <div class="column topColumn">Surname</div>
        <div class="column topColumn">Email</div>
        <div class="column topColumn">Batch</div>
    
      </div>
      <hr></hr>
       {/* SEARCH MAPPING*/}

       <div>
          {searchResult.map(search => (
              <div>
              <div  key={search._id} class="columns is-gapless is-centered" >
              <div  class="column is-3 filteredColumn">{search.role}</div>
              <div  class="column is-2 filteredColumn">{search.name}</div>
              <div  class="column is-2 filteredColumn">{search.surname}</div>
              <div  class="column is-3 filteredColumn">{search.email}</div>
              <div  class="column is-2 filteredColumn">{search.school}</div>
              <button class="button" id="buttonDelete" onClick={deleteUserHandler(search._id)}>
         X
              </button>
            </div>
            <hr></hr>
            </div>
          ))}
        </div>
         {/* USERS LIST*/}
      <div>{usersList}</div>
    </Container>
  </>
)};

const mapStateToProps = state => ({
  usersReducer: state.usersReducer.users
});


export default connect(
mapStateToProps ,
{fetchUsers}
) (UsersList);
