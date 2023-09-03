'use client';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import PaymentDay from './modals/paymentDay/PaymentDay';
import PaymentFrequency from './modals/paymentFrequency/PaymentFrequency';
import ConfirmMessageModal from './modals/confirmMessage/ConfirmMessageModal';
import PaymentMethod from './modals/paymentMethod/PaymentMethod';
import PacModal from './modals/paymentMethod/pacModal/PacModal';
import PatModal from './modals/paymentMethod/patModal/PatModal';
import UploadResponse from './modals/paymentMethod/uploadResponse/UploadResponse';
import { Icon } from '@/components/Icon';

export default function PolizaPago() {
  const router = useRouter();

  const [paymentDayModal, setPaymentDayModal] = useState(false);
  const [paymentFrequencyModal, setPaymentFrequencyModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [paymentMethodModal, setPaymentMethodModal] = useState(false);
  const [pacModal, setPacModal] = useState(false);
  const [patModal, setPatModal] = useState(false);
  const [uploadResponseModal, setUploadResponseModal] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Datos de Pago Actuales</h2>
            <div className={styles.policyContainer}>
              <div className={styles.branch}>APV Ohio Life</div>

              <div className={styles.policy}>
                Póliza <span className={styles.number}>24501</span>
              </div>
            </div>
          </div>
          <section className={styles.section}>
            <div className={styles.sectionSubcontainer}>
              <div className={styles.imgContainer}>
                <Icon className={styles.icon} type={'biCalendar'} />
                <p>Día de Pago</p>
              </div>
              <div className={styles.input}>
                <p>Día 01 del mes</p>

                <Icon
                  className={styles.iconPencil}
                  type={'edit'}
                  onClick={() => setPaymentDayModal(true)}
                />
              </div>
              <div className={styles.text}>
                Recibirás un email confirmando tu solicitud en los próximos 15
                días.
              </div>
            </div>

            <div className={styles.sectionSubcontainer}>
              <div className={styles.imgContainer}>
                <Icon className={styles.icon} type={'biCalendar'} />
                <p>Frecuencia de Pago</p>
              </div>
              <div className={styles.input}>
                <p>mensual</p>

                <Icon
                  className={styles.iconPencil}
                  type={'edit'}
                  onClick={() => setPaymentFrequencyModal(true)}
                />
              </div>
              <div className={styles.text}>
                Recibirás un email confirmando tu solicitud en los próximos 15
                días.
              </div>
            </div>

            <div className={styles.sectionSubcontainer}>
              <div className={styles.imgContainer}>
                <Icon className={styles.icon} type={'creditCard'} />
                <p>Medio de Pago</p>
              </div>
              <div className={styles.input}>
                <p>PAC</p>
                <Icon
                  className={styles.iconPencil}
                  type={'edit'}
                  onClick={() => setPaymentMethodModal(true)}
                />
              </div>
              <div className={styles.text}>
                Recibirás un email confirmando tu solicitud en los próximos 15
                días.
              </div>
            </div>

            <div className={styles.sectionSubcontainer}>
              <div className={styles.imgContainer}>
                <Icon className={styles.icon} type={'BiDollarCircle'} />
                <p>Prima Pactada</p>
              </div>
              <div className={styles.input}>
                <p>UF 3.2</p>
                <Icon
                  className={styles.iconPencil}
                  type={'edit'}
                  onClick={() => setConfirmModal(true)}
                />
              </div>
              <div className={styles.text}>
                Recibirás un email confirmando tu solicitud en los próximos 15
                días.
              </div>
            </div>
            <div className={styles.line}></div>
            <p className={styles.bottomTextFirst}>
              (*) Las cartolas de cada mes estarán disponibles a partir del dia
              5 de ese mes.
            </p>
            <div className={styles.bottomTextContainer}>
              <p className={styles.bottomTextSecond}>
                Lorem ipsum dolor sit amet consectetur. Quam dictum diam tortor
                aliquam vestibulum neque malesuada enim tempor. Id dui nullam
                urna tempus ac leo. Lectus consectetur nec tellus etiam mauris
                at aliquam. Vitae sit enim etiam vestibulum morbi. Lorem ipsum
                dolor sit amet consectetur.
              </p>
              <br></br>
              <p className={styles.bottomTextSecond}>
                Letra chica legal // Se descarga todo en un solo PDF
              </p>
            </div>
          </section>
        </div>
        {paymentDayModal && (
          <PaymentDay
            setPaymentDayModal={setPaymentDayModal}
            setConfirmModal={setConfirmModal}
          />
        )}
        {paymentFrequencyModal && (
          <PaymentFrequency
            setPaymentFrequencyModal={setPaymentFrequencyModal}
            setConfirmModal={setConfirmModal}
          />
        )}
        {confirmModal && (
          <ConfirmMessageModal setConfirmModal={setConfirmModal} />
        )}
        {paymentMethodModal && (
          <PaymentMethod
            setPaymentMethod={setPaymentMethodModal}
            pacModal={pacModal}
            setPacModal={setPacModal}
            patModal={patModal}
            setPatModal={setPatModal}
            uploadResponseModal={uploadResponseModal}
            setUploadResponseModal={setUploadResponseModal}
          />
        )}
        {pacModal && (
          <PacModal
            setPacModal={setPacModal}
            setUploadResponseModal={setUploadResponseModal}
            uploadResponseModal={uploadResponseModal}
          />
        )}
        {patModal && (
          <PatModal
            setPatModal={setPatModal}
            setUploadResponseModal={setUploadResponseModal}
            uploadResponseModal={uploadResponseModal}
          />
        )}
        {uploadResponseModal && (
          <UploadResponse
            setUploadResponseModal={setUploadResponseModal}
            setConfirmModal={setConfirmModal}
          />
        )}
      </main>
    </>
  );
}
