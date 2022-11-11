import { FC, ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  cls?: string
}

const Section: FC<SectionProps> = ({ children, cls }) => {
  return <section className={['section', cls].join(' ')}>{children}</section>
}

export default Section
