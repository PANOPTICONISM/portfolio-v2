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
            <b>The user's needs.</b> I began my career designing intuitive,
            research-informed interfaces — a foundation that I draw on every day
            to bridge visual design and technical execution. This background
            enables me to collaborate effectively with cross-functional teams
            and consistently advocate for user-centered solutions that deliver
            real, measurable value.
          </p>
        </article>
        <article className={styles.highlight}>
          <FontAwesomeIcon size="lg" icon={faCode as IconProp} />
          <h2>Development</h2>
          <p>
            <b>From design to code.</b> My attention to detail — shaped by my
            design background — carries through every stage of development, from
            initial setup to final polish. Whether it's writing clean,
            maintainable code, writing documentation, following best
            practices, or communicating clearly with the team, I bring an
            attentive, end-to-end approach to building products.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Steps;
