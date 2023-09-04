import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Steps.module.css";
import { faCode, faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Steps = () => {
  return (
    <section id="steps" className={styles.stepsSection}>
      <h1>Competences</h1>
      <div className={styles.steps}>
        <article>
          <FontAwesomeIcon size="lg" icon={faCompassDrafting as IconProp} />
          <h2>Design</h2>
          <p>
            <b>The user's needs.</b> I began my journey by designing user
            interfaces, a foundation that gives me a very important insight into
            the other side, and allows me to be a better developer and team
            member with the skills to collaborate, and argue for what's the best
            for the users.
          </p>
        </article>
        <article className={styles.highlight}>
          <FontAwesomeIcon size="lg" icon={faCode as IconProp} />
          <h2>Development</h2>
          <p>
            <b>From design to code.</b> My keen eye for design, derives from my
            ability to pay attention to detail, which is a big factor in my
            development process as well from scratch to finish - whether that is
            code organization, folder structure, best practices or communication
            overall.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Steps;
