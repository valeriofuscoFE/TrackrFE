import React, { Component } from "react";
import { Box,Container, Columns,Column} from 'react-bulma-components'
import Profilepicture from './assets/profilepicture.jpg'




class Test extends Component {
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
          <button onClick={this.displayModal}>Whatever Button TEST</button>


          <div class="modal" id="pageModal2">
  <div class="modal-background"></div>
  <div class="modal-card">
      
    <section class="modal-card-body">
    <div class="field">
                    <div class="control">
                    <label>Description</label>
                       <textarea class="textarea" type="textarea" placeholder="description" />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                    <label>Description</label>
                       <textarea class="textarea" type="textarea" placeholder="description" />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                    <label>Description</label>
                       <textarea class="textarea" type="textarea" placeholder="description" />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                    <label>Description</label>
                       <textarea class="textarea" type="textarea" placeholder="description" />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                    <label>Description</label>
                       <textarea class="textarea" type="textarea" placeholder="description" />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                    <label>Description</label>
                       <textarea class="textarea" type="textarea" placeholder="description" />
                    </div>
                  </div>
    </section>

    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button"  onClick={this.hideModal}>Cancel</button>
    </footer>
  </div>
</div>

        </Container>
      </>
    );
  }
}
  
  export default Test;
