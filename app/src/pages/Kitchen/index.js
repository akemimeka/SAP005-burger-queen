import React, { Fragment } from 'react';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal.png';

export default function Kitchen() {
  return (
    <Fragment>
      <Header
        headerClassName='header-base header-kitchen'
        headerLink='/'
        logoClassName='logo-signup'
        logoSrc={logo}
        workAreaClassName='header-work-area-base signup-subtitle'
        workAreaText='Cozinha'
        divLogoutClassName='logout-base'
        workerRoleClassName='logout-base logout-name-text'
        workerRoleText='Chef'
        workerNameClassName='logout-base logout-role-text'
        workerNameText='Jussara Silva'
      />
    </Fragment>
  );
}
