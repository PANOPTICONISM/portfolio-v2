import styles from "./Tech.module.css";
import { SkillProps, TechProps } from "./Tech.types";

const Skill = ({ fields }: { fields: SkillProps }) => (
  <li className={styles.skill}>
    <img src={fields?.icon?.fields?.file?.url} alt="" aria-hidden="true" />
    <p>{fields.title}</p>
  </li>
);

const Tech = ({ skills }: TechProps) => {

  const categories = Array.from(new Set(skills.items.map((item) => item.fields.category)));
  const grouped = categories.map((cat) => ({
    name: cat,
    items: skills.items.filter((item) => item.fields.category === cat),
  }));

  return (
    <section className={styles.tech} aria-label="Tech stack">
      <h1>Tech Stack</h1>

      <div className={styles.grid}>
        {grouped.map((cat) => (
          <div key={cat.name} className={styles.column}>
            <h2 className={styles.columnTitle}>{cat.name}</h2>
            <ul className={styles.list}>
              {cat.items.map((skill) => (
                <Skill key={skill.fields.title} fields={skill.fields} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
