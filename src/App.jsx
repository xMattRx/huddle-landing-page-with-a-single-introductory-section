import styles from './App.module.scss';
import image_desktop from './assets/bg-desktop.svg';
import image_mobile from './assets/bg-mobile.svg';
import logo from './assets/logo.svg';

function App() {

  return (
    <div
      style={{ backgroundColor: "hsl(257, 40%, 49%)" }}
      className={styles.container}
    >
      <div className={styles.background}>
      <header>
        <img src={logo} alt="" />
      </header>
      <main>
        
      </main>
      </div>
    </div>
  )
}

export default App
