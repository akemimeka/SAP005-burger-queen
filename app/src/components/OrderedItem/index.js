/* eslint-disable react/prop-types */
import { React } from 'react';

export default function OrderedItem({
  itemNameText,
  itemPriceText,
}) {
  return (
    <div className='ordered-item-wrap'>
      <p className='ordered-item-name'>
        {itemNameText}
      </p>
      <p className='ordered-item-price'>
        {itemPriceText}
      </p>
    </div>
  );
}
