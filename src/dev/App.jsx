import { ModalDialog} from '../lib';
import { useState } from 'react';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const afterOpenModal = () => {
    console.log('Modal ouverte');
  };

  return (
    <div>
      <h1>Test de la modale</h1>

      <ModalDialog
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        afterOpenModal={afterOpenModal}
        message="Ceci est un message dans la modale"
      />
    </div>
)
}