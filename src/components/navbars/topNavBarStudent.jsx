import React from 'react';
import {Container} from 'react-bulma-components';
import Modal from '../modals/Modal'
import useModal from '../modals/useModal';



const TopNavBar2 = () => {
const {isShowing, toggle} = useModal();

return(
  <>
    <Container>
      <nav
        className="navbar topNavBar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/home">
            TrackR
          </a>
          <a className="navbar-item" href="/home">
            <img
              className="profilepicture"
              alt="profilepicture"
            />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">HOME</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
			  <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
              </div>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <a className="button" id="buttonWhite">LOG OUT</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  </>
)
};


  export default TopNavBar2;