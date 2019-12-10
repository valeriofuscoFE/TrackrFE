import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header1">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
		
<div class="control">
	<h1 className="modalH1">Company Name</h1>
  <input class="input" type="text" placeholder="Normal input"/>
</div>

<div class="control">
	<h1 className="modalH1">Role</h1>
  <input class="input" type="text" placeholder="Normal input"/>
</div>

<div class="control">
	<h1 className="modalH1">Location</h1>
  <input class="input" type="text" placeholder="Normal input"/>
</div>

<div class="control">
	<h1 className="modalH1">Description</h1>
  <input class="input" type="text" placeholder="Normal input"/>
</div>
        </p>

		<button class="button is-primary bModal">Primary</button>


      </div>

    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;