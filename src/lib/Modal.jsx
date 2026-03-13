import styled from 'styled-components';

const ModalOverlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  margin: 0 auto;
  top: 0;
  left: 0;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalContent = styled.div`
  background-color: white;
  overflow: auto;
  height: auto;
  width: 70%;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 0 3rem 3rem 3rem;
  left: 50%;
  top: 0;
  position: absolute;
  transform: translateX(-50%);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.5);
`;

const ModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: sticky;
  z-index: 2;
  top: 1.5rem;
  margin: 0 0 0 auto;
  border-radius: 50%;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  background-color: white;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.55);
  padding: 0.3rem 0.8rem;
  &:hover {
    border-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
  }   
`;

export function ModalDialog ({ isOpen, title, closeModal, message }) {
    if (!isOpen) return null;
    return (
        <ModalOverlay>
            <ModalContent>
                <ModalCloseButton onClick={closeModal}>⨯</ModalCloseButton>
                <div className="modal-text">
                    <h2>{title}</h2>
                    <p>{message}</p>
                </div>      
            </ModalContent>
        </ModalOverlay>
    )
}

