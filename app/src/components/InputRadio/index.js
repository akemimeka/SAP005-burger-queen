/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';

export default function InputRadio({
  inputClassName,
  inputId,
  inputName,
  inputRequired,
  inputValue,
  inputOnChange,
  labelHtmlFor,
  labelClassName,
  labelText,
}) {
  return (
    <Fragment>
      <input
        type='radio'
        className={inputClassName}
        id={inputId}
        name={inputName}
        required={inputRequired}
        value={inputValue}
        onChange={inputOnChange}
      />
      <label htmlFor={labelHtmlFor} className={labelClassName}>
        {labelText}
      </label>
    </Fragment>
  );
}
