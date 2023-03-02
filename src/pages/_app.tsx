import { Suspense } from 'react'
import type { AppProps } from 'next/app'

import MainLayout from '@/components/layout/MainLayout'
import { ScrollContextProvider } from '@/ctx/ScrollContext'
import '@/styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  //

  return (
    <Suspense fallback={<div>loading...</div>}>
      <ScrollContextProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ScrollContextProvider>
    </Suspense>
  )
}

export default MyApp
