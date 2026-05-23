import styles from "./Home.module.css";
import Transition from "../../components/Transition";
import { motion } from "framer-motion";
import SocialMedia from "../../components/SocialMedia";
import ParticlesBackground from "../../components/ParticlesBackground";
import { Link } from "react-router-dom";
import { useState } from "react";


const [menuOpen, setMenuOpen] = useState(false);
const Home = () => {
  return (
    <main>
      <Transition onAnimationComplete={() => {}}>
        <section className={styles.home}>
         {window.innerWidth > 768 && (
  <div className={styles.particles_container}>
    <ParticlesBackground />
  </div>
)}

          <header className={styles.home_content}>
            {/* FOTO */}
            <div className={styles.home_img}>
              <motion.img
                src="/imgs/Eu.png"
                alt="Foto de Lucas Martins"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.7,
                  ease: [0.2, 0, 0.2, 1],
                }}
              />
            </div>

            {/* MENU LATERAL 
            <div className={styles.side_menu}>
              <span>Perfil</span>
              <span>Atuação</span>
              <span>Contato</span>
            </div>
*/}
            {/* HEADER */}
            <div className={styles.resume_header}>
              <h1>Lucas Martins de Barros Torres</h1>

              <p className={styles.resume_subtitle}>
                Técnico em Refrigeração e Climatização
              </p>

              <div className={styles.resume_info_line}>
                <span>31 anos</span>
                <span>Casado</span>
                <span>4 filhos</span>
              </div>

              <p className={styles.contact_text}>
                Rua Mascarenhas de Morais, Qd.181 Lt.33 • CEP 74943-500
              </p>

              <p className={styles.contact_text}>
                WhatsApp: (62) 9 8529-6795 • Email:
                pf.lucasmartins@gmail.com
              </p>
            </div>

            {/* OBJETIVO */}
            <div className={styles.resume_section}>
              <h2>Objetivo Profissional</h2>

              <p>
                Atuar na área de refrigeração e climatização, oferecendo
                serviços com qualidade, responsabilidade e eficiência,
                buscando crescimento profissional e contribuindo com a
                empresa através de experiência técnica, organização e bom
                atendimento ao cliente.
              </p>
            </div>

            {/* RESUMO */}
            <div className={styles.resume_section}>
              <h2>Resumo Profissional</h2>

              <p>
                Experiência em manutenção, instalação e limpeza de
                equipamentos de refrigeração e ar-condicionado
                residencial, comercial e industrial. Conhecimento em
                diagnóstico de defeitos, troca de peças, carga de gás,
                manutenção preventiva e corretiva, além de atendimento ao
                cliente e organização de ferramentas e materiais.
              </p>
            </div>

            {/* HABILIDADES */}
            <div className={styles.resume_skills}>
              <h2>Habilidades</h2>

              <ul>
                <li>
                  Instalação de ar-condicionado split, inverter e
                  convencional
                </li>

                <li>Manutenção preventiva e corretiva</li>

                <li>
                  Higienização de evaporadoras e condensadoras
                </li>

                <li>
                  Carga e recolhimento de gás refrigerante
                </li>

                <li>
                  Identificação e reparo de vazamentos
                </li>

                <li>
                  Atendimento externo em residências e empresas
                </li>

                <li>
                  Organização de ferramentas e materiais
                </li>

                <li>
                  Disponibilidade para viagens e início imediato
                </li>
              </ul>
            </div>

            {/* BOTÃO */}
         <div className={styles.btn_box}>
  <Link to="/about" className={styles.btn}>
    Ver Currículo Completo
  </Link>
</div>





            <SocialMedia />
          </header>
        </section>
      </Transition>
    </main>
  );
};

export default Home;