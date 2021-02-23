/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useCallback, Fragment } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Background = styled.div`
width: 100%;
height: 100%;
background: rgba(0,0,0,0.8);
position: fixed;
display: flex;
justify-content: center;
align-itens: center;
`;

const ModalWrapper = styled.div`
width: 800px;
height: 500px;
box-shadow: 0 5px 16px
background: #fff;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index: 10;
border-radius: 10px;
`;

const ModalContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.8;
color: #141414;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
  });

  const closeModal = (event) => {
    if (modalRef.current === event.target) {
      setShowModal(false);
    }
  };

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
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h1>Olá rs</h1>
                <button>Click Me</button>
              </ModalContent>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </Fragment>
  );
};
