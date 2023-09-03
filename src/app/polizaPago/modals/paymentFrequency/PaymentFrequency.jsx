import ModalDark from '@/components/ModalDark';
import styles from './paymentFrequency.module.css';
import { useState } from 'react';
import { Icon } from '@/components/Icon';

export default function PaymentFrequency({
  setPaymentFrequencyModal,
  setConfirmModal,
}) {
  const [checked, setChecked] = useState({
    monthly: true,
    quarterly: false,
    half: false,
    yearly: false,
  });

  function onCancel() {
    setPaymentFrequencyModal(false);
  }

  function onConfirm() {
    setPaymentFrequencyModal(false);
    setConfirmModal(true);
  }

  const btnLeft = 'Cancelar';
  const btnRight = 'Confirmar';

  return (
    <ModalDark
      buttons={true}
      onClose={setPaymentFrequencyModal}
      onClickLeft={onCancel}
      onClickRight={onConfirm}
      titleLeft={btnLeft}
      titleRight={btnRight}
      confirmBtn={true}
    >
      <div className={styles.container}>
        <Icon className={styles.calendar} type={'calendar'} />
        <p className={styles.title}>
          Elige tu frecuencia de pago para la
          <strong className={styles.strong}>Póliza 24501</strong>:
        </p>

        <div className={styles.checkContainer}>
          <p className={styles.text}>Mensual</p>
          <div
            className={checked.monthly ? styles.checkActive : styles.check}
            onClick={() =>
              setChecked({
                monthly: true,
                quarterly: false,
                half: false,
                yearly: false,
              })
            }
          >
            {checked.monthly && (
              <Icon className={styles.checkIcon} type={'check'} />
            )}
          </div>
        </div>

        <div className={styles.checkContainer}>
          <p className={styles.text}>Trimestral</p>
          <div
            className={checked.quarterly ? styles.checkActive : styles.check}
            onClick={() =>
              setChecked({
                monthly: false,
                quarterly: true,
                half: false,
                yearly: false,
              })
            }
          >
            {checked.quarterly && (
              <Icon className={styles.checkIcon} type={'check'} />
            )}
          </div>
        </div>

        <div className={styles.checkContainer}>
          <p className={styles.text}>Semestral</p>
          <div
            className={checked.half ? styles.checkActive : styles.check}
            onClick={() =>
              setChecked({
                monthly: false,
                quarterly: false,
                half: true,
                yearly: false,
              })
            }
          >
            {checked.half && (
              <Icon className={styles.checkIcon} type={'check'} />
            )}
          </div>
        </div>

        <div className={styles.checkContainer}>
          <p className={styles.text}>Anual</p>
          <div
            className={checked.yearly ? styles.checkActive : styles.check}
            onClick={() =>
              setChecked({
                monthly: false,
                quarterly: false,
                half: false,
                yearly: true,
              })
            }
          >
            {checked.yearly && (
              <Icon className={styles.checkIcon} type={'check'} />
            )}
          </div>
        </div>
      </div>
    </ModalDark>
  );
}
