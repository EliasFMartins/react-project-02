import styles from "./Header.module.css";
import igniteLogo from '../assets/fire.svg.svg';
export function Header() {
  return (
    <header className={styles.header}>
     <img src={igniteLogo} alt="logo iginit"/>
      <strong>Ignite Feed</strong>
    </header>
  );
}
