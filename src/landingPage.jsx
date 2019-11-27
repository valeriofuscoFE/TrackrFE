import React from 'react';
import { Box,Container, Columns,Column} from 'react-bulma-components'



const LandingPage = () => (

<Container>
<div class="columns">
  <div class="column"></div>
  <div class="column"></div>
  <div class="column is-one-third registerColumn">
  <div class="field">
  <label class="label">REGISTER</label>
</div>

<div class="field">
  <label class="label"><small>NAME</small></label>
  <div class="control">
    <input class="input" type="text" placeholder="name"/>
  </div>
  
</div>

<div class="field">
  <label class="label"><small>SURNAME</small></label>
  <div class="control">
    <input class="input" type="text" placeholder="surname"/>
  </div>
 
</div>


<div class="field">
  <label class="label"><small>EMAIL</small></label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email input" value="@"/>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label"><small>ROLE</small></label>
  <div class="control">
    <div class="select">
      <select id="roleOption">
        <option id="roleOption2">School Manager</option>
        <option>Student</option>
        <option>Admin</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label"><small>SCHOOL NAME</small></label>
  <div class="control">
    <input class="input" type="text" placeholder="school name"/>
  </div>
 
</div>

<div class="field">
  <label class="label"><small>githubURL</small></label>
  <div class="control">
    <input class="input" type="text" placeholder="url"/>
  </div>
  
</div>


{/* <div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox"/>
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div> */}

<div class="field is-grouped">
  <div class="control">
    <button class="button">Submit</button>
  </div>
  <div class="control">
    <button class="button">Cancel</button>
  </div>
</div>
  </div>
  <div class="column"></div>
</div>
</Container>

  )


  export default LandingPage;