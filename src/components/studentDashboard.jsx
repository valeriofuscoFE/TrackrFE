
import React , {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TopNavBarStudent from './navbars/topNavBarStudent';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components'



const StudentDashboard = ({auth,profile}) => {
  useEffect(()=>{
		
	},[]);


return (

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
 
)}
  StudentDashboard.propTypes={
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
  }     // WTF IS PROPTYPES ???   https://it.reactjs.org/docs/typechecking-with-proptypes.html 
  
  const mapStateToProps = state => ({
    auth:state.auth,
    profile:state.profile
  })
  
  
  export default connect(mapStateToProps)(StudentDashboard);
