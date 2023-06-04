import React from "react";
import styled from "styled-components";


const Modal: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <>
            <ModalBackground/>
        <ModalContainer>
            <ModalContent>
                {children}
            </ModalContent>
        </ModalContainer>
        </>
    )
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: grey;
  opacity: 0.3;

  z-index: 800;
`

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  z-index: 800;
`

const ModalContent = styled.div`
 
`

export default Modal;