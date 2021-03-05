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
  updateOrderToProcessing,
  updateOrderToReady,
  children,
}) {
  return (
    <Fragment>
      <div className='order-card-wrap bg-color-yellow-20'>
        {orderStatus === 'pending'
          && <div className='order-status weight-500 bg-color-pending color-lightest'>Pendente</div>}
        {orderStatus === 'processing'
          && <div className='order-status weight-500 bg-color-yellow color-brown'>Em andamento</div>}
        {(orderStatus === 'ready' || orderStatus === 'done')
          && <div className='order-status weight-500 bg-color-green color-lightest'>Pronto para servir</div>}

        <div className='order-card-info color-brown'>
          <p className='order-card-info-item'>#{orderNumber} • Mesa 0{tableNumber} • {clientName}</p>
          <p className='order-card-info-item'>Atendente {GetHallWorkerName(workerId)}</p>
          <p className='order-card-info-item'>Entrada: {ConvertDate(orderCreatedAt)} às {ConvertTime(orderCreatedAt)}</p>
          {/* <p className=''>Processado {orderProcessed}</p>
          <p className=''>Última atualização {updatedAt}</p> */}
        </div>

        <hr className='dividing-line bg-color-dark-brown'></hr>

        <div className='order-card-products'>
          {children}
        </div>

        <div className='order-card-buttons'>
          {orderStatus === 'pending'
            && <Button
              buttonType='text'
              buttonClass='button-base button-medium bg-color-yellow color-brown'
              buttonText='Em Preparo'
              buttonOnClick={updateOrderToProcessing}
            />}
          {orderStatus === 'processing'
            && <Button
              buttonType='text'
              buttonClass='button-base button-medium bg-color-green color-lightest'
              buttonText='Pronto'
              buttonOnClick={updateOrderToReady}
            />}
        </div>
      </div>
    </Fragment>
  );
}
