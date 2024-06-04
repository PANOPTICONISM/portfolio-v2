import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import useIsDesktop from "hooks/useIsDesktop";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (isOpen === true && !isDesktop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDesktop, isOpen]);

  useEffect(() => {
    setTimeout(() => {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView()
      }
    }, 700)
  }, [])

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="panopticonism-logo" />
        </a>
      </Link>
      <div
        className={`${styles.closeBox} ${isOpen ? styles.show : ""}`}
        onClick={toggle}
      >
        <span className={styles.closeBtn}></span>
      </div>
      <nav>
        <ul className={`${styles.list} ${isOpen ? styles.show : ""}`}>
          <li>
            <Link href="/#steps">
              <a onClick={toggle}>Competences</a>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <a onClick={toggle}>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a onClick={toggle}>
                Blog
              </a>
            </Link>
          </li>
          <li className={styles.hire_me}>
            <Link href="#hire_me">
              <a onClick={toggle}><span>Hire me</span></a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
