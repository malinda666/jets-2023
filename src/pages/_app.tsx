import { Suspense, useEffect } from 'react'
import type { AppProps } from 'next/app'
import Lenis from '@studio-freight/lenis'

import MainLayout from '@/components/layout/MainLayout'
import '@/styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net/en#easeOutExpo
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    //get scroll value
    // lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    //   console.log({ scroll, limit, velocity, direction, progress })
    // })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <Suspense fallback={<div>loading...</div>}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Suspense>
  )
}

export default MyApp
