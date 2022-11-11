import { FC, ReactNode } from 'react'
import Head from 'next/head'

import Header from './Header'

interface LayoutProps {
  children: ReactNode
}

const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Jet Seattle&trade;</title>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='manifest' href='/site.webmanifest'></link>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
