/* eslint-disable react/prop-types */
import React from 'react';

export default function Table({
  divClass,
  divOnClick,
  pClass,
  tableNumber,
}) {
  return (
    <div
      className={divClass}
      onClick={divOnClick}
    >
      <p className={pClass}>
        {tableNumber}
      </p>
    </div>
  );
}
