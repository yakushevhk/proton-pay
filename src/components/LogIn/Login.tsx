import React, { FC, useState } from 'react'
import { ReactNotifications } from 'react-notifications-component'
import arrow from "../assets/images/Rules/arrow.svg"
import { Store } from 'react-notifications-component';
import "./Login.scss"
import "react-notifications-component/dist/theme.css";

interface LogInProps {
    setState: React.Dispatch<React.SetStateAction<string>>
}

const Login: FC<LogInProps> = ({setState}) => {
    const [words, setWords] = useState<string>("");

  return (
    <>
    <ReactNotifications />
    <div className='order-container container'>
        <button className="arrow" onClick={() => setState("")}>
          <img src={arrow} alt="arrow-pic" />
        </button>
        <h2>ProtonPay</h2>
        <div className="order-container__text">
            <h3>Вход</h3>
        </div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <div>
                <input type="text" id="name" name="key" placeholder='Введите ключ'/>
                <textarea id="email" name="code-words" placeholder='24 слова для вашего кошелька' />
            </div>
            <button className='button' onClick={() => Store.addNotification({
                title: "Неверно",
                message: "Ошибка входа",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: { duration: 2000 },
                })}>
                    Войти
                </button>
        </form>
    </div>
    </>
  )
}

export default Login