import React from 'react'
import ScrollAnimation from "react-animate-on-scroll"
import { BrowserRouter } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
import Illustration from "../../assets/illustration.svg"
import { Container } from "./styles"
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Olá 👋, eu sou</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <h1>Felipe Miguel</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <h3>Desenvolvedor Full Stack</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <p className="small-resume">Desenvolvedor apaixonado por desenvolvimento FullStack com expertise em manutenibilidade de sistemas, qualidade de software e um bom café.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp">
          <BrowserRouter>
            <NavHashLink smooth to="#contato" className="button">Contato</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 100}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}