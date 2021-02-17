/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export default function Header({
  headerClassName,
  headerLink,
  logoClassName,
  logoSrc,
  workAreaClassName,
  workAreaText,
  divLogoutClassName,
  workerRoleClassName,
  workerRoleText,
  workerNameClassName,
  workerNameText,
  buttonLogoutClassName,
}) {
  return (
    <header className={headerClassName}>
      <Link to={headerLink}>
        <h1>
          <img
            className={logoClassName}
            src={logoSrc}
            alt='Logo Hamburgueria Ipê'
          />
        </h1>
      </Link>
      <h2 className={workAreaClassName}>{workAreaText}</h2>
      <div className={divLogoutClassName}>
        <p className={workerRoleClassName}>{workerRoleText}</p>
        <p className={workerNameClassName}>{workerNameText}</p>
        <Button
          type='text'
          className={buttonLogoutClassName}
          buttonText='Sair'
        />
      </div>
    </header>
  );
}
