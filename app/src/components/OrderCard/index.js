/* eslint-disable max-len */
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
  orderCreatedAt,
  orderNumber,
  children,
  updateOrderToProcessing,
  updateOrderToReady,
  updateOrderToDone,
}) {
  const getOrderCreatedAt = new Date(orderCreatedAt);
  const getOrderProcessedAt = new Date(getOrderCreatedAt);
  const getOrderResidual = Math.abs(getOrderProcessedAt) - getOrderCreatedAt;
  const showOrderPrepTime = Math.floor((getOrderResidual / 1000) / 60);
  const timeToGetOrderDone = showOrderPrepTime === 60 ? `${getOrderResidual + 1}: 00` : `${getOrderResidual}:${showOrderPrepTime < 10 ? '0' : `${showOrderPrepTime}`}`;
  console.log('Tempo para preparar =', showOrderPrepTime);

  // const dateOne = new Date('orderCreatedAt');
  // const dateTwo = new Date('dateOne');
  // const msDifference = dateTwo - dateOne;
  // const minutes = Math.floor(msDifference / 1000 / 60);
  // console.log('Minutes between two dates =', minutes);

  return (
    <Fragment>
      <div className='order-card-wrap bg-color-light-yellow'>
        <div>
          {orderStatus === 'pending'
            && <div className='order-status weight-500 bg-color-pending color-lightest'>Pendente</div>}
          {orderStatus === 'processing'
            && <div className='order-status weight-500 bg-color-yellow color-brown'>Em andamento</div>}
          {(orderStatus === 'ready')
            && <div className='order-status weight-500 bg-color-green color-lightest'>Pronto para servir</div>}
          {(orderStatus === 'done')
            && <div className='order-status weight-500 bg-color-done color-lightest'>Servido</div>}
          <div className='order-card-info color-brown'>
            <p className='order-card-info-item'>#{orderNumber} • Mesa {tableNumber} • {clientName}</p>
            <p className='order-card-info-item'>Atendente {GetHallWorkerName(workerId)}</p>
            <p className='order-card-info-item'>Entrada: {ConvertDate(orderCreatedAt)} às {ConvertTime(orderCreatedAt)}</p>
            <p className='order-card-info-item'>Tempo de Preparo: {timeToGetOrderDone}</p>
          </div>

          <hr className='dividing-line bg-color-dark-brown'></hr>

          <div className='order-card-products'>
            {children}
          </div>
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
          {orderStatus === 'ready'
            && <Button
              buttonType='text'
              buttonClass='button-base button-medium bg-color-green color-lightest'
              buttonText='Servido'
              buttonOnClick={updateOrderToDone}
            />}
          {orderStatus === 'done'
            && <p className='order-done-msg weight-600 color-done'>Pedido finalizado</p>}
        </div>
      </div>
    </Fragment>
  );
}
