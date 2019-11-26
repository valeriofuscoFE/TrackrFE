import React from 'react';
import TEST from './components/TEST'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Container} from 'react-bulma-components'
import './_variables.scss'
import store from './store'
import './styles/style.scss';
import TopNavBar from './topNavBar';
import SideNavBar from './sideNavBar';
import TopNavBar2 from './topNavBar2';
import LandingPage from './landingPage';

import {Provider} from 'react-redux'


const App = () => (
	<Provider store={store}>
	<>
<Container>
  <TEST/>
  <TopNavBar />
      {/* <TopNavBar2 /> */}
      <LandingPage />
      {/* <SideNavBar /> */}
  </Container>
</>
</Provider>

  )


  export default App;