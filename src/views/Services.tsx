import { SectionTitle } from '@/components/shared'
import { FC } from 'react'

import { services } from '@/data/services'

const Services: FC = () => {
  return (
    <div className='wrapper'>
      <SectionTitle text='services' />
      <div className='services__inner'>
        {services.map((service) => (
          <div className='services__inner--item' key={service.id}>
            <div className='services__inner--id'>
              <span className=''>{service.id}</span>
            </div>
            <div className='services__inner--title'>
              <span className=''>{service.title}</span>
            </div>
            <div className='services__inner--body'>
              <span className=''>{service.body}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
