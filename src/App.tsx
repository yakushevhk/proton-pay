import React, {useState} from 'react';
import Description from './components/Description/Description';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MakeOrder from './components/MakeOrder/MakeOrder';
import Order from './components/Order/Order';
import Rules from './components/Rules/Rules';
import './index.scss';
import {text} from './rules'
import splitbee from '@splitbee/web';
import Login from './components/LogIn/Login';

splitbee.init();

function App() {
  const [state, setState] = useState<string>("");
  return (
    <>
      {
        state === "FAQ" ? <Rules setState={setState} state={state} elements={text.faq.elements} title={text.faq.title} /> 
        : state === "user-agreement" ? <Rules setState={setState} state={state} text={text.userAgreement.text} title={text.userAgreement.title} />
        : state === "rights" ? <Rules setState={setState} state={state} text={text.rights.text} title={text.rights.title} />
        : state === "contacts" ? <Rules setState={setState} state={state} contacts={text.contacts.elements} title={text.contacts.title} />
        : state === "order" ? <Order setState={setState} />
        : state === "login" ? <Login setState={setState}/>
        :
        <>
          <Header setState={setState}/>
          <MakeOrder setState={setState}/>
          <Description />
          <Footer state={state} setState={setState} />
        </>

      }
    </>
  );
}

export default App;
