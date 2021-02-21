/* eslint-disable react/prop-types */
import React from 'react';

export default function MenuItem({
  menuItemSrc,
  menuItemDescription,
  menuItemText,
  inputClass,
  inputId,
  inputName,
  inputRequired,
  inputValue,
  inputChecked,
  inputOnChange,
  labelHtmlFor,
  labelClass,
  labelText,
}) {
  return (
    <div className='menu-item-wrap'>
      <input
        type='radio'
        className={inputClass}
        id={inputId}
        name={inputName}
        required={inputRequired}
        value={inputValue}
        checked={inputChecked}
        onChange={inputOnChange}
      />
      <label
        htmlFor={labelHtmlFor}
        className={labelClass}
      >
        <img
          className='menu-item-image'
          src={menuItemSrc}
          alt={menuItemDescription}
        />
        {labelText}
      </label>
      <div className='menu-item-title'>
        <p className='menu-item-name'>{menuItemText}</p>
      </div>
    </div>
  );
}
