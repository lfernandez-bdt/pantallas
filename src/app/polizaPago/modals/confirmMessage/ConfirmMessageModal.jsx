import ModalDark from '@/components/ModalDark';
import styles from './confirmMessageModal.module.css';
import { useState } from 'react';
import { Icon } from '@/components/Icon';

export default function ConfirmMessageModal({ setConfirmModal }) {
  return (
    <ModalDark buttons={false} onClose={() => setConfirmModal(false)}>
      <div className={styles.container}>bien!</div>
    </ModalDark>
  );
}
