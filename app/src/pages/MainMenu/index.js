import { React, Fragment } from 'react';
import Header from '../../components/Header';
import MenuItem from '../../components/MenuItem';
import logo from '../../images/logo-horizontal-brown.png';
import meatBurger from '../../images/menu-photos/burger-meat.png';
import chickenBurger from '../../images/menu-photos/burger-chicken.png';
import veggieBurger from '../../images/menu-photos/burger-veggie.png';
import frenchFries from '../../images/menu-photos/fries.png';
import onionRings from '../../images/menu-photos/onion-rings.png';
import water from '../../images/menu-photos/water.png';
import soda from '../../images/menu-photos/soda.png';
import InputRadio from '../../components/InputRadio';

export default function MainMenu() {
  return (
    <Fragment>
      <div className='menu-grid-container'>
        <Header
          headerClass='header-base header-main-menu bg-color-yellow'
          headerLogoLink='/salao'
          logoSrc={logo}
          workAreaClass='header-title-base color-brown'
          workAreaText='Menu Principal'
          divLogoutClass='align-right weight-500'
          workerRoleClass='header-role-base color-brown'
          workerRoleText='Atendente'
          workerNameClass='header-name-base color-brown'
          buttonLogoutClass='button-logout-base bg-color-light color-brown'
        />

        <section className='menu-grid-child main-menu-burgers bg-color-yellow-20'>
          <div className='burger-meat-options'>
            <MenuItem
              inputClass='input-radio'
              inputId='burger-meat'
              inputName='meat-options'
              inputRequired
              inputValue='red-meat'
              // inputChecked
              // inputOnChange
              labelHtmlFor='burger-meat'
              labelClass='label-meat-options'
              menuItemSrc={meatBurger}
              menuItemDescription='Hambúrguer de Carne'
              menuItemText='Carne'
            />

            <MenuItem
              inputClass='input-radio'
              inputId='burger-meat'
              inputName='meat-options'
              inputRequired
              inputValue='chicken-meat'
              // inputChecked
              // inputOnChange
              labelHtmlFor='burger-meat'
              labelClass='label-meat-options'
              menuItemSrc={chickenBurger}
              menuItemDescription='Hambúrguer de Frango'
              menuItemText='Frango'
            />

            <MenuItem
              inputClass='input-radio'
              inputId='burger-meat'
              inputName='meat-options'
              inputRequired
              inputValue='veggie-meat'
              // inputChecked
              // inputOnChange
              labelHtmlFor='burger-meat'
              labelClass='label-meat-options'
              menuItemSrc={veggieBurger}
              menuItemDescription='Hambúrguer Vegetariano'
              menuItemText='Vegetariano'
            />
          </div>

          <div className='item-options-wrap'>
            <InputRadio
              inputClass='input-radio input-item-options'
              inputId='burger-type-simple'
              inputName='burger-type' // (name tem que ser igual)
              inputRequired
              inputValue='simple-burger'
              // inputChecked
              // inputOnChange
              labelHtmlFor='burger-type-simple'
              labelClass='label-item-options'
              labelText='Simples'
            />
            <InputRadio
              inputClass='input-radio input-item-options'
              inputId='burger-type-double'
              inputName='burger-type' // (name tem que ser igual)
              inputRequired
              inputValue='double-burger'
              // inputChecked
              // inputOnChange
              labelHtmlFor='burger-type-double'
              labelClass='label-item-options'
              labelText='Duplo'
            />
          </div>

          <div className='item-options-wrap'>
            <InputRadio
              inputClass='input-radio input-item-options'
              inputId='extra-cheese'
              inputName='burger-extra'
              inputRequired
              inputValue='cheese'
              // inputChecked
              // inputOnChange
              labelHtmlFor='extra-cheese'
              labelClass='label-item-options'
              labelText='+ Queijo'
            />
            <InputRadio
              inputClass='input-radio input-item-options'
              inputId='extra-egg'
              inputName='burger-extra'
              inputRequired
              inputValue='egg'
              // inputChecked
              // inputOnChange
              labelHtmlFor='extra-egg'
              labelClass='label-item-options'
              labelText='+ Ovo'
            />
            <InputRadio
              inputClass='input-radio input-item-options'
              inputId='extra-none'
              inputName='burger-extra'
              inputRequired
              inputValue='none'
              // inputChecked
              // inputOnChange
              labelHtmlFor='extra-none'
              labelClass='label-item-options'
              labelText='Nenhum'
            />
          </div>
        </section>

        <section className='menu-grid-child main-menu-sides bg-color-yellow-20'>
          <div className='item-options-wrap'>
            <MenuItem
              menuItemSrc={frenchFries}
              menuItemDescription='Fritas'
              menuItemText='Fritas'
            />
            <MenuItem
              menuItemSrc={onionRings}
              menuItemDescription='Anéis de cebola'
              menuItemText='Anéis de cebola'
            />
          </div>
        </section>

        <section className='menu-grid-child main-menu-drinks bg-color-yellow-20'>
          <div className='item-options-wrap'>
            <MenuItem
              menuItemSrc={water}
              menuItemDescription='Água'
              menuItemText='Água'
            />
            <MenuItem
              menuItemSrc={soda}
              menuItemDescription='Refrigerante'
              menuItemText='Refrigerante'
            />
          </div>
          <div className='item-options-wrap'>
            <InputRadio
              inputClass='input-radio input-item-options'
              inputId='drink-water'
              inputName='drink-options'
              inputRequired
              inputValue='none'
              // inputChecked
              // inputOnChange
              labelHtmlFor='drink-water'
              labelClass='label-item-options'
              labelText='500ML'
            />
            <InputRadio
              inputClass='input-radio input-item-options'
              inputId='drink-sonda'
              inputName='drink-options'
              inputRequired
              inputValue='none'
              // inputChecked
              // inputOnChange
              labelHtmlFor='drink-sonda'
              labelClass='label-item-options'
              labelText='750ML'
            />
          </div>
        </section>
        <aside className='menu-grid-child main-menu-orders bg-color-yellow-20'>TOTAL</aside>
      </div>
    </Fragment>
  );
}
