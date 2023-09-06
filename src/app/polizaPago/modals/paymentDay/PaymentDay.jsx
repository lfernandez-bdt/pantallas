import ModalDark from '@/components/ModalDark';
import styles from './paymentDay.module.css';
import { useState } from 'react';
import { Icon } from '@/components/Icon';

export default function PaymentDay({ setPaymentDayModal, setConfirmModal }) {
  const [checked, setChecked] = useState({ top: false, bottom: true });

  function onCancel() {
    setPaymentDayModal(false);
  }

  function onConfirm() {
    setPaymentDayModal(false);
    setConfirmModal(true);
  }

  const btnLeft = 'Cancelar';
  const btnRight = 'Confirmar';

  return (
    <ModalDark
      buttons={true}
      onClose={setPaymentDayModal}
      onClickLeft={onCancel}
      onClickRight={onConfirm}
      titleLeft={btnLeft}
      titleRight={btnRight}
      confirmBtn={true}
    >
      <div className={styles.container}>
        <Icon className={styles.calendar} type={'biCalendar'} />
        <p className={styles.title}>
          Elige tu fecha de pago para la{' '}
          <strong className={styles.strong}>Póliza 24501</strong>:
        </p>
        <div className={styles.checkContainer}>
          <p className={styles.text}>Día 01 del mes</p>
          <div
            className={checked.top ? styles.checkActive : styles.check}
            onClick={() => setChecked({ top: true, bottom: false })}
          >
            {checked.top && (
              <Icon className={styles.checkIcon} type={'check'} />
            )}
          </div>
        </div>
        <div className={styles.checkContainer}>
          <p className={styles.text}>Día 15 del mes</p>
          <div
            className={checked.bottom ? styles.checkActive : styles.check}
            onClick={() => setChecked({ top: false, bottom: true })}
          >
            {checked.bottom && (
              <Icon className={styles.checkIcon} type={'check'} />
            )}
          </div>
        </div>
      </div>
    </ModalDark>
  );
}
