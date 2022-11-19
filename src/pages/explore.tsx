import { NextPage } from 'next'

import { Section } from '@/components/shared'
import { Explore } from '@/views'
import { supabase } from '@/utils/APIClient'

interface ExplorePageProps {
  locations: any
}

const ExplorePage: NextPage<ExplorePageProps> = ({ locations }) => {
  return (
    <>
      <Section>
        <Explore locations={locations} />
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

export default ExplorePage
