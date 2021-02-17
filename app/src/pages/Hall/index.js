/* eslint-disable no-console */
import React, { Fragment } from 'react';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal.png';

export default function Hall() {
  // Function to get and display the username after he's logged in
  // const apiURL = 'https://lab-api-bq.herokuapp.com';
  // const apiUsers = `${apiURL}/users`;
  // const [workerName, setWorkerName] = useState('');

  // const workerNameDisplay = () => {
  //   // If there's a user show the message below
  //   if (workerName) {
  //     setWorkerName(true);
  //     <div>{workerName}</div>;
  //     return;
  //   }
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: workerName,
  //       restaurant: 'hamburgueria-ipe',
  //     }),
  //   };

  //   fetch(apiUsers, requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // };

  return (
    <Fragment>
      <Header
        headerClassName='header-base header-hall'
        headerLink='/'
        logoClassName='logo-signup'
        logoSrc={logo}
        workAreaClassName='header-work-area-base signup-subtitle'
        workAreaText='Salão'
        divLogoutClassName='logout-base'
        workerRoleClassName='logout-base logout-name-text'
        workerRoleText='Chef'
        workerNameClassName='logout-base logout-role-text'
        workerNameText='Jussara Silva'
      />
    </Fragment>
  );
}
