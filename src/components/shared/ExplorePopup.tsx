import { FC, MutableRefObject, Ref, useRef } from 'react'

interface ExplorePopupProps {
  isOpen: boolean
  exploreWrapperRef: Ref<HTMLDivElement>
}

const ExplorePopup: FC<ExplorePopupProps> = ({ isOpen, exploreWrapperRef }) => {
  return (
    <>
      {isOpen ? (
        <div className='explore'>
          <div className='explore__wrapper' ref={exploreWrapperRef}>
            <div className='explore__wrapper--inner'>
              <span className='explore__title--line-inner'>
                Explore <br />
                <span className='alt'>Japan</span>
              </span>
            </div>
            <div className='divider__vertical' />
            <div className='explore__wrapper--inner'>
              <span className='explore__title--line-inner'>
                Explore <br /> <span className='alt'>Sri Lanka</span>
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default ExplorePopup
