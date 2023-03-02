import { FC, ReactNode, useEffect } from 'react'
import Head from 'next/head'
import Lenis from '@studio-freight/lenis'

import Header from './Header'
import { ScrollContextProvider, useScroll } from '@/ctx/ScrollContext'

interface LayoutProps {
  children: ReactNode
}

const MainLayout: FC<LayoutProps> = ({ children }) => {
  const scrollctx = useScroll()
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      // easing: (t) => 1 - (1 - t) * (1 - t), // https://www.desmos.com/calculator/brs54l4xou
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })
    //get scroll value
    lenis.on('scroll', (values: any) => {
      if (values) {
        scrollctx.updateScroll(values.scroll)
      }
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

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
