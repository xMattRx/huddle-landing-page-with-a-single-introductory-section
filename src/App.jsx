import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './App.module.scss';
import main_image from './assets/illustration-mockups.svg';
import logo from './assets/logo.svg';

function App() {

  return (
    <div
      style={{ backgroundColor: "hsl(257, 40%, 49%)" }}
      className={styles.container}
    >
      <div className={styles.background}>
        <header className={styles.header}>
          <img src={logo} alt="logo" className={styles.logo} />
        </header>
        <main className={styles.main}>
          <img src={main_image} className={styles.main_image} />
          <section className={styles.section}>
            <h2 className={styles.title}>Build The Community Your Fans Will Love</h2>
            <p className={styles.paragraph}>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <button className={styles.button}>Register</button>
          </section>
        </main>
        <footer className={styles.footer}>
          <div className={styles.icon}>
            <FaFacebookF size="18px" />
          </div>
          <div className={styles.icon}>
            <FaTwitter size="18px" />
          </div>
          <div className={styles.icon}>
            <FaInstagram size="18px" />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
