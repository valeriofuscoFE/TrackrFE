<<<<<<< Updated upstream:src/studentDashboard.jsx
import React from 'react';
import TopNavBarStudent from './topNavBarStudent';
=======
import React , {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import  {getCurrentProfile} from '../actions/profile';
import TopNavBarStudent from './navbars/topNavBarStudent';
>>>>>>> Stashed changes:src/components/studentDashboard.jsx
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components'



const StudentDashboard = () => (
<>
<TopNavBarStudent />

<Container>
{/* FIRST ROW */}
 <div class="columns  is-centered">
  <div class="column topColumn">
    Desired Position
  </div>
  <div class="column topColumn">
    Application Sent
  </div>
  <div class="column topColumn">
    Responses
  </div>
  <div class="column topColumn">
    Meeting Phase
  </div>
  <div class="column topColumn">
    Offer||Final
  </div>
</div>
{/* SECOND ROW */}
<div class="columns  is-centered">
  <div class="column plusColumn">
    +
  </div>
  <div class="column plusColumn">
    +
  </div>
  <div class="column plusColumn">
    +
  </div>
  <div class="column plusColumn">
    +
  </div>
  <div class="column plusColumn">
   +
  </div>
</div>

{/* THIRD ROW */}
<div class="columns  is-centered">
  <div class="column bottomColumn" id="bottomColumn1">
      <button class="logoButton" disabled><strong>T</strong></button>
    TrackR<hr></hr><small>React Developer</small>
   
  </div>
  <div class="column bottomColumn"id="bottomColumn2">
  <button class="logoButton" disabled><strong>T</strong></button>
  TrackR<hr></hr><small>React Developer</small>
  </div>
  <div class="column bottomColumn"id="bottomColumn3">
  <button class="logoButton" disabled><strong>T</strong></button>
  TrackR<hr></hr><small>React Developer</small>
  </div>
  <div class="column bottomColumn"id="bottomColumn4">
  <button class="logoButton" disabled><strong>T</strong></button>
  TrackR<hr></hr><small>React Developer</small>
  </div>
  <div class="column bottomColumn"id="bottomColumn5">
  <button class="logoButton" disabled><strong>T</strong></button>
  TrackR<hr></hr><small>React Developer</small>
  </div>
</div>

</Container>
</>

  )


  export default StudentDashboard;