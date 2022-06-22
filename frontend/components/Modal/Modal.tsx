import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

const Modal = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (showModal === false) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [showModal]);

  return showModal ? (
    <section className={styles.modal}>
      <div className={styles.modal_content}>
        <h1>
          <span className={styles.yellow_line}></span>
          Frontend Developer
        </h1>
        <p>
          From <b>design</b> to <b>development</b>, I can craft all the aspects
          of the user interface by methodically following the best user
          experience methods, and by using the best programming tools to make
          your application future-proof.
        </p>
        <article>
          <div>
            <h2>FREELANCE</h2>
            <img src="/logo.svg" alt="logo" />
            <p>Are you interested in hiring me as a freelancer?</p>
            <Link href="https://freelance.panopticonism.dev">
              <a>
                <span>Let's go</span>
                <FontAwesomeIcon
                  size="lg"
                  color="black"
                  icon={faArrowRight as IconProp}
                />
              </a>
            </Link>
          </div>
          <div>
            <h2>PORTFOLIO</h2>
            <img src="/logo.svg" alt="logo" />
            <p>
              Are you interested in hiring me as part of your team full-time?
            </p>
            <button onClick={() => setShowModal(false)}>
              Let's go
              <FontAwesomeIcon
                size="lg"
                color="black"
                icon={faArrowRight as IconProp}
              />
            </button>
          </div>
        </article>
      </div>
    </section>
  ) : null;
};

export default Modal;
