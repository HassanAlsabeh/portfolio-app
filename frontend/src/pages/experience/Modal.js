import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import ReactDOM from "react-dom"
import "./modal.css";
const Background = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.3);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top:0;
right: 0;
`;

const ModalWrapper = styled.div`
  width: 900px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
export const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();
  
    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });
  
    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
          console.log('I pressed');
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );
  
    
    return  ReactDOM.createPortal(
      <>
    
        {showModal ? (
          <div className="gkoscd">
          <Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
               {/*} <ModalImg src={require('./react-node.png')} alt='camera' />*/}
               <ModalImg src='https://www.icoldo.com/wordpress/wp-content/uploads/2018/02/js_node_js_react_logos-300x225.png' alt='camera' />
                <ModalContent>
                  <h1>Are you ready?</h1>
                  <p>Description about experience </p>
                 {/* <button>Join Now</button>//*/}
                </ModalContent>
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                />
              </ModalWrapper>
            </animated.div>
          </Background>
          </div>
        ) : null}
        
      </>,
        document.getElementById("popup")
    );
  };