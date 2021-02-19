import { React, Fragment } from 'react';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal-brown.png';

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
          workerRoleText={'Atendente'}
          workerNameClass='header-name-base color-brown'
          workerNameText={'Jussara Silva'}
          buttonLogoutClass='button-logout-base bg-color-light color-brown'
          // buttonLogoutOnClick={''}
        />

        <section className='menu-grid-child main-menu-burgers bg-color-yellow-20'>BURGS</section>

        <section className='menu-grid-child main-menu-sides bg-color-yellow-20'>ACOMPANHAMENTOS</section>

        <section className='menu-grid-child main-menu-drinks bg-color-yellow-20'>DRINKS</section>

        <aside className='menu-grid-child main-menu-orders bg-color-yellow-20'>TOTAL</aside>
      </div>
    </Fragment>
  );
}
