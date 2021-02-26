/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Modal({
  id = 'modal-base',
  onClose = () => { },
  children,
  modalSrc,
  modalText,
  buttonText,
}) {
  const handleOutsideClick = (event) => {
    if (event.target.id === id) onClose();
  };

  return (
    <Fragment>
      <div id={id} className='modal-overlay' onClick={handleOutsideClick}
      >
        <div className='modal-open'>{children}
          <div className='modal-image'>
            <img
              className='logo-modal'
              src={modalSrc}
              alt='Logo Hamburgueria Ipê'
            />
          </div>
          <div className='modal-body'>
            <p>{modalText}</p>
          </div>
          <div className='modal-footer'>
            <Link to="/">
              <button
                className='button-base  bg-color-yellow color-brown'
                onClick={onClose}
              >
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
