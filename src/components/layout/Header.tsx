import { FC } from 'react'
import Link from 'next/link'

import { ExploreCallToAction } from '../shared'

const Header: FC = () => {
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
            <ExploreCallToAction />
            <Link href='/about'>
              <span className='nav__item--inner'>about</span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
