import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';
import ModalOverlay from './modal-overlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';

import styles from './Modal.module.css';

function Modal({ children, onClose }) {
  const location = useLocation();
  const background = location.state && location.state.background;
  const modalClass = background
    ? `${styles.modal} ${styles.modal_dark}`
    : `${styles.modal}`;

  useEffect(() => {
    const handleEscKeyDown = (e) => 'Escape' === e.key && onClose();
    window.addEventListener('keydown', handleEscKeyDown);
    return () => document.removeEventListener('keydown', handleEscKeyDown);
  }, [onClose]);

  const modalRoot = document.getElementById('app-modals');

  const modal = (
    <>
      <ModalOverlay onClose={onClose}></ModalOverlay>
      <div className={`${modalClass}`}>
        <button type="button" className={styles.close} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </>
  );

  return ReactDOM.createPortal(modal, modalRoot);
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
