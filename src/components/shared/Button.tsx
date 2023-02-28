import React, { FC } from 'react'

type ButtonProps = {
  text: string
  action?: () => void
}

const Button: FC<ButtonProps> = ({ text, action }) => {
  return (
    <button className='button'>
      <span>{text}</span>
    </button>
  )
}

export default Button
