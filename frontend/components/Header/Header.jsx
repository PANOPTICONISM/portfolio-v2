import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="panopticonism-logo" />
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className={styles.checkBtn}>
          <FontAwesomeIcon size="xl" color="white" icon={faBars} />
        </label>
        <ul className={styles.list}>
          <li>
            <a href="#steps">Competences</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li className={styles.hire_me}>
            <a href="#hire_me">Hire me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
