/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import Button from '../Button';
// import ItemQuantity from '../ItemQuantity';
import OrderedItem from '../OrderedItem';

export default function CompleteOrderedBurger({
  item,
  index,
  minusButton,
  itemQuantity,
  plusButton,
  itemTotalPrice,
}) {
  return (
    <Fragment>
      <OrderedItem
        itemNameText={`Hambúrg. ${item.flavor}`}
      />
      <OrderedItem
        itemNameText={item.complement !== null
          ? `${item.name.slice(11)} + ${item.complement}`
          : `${item.name.slice(11)} • Sem extra`}
        itemPriceText={(item.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
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
            buttonOnClick={(event) => plusButton(event, index)}
            buttonText='+'
          />
        </div>
        <p className='item-total-value color-dark-green'>
          {() => itemTotalPrice(item)}
        </p>
      </div>
      <hr className='dividing-line last-line bg-color-green'></hr>
    </Fragment>
  );
}
