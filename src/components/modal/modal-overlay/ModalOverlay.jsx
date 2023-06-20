import { PropTypes } from 'prop-types';

import styles from './ModalOverlay.module.css';

function ModalOverlay({ onClose }) {
  return <div onClick={onClose} className={styles.overlay}></div>;
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
