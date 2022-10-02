import React, { FC } from 'react'
import card from "../assets/images/makeorder/card.svg";
import bg from "../assets/images/makeorder/bg.svg";
import "./MakeOrder.scss"

interface MakeOrderProps {
    setState: React.Dispatch<React.SetStateAction<string>>
  }
  

const MakeOrder: FC<MakeOrderProps> = ({setState}) => {
  return (
    <section className='makeorder-container container'>
        <div className='makeorder-container__card-img'>
            <img src={card} alt="card" />
        </div>
        <div className='makeorder-container__content'>
            <p className="makeorder-container__content__text">ProtonPay - не “Необанк”,  Мы - провайдер между пользователем и миром платежей. Работаем на основе Сингапурского банка</p>
            <div className="makeorder-container__content__interaction">
                <button onClick={() => setState("order")} className="button">Заказать карту</button>
                <div className="makeorder-container__content__interaction__img">
                    <p>Стоимость - 7000<br/> рублей до 4 октября</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MakeOrder
