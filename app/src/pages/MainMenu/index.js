import { React, Fragment } from 'react';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal-brown.png';

export default function MainMenu() {
  return (
    <Fragment>
      <Header
        headerClass='header-base bg-color-yellow'
        headerLogoLink='/salao'
        logoSrc={logo}
        workAreaClass='header-title-base color-brown'
        workAreaText='Menu Principal'
        divLogoutClass='align-right weight-500'
        workerRoleClass='header-role-base color-brown'
        workerRoleText={'Atendente'}
        workerNameClass='header-name-base color-brown'
        workerNameText={'Jussara Silva'}
        buttonLogoutClass='button-logout-base bg-color-light color-brown'
        buttonLogoutOnClick={''}
      />
      <div className='main-container-base yellow-box-main-menu'>
        <div className='yellow-box-itens'><h1>ITENS</h1></div>
        <div className='yellow-box-sides'><h1>ACOMPANHAMENTOS</h1></div>
        <div className='yellow-box-drinks'><h1>DRINKS</h1></div>
        <div className='yellow-box-order'><h1>TOTAL</h1></div>
      </div>
    </Fragment>
  );
}
