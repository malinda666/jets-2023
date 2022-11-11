import { NextPage } from 'next'
import Image from 'next/image'

import { Section } from '@/components/shared'
import { Hero } from '@/views'

const Home: NextPage = () => {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <div className=''>home 2</div>
      </Section>
    </>
  )
}

export default Home
