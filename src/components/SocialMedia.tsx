import { motion } from "framer-motion";
import styles from "./SocialMedia.module.css";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <main className="flex items-center lg:items-start">
      <article className={styles.social_media}>
        <motion.ul
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 3,
            delay: 1.2,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5562985296795"
              className={styles.whatsapp_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </li>
        </motion.ul>

        <motion.ul
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 3,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <li>
            <a
              href="mailto:pf.lucasmartins@gmail.com"
              className={styles.email_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
          </li>
        </motion.ul>
      </article>
    </main>
  );
};

export default SocialMedia;
