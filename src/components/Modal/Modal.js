import React, { useEffect } from 'react';
import Modal from 'react-modal';

import closeSvg from '../../images/close.svg';

import styles from './Modal.module.scss';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    background: 'rgba(48, 62, 84, 0.8)',
    zIndex: '1',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    borderRadius: '35px',
  },
};

const CustomModal = ({ close, isOpen, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      style={customStyles}
      transparent={false}
    >
      <button type="button" className={styles.btnClose} onClick={close}>
        <img src={closeSvg} alt="close" />
      </button>
      {children}
    </Modal>
  );
};

export default CustomModal;
