import { FC, MutableRefObject, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { SectionTitle } from '@/components/shared'
import { useScroll } from '@/ctx/ScrollContext'

import { services } from '@/data/services'
import { clamp, mapRange } from '@/utils/math'

const Services: FC = () => {
  gsap.registerPlugin(ScrollTrigger)
  const scroll = useScroll()

  const [activeSlide, setActiveSlide] = useState<number>(0)

  const slideWrapper = useRef() as MutableRefObject<HTMLDivElement>
  const tl = useRef() as any

  useEffect(() => {
    const rightSection = document.querySelector('.services__right')
    const leftSection = document.querySelector('.services__left')

    if (!rightSection?.getBoundingClientRect()) return
    if (!leftSection?.getBoundingClientRect()) return

    const rightHeight = rightSection.getBoundingClientRect().height
    const leftHeight = leftSection.getBoundingClientRect().height
    const heightDiff = rightHeight - leftHeight

    const start = `top top`
    const end = `bottom+=${heightDiff} bottom+=${leftHeight}`

    const totalSlides = services.length
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: leftSection,
        start: start,
        end: end,
        pin: true,
        scrub: true,
        pinType: 'fixed',
        markers: false,
        onUpdate: (self) => {
          const velo = self.progress
          const pos = Math.floor(mapRange(0, 1, velo, 1.5, 5.5))
          console.log(pos)
          setActiveSlide(pos)
        },
      },
    })

    return () => {
      tl.current.kill()
    }
  }, [])

  return (
    <div className='wrapper'>
      <SectionTitle text='services' />

      <div
        className='services__wrapper'
        ref={slideWrapper}
        style={{ ['--slides' as any]: services.length }}
      >
        <div className='services__inner services__left'>
          {services.map((service, i) => (
            <div
              className={[
                'services__left--item services__inner--item',
                i + 1 === activeSlide ? 'active' : '',
              ].join(' ')}
              key={service.id}
            >
              <div className='services__left--title'>
                <span className='id'>{service.id}</span>
                <span className=''>{service.title}</span>
              </div>

              <div className='services__right--body'>
                <span className=''>{service.body}</span>
              </div>
            </div>
          ))}
        </div>
        <div className='services__inner services__right'>
          {services.map((service) => (
            <div className='services__right--item services__inner--item' key={service.id}>
              <div className='services__right--img'>
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
