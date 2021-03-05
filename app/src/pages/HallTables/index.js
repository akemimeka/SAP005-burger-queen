/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import Button from '../../components/Button';
import InputRadio from '../../components/InputRadio';
import InputText from '../../components/InputText';

export default function HallTables({
  tableNumber,
  clientName,
  inputRadioOnChange,
  inputTextOnChange,
  mainMenuOnClick,
  breakfastMenuOnClick,
}) {
  return (
    <Fragment>
      <div className='tables-main-container'>
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
            inputOnChange={inputRadioOnChange}
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
            inputOnChange={inputRadioOnChange}
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
            inputOnChange={inputRadioOnChange}
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
            inputOnChange={inputRadioOnChange}
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
            inputOnChange={inputRadioOnChange}
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
              inputOnChange={inputRadioOnChange}
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
              inputOnChange={inputRadioOnChange}
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
              inputOnChange={inputTextOnChange}
            />

            <div className='menu-buttons-wrap'>
              <Button
                buttonType='text'
                buttonClass='button-base button-to-menu bg-color-green color-lightest'
                buttonText='Menu principal'
                buttonOnClick={mainMenuOnClick}
              />

              <Button
                buttonType='text'
                buttonClass='button-base button-to-menu bg-color-green color-lightest'
                buttonText='Menu matinal'
                buttonOnClick={breakfastMenuOnClick}
              />
            </div>
          </form>
        </section>
      </div>
    </Fragment>
  );
}
