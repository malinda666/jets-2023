import { NextPage } from 'next'

import { Section } from '@/components/shared'
import { Hero, About, Services, Contact } from '@/views'

const Home: NextPage = () => {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Services />
      </Section>
      {/* <Section>
        <Contact />
      </Section> */}
    </>
  )
}

export default Home
