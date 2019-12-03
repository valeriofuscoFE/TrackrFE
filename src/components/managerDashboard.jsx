import React from 'react';
import TopNavBarManager from './navbars/topNavBarManager';
//import Diagrampicture from '../assets/diagrampicture.png';
//import Diagrampicture2 from '../assets/diagrampicture2.png';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components'



const ManagerDashboard = () => (
  <>
    <TopNavBarManager />

    <Container>
      <div class="columns  is-centered">
        {/* KPI */}
        <div class="column plusColumn is-8">

          <div class="columns">
            <div class="column is-12">
                <button class=" button is-pulled-left" id="buttonBlack">EXPORT</button>
            {/* <img
              src={Diagrampicture}
              width="60%"
              class="diagrampicture"
              alt="diagrampicture"
            /> */}
            </div>
          </div>

          <div class="columns">
            <div class="column is-12">
                <button class=" button is-pulled-left" id="buttonBlack">EXPORT</button>
            {/* <img
              src={Diagrampicture2}
              width="60%"
              class="diagrampicture"
              alt="diagrampicture"
            /> */}
            </div>
          </div>

        </div>

        {/* RECENT ACTIVITIES */}
        <div class="column topColumn is-3">RECENT ACTIVITIES</div>
      </div>
    </Container>
  </>
);


  export default ManagerDashboard;