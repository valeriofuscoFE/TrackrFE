import React from 'react';
import TopNavBarAdmin from './topNavBarAdmin';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components'



const AdminDashboard = () => (
<>
<TopNavBarAdmin />

<Container>
{/* FIRST ROW */}
 <div class="columns  is-centered">

  <div class="column topColumn">
    School List
  </div>
</div>
{/* SECOND ROW */}
<div class="columns  is-centered">
  <div class="column plusColumn is-4">
    Add School
  </div>
</div>

{/* THIRD ROW */}
<div class="columns  is-centered">
  <div class="column bottomColumn" id="bottomColumn1">
      <button class="logoButton" disabled><strong>S</strong></button>
    School 1<hr></hr><small>Manager:</small>
   
  </div>
  <div class="column bottomColumn"id="bottomColumn2">
  <button class="logoButton" disabled><strong>S</strong></button>
  School 2<hr></hr><small>Manager:</small>
  </div>
  <div class="column bottomColumn"id="bottomColumn3">
  <button class="logoButton" disabled><strong>S</strong></button>
  School 3<hr></hr><small>Manager:</small>
  </div>
  <div class="column bottomColumn"id="bottomColumn4">
  <button class="logoButton" disabled><strong>S</strong></button>
  School 4<hr></hr><small>Manager:</small>
  </div>
  <div class="column bottomColumn"id="bottomColumn5">
  <button class="logoButton" disabled><strong>S</strong></button>
  School 5<hr></hr><small>Manager:</small>
  </div>
</div>

</Container>
</>

  )


  export default AdminDashboard;