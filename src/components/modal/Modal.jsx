import ReactDOM from 'react-dom';
import ModalOverlay from './modal-overlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';

import styles from './Modal.module.css';

function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e) => {
    if ('Escape' === e.key) {
      onClose();
    }
  }

  const modalRoot = document.getElementById('app-modals');

  const modal = (
    <>
      <ModalOverlay onClose={ onClose }></ModalOverlay>
      <div className={ styles.modal }>
        <button type="button" className={ styles.close } onClick={ onClose }>
          <CloseIcon type="primary" />
        </button>
        { children }
      </div>
    </>
  );

  return ReactDOM.createPortal(modal, modalRoot);
}

export default Modal;
