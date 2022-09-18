import React, { FC } from 'react'
import { Interface } from 'readline'
import arrow from "../assets/images/Rules/arrow.svg"
import './Order.scss'

interface OrderProps {
    setState: React.Dispatch<React.SetStateAction<string>>
}

const Order : FC<OrderProps> = ({setState}) => {
  return (
    <div className='order-container container'>
        <button onClick={() => setState("")}>
          <img src={arrow} alt="arrow-pic" />
        </button>
        <h2>ProtonPay</h2>
        <div className="order-container__text">
            <h3>Заказать карту</h3>
            <p>Оформляя карту вы соглашаетесь с <a href="">Пользовательским соглашением и условиями использования</a></p>
        </div>
        <div className="order-container__cost">
            <p>Стоимость - 3000 рублей до 28 сентября.Далее - 5500 рублей</p>
        </div>
        <form action="">
            <div>
                <input type="text" id="name" name="name" placeholder='Имя и Фамилия'/>
                <input type="text" id="email" name="email" placeholder='Email'/>
                <input type="text" id="telegram" name="telegram" placeholder='Telegram'/>
            </div>
            <p>Мы пришлем Вам карту до трех календарных дней</p>
            <button className='button'>Оплатить</button>
        </form>
    </div>
  )
}

export default Order