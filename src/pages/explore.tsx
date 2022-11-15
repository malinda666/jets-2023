import { NextPage } from 'next'

import { Section } from '@/components/shared'

import { supabase } from '@/utils/APIClient'

interface ExplorePageProps {
  locations: any
}

const Explore: NextPage<ExplorePageProps> = ({ locations }) => {
  return (
    <>
      <Section>
        <div className='wrapper'>
          {locations
            ? locations.map((location: any) => (
                <div className='' key={location.id}>
                  {location.name}
                </div>
              ))
            : null}
        </div>
      </Section>
      <Section>
        <div className=''>explore 2</div>
      </Section>
    </>
  )
}

export const getStaticProps = async () => {
  const data = (await supabase.from('locations').select('*')).data

  return {
    props: {
      locations: data,
    },
  }
}

export default Explore
