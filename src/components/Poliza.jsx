'use client'
import {useState, useEffect} from 'react'
import { useRouter } from "next/navigation"
import { Icon } from './Icon'

import '@/styles/stylesComponents/poliza.css'
import InputForm from './InputForm'

export default function Poliza({ 
  
}) {
  const router = useRouter();


  return (
    <div className={'bodyPoliza'}>
      <header>
        <div>
          <span><strong>Datos de mi Póliza</strong></span>
        </div>
        <div>
          <span><strong>Nombre de póliza</strong> Póliza <strong>24501</strong></span>
        </div>
      </header>
      <section>
        <article className={'infoPoliza'}>
          <div className={'detalle'}>
            <div className={'columnPoliza'}>
              <span>Valor póliza:</span>
              <div>
                <div>
                  <span className={'monto'}><strong>$95.100</strong></span>
                  <span>Inicio: <strong>xx/xx/xxxx</strong></span>
                  <span>Vigencia: <strong>hasta 99 años</strong></span>
                  <span>Años plazo: <strong>no aplica</strong></span>
                  <span>Estado: <strong>VIGENTE</strong></span>
                  <span>Opción de indemnización: <strong>A</strong></span>
                </div>
                <div>
                  <button><span>Solicitar Modificaciones</span></button>
                  <span>Capital Asegurado: <strong>$0,00</strong></span>
                  <span>Prima Pactada: <strong>UF 3.2</strong></span>
                  <span>Prima Minima Anual: <strong>UF 0.2</strong></span>
                  <span>Prima Pacatada Anual: <strong>UF 2.4</strong></span>
                  <span>Prima en Exceso Anual (Ahorro): <strong>UF 2.4</strong></span>
                </div>
              </div>
            </div>
            <div className={'columnParticipantes'}>
              <div className={'columnIcon'}>
                <span><strong>Participantes</strong></span>
              </div>
              <div className={'columnInfo'}>
                <div>
                  <span>Contratante</span>
                  <span>Pagador</span>
                  <span>Asegurado</span>
                  <span>Beneficiario(s)</span>
                  <span>Intermediario</span>
                </div>
                <div>
                  <span>Martin Freire</span>
                  <span>Martin Freire</span>
                  <span>Martin Freire</span>
                  <span>Javiera Freire 50%</span>
                  <span>Alejandra Fones</span>
                </div>
              </div>
            </div>
          </div>
          <div className={'lineButton'}>
            <button> <span> Solicitar Modificaciones</span></button>
          </div>
        </article>
        <article className={'infoCobertura'}>
          <div className={'detalle'}>
            <div className={'detalleIcon'}>
              <Icon type={"fileAlt"}/>
              <span><strong>Cobertura</strong></span>
            </div>
            <div className={'detalleInfo'}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate nisl sed magna mattis egestas. In fermentum urna sit amet nunc maximus semper. Etiam et maximus dolor, et finibus est. Phasellus at pellentesque nibh. Mauris mollis velit a tristique iaculis. Aliquam consequat eleifend erat, eu euismod massa luctus accumsan. Aenean luctus scelerisque nulla nec varius. Mauris vel dolor quis eros rutrum posuere. Vivamus sagittis purus ex, quis faucibus justo placerat sed. Mauris in mollis urna.
              </p>
            </div>
          </div>
          <div className={'lineButton'}>
            <button> <span> Solicitar Modificaciones</span></button>
          </div>
        </article>
        <article className={'infoPago'}>
          <div className={'detalle'}>
            <div className={'detalleIcon'}>
              <Icon type={"fileAlt"}/>
              <span><strong>Datos Via de Pago</strong></span>
            </div>
            <div className={'detalleInfo'}>
              <div className={'rowInfo'}>
                <InputForm 
                  titulo={'Día de Cobro'}
                  valor={'01 del mes'}
                />
                <InputForm 
                  titulo={'Prima Pactada'}
                  valor={'UF 3.2'}
                />
                <InputForm 
                  titulo={'Institución'}
                  valor={'Banco Itaú'}
                />
                <InputForm 
                  titulo={'Cuenta Corriente'}
                  valor={'XXXXX4898'}
                />
              </div>
              <div className={'rowInfo'}>
              <InputForm 
                  titulo={'Frecuencia de Pago'}
                  valor={'Mensual'}
                />
                <InputForm 
                  titulo={'Medio de Pago'}
                  valor={'PAC'}
                />
                <InputForm 
                  titulo={'Último Pago'}
                  valor={'06/07/2023'}
                />
                <InputForm 
                  titulo={'Próximo Pago'}
                  valor={'06/09/2029'}
                />
              </div>
            </div>
          </div>
          <div className={'lineButton'}>
            <button> <span> Solicitar Modificaciones</span></button>
          </div>
        </article>
        <article className={'infoFondo'}>
          <div className={'detalle'}>
            <div className={'detalleIcon'}>
              <Icon type={"fileAlt"}/>
              <span><strong>Fondos de Inversión</strong></span>
            </div>
            <div className={'detalleInfo'}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate nisl sed magna mattis egestas. In fermentum urna sit amet nunc maximus semper. Etiam et maximus dolor, et finibus est. Phasellus at pellentesque nibh. Mauris mollis velit a tristique iaculis. Aliquam consequat eleifend erat, eu euismod massa luctus accumsan. Aenean luctus scelerisque nulla nec varius. Mauris vel dolor quis eros rutrum posuere. Vivamus sagittis purus ex, quis faucibus justo placerat sed. Mauris in mollis urna.
              </p>
            </div>
          </div>
          <div className={'lineButton'}>
            <button> <span> Ver fondos disponibles</span></button>
          </div>
        </article>
        <article className={'buttons'}>
          <div className={'detalle'}>

          </div>
        </article>
      </section>
    </div>
  )
}
