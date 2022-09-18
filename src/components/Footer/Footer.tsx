import React, { FC } from 'react'
import "./Footer.scss"

interface FooterProps {
    state: string,
    setState:  React.Dispatch<React.SetStateAction<string>>
}

const Footer : FC<FooterProps> = ({state, setState}) => {

  return (
    <section className="footer-container container">
        <div className="footer-container__rights">
            <button onClick={()=> setState("FAQ")}>FAQ - Вопросы и ответы</button>
            <button onClick={()=> setState("user-agreement")}>Пользовательское соглашение</button>
            <button onClick={()=> setState("rights")}>Условия использования</button>
            <button onClick={()=> setState("contacts")}>Контакты и поддержка</button>
        </div>
        <p className="footer-container__copyright">2022<br/>{`<3`}</p>
    </section>
  )
}

export default Footer