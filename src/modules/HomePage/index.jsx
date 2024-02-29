import React from 'react'
import BannerSection from './Partials/BannerSection'
import ServiceAbout from './Partials/ServiceAbout'
import Services from './Partials/Services'
import ServiceDifferent from './Partials/ServiceDifferent'
import CarousalSuccess from './Partials/CarousalSuccess'


const MainIndex = () => {
  return (
    <div>
      <BannerSection /><br />
      <ServiceAbout />
      <Services />
      <ServiceDifferent />
      <CarousalSuccess />
    </div>
  )
}

export default MainIndex