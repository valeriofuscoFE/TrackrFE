import React from 'react';
import {Container} from 'react-bulma-components';



const TopNavBar2 = () => (
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
            <a class="navbar-item">HOME</a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button" id="buttonWhite">MY INFO</a>
              </div>
            </div>
            <div class="navbar-item">
              <div class="buttons">
                <a class="button" id="buttonWhite">LOG OUT</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  </>
);
  export default TopNavBar2;