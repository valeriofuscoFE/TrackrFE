import React, { Component } from "react";
import { Box,Container, Columns,Column} from 'react-bulma-components'
import Profilepicture from './assets/profilepicture.jpg'




class SchoolDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
//  MODAL FUNCTIONS
  displayModal = () => {
    var modal = document.getElementById("pageModal");
    modal.style.display = "block";
  };

  hideModal = () => {
    var modal = document.getElementById("pageModal");
    modal.style.display = "none";
  };



  render() {

    return (
      <>
        <Container>
          {/* BUTTON */}
          <button onClick={this.displayModal}>Whatever Button</button>


          <div class="modal" id="pageModal">
            <div class="modal-background"></div>
            <div class="modal-card">
            <section class="modal-card-body">
              <div class="columns">
                <div class="column is-12 modalColumn">
                  {/* MODAL HEADER */}
                  <div class="field">
                    <label class="label">
                      <div class="columns">
                        <div class="column">
                          <img
                            src={Profilepicture}
                            class="profilepicture"
                            alt="profilepicture"
                            width="50px"
                          />
                        </div>
                        <div class="column is-8 is-centered">
                          <h6>School Name</h6>
                          <br/><small>School Id:</small>
                          <small>98765</small>
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* MAIN BODY */}
                  <div class="field">
                    <div class="control">
                      <input class="input" type="text" placeholder="school manager" />
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <input class="input" type="email" placeholder="email" />
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <input class="input" type="text" placeholder="address"/>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <input class="input" type="text" placeholder="phone nr" />
                    </div>
                  </div>

                {/* BUTTONS */}
                  <div class="field is-grouped">
                    <footer class="modal-card-foot">
                      <button class="button" id="buttonWhite">
                        Save changes
                      </button>
                      <button
                        class="button"
                        id="buttonDelete"
                        onClick={this.hideModal}
                      >
                        Cancel
                      </button>
                    </footer>
                  </div>
                </div>
              </div>
              </section>
            </div>
          </div>
        </Container>
      </>
    );
  }
}
  
  export default SchoolDetails;
