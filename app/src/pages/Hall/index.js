/* eslint-disable no-console */
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal-brown.png';
import Table from '../../components/Table';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

export default function Hall() {
  // const [tableClass, setTableClass] = useState('bg-color-light-brown');
  // const [tableNumberClass, setTableNumberClass] = useState('table-number color-lightest');
  const [clientName, setClientName] = useState('');
  const history = useHistory();

  function tableOnClick(event) {
    const selectedTable = document.getElementById(event.currentTarget.id);
    const selectedTableNumber = selectedTable.firstElementChild;
    selectedTable.className = 'bg-color-yellow';
    selectedTableNumber.className = 'table-number color-brown';
    localStorage.setItem('currentTable', event.target.textContent);
  }

  function saveTableAndClientName(event) {
    event.preventDefault();
    localStorage.setItem('currentClient', clientName);
  }

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
        workerRoleText='Atendente'
        workerNameClass='header-name-base color-brown'
        buttonLogoutClass='button-logout-base bg-color-light color-brown'
      />

      <main className='main-container-base main-container-hall'>
        <div className='info-message color-dark-green weight-500'>
          Selecione uma mesa e digite o nome do cliente
        </div>

        <section className='tables-grid-container'>
          <Table
            divId='table-01'
            divClass='table bg-color-light-brown'
            divOnClick={tableOnClick}
            pClass='table-number color-lightest'
            tableNumber='01'
          />

          <Table
            divId='table-02'
            divClass='table bg-color-light-brown'
            divOnClick={tableOnClick}
            pClass='table-number color-lightest'
            tableNumber='02'
          />

          <Table
            divId='table-03'
            divClass='table bg-color-light-brown'
            divOnClick={tableOnClick}
            pClass='table-number color-lightest'
            tableNumber='03'
          />

          <Table
            divId='table-04'
            divClass='table bg-color-light-brown'
            divOnClick={tableOnClick}
            pClass='table-number color-lightest'
            tableNumber='04'
          />

          <Table
            divId='table-05'
            divClass='table bg-color-light-brown'
            divOnClick={tableOnClick}
            pClass='table-number color-lightest'
            tableNumber='05'
          />

          <div>
            <Table
              divId='table-06'
              divClass='table bg-color-light-brown'
              divOnClick={tableOnClick}
              pClass='table-number color-lightest'
              tableNumber='06'
            />

            <Table
              divId='table-07'
              divClass='table bg-color-light-brown'
              divOnClick={tableOnClick}
              pClass='table-number color-lightest'
              tableNumber='07'
            />
          </div>
        </section>

        <section className='form-container-base form-container-hall bg-color-yellow-20'>
          <form className='hall-form'>
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
              buttonType='text'
              buttonClass='button-base bg-color-green color-lightest'
              buttonText='Fazer pedido'
              buttonOnClick={saveTableAndClientName}
            />
          </form>
        </section>
      </main>
    </Fragment>
  );
}
