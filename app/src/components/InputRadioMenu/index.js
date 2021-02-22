/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';

export default function InputRadioMenu({
  inputClass,
  inputRequired,
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
        required={inputRequired}
        checked={inputChecked}
        onChange={inputOnChange}
      />
      <label htmlFor={labelHtmlFor} className={labelClass}>
        {labelText}
      </label>
    </Fragment>
  );
}
