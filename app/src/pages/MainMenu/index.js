import { React, Fragment } from 'react';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal-brown.png';
import YellowBox from '../../components/YellowBox';

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
      <YellowBox

        divYellowBoxMainMenu='yellow-box-main-menu'
        divYellowBoxItens='yellow-box-itens'
        divYellowBoxSides='yellow-box-sides'
        divYellowBoxDrinks='yellow-box-drinks'
        divYellowBoxOrder='yellow-box-order'
      />
    </Fragment>
  );
}
