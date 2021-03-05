/* eslint-disable no-console */
import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GoToPage, setLocalStorage } from '../../services';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal-brown.png';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import InputRadio from '../../components/InputRadio';

export default function Hall() {
  const history = useHistory();
  const [clientName, setClientName] = useState('');
  const [tableNumber, setTableNumber] = useState('');

  function menuButtonOnClick(event, path) {
    event.preventDefault();
    setLocalStorage('currentClient', clientName);
    setLocalStorage('currentTable', tableNumber);
    GoToPage(history, path);
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

      <main className='main-container-base'>
        <div className='info-message color-dark-green weight-500'>
          Selecione uma mesa e digite o nome do cliente
        </div>

        <section className='tables-grid-container'>
          <InputRadio
            inputClass='input-table hidden'
            inputId='table-01'
            inputName='tables'
            inputValue='01'
            inputChecked={tableNumber === '01'}
            inputOnChange={(event) => setTableNumber(event.target.value)}
            labelHtmlFor='table-01'
            labelClass='table-01 table-number bg-color-light-brown color-lightest'
            labelText='01'
          />

          <InputRadio
            inputClass='input-table hidden'
            inputId='table-02'
            inputName='tables'
            inputValue='02'
            inputChecked={tableNumber === '02'}
            inputOnChange={(event) => setTableNumber(event.target.value)}
            labelHtmlFor='table-02'
            labelClass='table-02 table-number bg-color-light-brown color-lightest'
            labelText='02'
          />

          <InputRadio
            inputClass='input-table hidden'
            inputId='table-03'
            inputName='tables'
            inputValue='03'
            inputChecked={tableNumber === '03'}
            inputOnChange={(event) => setTableNumber(event.target.value)}
            labelHtmlFor='table-03'
            labelClass='table-03 table-number bg-color-light-brown color-lightest'
            labelText='03'
          />

          <InputRadio
            inputClass='input-table hidden'
            inputId='table-04'
            inputName='tables'
            inputValue='04'
            inputChecked={tableNumber === '04'}
            inputOnChange={(event) => setTableNumber(event.target.value)}
            labelHtmlFor='table-04'
            labelClass='table-04 table-number bg-color-light-brown color-lightest'
            labelText='04'
          />

          <InputRadio
            inputClass='input-table hidden'
            inputId='table-05'
            inputName='tables'
            inputValue='05'
            inputChecked={tableNumber === '05'}
            inputOnChange={(event) => setTableNumber(event.target.value)}
            labelHtmlFor='table-05'
            labelClass='table-05 table-number bg-color-light-brown color-lightest'
            labelText='05'
          />

          <div className='smaller-tables-wrap'>
            <InputRadio
              inputClass='input-table hidden'
              inputId='table-06'
              inputName='tables'
              inputValue='06'
              inputChecked={tableNumber === '06'}
              inputOnChange={(event) => setTableNumber(event.target.value)}
              labelHtmlFor='table-06'
              labelClass='table-06 table-number bg-color-light-brown color-lightest'
              labelText='06'
            />

            <InputRadio
              inputClass='input-table hidden'
              inputId='table-07'
              inputName='tables'
              inputValue='07'
              inputChecked={tableNumber === '07'}
              inputOnChange={(event) => setTableNumber(event.target.value)}
              labelHtmlFor='table-07'
              labelClass='table-07 table-number bg-color-light-brown color-lightest'
              labelText='07'
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

            <div className='menu-buttons-wrap'>
              <Button
                buttonType='text'
                buttonClass='button-base button-to-menu bg-color-green color-lightest'
                buttonText='Menu principal'
                buttonOnClick={(event) => menuButtonOnClick(event, '/menu-principal')}
              />

              <Button
                buttonType='text'
                buttonClass='button-base button-to-menu bg-color-green color-lightest'
                buttonText='Menu matinal'
                buttonOnClick={(event) => menuButtonOnClick(event, '/menu-matinal')}
              />
            </div>

          </form>
        </section>
      </main>
    </Fragment>
  );
}
