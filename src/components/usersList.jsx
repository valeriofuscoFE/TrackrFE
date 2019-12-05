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
 

  const usersList = usersReducer.map(user=>(
    <div>
       <div key={user._id} class="columns is-centered">
       <div class="column topColumn">{user.role}</div>
       <div class="column topColumn">{user.name}</div>
       <div class="column topColumn">{user.surname}</div>
       <div class="column topColumn">{user.email}</div>
       <div class="column topColumn">{user.school}</div>
       <button class="button" id="buttonDelete">
         X
       </button>
     </div>
     <hr></hr>
     </div>
  
))

  return (
  <>
    <TopNavBarAdmin />

    <Container>
      {/* SEARCH BAR */}
      <div class="columns">
        <div class="column is-3 is-offset-9">
          <input class="input" type="text" placeholder="SEARCH USER" />
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
      <div class="columns  is-centered">
        <div class="column topColumn">Role</div>
        <div class="column topColumn">Name</div>
        <div class="column topColumn">Surname</div>
        <div class="column topColumn">Email</div>
        <div class="column topColumn">Batch</div>
    
      </div>
      <hr></hr>
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