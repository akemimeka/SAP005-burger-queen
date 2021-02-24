/* eslint-disable react/prop-types */
import React, { useEffect, useCallback } from 'react';

export default function Modal({
  showModal,
  setShowModal,
  id = 'modal',
  onClose = () => { }, children,
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
    <div id='{id}' className='modal-wrap' onClick={handleOutsideClick}>
      <div className='modal-base'>
        <button className='modal-close-button' onClick={onClose}>Fechar</button>
        <div className='modal-body'>{children}</div>
      </div>
    </div>
  );
}
