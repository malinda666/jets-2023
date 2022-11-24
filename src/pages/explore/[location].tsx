import { NextPage } from 'next'

import { Section } from '@/components/shared'
import { supabase } from '@/utils/APIClient'
import { Location as LocationView } from '@/views'

interface LocationPageProps {
  data: any
}

const Location: NextPage<LocationPageProps> = ({ data }) => {
  return (
    <>
      <LocationView data={data} />
    </>
  )
}

export const getStaticProps = async (ctx: any) => {
  const { location } = ctx.params
  const _location = (await supabase.from('locations').select('*')).data
  const _posts = (
    await supabase.from('locations').select('slug, posts(*)').eq('posts.location', location)
  ).data

  const foundLocation = _location?.find((l) => l.slug === location)
  const formattedPosts = _posts
    ?.map((p) => (p.slug === foundLocation.slug ? { ...p, location: foundLocation } : null))
    .filter((p) => p)

  return {
    props: {
      data: formattedPosts ? formattedPosts[0] : {},
    },
  }
}

export const getStaticPaths = async () => {
  const locations = (await supabase.from('locations').select('*')).data
  const paths = locations?.map((location) => ({
    params: { location: location.slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export default Location
