import React from 'react';
import {useEffect, Fragment} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'react-bulma-components/dist/react-bulma-components.min.css';
// import {Container, Columns,Column} from 'react-bulma-components'
import './styles/style.scss';
import {loadUser} from './actions/auth'
//import TopNavBar from './components/navbars/topNavBar';
// import sideNavBar from './sideNavBar';
import landingPage from './components/landingPage';
 import ManagerDashboard from './components/managerDashboard';
 import StudentDashboard from './components/studentDashboard';
// import StudentMyInfo from './components/modals/studentMyInfo';
// import ManagerMyInfo from './components/modals/managerMyInfo';
// import AddStudent from './components/modals/addStudent';
// import SchoolDetails from './components/modals/schoolDetails';
import adminDashboard from './components/adminDashboard';
import Footer from './components/footer';
// import AddJobApplication from './components/modals/addJobApplication';
// import CompanyInfoModal from './components/modals/companyInfoModal';
// import JobInfoModal from './components/modals/jobInfoModal';
// import TasksModal from 'components/modals/tasksModal';
// import OfferModal from './components/modals/offerModal';
import StudentsList from './components/studentsList';
// import Test from './test';
import UsersList from './components/usersList';
import Login from './components/Login';
//REDUX
import {Provider} from 'react-redux'
import store from './store'
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute'
// import ClassPrivateRoute from "./components/routing/ClassPrivateRoute"


if(localStorage.token){
	setAuthToken(localStorage.token);
}
const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, [])  

	return (

		<Provider store={store}>
		<Router>
			<Fragment>
{/* 
				<Route exact path ='/' component = {Landing}/> */}
				<section className="container">
					<Switch>
						<Route exact path ='/register' component={landingPage}/>
						<Route exact path ='/Login' component={Login}/>
						<Route path='/studentslist' component={StudentsList} />
						<Route path='/userslist' component={UsersList} />
						 <PrivateRoute exact path ='/dashboard' component={StudentDashboard}/>
						 <PrivateRoute exact path='/manager' component={ManagerDashboard}/>
						 <PrivateRoute exact path='/admin' component={adminDashboard}/>
					</Switch>
				</section>
				
			</Fragment>
		</Router>
		<Footer/>
    
		</Provider>

		  );
}


// const App = () => (
//   <>
//     <Container>
//        {/* <ManagerDashboard/> */}
//        {/* <AddStudent/> */}
//        {/* <StudentsList/> */}
//        <StudentsKPI/>
//        {/* <UserList/> */}
//        {/* <SchoolDetails/> */}
//        {/* <AddJobApplication/> */}
//        {/* <Test/> */}
//        {/* <CompanyInfoModal/> */}
//        {/* <JobInfoModal/> */}
//        {/* <TasksModal/> */}
//        {/* <OfferModal/> */}
// {/*     
//       <StudentDashboard/> */}
//        {/* <ManagerMyInfo/> */}
//        {/* <StudentMyInfo/> */}
//       {/* <AdminDashboard/> */}
//       {/* <TopNavBar /> */}
//       {/* <LandingPage /> */}
//       {/* <SideNavBar /> */}
    //   <Footer/>
//     </Container>
//   </>
// );


  export default App;