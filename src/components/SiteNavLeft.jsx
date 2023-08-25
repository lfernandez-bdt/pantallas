'use client'
import '@/styles/stylesComponents/SiteNavLeft.css'
import { siteConfig } from "@/config/site"
import { useEffect, useState } from "react"
import Image from 'next/image'
import { useAuth } from '@/helpers/AuthProvider'
import { MainNavLeft } from './MainNavLeft'


export function SiteNavLeft() {
  const auth = useAuth()
  const [rut, setRut] = useState();


  useEffect(() => {
    if (auth.user === null || auth.user === false) {

    }
  },)

  return (
    <>
      <div className="logoContainerTop">
        <Image
          className={"logo"}
          src="/logo.jpg"
          alt="Ohio logo"
          width={180}
          height={45}
          priority
        />
      </div>
      <div className={"navContainer"}>
        <MainNavLeft items={siteConfig.mainNavLeft} />
      </div>
    </>
  )
}
