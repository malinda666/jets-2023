import { FC, ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  cls?: string
}

const Section: FC<SectionProps> = ({ children, cls }) => {
  return (
    <section
      className={['relative w-full px-4 min-h-screen flex items-center justify-center', cls].join(
        ' '
      )}
    >
      {children}
    </section>
  )
}

export default Section
