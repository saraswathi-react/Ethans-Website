import React from 'react'
import BannerSection from './Partials/BannerSection'
import ServiceAbout from './Partials/ServiceAbout'
import Services from './Partials/Services'


const MainIndex = () => {
  return (
    <div>
      <BannerSection /><br />
      <ServiceAbout />
      <Services />
    </div>
  )
}

export default MainIndex