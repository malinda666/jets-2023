import { FC } from 'react'

import { SectionTitle } from '@/components/shared'
import Image from 'next/image'

import AboutImg from '@/public/images/sl2.webp'

const About: FC = () => {
  return (
    <div className='wrapper'>
      <SectionTitle text='about us' />
      <div className='about__inner'>
        <p className='about__inner--para'>
          We <span className='alt'>research, design and develop</span> products for major names in
          the world of <span className='alt'> luxury, design and architecture, </span> with the aim
          of creating objects that are
          <span className='alt'> unique </span>
          in the world in terms of
          <span className='alt'> inspiration, creativity and workmanship.</span>
        </p>
        <Image src={AboutImg} alt='About' className='about__inner--img' />
      </div>
    </div>
  )
}

export default About
