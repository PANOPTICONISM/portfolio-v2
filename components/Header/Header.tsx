import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import useIsDesktop from "hooks/useScreenSize";
import Link from "next/link";
import useScreenSize from "hooks/useScreenSize";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {isDesktop, isMobile} = useScreenSize();

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={!isMobile ? 70 : 30}
          height={!isMobile ? 103 : 63}
          viewBox="0 0 620 653"
          fill="none"
        >
          <path
            d="M524.67 8.11426C530.271 1.27506 536.822 -0.130194 544.717 0.0090913C569.514 0.446584 594.324 0.170073 619.46 0.170073C619.46 161.867 619.46 322.543 619.46 484.763C606.594 478.981 594.533 473.709 582.6 468.16C566.733 460.782 551.175 452.695 535.072 445.89C526.672 442.34 524.195 437.375 524.226 428.517C524.487 355.145 524.265 281.772 524.199 208.399C524.18 187.008 524.196 165.616 524.196 141.279C513.826 151.063 505.209 158.888 496.926 167.052C377.001 285.251 257.108 403.483 137.247 521.749C124.516 534.31 111.691 546.812 99.6639 560.03C96.1477 563.894 93.5579 570.095 93.4275 575.297C92.7944 600.545 93.1417 625.817 93.1417 652.014C61.9167 652.014 31.3148 652.014 0 652.014C0 435.038 0 218.254 0 0.0540622C25.8522 0.0540622 51.6918 -0.0460379 77.5277 0.219127C79.9354 0.243813 82.816 2.08511 84.6423 3.91632C146.794 66.2348 208.845 128.653 270.897 191.071C271.604 191.782 272.124 192.678 274.171 195.407C250.18 217.553 226.051 239.825 200.475 263.434C166.321 228.887 130.258 192.409 93.156 154.88C93.156 248.436 93.156 340.092 93.156 433.572C237.644 291.099 380.871 149.869 524.67 8.11426Z"
            style={{ fill: 'var(--text-colour)' }}
          />
          <path
            d="M360.312 364.267C379.037 345.735 397.052 327.539 415.55 309.85C418.371 307.152 423.359 305.879 427.472 305.555C435.746 304.904 444.106 305.362 452.358 305.362C452.358 339.122 452.616 372.029 452.199 404.929C452.076 414.607 454.425 421.648 461.764 428.817C511.923 477.814 561.401 527.51 611.318 576.758C617.515 582.873 620.309 589.154 619.973 598.003C619.297 615.797 619.772 633.635 619.772 652.946C592.57 652.946 566.337 653.186 540.12 652.656C536.656 652.586 532.726 649.127 529.932 646.321C478.218 594.377 426.645 542.294 375.038 490.243C374.082 489.28 373.077 488.364 369.586 485.028C348.158 507.401 327.171 529.986 305.446 551.836C273.551 583.914 241.164 615.503 208.856 647.166C206.557 649.419 203.212 651.951 200.302 652.014C180.71 652.442 161.105 652.237 140.077 652.237C140.077 629.504 139.945 607.21 140.282 584.924C140.316 582.71 142.931 580.26 144.813 578.388C216.428 507.147 288.097 435.961 360.312 364.267Z"
            style={{ fill: 'var(--text-colour)' }}
          />
        </svg>
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
