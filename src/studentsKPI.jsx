import React from 'react';
import TopNavBarAdmin from './topNavBarAdmin';
import Profilepicture from './assets/profilepicture.jpg'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components'



const StudentsKPI = () => (
  <>
    <TopNavBarAdmin />

    <Container>
      {/* SEARCH BAR */}
      <div class="columns">
        <div class="column is-3 is-offset-9">
          <input class="input" type="text" placeholder="SEARCH STUDENT KPI" />
        </div>
      </div>
      {/* FIRST ROW */}
      <div class="columns  is-centered">
        <div class="column plusColumn is-4">STUDENTS KPI</div>
        <div class="column is-1">
          <button class=" button is-pulled-left" id="buttonBlack">
            EXPORT
          </button>
        </div>
        <div class="column is-1">
          <button class=" button is-pulled-left" id="buttonBlack">
            ADD STUDENT
          </button>
        </div>
      </div>
      <hr></hr>

      {/* SECOND ROW */}
      <div class="columns  is-centered">
        <div class="column topColumn">Image</div>
        <div class="column topColumn">Name</div>
        <div class="column topColumn">Surname</div>
        <div class="column topColumn">Recent Application</div>
        <div class="column topColumn">Status</div>
        <div class="column topColumn">Batch</div>
      </div>
      <hr></hr>
      {/* FIRST STUDENT KPI */}
      <div class="columns is-gapless  is-centered">
        <div class="column topColumn"> <img
                              src={Profilepicture}
                              class="profilepicture"
                              alt="profilepicture"
                              width="40px"
                            /></div>
        <div class="column topColumn">Krzysztof</div>
        <div class="column topColumn">Nadlonek</div>
        <div class="column topColumn">Application sent to Uber </div>
        <div class="column topColumn">Accepted</div>
        <div class="column topColumn">June 2019</div>
        <button class="button" id="buttonDelete">
          X
        </button>
      </div>
      <hr></hr>

      {/* FIRST STUDENT KPI */}
      <div class="columns is-gapless  is-centered">
        <div class="column topColumn"> <img
                              src={Profilepicture}
                              class="profilepicture"
                              alt="profilepicture"
                              width="40px"
                            /></div>
        <div class="column topColumn">Krzysztof</div>
        <div class="column topColumn">Nadlonek</div>
        <div class="column topColumn">Application sent to Uber </div>
        <div class="column topColumn">Accepted</div>
        <div class="column topColumn">June 2019</div>
        <button class="button" id="buttonDelete">
          X
        </button>
      </div>
      <hr></hr>
    </Container>
  </>
);


  export default StudentsKPI;