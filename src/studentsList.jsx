import React from 'react';
import TopNavBarManager from './topNavBarManager';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components'



const StudentsList = () => (
<>
<TopNavBarManager />

<Container>
{/* FIRST ROW */}

<div class="columns  is-centered">
  <div class="column plusColumn is-4">
  STUDENTS LIST
  </div>
</div>

{/* SECOND ROW */}
<div class="columns  is-centered">

<div class="column topColumn">
  Name
</div>
<div class="column topColumn">
  Surname
</div>
<div class="column topColumn">
  Email
</div>
<div class="column topColumn">
  githubURL
</div>
<div class="column topColumn">
  Batch
</div>
<div class="column topColumn">
  Pref.Location
</div>
</div>
{/* FIRST STUDENT */}
<hr></hr>
<div class="columns is-gapless  is-centered">

<div class="column topColumn">
  Krzysztof
</div>
<div class="column topColumn">
  Nadlonek
</div>
<div class="column topColumn">
  knadlonek@gmail.com
</div>
<div class="column topColumn">
  some url here
</div>
<div class="column topColumn">
  June 2019
</div>
<div class="column topColumn">
  Berlin
</div>
</div>
<hr></hr>

{/* SECOND STUDENT */}
<hr></hr>
<div class="columns is-gapless  is-centered">

<div class="column topColumn">
  Rob
</div>
<div class="column topColumn">
  Tech
</div>
<div class="column topColumn">
  blabla
</div>
<div class="column topColumn">
blabla
</div>
<div class="column topColumn">
  June 2019
</div>
<div class="column topColumn">
  Berlin
</div>
</div>
<hr></hr>


</Container>
</>

  )


  export default StudentsList;