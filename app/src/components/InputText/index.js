/* eslint-disable react/prop-types */
import React from 'react';

export default function InputText({
  divWrapClassName,
  labelClassName,
  labelText,
  inputRequired,
  inputType,
  inputValue,
  inputMinLength,
  inputPlaceholder,
  inputClassName,
  inputOnChange,
}) {
  return (
    <div className={divWrapClassName}>
      <label className={labelClassName}>
        {labelText}
      <input
        required={inputRequired}
        type={inputType}
        value={inputValue}
        minLength={inputMinLength}
        placeholder={inputPlaceholder}
        className={inputClassName}
        onChange={inputOnChange}
      />
      </label>
    </div>
  );
}
