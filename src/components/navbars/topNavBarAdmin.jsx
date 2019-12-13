import React from 'react';
import {Container, Columns,Column} from 'react-bulma-components';
import profilepicture from '../../assets/profilepicture.jpg'

const logOut = () => {
  localStorage.removeItem("token")
  window.location.href = '/login'
}


const TopNavBarAdmin = () => (
  <>
    <Container>
      <nav
        class="navbar topNavBar"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="/admin">
            TrackR
          </a>
          <a class="navbar-item" href="/admin">
            <img
              src={profilepicture}
              class="profilepicture"
              alt="profilepicture"
            />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="/admin"  >HOME</a>
            <a class="navbar-item" href="/userslist">USERS LIST</a>
          </div>
          
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button" id="buttonWhite"onClick={()=> logOut()}>LOG OUT</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  </>
);


  export default TopNavBarAdmin;