/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react';
import Button from '../Button';

export default function OrdersCards({
  cardHeaderClass,
  cardBodyClass,
  clientName,
  tableNumber,
  orderStatus,
  orderCreatedAt,
  orderNumber,
  atendente,
  updatedAt,
  updateOrderToDoing,
  updateOrderToDone,
}) {
  return (
    <Fragment>
      <div className='orders-cards-wrap'>
        <div className={cardHeaderClass}>
          <p className={cardBodyClass}>Cliente: {clientName}</p>
          <p className={cardBodyClass}>Mesa: {tableNumber}</p>
        </div>
        <div className={cardBodyClass}>
          <p className={cardBodyClass}>Status: {orderStatus}</p>
          <p className={cardBodyClass}>CreatedAt: {orderCreatedAt}</p>
          <p className={cardBodyClass}>Número do Pedido: {orderNumber}</p>
          <p className={cardBodyClass}>Atendente: {atendente}</p>
          <p className={cardBodyClass}>updatedAt: {updatedAt}</p>

          <Button
            buttonType='text'
            buttonClass=''
            buttonText='Em Preparo'
            buttonOnClick={updateOrderToDoing}
          />

          <Button
            buttonType='text'
            buttonClass=''
            buttonOnClick={updateOrderToDone}
            buttonText='Pronto'
          />
        </div>
      </div>
    </Fragment >
  );
}

// {() => preparoBtn(index, order.status}}
