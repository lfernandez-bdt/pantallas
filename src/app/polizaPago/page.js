'use client';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ModalDark from '@/components/ModalDark';
import Confirm from '@/components/Confirm';
import { FaCalendar } from 'react-icons/fa';
import PaymentDay from './modals/paymentDay/PaymentDay';
import PaymentFrequency from './modals/paymentFrequency/PaymentFrequency';
import ConfirmMessageModal from './modals/confirmMessage/ConfirmMessageModal';

export default function PolizaPago() {
  const router = useRouter();

  const [paymentDayModal, setPaymentDayModal] = useState(false);
  const [paymentFrequencyModal, setPaymentFrequencyModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  useEffect(() => {}, []);

  const number = 24501;

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Datos de Pago Actuales</h2>
            <div className={styles.policyContainer}>
              <div className={styles.branch}>APV Ohio Life</div>

              <div className={styles.policy}>
                Póliza <span className={styles.number}>{number}</span>
              </div>
            </div>
          </div>
          <section className={styles.section}>
            <div className={styles.sectionSubcontainer}>
              <div className={styles.imgContainer}>
                <Image
                  src='/calendar_month.svg'
                  width={24}
                  height={24}
                  alt='Calendar'
                />
                <p>Día de Pago</p>
              </div>
              <div className={styles.input}>
                <p>Día 01 del mes</p>
                <Image
                  src='/pencil.svg'
                  width={36}
                  height={36}
                  alt='Pencil'
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
                <Image
                  src='/calendar_month.svg'
                  width={24}
                  height={24}
                  alt='Calendar'
                />
                <p>Frecuencia de Pago</p>
              </div>
              <div className={styles.input}>
                <p>mensual</p>
                <Image
                  src='/pencil.svg'
                  width={36}
                  height={36}
                  alt='Pencil'
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
                <Image
                  src='/card.svg'
                  width={20}
                  height={16}
                  alt='Credit Card'
                />
                <p>Medio de Pago</p>
              </div>
              <div className={styles.input}>
                <p>PAC</p>
                <Image src='/pencil.svg' width={36} height={36} alt='Pencil' />
              </div>
              <div className={styles.text}>
                Recibirás un email confirmando tu solicitud en los próximos 15
                días.
              </div>
            </div>

            <div className={styles.sectionSubcontainer}>
              <div className={styles.imgContainer}>
                <Image
                  src='/cash.svg'
                  width={18}
                  height={18}
                  alt='Money symbol'
                />
                <p>Prima Pactada</p>
              </div>
              <div className={styles.input}>
                <p>UF 3.2</p>
                <Image src='/pencil.svg' width={36} height={36} alt='Pencil' />
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
          <PaymentDay setPaymentDayModal={setPaymentDayModal}  setConfirmModal={setConfirmModal}/>
        )}
        {paymentFrequencyModal && (
          <PaymentFrequency
            setPaymentFrequencyModal={setPaymentFrequencyModal}
            setConfirmModal={setConfirmModal}
          />
        )}
        {confirmModal && <ConfirmMessageModal  setConfirmModal={setConfirmModal}/>}
      </main>
    </>
  );
}
