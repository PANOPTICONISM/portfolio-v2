import styles from "./Steps.module.css";

const Steps = () => {
  return (
    <section id="steps" className={styles.stepsSection}>
      <h1>Competences</h1>
      <div className={styles.steps}>
        <article>
          <img src="/design.png" alt="design" />
          <h2>Design</h2>
          <p>
            <b>The user's needs.</b> I began my journey by designing user
            interfaces, a foundation that gives me a very important insight into
            the other side, and allows me to be a better developer and team
            member with the skills to collaborate, and argue for what's the best
            for the user experience.
          </p>
        </article>
        <article className={styles.highlight}>
          <img src="/development.png" alt="development" />
          <h2>Development</h2>
          <p>
            <b>From design to code.</b> My keen eye for design, derives from my
            ability to pay attention to detail, which is a big factor in my
            development process as well from scratch to finish - whether that is
            code organization, folder structure, best practices or
            communication.
          </p>
        </article>
        <article>
          <img src="/testing.png" alt="testing" />
          <h2>Testing</h2>
          <p>
            Before delivering you the final solution, your website has been
            ensured to be functioning correctly, from beginning to end.
          </p>
        </article>
        <article>
          <img src="/support.png" alt="support" />
          <h2>Ongoing support</h2>
          <p>
            No matter whether new requirements come up, design needs to be
            updated or you would rather I handle the technical part, I am around
            to help.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Steps;
