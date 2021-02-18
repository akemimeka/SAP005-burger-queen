/* eslint-disable react/prop-types */
import React from 'react';

export default function Button({
  buttonType,
  buttonClass,
  buttonOnClick,
  buttonText,
}) {
  return (
    <button
      type={buttonType}
      className={buttonClass}
      onClick={buttonOnClick}
    >
      {buttonText}
    </button>
  );
}
