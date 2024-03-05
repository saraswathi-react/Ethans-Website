import React from 'react'
import BannerSection from './Partials/BannerSection'
import ServiceAbout from './Partials/ServiceAbout'
import Services from './Partials/Services'
import ServiceDifferent from './Partials/ServiceDifferent'
import CarousalSuccess from './Partials/CarousalSuccess'
import BacktoTopPage from '@modules/BacktoTop/BacktoTopPage'
import Counter from './Partials/Counter'
import ContactUs from './Partials/ContactUs'
import Footersection from '@modules/Footer/Footersection'
import ChatBox from '@modules/ChatBot/ChatBox'



const MainIndex = () => {
  return (
    <div>
      <BannerSection /><br />
      <ServiceAbout />
      <Services />
      <ServiceDifferent />
      <Counter/>
      <CarousalSuccess />
      <ContactUs/>
      <Footersection />
      <ChatBox/>
      <BacktoTopPage />
    </div>
  )
}

export default MainIndex