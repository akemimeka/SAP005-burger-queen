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
              menuItemSrc={meatBurger}
              menuItemDescription='Hambúrguer de Carne'
              menuItemText='Carne'
            />
            <MenuItem
              menuItemSrc={chickenBurger}
              menuItemDescription='Hambúrguer de Frango'
              menuItemText='Frango'
            />
            <MenuItem
              menuItemSrc={veggieBurger}
              menuItemDescription='Hambúrguer Vegetariano'
              menuItemText='Vegetariano'
            />
          </div>

          <div className='burger-types-wrap'>
            <InputRadio
              inputClass='input-radio burger-types-wrap'
              inputId='extra-simple-burger'
              inputName='meat-burgers-sides' // (name tem que ser igual)
              inputRequired
              inputValue='simple-burger'
              // inputChecked
              // inputOnChange
              labelHtmlFor='simple-burger'
              labelClass='base-extras-radio-menu'
              labelText='Simples'
            />
            <InputRadio
              inputClass='input-radio burger-types'
              inputId='extra-double-burger'
              inputName='meat-burgers-sides' // (name tem que ser igual)
              inputRequired
              inputValue='double-burger'
              // inputChecked
              // inputOnChange
              labelHtmlFor='double-burger'
              labelClass='base-extras-radio-menu'
              labelText='Duplo'
            />
          </div>

          <div className='extras-wrap'>
            <InputRadio
              inputClass='input-radio extras-wrap'
              inputId='extra-cheese'
              inputName='extra-sides'
              inputRequired
              inputValue='cheese'
              // inputChecked
              // inputOnChange
              labelHtmlFor='side-plus-cheese'
              labelClass='base-extras-radio-menu'
              labelText=' + Queijo'
            />
            <InputRadio
              inputClass='input-radio extras-wrap'
              inputId='extra-egg'
              inputName='extra-sides'
              inputRequired
              inputValue='egg'
              // inputChecked
              // inputOnChange
              labelHtmlFor='extra-egg'
              labelClass='base-extras-radio-menu'
              labelText=' + Ovo'
            />
            <InputRadio
              inputClass='input-radio extras-wrap'
              inputId='extra-none'
              inputName='extra-sides'
              inputRequired
              inputValue='none'
              // inputChecked
              // inputOnChange
              labelHtmlFor='extra-none'
              labelClass='base-extras-radio-menu'
              labelText='Nenhum'
            />
          </div>
        </section>

        <section className='menu-grid-child main-menu-sides bg-color-yellow-20'>
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
        </section>

        <section className='menu-grid-child main-menu-drinks bg-color-yellow-20'>
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
        </section>
        <aside className='menu-grid-child main-menu-orders bg-color-yellow-20'>TOTAL</aside>
      </div>
    </Fragment>
  );
}
