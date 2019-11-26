import React from 'react';
import {Container, Columns,Column} from 'react-bulma-components'



const LandingPage = () => (
	<div className="mt-5 col-5">
<Container>

<div class="field">
  <label class="label">REGISTER</label>
</div>

<div class="field">
  <label class="label"><small>NAME</small></label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input"/>
  </div>
  <p class="help is-danger">This username is invalid</p>
</div>

<div class="field">
  <label class="label"><small>EMAIL</small></label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@"/>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="field">
  <label class="label"><small>ROLE</small></label>
  <div class="control">
    <div class="select">
      <select>
        <option>School Manager</option>
        <option>Student</option>
        <option>Admin</option>
      </select>
    </div>
  </div>
</div>


<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox"/>
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>


  </Container>
</div>

  )


  export default LandingPage;