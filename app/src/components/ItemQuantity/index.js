/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import Button from '../Button';

export default function ItemQuantity({
  minusButton,
  itemQuantityText,
  plusButton,
  itemTotalValue,
}) {
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
          <p className='item-quantity-number color-brown'>x {itemQuantityText}</p>
          <Button
            buttonType='text'
            buttonClass='button-base item-quantity-button bg-color-dark-brown color-lightest'
            buttonOnClick={plusButton}
            buttonText='+'
          />
        </div>
        <p className='item-total-value color-dark-green'>{itemTotalValue}</p>
      </div>
      <hr className='dividing-line last-line bg-color-green'></hr>
    </Fragment>
  );
}
