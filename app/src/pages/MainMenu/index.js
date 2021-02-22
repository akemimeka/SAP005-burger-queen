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
  const getTableNumber = localStorage.getItem('currentTable');
  const getClientName = localStorage.getItem('currentClient');
  const menuHeaderSubtitle = `Mesa ${getTableNumber} · ${getClientName}`;

  return (
    <Fragment>
      <div className='menu-grid-container'>
        <Header
          headerClass='header-base header-main-menu bg-color-yellow'
          headerLogoLink='/salao'
          logoSrc={logo}
          workAreaClass='header-title-base color-brown'
          workAreaText={menuHeaderSubtitle}
          divLogoutClass='align-right weight-500'
          workerRoleClass='header-role-base color-brown'
          workerRoleText='Atendente'
          workerNameClass='header-name-base color-brown'
          buttonLogoutClass='button-logout-base bg-color-light color-brown'
        />

        <section className='menu-grid-child main-menu-burgers bg-color-yellow-20'>
          <div className='itens-main-title'>Hambúrgueres</div>
          <div className='burger-meat-options'>

            <MenuItem
              inputClass='input-radio menu-item-name'
              inputId='burger-red-meat'
              inputName='meat-options'
              inputRequired
              inputValue='red-meat'
              labelHtmlFor='burger-red-meat'
              labelClass='label-item-box'
              menuItemSrc={meatBurger}
              menuItemDescription='Hambúrguer de Carne'
              menuItemText='Carne'
            />

            <MenuItem
              inputClass='input-radio menu-item-name'
              inputId='burger-chicken-meat'
              inputName='meat-options'
              inputRequired
              inputValue='chicken-meat'
              labelHtmlFor='burger-chicken-meat'
              labelClass='label-item-box'
              menuItemSrc={chickenBurger}
              menuItemDescription='Hambúrguer de Frango'
              menuItemText='Frango'
            />

            <MenuItem
              inputClass='input-radio menu-item-name'
              inputId='burger-veggie-meat'
              inputName='meat-options'
              inputRequired
              inputValue='veggie-meat'
              labelHtmlFor='burger-veggie-meat'
              labelClass='label-item-box'
              menuItemSrc={veggieBurger}
              menuItemDescription='Hambúrguer Vegetariano'
              menuItemText='Vegetariano'
            />
          </div>

          <div className='item-options-wrap'>
            <InputRadio
              inputClass='input-radio input-item-options'
              inputId='burger-type-simple'
              inputName='burger-type'
              inputRequired
              inputValue='simple-burger'
              labelHtmlFor='burger-type-simple'
              labelClass='label-item-options'
              labelText='Simples'
            />
            <InputRadio
              inputClass='input-radio input-item-options'
              inputId='burger-type-double'
              inputName='burger-type'
              inputRequired
              inputValue='double-burger'
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
              labelHtmlFor='extra-none'
              labelClass='label-item-options'
              labelText='Nenhum'
            />
          </div>
        </section>

        <section className='menu-grid-child main-menu-sides bg-color-yellow-20'>
          <div className='itens-main-title'>Acompanhamentos</div>
          <div className='item-options-wrap'>
            <MenuItem
              inputClass='input-radio menu-item-name'
              inputId='fries-sides'
              inputName='extra-sides'
              inputRequired
              inputValue='french-fries'
              labelHtmlFor='fries-sides'
              labelClass='label-itens-box'
              menuItemSrc={frenchFries}
              menuItemDescription='Fritas'
              menuItemText='Fritas'
            />
            <MenuItem
              inputClass='input-radio menu-item-name'
              inputId='onion-sides'
              inputName='extra-sides'
              inputRequired
              inputValue='onion-rings'
              labelHtmlFor='onion-sides'
              labelClass='label-itens-box'
              menuItemSrc={onionRings}
              menuItemDescription='Anéis de cebola'
              menuItemText='Anéis de cebola'
            />
          </div>
        </section>

        <section className='menu-grid-child main-menu-drinks bg-color-yellow-20'>
          <div className='itens-main-title'>Bebidas</div>
          <div className='item-options-wrap'>
            <MenuItem
              inputClass='input-radio menu-item-name'
              inputId='drink-water'
              inputName='drinks-options'
              inputRequired
              inputValue='water'
              labelHtmlFor='drink-water'
              labelClass='label-itens-box'
              menuItemSrc={water}
              menuItemDescription='Água'
              menuItemText='Água'
            />
            <MenuItem
              inputClass='input-radio menu-item-name'
              inputId='drink-soda'
              inputName='drinks-options'
              inputRequired
              inputValue='soda'
              labelHtmlFor='drink-soda'
              labelClass='label-itens-box'
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
              labelHtmlFor='drink-water'
              labelClass='label-item-box'
              labelText='500ML'
            />
            <InputRadio
              inputClass='input-radio input-item-options'
              inputId='drink-sonda'
              inputName='drink-options'
              inputRequired
              inputValue='none'
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
