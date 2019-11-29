import React from 'react';
import TopNavBarAdmin from './navbars/topNavBarAdmin';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box,Container, Columns,Column} from 'react-bulma-components'



const UserList = () => (
  <>
    <TopNavBarAdmin />

    <Container>
      {/* SEARCH BAR */}
      <div class="columns">
        <div class="column is-3 is-offset-9">
          <input class="input" type="text" placeholder="SEARCH USER" />
        </div>
      </div>
      {/* FIRST ROW */}
      <div class="columns  is-centered">
        <div class="column plusColumn is-4">USERS LIST</div>
        <div class="column is-1">
          <button class=" button is-pulled-right" id="buttonBlack">
            EXPORT
          </button>
        </div>
      </div>
      <hr></hr>

      {/* SECOND ROW */}
      <div class="columns  is-centered">
        <div class="column topColumn">Role</div>
        <div class="column topColumn">Name</div>
        <div class="column topColumn">Surname</div>
        <div class="column topColumn">Email</div>
        <div class="column topColumn">githubURL</div>
        <div class="column topColumn">Batch</div>
        <div class="column topColumn">Pref.Location</div>
      </div>
      <hr></hr>
      {/* FIRST USER */}
      <div class="columns is-gapless  is-centered">
        <div class="column topColumn">Student</div>
        <div class="column topColumn">Krzysztof</div>
        <div class="column topColumn">Nadlonek</div>
        <div class="column topColumn">knadlonek@gmail.com</div>
        <div class="column topColumn">some url here</div>
        <div class="column topColumn">June 2019</div>
        <div class="column topColumn">Berlin</div>
        <button class="button" id="buttonDelete">
          X
        </button>
      </div>
      <hr></hr>

      {/* SECOND USER */}
      <div class="columns is-gapless  is-centered">
        <div class="column topColumn">Student</div>
        <div class="column topColumn">Rob</div>
        <div class="column topColumn">Tech</div>
        <div class="column topColumn">blabla</div>
        <div class="column topColumn">blabla</div>
        <div class="column topColumn">June 2019</div>
        <div class="column topColumn">Berlin</div>
        <button class="button" id="buttonDelete">
          X
        </button>
      </div>
      <hr></hr>
    </Container>
  </>
);


  export default UserList;