import { FC, useRef, useEffect, useState, MutableRefObject } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

import { ExploreCallToAction, ExplorePopup } from '../shared'

import useOnClickOutside from '@/hooks/useOutsideClick'
import { textReveal } from '@/utils/animations'

const Header: FC = () => {
  const exploreButtonRef = useRef() as MutableRefObject<HTMLDivElement>
  const exploreRef = useRef() as MutableRefObject<HTMLDivElement>
  const exploreWrapperRef = useRef() as MutableRefObject<HTMLDivElement>

  const exploreTl = useRef() as any

  const [isExploreOpen, setExploreOpen] = useState<boolean>(false)

  const toggleExploreOpen = () => setExploreOpen(!isExploreOpen)

  useOnClickOutside(exploreWrapperRef, isExploreOpen ? toggleExploreOpen : null)

  useEffect(() => {
    const title1 = gsap.utils.selector(exploreWrapperRef.current)('.explore__title > span')
    const title2 = gsap.utils.selector(exploreWrapperRef.current)(
      '.explore__title > .explore__title--inner > span'
    )
    const exploreWrap = exploreWrapperRef.current
    gsap.set(exploreWrap, { scaleY: 0 })
    gsap.set(exploreRef.current, { visibility: 'hidden' })
    gsap.set([title1, title2], { y: '100%', opacity: 0 })

    exploreTl.current = gsap
      .timeline({
        paused: true,
      })

      .to(
        [exploreWrap],
        {
          scaleY: 1,
          duration: 1,
          ease: 'power3.out',
        },
        0
      )
      .to(
        [title1, title2],
        {
          duration: 1,
          y: '0%',
          opacity: 1,
          stagger: {
            from: 'start',
            amount: 0.3,
          },
          ease: 'power2.inOut',
        },
        0.3
      )
  }, [])

  const openExplore = () => {
    exploreTl.current.play()
    gsap.set(exploreRef.current, { visibility: 'visible' })
    gsap.set(document.body, { overflow: 'hidden' })
  }
  const closeExplore = () => {
    exploreTl.current.reverse()
    setTimeout(() => {
      gsap.set(exploreRef.current, { visibility: 'hidden' })
      gsap.set(document.body, { overflow: 'auto' })
    }, 2300)
  }

  useEffect(() => {
    if (isExploreOpen) {
      openExplore()
    } else {
      closeExplore()
    }
  }, [isExploreOpen])

  return (
    <>
      <header className='header'>
        <div className='header__item logo'>
          <Link href='/'>
            <span className='logo__inner'>Jet Seattle&trade;</span>
          </Link>
        </div>
        <nav className='header__item nav'>
          <div className='nav__item'>
            <Link href='/about'>
              <span className='nav__item--inner'>about</span>
            </Link>
          </div>
          <ExploreCallToAction
            isExploreOpen={isExploreOpen}
            toggleExploreOpen={toggleExploreOpen}
            exploreButtonRef={exploreButtonRef}
          />
        </nav>
      </header>
      <ExplorePopup
        isOpen={isExploreOpen}
        exploreRef={exploreRef}
        exploreWrapperRef={exploreWrapperRef}
      />
    </>
  )
}

export default Header
