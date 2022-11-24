import gsap from 'gsap'

export const fadeIn = (element: any, delay?: number) => {
  gsap.from([element], {
    duration: 1.25,
    opacity: 0,
    delay: delay || 0,
    stagger: {
      from: 'start',
      amount: 0.3,
    },
    ease: 'power2.inOut',
  })
}

export const textReveal = (element: any, delay?: number) => {
  gsap.from([element], {
    duration: 1.2,
    y: '110%',
    opacity: 0,
    delay: delay || 0,
    stagger: {
      from: 'start',
      amount: 0.3,
    },
    ease: 'power3.out',
  })
}

export const imageReveal = (element: any, delay?: number) => {
  gsap.from([element], {
    duration: 1.75,
    opacity: 0,
    delay: delay || 0,
    scale: 1.3,
    transformOrigin: 'center',
    ease: 'power4.inOut',
  })
}
