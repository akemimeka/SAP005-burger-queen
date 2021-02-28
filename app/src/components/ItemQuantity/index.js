/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react';
import Button from '../Button';

export default function ItemQuantity({ item }) {
  const [itemQuantity, setItemQuantity] = useState(1);

  const minusButton = () => {
    setItemQuantity(itemQuantity - 1);
  };

  const plusButton = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const itemTotalPrice = (itemQuantity * item.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  return (
    <Fragment>
      <div className='item-quantity-container'>
        <div className='item-quantity-buttons-wrap'>
          <Button
            buttonType='text'
            buttonClass='button-base item-quantity-button bg-color-dark-brown color-lightest'
            buttonOnClick={minusButton}
            buttonText='–'
          />
          <p className='item-quantity-number color-brown'>x {itemQuantity}</p>
          <Button
            buttonType='text'
            buttonClass='button-base item-quantity-button bg-color-dark-brown color-lightest'
            buttonOnClick={plusButton}
            buttonText='+'
          />
        </div>
        <p className='item-total-value color-dark-green'>
          {itemTotalPrice}
        </p>
      </div>
      <hr className='dividing-line last-line bg-color-green'></hr>
    </Fragment>
  );
}
