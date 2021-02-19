/* eslint-disable react/prop-types */
import React from 'react';

export default function MenuItem({
  menuItemSrc,
  menuItemDescription,
  menuItemText,
}) {
  return (
    <div className='menu-item-wrap'>
      <img
        className='menu-item-image'
        src={menuItemSrc}
        alt={menuItemDescription}
      />
      <div className='menu-item-title'>
        <p className='menu-item-name'>{menuItemText}</p>
      </div>
    </div>
  );
}
