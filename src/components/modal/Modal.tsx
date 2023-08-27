import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';
import ModalOverlay from './modal-overlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {
  FunctionComponent,
  PropsWithChildren,
  ReactPortal,
  useEffect,
} from 'react';
import { classnames } from '../../utils/helpers';

import styles from './Modal.module.css';

type TModalProps = {
  onClose: () => void;
};

const Modal: FunctionComponent<PropsWithChildren<TModalProps>> = ({
  children,
  onClose,
}): ReactPortal => {
  const location = useLocation();
  const isBackground = location.state && location.state.background;

  const modalClass = classnames({
    [styles.modal]: true,
    [styles.modal_dark]: isBackground,
  });

  useEffect(() => {
    const handleEscKeyDown = (e: KeyboardEvent) =>
      'Escape' === e.key && onClose();
    window.addEventListener('keydown', handleEscKeyDown);
    return () => document.removeEventListener('keydown', handleEscKeyDown);
  }, [onClose]);

  const modalRoot = document.getElementById('app-modals') as HTMLElement;

  const modal = (
    <>
      <ModalOverlay onClose={onClose}></ModalOverlay>
      <div className={modalClass}>
        <button type="button" className={styles.close} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </>
  );

  return ReactDOM.createPortal(modal, modalRoot);
};

export default Modal;
