import { NextPage } from 'next'
import Image from 'next/image'

import { Section } from '@/components/shared'
import { Hero, About, Services, Contact } from '@/views'

const Home: NextPage = () => {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section cls='sm'>
        <About />
      </Section>
      <Section cls='lg'>
        <Services />
      </Section>
      <Section>
        <Contact />
      </Section>
    </>
  )
}

export default Home
