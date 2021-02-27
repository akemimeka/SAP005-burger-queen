/* eslint-disable react/prop-types */
import React from 'react';

export default function MenuItem({
  menuItemSrc,
  menuItemDescription,
  menuItemText,
  inputClass,
  inputId,
  inputName,
  inputValue,
  inputChecked,
  inputOnChange,
  labelClass,
  itemClassName,
}) {
  return (
    <div className='menu-item-wrap'>
      <input
        type='radio'
        className={inputClass}
        id={inputId}
        name={inputName}
        value={inputValue}
        checked={inputChecked}
        onChange={() => inputOnChange(inputId)}
      />
      <label
        htmlFor={inputId}
        className={labelClass}
      >
        <img
          className='menu-item-image'
          src={menuItemSrc}
          alt={menuItemDescription}
        />
        <p className={itemClassName}>{menuItemText}</p>
      </label>
    </div>
  );
}
