import Image, { StaticImageData } from 'next/image'
import { FC, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

type CustomImageProps = {
  src: StaticImageData
  alt: string
  cls?: string
}
type ParallaxImageAltProps = {
  src: string
  alt: string
  cls?: string
}

const ParallaxImage: FC<CustomImageProps> = ({ src, alt, cls }) => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const imgWrapper = document.querySelector('.image')
    const image = gsap.utils.selector(imgWrapper)('img')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgWrapper,
        start: 'top top+=70%',
        end: 'bottom bottom-=70%',
        scrub: 1,
      },
    })
    tl.to(image, {
      y: -50,
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className='image'>
      <Image src={src} alt={alt} className={cls} />
    </div>
  )
}
const ParallaxImageAlt: FC<ParallaxImageAltProps> = ({ src, alt, cls }) => {
  gsap.registerPlugin(ScrollTrigger)

  // useEffect(() => {
  //   const imgWrapper = document.querySelectorAll('.image-alt')

  //   imgWrapper.forEach((el, i) => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: imgWrapper,
  //         start: 'top top+=70%',
  //         end: 'bottom bottom-=70%',
  //         scrub: 1,
  //       },
  //     })
  //     const image = gsap.utils.selector(el)('img')
  //     tl.to(image, {
  //       y: -100,
  //     })
  //   })

  //   return () => {
  //     tl.kill()
  //   }
  // }, [])

  return (
    <div className='image-alt'>
      <img src={src} alt={alt} className={cls} />
    </div>
  )
}

export { ParallaxImage, ParallaxImageAlt }
