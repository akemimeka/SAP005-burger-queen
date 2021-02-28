/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import OrderedItem from '../OrderedItem';
import ItemQuantity from '../ItemQuantity';

export default function CompleteOrderedItem({ item }) {
  return (
    <Fragment>
      <OrderedItem
        itemNameText={item.name}
        itemPriceText={(item.price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      />
      <ItemQuantity
        item={item}
      />
    </Fragment>
  );
}
