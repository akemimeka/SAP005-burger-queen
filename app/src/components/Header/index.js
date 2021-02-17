/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export default function Header({
  headerClass,
  headerLink,
  logoClass,
  logoSrc,
  workAreaClass,
  workAreaText,
  divLogoutClass,
  workerRoleClass,
  workerRoleText,
  workerNameClass,
  workerNameText,
  buttonLogoutClass,
}) {
  return (
    <header className={headerClass}>
      <Link to={headerLink}>
        <h1>
          <img
            className={logoClass}
            src={logoSrc}
            alt='Logo Hamburgueria Ipê'
          />
        </h1>
      </Link>
      <h2 className={workAreaClass}>{workAreaText}</h2>
      <div className={divLogoutClass}>
        <p className={workerRoleClass}>{workerRoleText}</p>
        <p className={workerNameClass}>{workerNameText}</p>
        <Button
          type='text'
          className={buttonLogoutClass}
          buttonText='Sair'
        />
      </div>
    </header>
  );
}
