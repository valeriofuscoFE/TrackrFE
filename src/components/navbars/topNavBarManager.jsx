  
import React from 'react';
import {Container, Columns,Column} from 'react-bulma-components';

const logOut = () => {
  localStorage.removeItem("token")
  window.location.href = '/login'
}

const TopNavBarManager = () => (
  <>
    <Container>
      <nav
        class="navbar topNavBar"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="/home">
            TrackR
          </a>
          <a class="navbar-item" href="/home">
            <img
              class="profilepicture"
              alt=""
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
            <a class="navbar-item">HOME</a>
            <a class="navbar-item">STUDENTS LIST</a>
            <a class="navbar-item">STUDENTS KPI</a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button" id="buttonWhite">MY INFO</a>
              </div>
            </div>
            <div class="navbar-item">
              <div class="buttons">
                <a class="button" id="buttonWhite" onClick={()=> logOut()}>LOG OUT</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  </>
);
  export default TopNavBarManager;