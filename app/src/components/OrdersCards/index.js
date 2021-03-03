/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { GetHallWorkerName, ConvertDate, ConvertTime } from '../../services';
import Button from '../Button';

export default function OrderCard({
  clientName,
  workerId,
  tableNumber,
  orderStatus,
  orderProcessed,
  orderCreatedAt,
  orderNumber,
  updatedAt,
  updateOrderToDoing,
  updateOrderToDone,
  children,
}) {
  return (
    <Fragment>
      <div className='orders-cards-wrap'>
        <div className=''>
          <p className=''>Pedido #{orderNumber}</p>
          <p className=''>Mesa 0{tableNumber} • Cliente {clientName}</p>
          <p className=''>Atendente {GetHallWorkerName(workerId)}</p>
        </div>
        <div className=''>
          <p className=''>
            <span>Status atual: </span>
            {orderStatus === 'pending' && <span>pendente</span>}
            {orderStatus === 'processing' && <span>em andamento</span>}
          </p>
          <p className=''>Data {ConvertDate(orderCreatedAt)}</p>
          <p className=''>Horário: {ConvertTime(orderCreatedAt)}</p>
          <p className=''>Processado {orderProcessed}</p>
          <p className=''>Última atualização {updatedAt}</p>
          <div className='order-cards-footer'>
            {
              orderStatus === 'pending'
              && <Button
                buttonType='text'
                buttonClass='button-base button-medium bg-color-yellow color-brown'
                buttonText='Em Preparo'
                buttonOnClick={updateOrderToDoing}
              />
            }
            {
              orderStatus === 'processing'
              && <Button
                buttonType='text'
                buttonClass='button-base button-medium bg-color-green color-lightest'
                buttonOnClick={updateOrderToDone}
                buttonText='Pronto'
              />
            }
          </div>
        </div>
        {children}
      </div>
    </Fragment>
  );
}
