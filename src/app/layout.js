'use  client'
import '../styles/globals.css'
import { siteConfig } from "@/config/site"
import { Inter } from 'next/font/google'
import { ProvideAuth as AuthProvider, useAuth } from "@/helpers/AuthProvider"
import { SiteHeaderTop } from '@/components/SiteHeaderTop'
import { SiteNavLeft } from '@/components/SiteNavLeft'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({ children }) {
  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
      >
        <body className={inter.className}>
            <AuthProvider>
              <div id='containerMain' >
                <SiteNavLeft/>
                <SiteHeaderTop />
                <div className={"containerPage"} >
                  {children}
                </div>
              </div>
            </AuthProvider>
        </body>
      </html>
    </>
  )
}
