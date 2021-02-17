import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import logo from '../../images/logo-horizontal.png';

export default function Kitchen() {
  return (
    <Fragment>
      <Header
        headerClassName='signup-header header-kitchen'
        headerLink='/'
        logoClassName='logo-signup'
        logoSrc={logo}
        subtitleClassName='subtitle-base signup-subtitle'
        subtitleText='Salão'
        subtitleWorkerRole='CHEF'
        subtitleWorkerName='Jussara Silva'
      />
      <Button
        type='submit'
        className='button-base button-primary button-centered'
        buttonText='SAIR'
      />
    </Fragment>
  );
}
