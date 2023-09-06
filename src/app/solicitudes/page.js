import { Input } from "@/components/Input";
import styles from "./page.module.css";
import Button from "@/components/Button";
import Link from "next/link";


export default function Solicitudes() {
    return (
        <main className={styles.main}>
            <div>
                <header className={styles.header}>
                    <div>Generar Solicitudes</div>
                    <div>
                        <div>APV Ohio Life</div>
                        <div>
                            Póliza <p>24501</p>
                        </div>
                    </div>
                </header>
                <section className={styles.section}>
                    <form>
                        <div className={styles.form}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "end",
                                gap: '42px'
                            }}>
                                <span>RUT</span>
                                <span>Tipo</span>
                                <span>Valor Total</span>
                                <span>Valor Máx. Parcial</span>
                                <span>Otro Valor Parcial</span>
                                <span>Forma de Pago</span>
                                <span>Banco</span>
                                <span>Numero de Cuenta</span>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "baseline",
                                gap: '36px'
                            }}>
                                <p>2552616</p>
                                <select className={styles.input}>
                                    <option selected>Retiro Parcial</option>
                                </select>
                                <p className={styles.valorTotal}>2.5 UF <small>(término anticipado de cobertura y vigencia de su seguro de vida)</small></p>
                                <p className={styles.valorMax}>2.1 UF <small>(manteniendo la poliza vigente)</small></p>
                                <div style={{
                                    position: "relative",
                                }}>
                                    <input className={styles.input} type="text" placeholder="Ingese un monto" />
                                    <span style={{
                                        position: "absolute",
                                        right: "5px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                    }}>UF</span>
                                </div>
                                <select className={styles.input} style={{
                                    margin: '-14px 0px'
                                }}>
                                    <option selected>Cuenta Corriente</option>
                                </select>
                                <select className={styles.input}>
                                    <option selected>Banco Internacional</option>
                                </select>
                                <p style={{ marginTop: '-1.5px' }}>XXXXX2616</p>
                            </div>
                        </div>
                        <div className={styles.submitButton}>
                            <Button style={{
                                fontSize: '1.5rem',
                                borderRadius: '2rem',
                                width: 'auto',
                                padding: "10px 50px",
                                marginLeft: 140,
                                marginTop: 25
                            }}>Solicitar</Button>
                            <p style={{
                                fontSize: 12,
                                width: 400,
                            }}>
                                Una vez solicitado tienes 5 dias para desistir de ese requerimiento. Para ello debes visitar el <Link href=''>Historial de Solicitudes</Link> del portal y cnacelar el proceso haciendo click en el estado de tu solicitud
                            </p>
                        </div>
                    </form>
                </section>
                <div className={styles.footerCartola}>
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
    )
}