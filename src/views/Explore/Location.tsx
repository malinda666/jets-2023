import { FC, useRef, useEffect, MutableRefObject } from 'react'
import gsap from 'gsap'

import { Section } from '@/components/shared'
import { fadeIn, textReveal, imageReveal } from '@/utils/animations'

interface LocationProps {
  data: any
}

const Location: FC<LocationProps> = ({ data }) => {
  const locationWrapper = useRef() as MutableRefObject<HTMLDivElement>
  useEffect(() => {
    const titles = gsap.utils.selector(locationWrapper.current)('.location__inner--title > span')

    textReveal([titles], 0.2)
  }, [])
  return (
    <>
      <Section cls='sm'>
        <div className='wrapper'>
          <div className='location' ref={locationWrapper}>
            <h1>
              <div className='location__inner--title'>
                <span>Explore</span>
                <span></span>
                <span>{data.location.name}</span>
              </div>
            </h1>
          </div>
        </div>
      </Section>
      <Section>
        <div className='posts'>
          {data.posts.map((p: any) => {
            return (
              <div className='post' key={p.id}>
                <h1>
                  <div className='post__inner--title'>
                    <span>{p.title}</span>
                  </div>
                </h1>
                <div className='post__inner--footer'>
                  <div className='post__inner--excerpt'>
                    <p>{p.excerpt}</p>
                  </div>
                  <div className='post__inner--cta'>
                    <span>read more</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Section>
    </>
  )
}

export default Location
