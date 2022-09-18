import React, { FC, useState } from 'react'
import { Interface } from 'readline'
import arrow from "../assets/images/Rules/arrow.svg"
import './Order.scss'

interface OrderProps {
    setState: React.Dispatch<React.SetStateAction<string>>
}

const Order : FC<OrderProps> = ({setState}) => {

    const [name, setName] = useState<string | undefined>("");
    const [email, setEmail] = useState<string | undefined>("");
    const [telegram, setTg] = useState<string | undefined>("");

    let tg = {
        token: "5458760895:AAF3_lAiFFSy-pahJvJmMDPYaMJWhAbfPRY", // Your bot's token that got from @BotFather
        chat_id: "-606535238" // The user's(that you want to send a message) telegram chat id
    }

    function sendMessage() {
        let message = `имя: ${name}, емейл: ${email}, тг: ${telegram}`
        const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${message}`; // The url to request
        const xht = new XMLHttpRequest();
        xht.open("GET", url);
        xht.send();
    }

  return (
    <div className='order-container container'>
        <button className="arrow" onClick={() => setState("")}>
          <img src={arrow} alt="arrow-pic" />
        </button>
        <h2>ProtonPay</h2>
        <div className="order-container__text">
            <h3>Заказать карту</h3>
            <p>Оформляя карту вы соглашаетесь с <a href="">Пользовательским соглашением и условиями использования</a></p>
        </div>
        <div className="order-container__cost">
            <p>Стоимость - 3000 рублей до 28 сентября. Далее - 5500 рублей</p>
        </div>
        <form action="">
            <div>
                <input type="text" onChange={(e) => setName(e.target.value)} id="name" name="name" placeholder='Имя и Фамилия' required/>
                <input type="text" onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder='Email' required/>
                <input type="text" onChange={(e) => setTg(e.target.value)} id="telegram" name="telegram" placeholder='Telegram' required/>
            </div>
            <p>Мы пришлем Вам карту до трех календарных дней</p>
            <a className='button' onClick={sendMessage} href="https://capu.st/bill6782cf7a-4267">Оплатить</a>
        </form>
    </div>
  )
}

export default Order