/* eslint-disable react/prop-types */
import { React } from 'react';
import Button from '../Button';

export default function TotalAndSend({
  totalPriceValue,
  sendOrderButton,
  cancelOrderButton,
}) {
  return (
    <div className='total-and-send-container'>
      <hr className='dividing-line bg-color-green'></hr>
      <div className='order-total-wrap'>
        <p>Total</p>
        <p>{totalPriceValue}</p>
      </div>

      <div className='order-section-buttons-wrap'>
        <Button
          buttonType='text'
          buttonClass='button-base button-medium bg-color-green color-lightest'
          buttonOnClick={sendOrderButton}
          buttonText='Enviar'
        />

        <Button
          buttonType='text'
          buttonClass='button-base button-medium bg-color-dark-brown color-lightest'
          buttonOnClick={cancelOrderButton}
          buttonText='Cancelar'
        />
      </div>
    </div>
  );
}
