import { FC, Ref } from 'react'

interface ExploreCallToActionProps {
  isExploreOpen: boolean
  toggleExploreOpen: () => void
  exploreButtonRef: Ref<HTMLDivElement>
}

const ExploreCallToAction: FC<ExploreCallToActionProps> = ({
  isExploreOpen,
  toggleExploreOpen,
  exploreButtonRef,
}) => {
  return (
    <>
      <div
        className={['explore_button', isExploreOpen ? 'active' : ''].join(' ')}
        aria-hidden
        onClick={toggleExploreOpen}
        ref={exploreButtonRef}
      >
        <span className=''>Explore Locations!</span>
        <span className=''>Explore Locations!</span>
      </div>
    </>
  )
}

export default ExploreCallToAction
