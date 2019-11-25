import React from 'react';
import TEST from './components/TEST'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import {Container} from 'react-bulma-components'
import './_variables.scss'
import store from './store'

import {Provider} from 'react-redux'


const App = () => (
	<Provider store={store}>
	<>
<Container>
  <TEST/>
  </Container>
</>
</Provider>

  )


  export default App;