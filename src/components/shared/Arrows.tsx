import React from 'react'

const DownArrow = () => {
  return (
    // <svg
    //   viewBox='0 0 195.5 194.8'
    //   fill='none'
    //   xmlns='http://www.w3.org/2000/svg'
    //   className='w-[7rem] h-auto rotate-[135deg]'
    // >
    //   <path
    //     d='M0,194.8L194.1,0.7'
    //     strokeWidth='2'
    //     strokeLinecap='square'
    //     strokeLinejoin='round'
    //     className='stroke-current'
    //   ></path>{' '}
    //   <path
    //     d='M194.8,194.5V0'
    //     strokeWidth='2'
    //     strokeLinecap='square'
    //     strokeLinejoin='round'
    //     className='stroke-current'
    //   ></path>{' '}
    //   <path
    //     d='M1.8,0h193.7'
    //     strokeWidth='2'
    //     strokeLinejoin='round'
    //     className='stroke-current'
    //   ></path>
    // </svg>
    <svg
      version='1.1'
      id='Capa_1'
      x='0px'
      y='0px'
      viewBox='0 0 63.55 63.55'
      xmlSpace='preserve'
      className='rotate-[90deg] text-current'
    >
      <g>
        <path
          d='M62.725,32.603l0.825-0.826l-0.825-0.823c0,0,0,0,0-0.002L32.358,0.584c-0.455-0.455-1.196-0.455-1.651,0
		s-0.455,1.196,0,1.651L59.08,30.608H1.168C0.523,30.608,0,31.133,0,31.776c0,0.646,0.523,1.168,1.168,1.168H59.08L30.709,61.316
		c-0.455,0.454-0.455,1.195,0,1.651c0.229,0.229,0.528,0.34,0.827,0.34s0.598-0.114,0.827-0.34L62.725,32.603
		C62.725,32.604,62.725,32.604,62.725,32.603z'
        />
      </g>
    </svg>
  )
}

const ScrollItem = () => (
  <svg
    className=''
    viewBox='0 0 112 112'
    xmlns='http://www.w3.org/2000/svg'
    role='presentation'
    aria-hidden='true'
  >
    <path
      className='fill-current'
      d='m111.547 59.968-50.391-1.406 36.64 34.531-5.155 5.157L58.11 61.61 59.516 112h-7.188l1.407-50.39-34.532 36.64-5.156-5.157 36.64-34.53-50.39 1.405v-7.187l50.39 1.641-36.64-34.61 5.156-5.078 34.532 36.641L52.328.985h7.188l-1.406 50.39 34.53-36.64 5.157 5.077-36.641 34.61 50.39-1.407z'
      fill-rule='nonzero'
    ></path>
  </svg>
)

export { DownArrow, ScrollItem }
