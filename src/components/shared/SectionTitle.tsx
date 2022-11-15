import { FC } from 'react'

interface SectionTitleProps {
  text: string
}

const SectionTitle: FC<SectionTitleProps> = ({ text }) => {
  return (
    <div className='relative py-2 border-b mb-4'>
      <span className='uppercase tracking-widest font-bold text-sm text-accent'>
        {text || '--'}
      </span>
    </div>
  )
}

export default SectionTitle
