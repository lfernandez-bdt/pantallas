import ModalDark from '@/components/ModalDark';
import styles from './pacModal.module.css';
import { Icon } from '@/components/Icon';

export default function PacModal({ setPacModal, setUploadResponseModal }) {
  return (
    <ModalDark buttons={false} onClose={() => setPacModal(false)}>
      <div className={styles.container}>
        <p className={styles.textBlack}>Cambiar a PAC sin convenio</p>
        <p className={styles.textLight}>
          (Pago automático a través de cuentas corrientes)
        </p>
        <p className={styles.text}>
          Debes adjuntar los siguientes documentos para poder gestionar tu
          solicitud.
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Copia de cédula de identidad del pagador (si no eres tú)
          </li>
          <li className={styles.li}>Autorización</li>
        </ul>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.btn}
            onClick={() => {
              setUploadResponseModal(true);
              setPacModal(false);
            }}
          >
            <Icon className={styles.clip} type={'clip'} />
            <p>Enviar Documentación</p>
          </button>
          <div className={styles.downloadContainer} onClick={() => {}}>
            <Icon className={styles.downloadIcon} type={'download'} />
            <p>Descargar Autorización</p>
          </div>
        </div>
      </div>
    </ModalDark>
  );
}
