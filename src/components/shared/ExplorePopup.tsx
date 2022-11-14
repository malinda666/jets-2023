import { FC, Ref } from 'react'

interface ExplorePopupProps {
  isOpen: boolean
  exploreRef: Ref<HTMLDivElement>
  exploreWrapperRef: Ref<HTMLDivElement>
}

const ExplorePopup: FC<ExplorePopupProps> = ({ isOpen, exploreRef, exploreWrapperRef }) => {
  return (
    <div className={['explore', ''].join(' ')} ref={exploreRef}>
      <div className='explore__wrapper' ref={exploreWrapperRef}>
        <div className='explore__wrapper--inner'>
          <div className='explore__title'>
            <span>Explore</span>
            <div className='explore__title--inner'>
              <span>Japan</span>
            </div>
          </div>
        </div>
        <div className='divider__vertical' />
        <div className='explore__wrapper--inner'>
          <div className='explore__title'>
            <span>Explore</span>
            <div className='explore__title--inner'>
              <span>Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExplorePopup
