import { FC } from 'react'

const Header: FC = () => {
  return (
    <>
      <header className='absolute w-full flex items-center justify-center p-2'>
        <div className=''>logo</div>
      </header>
      <nav className='fixed bottom-0 w-full flex items-center justify-center p-2'>
        <ul className='flex items-center justify-between'>
          <li>explore</li>
          <li>about</li>
        </ul>
      </nav>
    </>
  )
}

export default Header
