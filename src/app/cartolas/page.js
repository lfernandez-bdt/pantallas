"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import Producto from "@/components/Producto";
import Poliza from "@/components/Poliza";
import { Icon } from "@/components/Icon";
import DatePicker from "@/components/DatePicker";

export default function Cartolas() {
    const router = useRouter();

    useEffect(() => {}, []);

    return (
        <>
            <main className={styles.main}>
                <div>
                    <header className={styles.header}>
                        <div>Cartolas</div>
                        <div>
                            <div>Ohio Investment Life</div>
                            <div>
                                Póliza <p>24501</p>
                            </div>
                        </div>
                    </header>
                    <section className={styles.section}>
                        <h2>SELECCIONE PERÍODO</h2>
                        <div>
                            <DatePicker />
                            <div>
                                <Icon
                                    type="search"
                                    className={styles.searchIcon}
                                />
                            </div>
                        </div>
                        <h3>CARTOLAS DISPONIBLES (*)</h3>
                        <div className={styles.availableCartolas}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                                return (
                                    <div
                                        key={item}
                                        className={styles.itemCartola}
                                    >
                                        <div></div>
                                        <div>Enero 2023</div>
                                        <div>Ver</div>
                                    </div>
                                );
                            })}
                        </div>
                        <div>Descargar Cartolas Seleccionadas</div>
                    </section>
                    <div className={styles.footerCartola}>
                        <h4>
                            (*) Las cartolas de cada mes estarán disponibles a
                            partir del dia 5 de ese mes.
                        </h4>
                        <h5>
                            Lorem ipsum dolor sit amet consectetur. Quam dictum
                            diam tortor aliquam vestibulum neque malesuada enim
                            tempor. Id dui nullam urna tempus ac leo. Lectus
                            consectetur nec tellus etiam mauris at aliquam.
                            Vitae sit enim etiam vestibulum morbi. Lorem ipsum
                            dolor sit amet consectetur. Quam dictum diam tortor
                            aliquam vestibulum neque malesuada enim tempor. Id
                            dui nullam urna tempus ac leo. Lectus consectetur
                            nec tellus etiam mauris at aliquam. Vitae sit enim
                            etiam vestibulum morbi. Letra chica legal // Se
                            descarga todo en un solo PDF
                        </h5>
                    </div>
                </div>
            </main>
        </>
    );
}
