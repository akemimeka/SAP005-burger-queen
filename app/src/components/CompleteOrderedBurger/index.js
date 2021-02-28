/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import ItemQuantity from '../ItemQuantity';
import OrderedItem from '../OrderedItem';

export default function OrderedBurger({ item }) {
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
      <ItemQuantity
        item={item}
      />
    </Fragment>
  );
}
