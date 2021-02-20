/* eslint-disable react/prop-types */
import React from 'react';

export default function Table({
  divId,
  divClass,
  divOnClick,
  pClass,
  tableNumber,
}) {
  return (
    <div
      id={divId}
      className={divClass}
      onClick={divOnClick}
    >
      <p className={pClass}>
        {tableNumber}
      </p>
    </div>
  );
}
