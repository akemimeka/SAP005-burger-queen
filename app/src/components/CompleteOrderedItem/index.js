/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import Button from '../Button';
import OrderedItem from '../OrderedItem';
// import ItemQuantity from '../ItemQuantity';

export default function CompleteOrderedItem({
  itemName,
  itemPrice,
  itemQuantity,
  minusButton,
  plusButton,
  itemTotalPrice,
}) {
  return (
    <Fragment>
      <OrderedItem
        itemNameText={itemName}
        itemPriceText={itemPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      />
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
