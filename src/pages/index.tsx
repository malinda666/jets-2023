import { NextPage } from 'next'

import { Section } from '@/components/shared'

const Home: NextPage = () => {
  return (
    <>
      <Section>
        <div className='hero'>
          <div className='hero__title'>
            <h1>The world is a book and those who do not travel read only one page.</h1>
          </div>
        </div>
      </Section>
      <Section>
        <div className=''>home 2</div>
      </Section>
    </>
  )
}

export default Home
