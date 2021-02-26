/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';

export default function InputRadio({
  inputClass,
  inputId,
  inputDisabled,
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
    <Fragment>
      <input
        type='radio'
        className={inputClass}
        id={inputId}
        disabled={inputDisabled}
        name={inputName}
        required={inputRequired}
        value={inputValue}
        checked={inputChecked}
        onChange={inputOnChange}
      />
      <label htmlFor={labelHtmlFor} className={labelClass}>
        {labelText}
      </label>
    </Fragment>
  );
}
