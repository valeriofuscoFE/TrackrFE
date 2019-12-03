import React, { Component } from "react";
import { Box,Container, Columns,Column} from 'react-bulma-components'
//import Profilepicture from '../../assets/profilepicture.jpg'




class AddJobApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
//  MODAL FUNCTIONS
  displayModal = () => {
    var modal = document.getElementById("pageModal2");
    modal.style.display = "block";
  };

  hideModal = () => {
    var modal = document.getElementById("pageModal2");
    modal.style.display = "none";
  };



  render() {

    return (
      <>
        <Container>
          {/* BUTTON */}
          <button onClick={this.displayModal}>Add JOB Whatever Button</button>


          <div class="modal" id="pageModal2">
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
                          {/* <img
                            src={Profilepicture}
                            class="profilepicture"
                            alt="profilepicture"
                            width="50px"
                          /> */}
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
                    <hr></hr>
                    <strong><label>Company Name</label></strong>
                    <hr></hr>
                    <br/><strong><label>Website</label></strong>
                      <div>mapping data here</div>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                    <strong><label>Location</label></strong>
                    <div>mapping data here</div>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                    <hr></hr>
                    <strong><label>JOB POSITION</label></strong>
                    <hr></hr>
                    <br/><strong><label>Role Title</label></strong>
                      <div>mapping data here</div>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                    <strong><label>Contract Type</label></strong>
                    <div>mapping data here</div>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                    <strong><label>Description</label></strong>
                    <div>mapping data here</div>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                    <strong> <label>Apply URL</label></strong>
                    <div>mapping data here</div>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                    <strong><label>Deadline</label></strong>
                    <div>mapping data here</div>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                    <strong><label>Applied</label></strong>
                    <div>mapping data here</div>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                    <strong><label>Interview 1</label></strong>
                    <div>mapping data here</div>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                    <strong><label>Interview 2</label></strong>
                    <div>mapping data here</div>
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                    <strong><label>Status</label></strong>
                    <div>wishlist as a default here???</div>
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
