/* eslint-disable no-console */
import React, { Fragment } from 'react';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal-brown.png';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

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
        headerClass='header-base bg-color-yellow'
        headerLogoLink='/salao'
        logoSrc={logo}
        workAreaClass='header-title-base color-brown'
        workAreaText='Salão'
        divLogoutClass='align-right weight-500'
        workerRoleClass='header-role-base color-brown'
        workerRoleText={'Atendente'}
        workerNameClass='header-name-base color-brown'
        workerNameText={'Jussara Silva'}
        buttonLogoutClass='button-logout-base bg-color-light color-brown'
      // buttonLogoutOnClick={''}
      />

      <main className='main-container-base main-container-hall'>
        <div className='info-message color-dark-green'>
          Selecione uma mesa e digite o nome do cliente
        </div>

        <div className='tables-grid-container'>
          <div className='table-size-4'>
            <p className='table-number'>01</p>
          </div>
          <div className='table-size-4'>
            <p className='table-number'>02</p>
          </div>
          <div className='table-size-4'>
            <p className='table-number'>03</p>
          </div>
          <div className='table-size-4'>
            <p className='table-number'>04</p>
          </div>
          <div className='table-size-4'>
            <p className='table-number'>05</p>
          </div>
          <div className='table-size-2'>
            <p className='table-number'>06</p>
          </div>
          <div className='table-size-2'>
            <p className='table-number'>07</p>
          </div>
        </div>

        <section className='client-section'>
          <InputText
          />
          <Button
          />
        </section>
      </main>
    </Fragment>
  );
}
