import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="panopticonism-logo" />
      <div
        className={`${styles.closeBox} ${isOpen ? styles.show : ""}`}
        onClick={toggle}
      >
        <span className={styles.closeBtn}></span>
      </div>
      <nav>
        <ul className={`${styles.list} ${isOpen ? styles.show : ""}`}>
          <li>
            <a href="#steps" onClick={toggle}>
              Competences
            </a>
          </li>
          <li>
            <a href="#packages" onClick={toggle}>
              Packages
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggle}>
              Portfolio
            </a>
          </li>
          <li className={styles.hire_me}>
            <a href="#hire_me" onClick={toggle}>
              Hire me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
