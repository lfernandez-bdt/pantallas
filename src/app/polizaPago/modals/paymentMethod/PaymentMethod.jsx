import ModalDark from '@/components/ModalDark';
import styles from './paymentMethod.module.css';
import { Icon } from '@/components/Icon';

export default function PaymentMethod({
  setPaymentMethod,
  setPacModal,
  setPatModal,
}) {
  return (
    <ModalDark buttons={false} onClose={() => setPaymentMethod(false)}>
      <div className={styles.container}>
        <Icon className={styles.checkboxIcon} type={'BiDollarCircle'} />
        <p className={styles.text}>
          Elige tu medio de pago para la <strong> Póliza 24501:</strong>
        </p>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.btn}
            onClick={() => {
              setPacModal(true);
              setPaymentMethod(false);
            }}
          >
            PAC
          </button>
          <button
            className={styles.btn}
            onClick={() => {
              setPatModal(true);
              setPaymentMethod(false);
            }}
          >
            PAT
          </button>
        </div>
      </div>
    </ModalDark>
  );
}
