import { Card } from '@/components/Card';
import styles from './page.module.css';
import { BiEnvelope, BiMobileAlt, BiPhone, BiUser } from 'react-icons/bi';
import { CheckInput, Input } from '@/components/FlexInput';

export default function Contactos() {
    return (
        <main className={styles.main}>
            <div>
                <header className={styles.header}>
                    <div>Mis Contactos</div>
                    <div style={{
                        display: 'flex',
                        gap: 30
                    }}>
                        <div style={{
                            fontWeight: 850,
                            fontSize: 16
                        }}>APV Ohio Life</div>
                        <div style={{ display: 'flex', gap: 10 }}>
                            Póliza <p style={{ fontWeight: 850, fontSize: 16 }}>24501</p>
                        </div>
                    </div>
                </header>
                <main className={styles.section}>
                    <div className={styles.column}>
                        <Card title="Contratante" Icon={BiUser} style={{ gap: 25 }}>
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <div>
                                    <Input style={{ width: 130 }} label="Telefono Celular" value="789 2584-456" InputIcon={BiMobileAlt} readonly />
                                    <Input style={{ width: 130 }} label="Telefono Particular" value="789 2584-456" InputIcon={BiPhone} readonly />
                                    <Input style={{ width: 130 }} label="Telefono Comercial" value="789 2584-456" InputIcon={BiPhone} readonly />
                                </div>

                                <div>
                                    <Input label="Email" value="contratante@mail.com" InputIcon={BiEnvelope} readonly />
                                    <Input label="Dirección particular" value="Vitacura 32 5to C, Santia" InputIcon={BiEnvelope} readonly />
                                    <Input label="Dirección comercial" value="Alto Las Condes loc. 13" InputIcon={BiEnvelope} readonly />
                                </div>
                            </div>

                            <CheckInput label="El contratante es el asegurado" checked />
                            <CheckInput label="El contratante es el pagador" checked />
                            <CheckInput label="Deseo actualizar esta información para todas mis pólizas" />

                        </Card>
                        <Card title="Mi intermediario" Icon={BiUser}>
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <div>
                                    <Input style={{ width: 145 }} label="Nombre Completo" value="Alejandra Fones" readonly />
                                    <Input style={{ width: 130 }} label="Telefono Celular" value="789 2584-456" InputIcon={BiMobileAlt} readonly />
                                </div>
                                <div>
                                    <Input label="Email" value="intermediario@gmail.com" InputIcon={BiEnvelope} readonly />
                                    <Input label="Telefono Comercial" value="789 2584-456" InputIcon={BiPhone} readonly />
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className={styles.column}>
                        <Card title="Beneficiario" Icon={BiUser}>
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '-webkit-fill-available'
                            }}>
                                <div style={{
                                    width: '-webkit-fill-available'
                                }}>
                                    <Input style={{ width: 75, padding: 'initial' }} value="Hija" readonly />
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        width: '-webkit-fill-available',
                                        justifyContent: 'space-between',
                                    }}>
                                        <Input style={{ maxWidth: 145 }} label="Nombre Completo" value="Javiera Freire" readonly />
                                        <div style={{
                                            display: 'flex',
                                            gap: '1rem'
                                        }}>
                                            <Input style={{ maxWidth: 130 }} label="RUT" value="92 584 456" readonly />
                                            <Input style={{ maxWidth: 130 }} label="Porcentaje" value="50%" readonly />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card title="Beneficiario" Icon={BiUser}>
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '-webkit-fill-available'
                            }}>
                                <div style={{
                                    width: '-webkit-fill-available'
                                }}>
                                    <Input style={{ width: 75, padding: 'initial' }} value="Hermano" readonly />
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        width: '-webkit-fill-available',
                                        justifyContent: 'space-between',
                                    }}>
                                        <Input style={{ width: 145 }} label="Nombre Completo" value="Samuel Freire" readonly />
                                        <div style={{
                                            display: 'flex',
                                            gap: '1rem'
                                        }}>
                                            <Input style={{ width: 130 }} label="RUT" value="32 544 459" readonly />
                                            <Input style={{ width: 130 }} label="Porcentaje" value="50%" readonly />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </main>
            </div >
        </main >
    )
}