import styles from "./Tech.module.css";
import { useMemo, useState } from "react";
import { SkillProps, TechProps } from "./Skills.types";

const Skill = ({ fields }: { fields: SkillProps }) => {
  return (
    <li key={fields.id}>
      <img src={fields?.image?.fields?.file?.url} alt={fields?.title} />
      <p>{fields.title}</p>
    </li>
  );
};

const TechTabs = ({ skills }: TechProps) => {
  const categories = [
    ...new Set(skills.items.map((skill) => skill.metadata.tags?.[0]?.sys?.id)),
  ];

  const [activeTab, setActiveTab] = useState(categories[0]);

  const currentSkills = useMemo(() => {
    return skills.items.filter(
      (skill) => activeTab === skill.metadata.tags?.[0]?.sys?.id
    );
  }, [activeTab, skills.items]);

  const switchTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!e.currentTarget.textContent) {
      return;
    }

    setActiveTab(e.currentTarget.textContent);
  };

  return (
    <section className={styles.tech}>
      <h1 className={styles.heading}>Toolshed</h1>
      <div className={styles.container}>
        <ul className={styles.filters}>
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={switchTab}
                className={activeTab === category ? styles.active : ""}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.stack}>
          {currentSkills.map((skill) => (
            <Skill key={skill.fields.id} fields={skill.fields} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechTabs;
