import React, { FC } from 'react'
import "./Header.scss";

interface HeaderProps {
  setState: React.Dispatch<React.SetStateAction<string>>
}

const Header : FC<HeaderProps> = ({setState}) => {
  return (
    <header className='header-container container'>
      <div className='header-container__text'>
        <h1 className='header-container__text__title'>ProtonPay</h1>
        <p className='header-container__text__subtitle'>Оплачивайте товары и сервисы по всему миру</p>
      </div>
      <div className="header-container__buttons">
        <button onClick={() => setState("login")}>Вход</button>
      </div>
    </header>
  )
}

export default Header
