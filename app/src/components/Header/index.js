/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

export default function Header({
  headerClassName,
  headerLink,
  logoClassName,
  logoSrc,
  subtitleClassName,
  subtitleText,
  subtitleWorkerRole,
  subtitleWorkerName,
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
      <h2 className={subtitleClassName}>{subtitleText}</h2>
      <div>
        <p>{subtitleWorkerRole}</p>
        <p>{subtitleWorkerName}</p>
      </div>
      <Button
      />
    </header>
  );
}
