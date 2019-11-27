import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Container, Columns,Column} from 'react-bulma-components'
import './styles/style.scss';
import TopNavBar from './topNavBar';
import SideNavBar from './sideNavBar';
import LandingPage from './landingPage';
import StudentDashboard from './studentDashboard';
import Footer from './footer';




const App = () => (
  <>
    <Container>
      <StudentDashboard/>
      {/* <TopNavBar /> */}
      {/* <LandingPage /> */}
      {/* <SideNavBar /> */}
      <Footer/>
    </Container>
  </>
);


  export default App;