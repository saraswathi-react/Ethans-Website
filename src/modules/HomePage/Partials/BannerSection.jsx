import React from 'react'
import { BannerStyle } from '../Style'
import BannerImg from '../../../assets/Image/banner-img.png'
import { useNavigate } from 'react-router-dom'

const BannerSection = () => {

  const nevigate = useNavigate()
  const handleClick = () => {
    nevigate('/enquiry')
  }
  
  return (
    <BannerStyle>
      <div className='LeftSection'>
        <h1>Ethan's Corporate Solution</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
        <div className='ButtonsBanner'>
          <div className='BtnOne'>read More</div>
          <div className='BtnTwo' onClick={handleClick}>contact us</div>
        </div>
      </div>
      <div className='bannerimg'>
        <img src={BannerImg} alt='banner' className='ImgSe' />
      </div><br />
    </BannerStyle>
  )
}

export default BannerSection