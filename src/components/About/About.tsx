import React from 'react';
import { Container } from "./styles";

//import profileImage from "../../assets/profile-image.jpg"
import ScrollAnimation from "react-animate-on-scroll";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import mongodb from '../../assets/mongodb.png';
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import sql from '../../assets/sql.png';
import typescriptIcon from "../../assets/typescript-icon.svg";


export function About() {
  return (
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Sobre mim</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
          <p>Me chamo Felipe Miguel dos Santos, sou desenvolvedor FullStack.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" style={{ marginTop: "2rem", marginBottom: "2rem" }}>

          <p>Desenvolvo qualquer tipo de projeto com Javascript e Typescript, tenho expertise com Nodejs e alguns frameworks backend como AdonisJS v4 e v5 e NestJS, gosto bastante de utilizar Javascript e também Typescript em meus projetos.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">

          <p>Minha biblioteca frontend favorita é o Reactjs, utilizo em todos os meus projetos, mas nada me impede de usar outra tecnologia frontend.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft">
          <h3>Aqui estão as minhas principais habilidades:</h3>
        </ScrollAnimation>
        <div style={{ display: 'flex' }}>

          <div style={{ padding: '5px' }}>
            <ScrollAnimation animateIn="fadeInUp">
              <img src={reactIcon} alt="React" style={{ width: '30px' }} />
            </ScrollAnimation>
          </div>

          <div style={{ padding: '5px' }}>
            <ScrollAnimation animateIn="fadeInUp">
              <img src={jsIcon} alt="JavaScript" style={{ width: '30px' }} />
            </ScrollAnimation>
          </div>

          <div style={{ padding: '5px' }}>
            <ScrollAnimation animateIn="fadeInUp">
              <img src={htmlIcon} alt="Html" style={{ width: '30px' }} />
            </ScrollAnimation>
          </div>

          <div style={{ padding: '5px' }}>
            <ScrollAnimation animateIn="fadeInUp">
              <img src={cssIcon} alt="Css" style={{ width: '30px' }} />
            </ScrollAnimation>
          </div>

          <div style={{ padding: '5px' }}>
            <ScrollAnimation animateIn="fadeInUp">
              <img src={nodeIcon} alt="Node" style={{ width: '30px' }} />
            </ScrollAnimation>
          </div>

          <div style={{ padding: '5px' }}>
            <ScrollAnimation animateIn="fadeInUp">
              <img src={typescriptIcon} alt="Typescript" style={{ width: '30px' }} />
            </ScrollAnimation>
          </div>

          <div style={{ padding: '5px' }}>
            <ScrollAnimation animateIn="fadeInUp">
              <img src={mongodb} alt="MongoDB" style={{ width: '30px' }} />
            </ScrollAnimation>
          </div>

          <div style={{ padding: '5px' }}>
            <ScrollAnimation animateIn="fadeInUp">
              <img src={sql} alt="SQL" style={{ width: '30px' }} />
            </ScrollAnimation>
          </div>


        </div>
      </div>
      {/* <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={fotoFelipe} alt="Imagem de perfil" />
        </ScrollAnimation>
      </div> */}
    </Container>
  )
}
