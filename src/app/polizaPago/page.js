'use client';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PolizaPago() {
  const router = useRouter();

  useEffect(() => {}, []);

  const number = 24501;

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Datos de pago actuales</h2>
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
                  width={23.974}
                  height={24}
                  alt='Calendar'
                />
                <p>Día de Pago</p>
              </div>
              <div className={styles.input}>
                <p>
                Día 01 del mes
                  </p>
                  <Image
                  src='/pencil.svg'
                  width={36}
                  height={36}
                  alt='Pencil'
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
                  width={23.974}
                  height={24}
                  alt='Calendar'
                />
                <p>Frecuencia de Pago</p>
              </div>
              <div className={styles.input}>
              <p>
               mensual
                  </p>
                  <Image
                  src='/pencil.svg'
                  width={36}
                  height={36}
                  alt='Pencil'
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
              <p>
              PAC
                  </p>
                  <Image
                  src='/pencil.svg'
                  width={36}
                  height={36}
                  alt='Pencil'
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
                  src='/cash.svg'
                  width={18}
                  height={18}
                  alt='Money symbol'
                />
                <p>Prima Pactada</p>
              </div>
              <div className={styles.input}>
              <p>
               UF 3.2
                  </p>
                  <Image
                  src='/pencil.svg'
                  width={36}
                  height={36}
                  alt='Pencil'
                />
              </div>
              <div className={styles.text}>
                Recibirás un email confirmando tu solicitud en los próximos 15
                días.
              </div>
            </div>
  
          </section>
        </div>
      </main>
    </>
  );
}
