import styles from "./Contact.module.css";
import Transition from "../../components/Transition";
import SocialMedia from "../../components/SocialMedia";

const Contact = () => {
  return (
    <Transition onAnimationComplete={() => {}}>
      <main className={styles.contact}>
        <header className={styles.header_container}>
          <h1 className={styles.header_h2}>
            <span>//</span> Informações de <span>Contato</span>
          </h1>
          
        </header>

        <div className={styles.contact_container}>
          <section className={styles.contact_section}>
            <h2 className={styles.section_title}>Endereço</h2>
            <p className={styles.contact_info}>
              Rua Mascarenhas de Morais, Qd.181 Lt.33<br />
              Aparecida de Goiânia - GO<br />
              CEP: 74943-500
            </p>
          </section>

          <section className={styles.contact_section}>
            <h2 className={styles.section_title}>Telefone</h2>
            <p className={styles.contact_info}>
              <a href="tel:+556232226069">(62) 3222-6069</a>
              <br />
              <a href="tel:+5562985296795">(62) 9 8529-6795</a>
            </p>
          </section>

          <section className={styles.contact_section}>
            <h2 className={styles.section_title}>WhatsApp</h2>
            <p className={styles.contact_info}>
              <a href="https://wa.me/5562985296795" target="_blank" rel="noopener noreferrer">
                (62) 9 8529-6795
              </a>
            </p>
          </section>

          <section className={styles.contact_section}>
            <h2 className={styles.section_title}>Instagram</h2>
            <p className={styles.contact_info}>
              <a href="https://instagram.com/solution_levando_solucao" target="_blank" rel="noopener noreferrer">
                @solution_levando_solucao
              </a>
            </p>
          </section>

          <section className={styles.contact_section}>
            <h2 className={styles.section_title}>Site</h2>
            <p className={styles.contact_info}>
              <a href="https://www.solutionlevandosolucao.com.br/" target="_blank" rel="noopener noreferrer">
                www.solutionlevandosolucao.com.br
              </a>
            </p>
          </section>

          <SocialMedia />
        </div>
      </main>
    </Transition>
  );
};

export default Contact;

