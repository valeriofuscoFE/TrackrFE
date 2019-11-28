import React, { Component } from "react";
import { Box,Container, Columns,Column} from 'react-bulma-components'
import Profilepicture from './assets/profilepicture.jpg'




class AddJobApplication extends Component {
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
                          <h6>New Job Application</h6>
                          
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* MAIN BODY */}
                  <div class="field">
                    <div class="control">
                        <label>Search Bar</label>
                      <input class="input" type="text" placeholder="searchbar" />
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                    <label>Job position</label>
                    <br/><label>Title</label>
                      <input class="input" type="text" placeholder="title of job position" />
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                    <label>Phone nr</label>
                      <input class="input" type="email" placeholder="phone nr" />
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                    <label>Job Position</label>
                      <input class="input" type="text" placeholder="job position"/>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                    <label>Job Location</label>
                      <input class="input" type="text" placeholder="job location"/>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                    <label>Description</label>
                       <textarea class="textarea" type="textarea" placeholder="description" />
                    </div>
                  </div>

                  


                {/* BUTTONS */}
                  <div class="field is-grouped">
                    <footer class="modal-card-foot">
                      <button class="button" id="buttonWhite">
                        Add Job
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
  
  export default AddJobApplication;
