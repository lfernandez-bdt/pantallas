'use client'
import {useState, useEffect} from 'react'
import { Icon } from './Icon'

import '@/styles/stylesComponents/inputForm.css'

export default function InputForm({
    titulo = 'Titulo',
    texto = 'Ingrese texto',
    tipo = 'text',
    valor = ''
}) {

  return (
    <div className={'bodyInput'}>
        <span>
            {titulo}
        </span>
        <input 
            type={tipo}
            placeholder={texto}
            value={valor}
        />
    </div>
  )
}
