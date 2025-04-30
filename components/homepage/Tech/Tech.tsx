import styles from "./Tech.module.css";
import { SkillProps, TechProps } from "./Tech.types";

const Skill = ({ fields }: { fields: SkillProps }) => (
  <li>
    <img src={fields?.icon?.fields?.file?.url} alt={fields?.title} />
    <p>{fields.title}</p>
  </li>
);

const Tech = ({ skills }: TechProps) => {
  return (
    <section className={styles.tech}>
      <div className={styles.scroll}>
        <ul className={styles.banner}>
          {skills.items.map((skill) => (
            <Skill key={skill.fields.title} fields={skill.fields} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tech;
