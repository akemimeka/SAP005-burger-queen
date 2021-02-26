/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';

export default function InputRadioMenu({
  inputClass,
  inputId,
  inputDisabled,
  inputName,
  inputRequired,
  inputValue,
  inputChecked,
  inputOnChange,
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
        onChange={() => inputOnChange(inputId)}
      />
      <label htmlFor={inputId} className={labelClass}>
        {labelText}
      </label>
    </Fragment>
  );
}
