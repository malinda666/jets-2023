import { FC, useRef, useEffect, MutableRefObject, use } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

import { DownArrow } from '@/components/shared'
import { fadeIn, textReveal, imageReveal } from '@/utils/animations'

import Banner from '@/public/images/sl2.webp'

const Hero: FC = () => {
  const titleContainer = useRef() as MutableRefObject<HTMLHeadingElement>
  const scrollerContainer = useRef() as MutableRefObject<HTMLDivElement>
  const imageContainer = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const titleLineInners = gsap.utils.selector(titleContainer.current)('div > span')

    const imageInner = gsap.utils.selector(imageContainer.current)('img')

    imageReveal(imageInner, 0.5)

    textReveal(titleLineInners, 0.5)
    fadeIn(scrollerContainer.current, 0.675)
  }, [])

  // useEffect(() => {
  //   const titleLines = gsap.utils.selector(titleContainer.current)('.hero__title--line')
  //   const start = `bottom top+=${titleContainer.current.getBoundingClientRect().height * 2}`

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: titleContainer.current,
  //       start: start,
  //       // markers: true,
  //       scrub: true,
  //     },
  //   })

  //   tl.to(titleLines, { x: (i) => (i % 2 ? i * 20 : i * 50) })

  //   return () => {
  //     tl.kill()
  //   }
  // }, [])

  return (
    <div className='hero'>
      <div className='hero__title'>
        <h1 ref={titleContainer}>
          <div className='hero__title--line'>
            <span className='hero__title--line-inner'>
              The <span className='alt'>world</span> is a book.
            </span>
          </div>
          <div className='hero__title--line'>
            <span className='hero__title--line-inner'>
              and those who do not <span className='alt'>travel</span>
            </span>
          </div>
          <div className='hero__title--line'>
            <span className='hero__title--line-inner'>
              read only <span className='alt'>one page.</span>
            </span>
          </div>
        </h1>
        {/* <h1>The world is a book and those who do not travel read only one page.</h1> */}
      </div>
      <div className='hero__banner' ref={imageContainer}>
        <Image src={Banner.src} alt='Hero Banner' layout='fill' priority />
      </div>
      <div className='hero__scroller' ref={scrollerContainer}>
        <DownArrow />
      </div>
    </div>
  )
}

export default Hero
