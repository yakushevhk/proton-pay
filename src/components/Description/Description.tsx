import React, { FC } from 'react'
import './Description.scss'
import slide1 from '../assets/images/Description/slide-1.svg'
import slide2 from '../assets/images/Description/slide-2.svg'
import slide3 from '../assets/images/Description/slide-3.svg'

const Description: FC = () => {
  return (
    <section className='description-container'>
        <p className='description-container__text container'>Веб-приложение, не требующее установки, позволит Вам контроливать ваши финансы и пополнять счет удобным способом</p>
        <div className="description-container__slides">
          <img src={slide1} alt="slide1" />
          <img src={slide2} alt="slide2" />
          <img src={slide3} alt="slide3" />
        </div>
    </section>
  )
}

export default Description