/* eslint-disable no-console */
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal-brown.png';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

export default function Hall() {
  const [clientName, setClientName] = useState('');
  const history = useHistory();

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
      />

      <main className='main-container-base main-container-hall'>
        <div className='info-message color-dark-green weight-500'>
          Selecione uma mesa e digite o nome do cliente
        </div>

        <section className='tables-grid-container'>
          <div className='table-01 table-size-4 bg-color-light-brown' onClick>
            <p className='table-number color-lightest'>01</p>
          </div>
          <div className='table-02 table-size-4 bg-color-light-brown' onClick>
            <p className='table-number color-lightest'>02</p>
          </div>
          <div className='table-03 table-size-4 bg-color-light-brown' onClick>
            <p className='table-number color-lightest'>03</p>
          </div>
          <div className='table-04 table-size-4 bg-color-light-brown' onClick>
            <p className='table-number color-lightest'>04</p>
          </div>
          <div className='table-05 table-size-4 bg-color-light-brown' onClick>
            <p className='table-number color-lightest'>05</p>
          </div>
          <div className='tables-size-2-wrap'>
            <div className='table-06 table-size-2 bg-color-light-brown' onClick>
              <p className='table-number color-lightest'>06</p>
            </div>
            <div className='table-07 table-size-2 bg-color-light-brown' onClick>
              <p className='table-number color-lightest'>07</p>
            </div>
          </div>
        </section>

        <section className='form-container-base form-container-hall bg-color-yellow-20'>
          <form className='hall-form' onSubmit=''>
            <InputText
              divWrapClass='client-input-wrap'
              labelClass='label-for-input'
              labelText='Cliente'
              inputRequired
              inputType='text'
              inputValue={clientName}
              inputMinLength='3'
              inputPlaceholder='Digite o nome do cliente'
              inputClass='input-text input-client'
              inputOnChange={(event) => setClientName(event.target.value)}
            />

            <Button
              buttonType='submit'
              buttonClass='button-base bg-color-green color-lightest'
              buttonText='Fazer pedido'
              buttonOnClick=''
            />
          </form>
        </section>
      </main>
    </Fragment>
  );
}
