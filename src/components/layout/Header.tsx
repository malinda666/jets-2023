import { FC } from 'react'
import Link from 'next/link'

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
            <Link href='/explore'>
              <span className='nav__item--inner'>explore</span>
            </Link>
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
