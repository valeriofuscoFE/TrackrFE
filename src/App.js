import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Container, Columns,Column} from 'react-bulma-components'
import './styles/style.scss';
import TopNavBar from './components/navbars/topNavBar';
import SideNavBar from './sideNavBar';
import LandingPage from './components/landingPage';
import ManagerDashboard from './components/managerDashboard';
import StudentDashboard from './components/studentDashboard';
import StudentMyInfo from './components/modals/studentMyInfo';
import ManagerMyInfo from './components/modals/managerMyInfo';
import AddStudent from './components/modals/addStudent';
import SchoolDetails from './components/modals/schoolDetails';
import AdminDashboard from './components/adminDashboard';
import Footer from './components/footer';
import AddJobApplication from './components/modals/addJobApplication';
import CompanyInfoModal from './components/modals/companyInfoModal';
import JobInfoModal from './components/modals/jobInfoModal';
import TasksModal from 'components/modals/tasksModal';
import OfferModal from './components/modals/offerModal';
import StudentsList from './components/studentsList';
import Test from './test';
import UserList from './components/userList';
import StudentsKPI from './components/studentsKPI';
//REDUX
import {Provider} from 'react-redux'
import store from './store'
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute'




if(localStorage.token){
	setAuthToken(localStorage.token);
}
const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, [])  //WE HAVE BRACKETS BECAUSE WE WANT THAT WE WILL RUN ONLY ONCE 

	return (
		<Provider store={store}>
		<Router>
			<Fragment>
				<NavBar/>
				<Route exact path ='/' component = {Landing}/>
				<section className="container">
					<Switch>
						<Route exact path ='/register' component={Register}/>
						<Route exact path ='/login' component={Login}/>
						<PrivateRoute exact path ='/dashboard' component={Dashboard}/>
					</Switch>
				</section>
			</Fragment>
		</Router>
    
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
//       <Footer/>
//     </Container>
//   </>
// );


  export default App;