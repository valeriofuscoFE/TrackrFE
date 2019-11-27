import React from 'react';
import TopNavBar2 from './topNavBar2';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components'



const StudentDashboard = () => (
<>
<TopNavBar2 />

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