'use client'
import '@/styles/stylesComponents/siteHeaderTop.css'
import { siteConfig } from "@/config/site"
import { useEffect, useState } from "react"
import Image from 'next/image'
import { useAuth } from '@/helpers/AuthProvider'
import { MainNavTop } from './MainNavTop'
import { MainNavLeft } from './MainNavLeft'
import { Icon } from './Icon'


export function SiteHeaderTop() {
  const auth = useAuth()
  const [rut, setRut] = useState();

//Log out the user
  const handleLogout = () => {
    auth.logout()
  }

  useEffect(() => {
    if (auth.user != false && auth.user !=undefined) {
      setRut(auth.user.rut)
      console.log('rut', rut);
    }
  }, )

  return (
    <>
      {
        auth.user ? (
          <>
            <header className={'headerContainer'}>
              <buton className={'buttonIcon'}>
                <Icon
                    className="iconHeader"
                    type={'user'}
                    onClick={() => console.log('Hola')}
                />
              </buton>
              <buton className={'buttonIcon'}>
                <Icon
                    className="iconHeader"
                    type={'bell'}
                    onClick={() => console.log('Hola')}
                />
              </buton>
              <buton className={'buttonIcon'}>
                <Icon
                    className="iconHeader"
                    type={'signOut'}
                    onClick={() => auth.logout()}
                />
                <label>Cerrar<br/>sesión</label>
              </buton>
            </header>
          </>
        ) : (
          <header className={'headerComplete'}>
              <Image
                className={"logo"}
                src="/logo.jpg"
                alt="Ohio logo"
                width={180}
                height={45}
                priority
              />
          </header>
        )
      }

    </>
    
  )
}
