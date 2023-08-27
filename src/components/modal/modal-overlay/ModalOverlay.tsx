import styles from './ModalOverlay.module.css';

function ModalOverlay({ onClose }: { onClose: () => void }) {
  return <div onClick={onClose} className={styles.overlay}></div>;
}

export default ModalOverlay;
