import { FC } from 'react'

import { SectionTitle } from '@/components/shared'
import Image from 'next/image'

import AboutImg from '@/public/images/jp.webp'

const About: FC = () => {
  return (
    <div className='wrapper'>
      <SectionTitle text='about us' />
      <div className='about__inner'>
        <Image src={AboutImg} alt='About' className='about__inner--img' />
        <div className='about__inner--para'>
          <p>
            We <span className='alt'>research, design and develop</span> products for major names in
            the world of <span className='alt'> luxury, design and architecture, </span> with the
            aim of creating objects that are
            <span className='alt'> unique </span>
            in the world in terms of
            <span className='alt'> inspiration, creativity and workmanship.</span>
          </p>
          <div className='button'>read more</div>
        </div>
      </div>
    </div>
  )
}

export default About
