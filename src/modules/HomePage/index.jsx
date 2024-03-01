import React from 'react'
import BannerSection from './Partials/BannerSection'
import ServiceAbout from './Partials/ServiceAbout'
import Services from './Partials/Services'
import ServiceDifferent from './Partials/ServiceDifferent'
import CarousalSuccess from './Partials/CarousalSuccess'
import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage'



const MainIndex = () => {
  return (
    <div>
      <BannerSection /><br />
      <ServiceAbout />
      <Services />

      <ServiceDifferent />
      <CarousalSuccess />

      <BacktoTopPage />

    </div>
  )
}

export default MainIndex