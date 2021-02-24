/* eslint-disable react/prop-types */
import React, { useEffect, useCallback, Fragment } from 'react';

export default function Modal({
  showModal,
  setShowModal,
  id = 'modal',
  onClose = () => { },
  children,
  buttonText,
}) {
  const handleOutsideClick = (event) => {
    if (event.target.id === id) onClose();
  };

  // Close with keyboard (Esc key)
  const keyPress = useCallback((event) => {
    if (event.key === 'Escape' && showModal) {
      setShowModal(false);
    }
  }, [setShowModal, showModal]);

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress],
  );

  return (
    <Fragment>
      <div id='{id}' className='modal-base' onClick={handleOutsideClick}>
        <div className='modal-wrap'>
          <div className='modal-content'>{children}
            <button
              className='button-base button-centered mg-top-2 bg-color-light-brown color-yellow'
              onClick={onClose}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
