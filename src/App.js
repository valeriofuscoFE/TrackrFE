import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Container, Columns,Column} from 'react-bulma-components'
import './styles/style.scss';
import TopNavBar from './components/navbars/topNavBar';
import SideNavBar from './sideNavBar';
import LandingPage from './landingPage';
import ManagerDashboard from './managerDashboard';
import StudentDashboard from './components/studentDashboard';
import StudentMyInfo from './studentMyInfo';
import ManagerMyInfo from './managerMyInfo';
import AddStudent from './addStudent';
import SchoolDetails from './schoolDetails';
import AdminDashboard from './adminDashboard';
import Footer from './footer';
import AddJobApplication from './addJobApplication';
import CompanyInfoModal from './companyInfoModal';
import JobInfoModal from './jobInfoModal';
import TasksModal from 'tasksModal';
import OfferModal from './offerModal';
import StudentsList from './studentsList';
import Test from './test';
import UserList from './userList';
import StudentsKPI from './studentsKPI';
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