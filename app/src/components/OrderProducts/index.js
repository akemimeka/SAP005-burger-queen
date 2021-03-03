/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';

export default function OrderProducts({
  name,
  flavor,
  complement,
  qtd,
}) {
  return (
    <Fragment>
      <div className='order-card-item'>
        <p>{name} {qtd}</p>
        <p>{flavor ? `${flavor} + ${complement}` : ''}</p>
      </div>
    </Fragment>
  );
}
