/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';

export default function OrdersCardsProducts({
  name,
  flavor,
  complement,
  qtd,
}) {
  return (
    <Fragment>
      <div className='order-cards-itens'>
        <p>{name}</p>
        <p>{flavor}</p>
        <p>{complement}</p>
        <p>{qtd}</p>
      </div>
    </Fragment>
  );
}
