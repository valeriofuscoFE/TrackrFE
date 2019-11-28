// import React, { Component } from "react";
// import { Box,Container, Columns,Column} from 'react-bulma-components'
// import Profilepicture from './assets/profilepicture.jpg'




// class ModalCompanyInfo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

  
// //  MODAL FUNCTIONS
//   displayModal = () => {
//     var modal = document.getElementById("pageModal");
//     modal.style.display = "block";
//   };

//   hideModal = () => {
//     var modal = document.getElementById("pageModal");
//     modal.style.display = "none";
//   };



//   render() {

//     return (
//       <>
//         <Container>
//           {/* BUTTON */}
//           <button onClick={this.displayModal}>Whatever Button JOB APPLICATION</button>


//           <div class="modal" id="pageModal">
//             <div class="modal-background"></div>
//             <div class="modal-card">
//             <section class="modal-card-body">

//             <div class="columns">
//             <div class="column is-12 modalColumn">

//             <nav class="navbar topNavBar" role="navigation" aria-label="main navigation">
//   <div class="navbar-brand">
//   <button class="logoModalButton" disabled><strong>U</strong></button>
//     <a class="navbar-item" href="/home">
//     Uber
//     </a>
//   </div>

//   <div id="navbarBasicExample" class="navbar-menu">
//     <div class="navbar-start">
//       <a class="navbar-item">
//         Company Info
//       </a>

//       <a class="navbar-item">
//         Job Info
//       </a>

//       <a class="navbar-item">
//         Tasks
//       </a>

//       <a class="navbar-item">
//         Offer
//       </a>

//     </div>
//   </div>
// </nav>
//                 </div>
//             </div>

//               <div class="columns">
//                 <div class="column is-12 modalColumn">
//                   {/* MODAL HEADER */}
//                   <div class="field">
//                     <label class="label">
//                       <div class="columns">
//                         <div class="column">
//                           <img
//                             src={Profilepicture}
//                             class="profilepicture"
//                             alt="profilepicture"
//                             width="50px"
//                           />
//                         </div>
//                         <div class="column is-8 is-centered">
//                           <h6>JOB APPLICATION</h6>
                          
//                         </div>
//                       </div>
//                     </label>
//                   </div>
//                   {/* MAIN BODY */}
//                   <div class="field">
//                     <div class="control">
//                     <label>JOB INFO</label>
//                        <textarea class="textarea" type="textarea" placeholder="description" />
//                     </div>
//                   </div>
//                   <div class="field">
//                     <div class="control">
//                     <label>Notes</label>
//                        <textarea class="textarea" type="textarea" placeholder="description" />
//                     </div>
//                   </div>
//                 {/* BUTTONS */}
//                   <div class="field is-grouped">
//                     <footer class="modal-card-foot">
//                       <button class="button" id="buttonWhite">
//                         Save changes
//                       </button>
//                       <button
//                         class="button"
//                         id="buttonDelete"
//                         onClick={this.hideModal}
//                       >
//                         Cancel
//                       </button>
//                     </footer>
//                   </div>
//                 </div>
              
//               </div>
//               </section>
//             </div>
//           </div>
//         </Container>
//       </>
//     );
//   }
// }
  
//   export default ModalCompanyInfo;
