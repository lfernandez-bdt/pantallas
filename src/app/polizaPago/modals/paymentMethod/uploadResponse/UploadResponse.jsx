import ModalDark from '@/components/ModalDark';
import styles from './uploadResponse.module.css';
import { Icon } from '@/components/Icon';

export default function UploadResponse({
  setUploadResponseModal,
  setConfirmModal,
}) {
  return (
    <ModalDark
      buttons={true}
      confirmBtn={true}
      titleLeft={'Adjuntar Otro'}
      titleRight={'Enviar'}
      onClickRight={() => {
        setUploadResponseModal(false);
        setConfirmModal(true);
      }}
      onClose={() => setUploadResponseModal(false)}
    >
      <div className={styles.container}>
        <p className={styles.text}>
          Estos son los documentos que has adjuntado
        </p>
        <div className={styles.fileContainer}>
          <div className={styles.file}></div>
          <div className={styles.crossContainer}>
            <Icon className={styles.cross} type={'cross'} />
          </div>
        </div>
        <div className={styles.fileContainer}>
          <div className={styles.file}></div>
          <div className={styles.crossContainer}>
            <Icon className={styles.cross} type={'cross'} />
          </div>
        </div>
      </div>
    </ModalDark>
  );
}
