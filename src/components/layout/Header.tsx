import { FC, useRef, useEffect, useState, MutableRefObject } from 'react'
import Link from 'next/link'

import { ExploreCallToAction, ExplorePopup } from '../shared'

import useOnClickOutside from '@/hooks/useOutsideClick'

const Header: FC = () => {
  const exploreButtonRef = useRef() as MutableRefObject<HTMLDivElement>
  const exploreWrapperRef = useRef() as MutableRefObject<HTMLDivElement>

  const [isExploreOpen, setExploreOpen] = useState<boolean>(false)

  const toggleExploreOpen = () => setExploreOpen(!isExploreOpen)

  useOnClickOutside(exploreWrapperRef, isExploreOpen ? toggleExploreOpen : null)

  useEffect(() => {
    animateExplore(isExploreOpen ? 'open' : 'close')
  }, [isExploreOpen])

  const animateExplore = (dir: string) => {
    console.log(dir)
  }

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
      <ExplorePopup isOpen={isExploreOpen} exploreWrapperRef={exploreWrapperRef} />
    </>
  )
}

export default Header
