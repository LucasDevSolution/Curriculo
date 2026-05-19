import React from 'react'
import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
//import Form  from "../Form/Form";

export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>Fale com a REFRI PRO</h2>
        <p>Solicite um orçamento ou agende uma visita técnica para serviços de refrigeração industrial e comercial.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:contato@refripro.com.br">contato@refripro.com.br</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Telefone" />
          <a href="tel:+5511999999999">(11) 99999-9999</a>
        </div>  
      </div>
      {/* <Form></Form> */}
    </Container>
  )
}