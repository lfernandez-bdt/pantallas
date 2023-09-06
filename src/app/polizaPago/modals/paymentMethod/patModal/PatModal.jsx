import ModalDark from '@/components/ModalDark';
import styles from './patModal.module.css';
import { Icon } from '@/components/Icon';
import { useState } from 'react';

export default function PatModal({ setPatModal, setUploadResponseModal }) {
  const [accept, setAccept] = useState(false);

  return (
    <ModalDark buttons={false} onClose={() => setPatModal(false)}>
      <div className={styles.container}>
        <p className={styles.textBlack}>Cambiar a PAT</p>
        <p className={styles.textLight}>
          (Pago automático a través de tarjeta de crédito)
        </p>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            Puedes realizar la solicitud a traves desde éste portal, para ello
            necesitarás aceptar{' '}
            <span className={styles.underline}>
              {' '}
              los siguientes términos y condiciones{' '}
            </span>
          </p>
        </div>
        <div className={styles.terms}>
          {accept ? (
            <div
              className={styles.iconCheckContainer}
              onClick={() => setAccept(false)}
            >
              <Icon className={styles.iconCheck} type={'check'} />
            </div>
          ) : (
            <div
              className={styles.iconCheckContainerFalse}
              onClick={() => setAccept(true)}
            ></div>
          )}
          <p>Acepto los términos y condiciones</p>
        </div>
        <p className={styles.textDocs}>
          Ahora, debes enviar los siguientes documentos para que podamos
          procesar tu solicitud
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>Imagen de Tarjeta de Crédito</li>
          <li className={styles.li}>
            Copia de cédula de identidad (si no eres tu el pagador)
          </li>
          <li className={styles.li}>
            Autorización de Cambio de Medio de Pago PAT
          </li>
        </ul>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.btn}
            onClick={() => {
              setUploadResponseModal(true);
              setPatModal(false);
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
