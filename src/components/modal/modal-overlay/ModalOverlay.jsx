import styles from './ModalOverlay.module.css';

function ModalOverlay({ onClose }) {
  return (
    <div onClick={ onClose } className={ styles.overlay }></div>
  );
}

export default ModalOverlay;