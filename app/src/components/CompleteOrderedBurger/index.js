/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import OrderedItem from '../OrderedItem';
import ItemQuantity from '../ItemQuantity';

export default function CompleteOrderedBurger({
  itemFlavor,
  itemComplement,
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
        itemNameText={`Hambúrg. ${itemFlavor}`}
      />
      <OrderedItem
        itemNameText={itemComplement !== null
          ? `${itemName.slice(11)} + ${itemComplement}`
          : `${itemName.slice(11)} • Sem extra`}
        itemPriceText={(itemPrice).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      />
      <ItemQuantity
        minusButton={minusButton}
        plusButton={plusButton}
        itemQuantity={itemQuantity}
        itemTotalPrice={itemTotalPrice}
      />
    </Fragment>
  );
}
