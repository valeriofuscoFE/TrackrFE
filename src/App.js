import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Container, Columns,Column} from 'react-bulma-components'
import './styles/style.scss';
import TopNavBar from './topNavBar';
import SideNavBar from './sideNavBar';
import LandingPage from './landingPage';
import ManagerDashboard from './managerDashboard';
import StudentDashboard from './studentDashboard';
import StudentMyInfo from './studentMyInfo';
import ManagerMyInfo from './managerMyInfo';
import AddStudent from './addStudent';
import SchoolDetails from './schoolDetails';
import AdminDashboard from './adminDashboard';
import Footer from './footer';
import AddJobApplication from './addJobApplication';
import JobApplicationModal from './jobApplicationModal';
import Test from './test';



const App = () => (
  <>
    <Container>
       <ManagerDashboard/>
       {/* <AddStudent/> */}
       {/* <SchoolDetails/> */}
       {/* <AddJobApplication/> */}
       {/* <Test/> */}
       {/* <JobApplicationModal/> */}
    
      {/* <StudentDashboard/> */}
       {/* <ManagerMyInfo/> */}
       {/* <StudentMyInfo/> */}
      <AdminDashboard/>
      {/* <TopNavBar /> */}
      {/* <LandingPage /> */}
      {/* <SideNavBar /> */}
      <Footer/>
    </Container>
  </>
);


  export default App;