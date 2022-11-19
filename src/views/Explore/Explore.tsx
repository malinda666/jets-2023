import { FC, useRef, useEffect, MutableRefObject } from 'react'
import gsap from 'gsap'

import { fadeIn, textReveal, imageReveal } from '@/utils/animations'

interface ExploreProps {
  locations: any[]
}

const Explore: FC<ExploreProps> = ({ locations }) => {
  const locationsWrapper = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const titles = gsap.utils.selector(locationsWrapper.current)('.locations__inner--title > span')

    textReveal([titles], 0.2)
  }, [])

  return (
    <div className='wrapper'>
      <div className='locations' ref={locationsWrapper}>
        {locations
          ? locations.map((location: any) => (
              <div className='locations__inner' key={location.id}>
                <h1>
                  <div className='locations__inner--title'>
                    <span>{location.name}</span>
                  </div>
                </h1>
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

export default Explore
