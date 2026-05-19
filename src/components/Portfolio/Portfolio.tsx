import React from 'react';
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Serviços de Refrigeração</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </header>
            <div className="body">
              <h3>Instalação de Câmaras Frias</h3>
              <p>Projetos e instalação de câmaras frias e freezers para supermercados, restaurantes e indústrias, com montagem profissional e testes completos.</p>
              <p>
                Ideal para quem busca um ambiente refrigerado seguro e com alta eficiência energética.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Câmaras Frias</li>
                <li>Freezers</li>
                <li>Controle de Temperatura</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </header>
            <div className="body">
              <h3>Manutenção Preventiva</h3>
              <p>Serviços regulares de manutenção para manter equipamentos refrigerados funcionando com estabilidade e evitar falhas inesperadas.</p>
              <p>
                Inclui limpeza, verificação de vazamentos e ajustes de desempenho para maior vida útil do sistema.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Preventiva</li>
                <li>Refrigeração Comercial</li>
                <li>Programação</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </header>
            <div className="body">
              <h3>Assistência Técnica 24h</h3>
              <p>Atendimento emergencial para reparos imediatos em equipamentos de refrigeração, reduzindo prejuízos e paradas de produção.</p>
              <p>
                A REFRI PRO está pronta para atender rapidamente quando você mais precisa.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Emergência</li>
                <li>Reparos Rápidos</li>
                <li>Suporte Técnico</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </header>
            <div className="body">
              <h3>Eficiência Energética</h3>
              <p>Avaliação e otimização de sistemas de refrigeração para reduzir consumo de energia e custos operacionais.</p>
              <p>
                Aplicamos soluções modernas e mais sustentáveis, com foco em economia e performance.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Economia</li>
                <li>Modernização</li>
                <li>Sustentabilidade</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}