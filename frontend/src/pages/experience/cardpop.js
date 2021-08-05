import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';
import { GlobalStyle } from './globalStyles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;


function Cardpop() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
   <>
   <Container>
     <Button onClick={openModal}>click here</Button>
     <Modal showModal={showModal} setShowModal={setShowModal}/>
     <GlobalStyle/>
   </Container>
   </>
  );
}

export default Cardpop;