import styles from "./Tech.module.css";

const Tech = ({ skills }) => {
  return (
    <section className={`${styles.tech} grid_2`}>
      <h1 className="heading">Tech stack</h1>
      <ul className={styles.stack}>
        {skills?.map((skill, index) => (
          <li key={index}>
            <img
              src={skill?.fields?.icon?.fields?.file?.url}
              alt={skill?.fields?.icon?.fields?.title}
            />
            <p>{skill.fields.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tech;