/* eslint-disable no-console */
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal-brown.png';
import Table from '../../components/Table';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

export default function Hall() {
  const [selectedTable, setSelectedTable] = useState(false);
  const [tableClass, setTableClass] = useState('bg-color-light-brown');
  const [tableNumberClass, setTableNumberClass] = useState('table-number color-lightest');
  const [clientName, setClientName] = useState('');
  const history = useHistory();

  function tableOnClick(event) {
    setTableClass('bg-color-yellow');
    setTableNumberClass('table-number color-dark-brown');
    localStorage.setItem('currentTable', event.target.textContent);
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
            divClass={tableClass}
            divOnClick={tableOnClick}
            pClass={tableNumberClass}
            tableNumber='01'
          />

          <Table
            divClass={tableClass}
            divOnClick={tableOnClick}
            pClass={tableNumberClass}
            tableNumber='02'
          />

          <Table
            divClass={tableClass}
            divOnClick={tableOnClick}
            pClass={tableNumberClass}
            tableNumber='03'
          />

          <Table
            divClass={tableClass}
            divOnClick={tableOnClick}
            pClass={tableNumberClass}
            tableNumber='04'
          />

          <Table
            divClass={tableClass}
            divOnClick={tableOnClick}
            pClass={tableNumberClass}
            tableNumber='05'
          />

          <div>
            <Table
              divClass={tableClass}
              divOnClick={tableOnClick}
              pClass={tableNumberClass}
              tableNumber='06'
            />

            <Table
              divClass={tableClass}
              divOnClick={tableOnClick}
              pClass={tableNumberClass}
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
              buttonOnClick={(event) => {
                event.preventDefault();
                localStorage.setItem('currentClient', clientName);
              }}
            />
          </form>
        </section>
      </main>
    </Fragment>
  );
}
