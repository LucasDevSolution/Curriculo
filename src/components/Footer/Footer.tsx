import React from 'react'
import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
//import instagramIcon from "../../assets/instagram.png";
//import discordIcon from "../../assets/discord.png";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>F</span>
        <span>Miguel</span>
      </a>
      <div>
        <p>Este site foi feito com <img alt='Info' src={reactIcon} /> e muito <span>❤️</span></p>
      </div>

      <div className="social-media">
        <a href="https://www.linkedin.com/in/felipedeveloperfullstack/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/FelipeDeveloperFullStack/" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>

    </Container>
  )
}