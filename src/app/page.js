"use client"
import { useRouter } from "next/navigation"
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import Button from "@/components/Button"

export default function Home() {
  const router = useRouter()
  const [nameUser, setNameUser] = useState('');
  
  useEffect(() => {
    
  }, [])

  return (
    <>
        <main className={styles.main}>
          <div className={styles.headercontainer}>
            <h2>Hola <strong>{nameUser}</strong> ¿qué podemos hacer por ti?</h2>
            
          </div>
          <div className={styles.containerItems}>
            <Button onclick={() => {router.push("/cartolas")}}>Cartolas</Button>
            <Button onclick={() => {router.push("/polizaPago")}}>Modificaciones de pago</Button>
          </div>
      </main>
    </>
  )
}
