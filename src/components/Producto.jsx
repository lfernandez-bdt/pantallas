'use client'
import {useState, useEffect} from 'react'
import { useRouter } from "next/navigation"
import { Icon } from './Icon'

import '@/styles/stylesComponents/producto.css'

export default function Producto({ 
  capital = false,
  cartola = false,
  fondos = false,
  inicio = 'XX/XX/XXXX',
  nombre = 'Nombre producto', 
  numero = 'XXXXX', 
  monto = '0,00', 
  pago = 'XX/XX/XXXX',
  prima = false,
  tipo = '',
}) {

  const router = useRouter();
  const [color, setColor] = useState('');
  const [text, setText] = useState('Valor:');

  useEffect( () => {
    switch(tipo){
      case 'poliza':
        setColor('headerBlue')
        setText('Valor Póliza:')
        break
      case 'efectivo':
        setColor('headerRed')
        setText('Valor Ahorro Efectivo:')
        break
      case 'garantia':
        setColor('headerGreen')
        setText('Valor garantizado:')
        break
    }
  }, [])

  return (
    <div className={'bodyProduct '+ color}>
      <header>
        <div>
          <span className={'nameProduct'}><strong>{nombre}</strong></span>
        </div>
        <div>
          <span className={'numProduct'}>Póliza <strong>{numero}</strong></span>
        </div>
      </header>
      <section>
        <div className={'firstColumnProduct'}>
          <div className={'dataProduct'}>
            <span className={'valueProduct'}>{text}</span>
            <h2 className={'moneyProduct'}>${monto}</h2>
          </div>
            {
              cartola && (
                <div className={'buttonProduct'}>
                    {/* <button onClick={() => router.push("/detallePoliza")}> */}
                    <button onClick={() => console.log("/detallePoliza")}>
                      <Icon type={"fileAlt"}/>
                      <span>Cartolas</span>
                    </button>
                </div>
              )
            }
        </div>
        <div className={'lastColumnProduct'}>
          { prima && (<span className={'itemProduct'}>Prima pactada <strong>{prima}</strong></span>) }
          { capital && (<span className={'itemProduct'}>Capital asegurado: <strong>${capital}</strong></span>) }
          <span className={'itemProduct'}><strong>Inicio:</strong> {inicio}</span>
          { fondos && (
            <button 
              className={'itemProduct'}
              onClick={() => console.log('Fondos')}
            >
              <Icon type={"chartLine"}/>
              <span> 
                Ver mis fondos
              </span>
            </button>
          ) }
          <button 
            className={'itemProduct'}
            onClick={() => console.log('Pagos')}
          >
            <span>Próximo pago: {pago}</span>
          </button>
          <button 
            className={'itemProduct'}
            onClick={() => console.log('Información')}
          >
            <span><strong>Más información</strong></span>
          </button>
        </div>
      </section>
    </div>
  )
}
