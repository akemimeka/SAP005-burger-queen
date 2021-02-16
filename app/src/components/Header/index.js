/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({
  headerClassName,
  headerLink,
  logoClassName,
  logoSrc,
  subtitleClassName,
  subtitleText,
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
    </header>
  );
}
