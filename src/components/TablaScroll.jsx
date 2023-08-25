'use client'
import {useState, useEffect} from 'react'
import { Icon } from './Icon'

import '@/styles/stylesComponents/tablaScroll.css'

export default function TablaScroll({
    
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
