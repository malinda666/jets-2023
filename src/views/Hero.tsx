import { FC, useRef, useEffect, MutableRefObject } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

import { DownArrow } from '@/components/shared'

import Banner from '@/public/images/jp.webp'

const Hero: FC = () => {
  const titleContainer = useRef() as MutableRefObject<HTMLHeadingElement>
  const scrollerContainer = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const titleLines = gsap.utils.selector(titleContainer.current)('div > span')
    gsap.from([titleLines], {
      duration: 1,
      y: '110%',
      opacity: 0,
      delay: 0.5,
      stagger: {
        from: 'start',
        amount: 0.3,
      },
      ease: 'power2.inOut',
    })
    gsap.from(scrollerContainer.current, {
      duration: 1,
      opacity: 0,
      delay: 0.65,
      stagger: {
        from: 'start',
        amount: 0.3,
      },
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <div className='hero'>
      <div className='hero__title'>
        <h1 ref={titleContainer}>
          <div className='hero__title--line'>
            <span className='hero__title--line-inner'>
              The <span className='alt'>world</span> is a book
            </span>
          </div>
          <div className='hero__title--line'>
            <span className='hero__title--line-inner'>
              and those who do not <span className='alt'>travel</span>
            </span>
          </div>
          <div className='hero__title--line'>
            <span className='hero__title--line-inner'>
              read only <span className='alt'>one page</span>.
            </span>
          </div>
        </h1>
        {/* <h1>The world is a book and those who do not travel read only one page.</h1> */}
      </div>
      <div className='hero__banner'>
        <Image src={Banner.src} alt='Hero Banner' layout='fill' priority />
      </div>
      <div className='hero__scroller' ref={scrollerContainer}>
        <DownArrow />
      </div>
    </div>
  )
}

export default Hero
