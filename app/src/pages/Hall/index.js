import React, { Fragment } from 'react';
import Header from '../../components/Header';
import logo from '../../images/logo-horizontal.png';

export default function Hall() {
  return (
    <Fragment>
      <Header
        headerClassName='signup-header'
        headerLink='/'
        logoClassName='logo-signup'
        logoSrc={logo}
        subtitleClassName='subtitle-base signup-subtitle'
        subtitleText='Salão'
      />
    </Fragment>
  );
}
