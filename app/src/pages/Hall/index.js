/* eslint-disable no-console */
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GoToPage, setLocalStorage } from '../../services';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal-brown.png';
import InputRadio from '../../components/InputRadio';
import HallTables from '../HallTables';

export default function Hall() {
  const history = useHistory();
  const [clientName, setClientName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [hallTablesClass, setHallTablesClass] = useState('main-container-base');
  const [hallOrdersClass, setHallOrdersClass] = useState('hidden');

  function saveDataAndGoToMenu(event, path) {
    event.preventDefault();
    setLocalStorage('currentClient', clientName);
    setLocalStorage('currentTable', tableNumber);
    GoToPage(history, path);
  }

  const showTables = () => {
    setHallTablesClass('main-container-base');
    setHallOrdersClass('hidden');
  };

  const showHallOrders = () => {
    setHallTablesClass('hidden');
    setHallOrdersClass('main-container-base');
  };

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

      <main className='main-container-base'>
        <div className='hall-options-container'>
          <InputRadio
            inputClass='input-hall-options hidden'
            inputId='hall-tables'
            inputName='hall-options'
            inputValue='hall-tables'
            inputOnChange={(event) => showTables(event.target.checked)}
            labelHtmlFor='hall-tables'
            labelClass='label-hall-options button-base'
            labelText='Anotar novo pedido'
          />
          <InputRadio
            inputClass='input-hall-options hidden'
            inputId='hall-orders'
            inputName='hall-options'
            inputValue='hall-orders'
            inputOnChange={(event) => showHallOrders(event.target.checked)}
            labelHtmlFor='hall-orders'
            labelClass='label-hall-options button-base'
            labelText='Acompanhar pedidos'
          />
        </div>

        <div className={hallTablesClass}>
          <HallTables
            tableNumber={tableNumber}
            clientName={clientName}
            inputRadioOnChange={(event) => setTableNumber(event.target.value)}
            inputTextOnChange={(event) => setClientName(event.target.value)}
            mainMenuOnClick={(event) => saveDataAndGoToMenu(event, '/menu-principal')}
            breakfastMenuOnClick={(event) => saveDataAndGoToMenu(event, '/menu-matinal')}
          />
        </div>

        <div className={hallOrdersClass}>

        </div>
      </main>
    </Fragment>
  );
}
