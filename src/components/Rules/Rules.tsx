import React, { FC } from 'react'
import "./Rules.scss"
import arrow from "../assets/images/Rules/arrow.svg"

interface RulespProps {
  title: string
  state: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
  elements?: { title: string; text: string; }[],
  text?: string,
  contacts?: { title: string; href: string; }[]
}

const Rules: FC<RulespProps> = ({setState, elements, text, state, title, contacts}) => {
  return (
    <div className="rules-container container">
        <button onClick={() => setState("")}>
          <img src={arrow} alt="arrow-pic" />
        </button>
        <div 
          className="rules-container__bg" 
          style={
            state === "FAQ" ? {background : "#80008B"}
            : state === "user-agreement" ? {background : "#19A5A5"}
            : state === "rights" ? {background : "#00C058"}
            : state === "contacts" ? {background : "#AC6700"}
            : {background : "#80008B"}
            }
          />
        <div className="rules-container__head">
          <h2>ProtonPay</h2>
          <h3>{title}</h3>
        </div>
        {
          elements ? <div className="rules-container__content">
                        {elements.map((elem, key) => {
                          return (
                            <div key={key} className="rules-container__content__block">
                              <h4>{elem.title}</h4>
                              <p>{elem.text}</p>
                            </div>
                          )
                        })}
                      </div> 
                  : ""
        }
        {
          text ? <p className='rules-container__text'>{text}</p> : ""
        }
        {
          contacts ?  <div className="rules-container__contacts">
                        {
                          contacts.map((item, key) => {
                              return (
                                <a key={key} href={item.href}>{item.title}</a>
                              )
                            })
                        }
                      </div>
          : ""
        }
    </div>
  )
}

export default Rules