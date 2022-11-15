import { FC } from 'react'

import { Section, SectionTitle } from '@/components/shared'

const About: FC = () => {
  return (
    <div className='relative w-full flex flex-col items-center justify-center'>
      <SectionTitle text='about us' />
      <p className='relative max-w-5xl text-[3.5rem] font-title'>
        We <span className='alt'>research, design and develop</span> products for major names in the
        world of <span className='alt'> luxury, design and architecture, </span> with the aim of
        creating objects that are
        <span className='alt'> unique </span>
        in the world in terms of
        <span className='alt'> inspiration, creativity and workmanship.</span>
      </p>
    </div>
  )
}

export default About
