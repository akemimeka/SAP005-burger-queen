/* eslint-disable react/prop-types */
import React from 'react';

export default function InputText({
  divWrapClass,
  labelClass,
  labelText,
  inputRequired,
  inputType,
  inputValue,
  inputMinLength,
  inputPlaceholder,
  inputClass,
  inputOnChange,
}) {
  return (
    <div className={divWrapClass}>
      <label className={labelClass}>
        {labelText}
      <input
        required={inputRequired}
        type={inputType}
        value={inputValue}
        minLength={inputMinLength}
        placeholder={inputPlaceholder}
        className={inputClass}
        onChange={inputOnChange}
      />
      </label>
    </div>
  );
}
