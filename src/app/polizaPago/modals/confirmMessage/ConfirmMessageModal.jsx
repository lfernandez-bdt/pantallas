import ModalDark from '@/components/ModalDark';
import styles from './confirmMessageModal.module.css';
import { Icon } from '@/components/Icon';

export default function ConfirmMessageModal({ setConfirmModal }) {
  return (
    <ModalDark buttons={false} onClose={() => setConfirmModal(false)}>
      <div className={styles.container}>
        <Icon className={styles.checkboxIcon} type={'checkbox'} />
        <div className={styles.textContainer}>
          <p className={styles.text}>
            ¡Hemos recibido tu solicitud! Recibirás un email con el progreso de
            la misma dentro de los próximos 15 días.
          </p>
        </div>
      </div>
    </ModalDark>
  );
}
