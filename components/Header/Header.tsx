import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import useScreenSize from "hooks/useScreenSize";
import { Logo } from "public/icons/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { isDesktop, isMobile } = useScreenSize();

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
        el.scrollIntoView();
      }
    }, 700);
  }, []);

  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo width={!isMobile ? 70 : 30} height={!isMobile ? 103 : 63} />
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
            <Link href="/#steps" onClick={toggle}>
              Competences
            </Link>
          </li>
          <li>
            <Link href="/#projects" onClick={toggle}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={toggle}>
              Blog
            </Link>
          </li>
          <li className={styles.contact_me}>
            <Link href="#contact_me" onClick={toggle}>
              <span>Contact me</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
