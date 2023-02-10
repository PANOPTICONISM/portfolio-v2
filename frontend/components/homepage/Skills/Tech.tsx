import styles from "./Tech.module.css";
import { MouseEvent, SetStateAction, useState } from "react";
import { TechProps } from "./types";

const TechTabs = ({ skills }: TechProps) => {
  const usedCategories = skills.items.map((skill) => skill.metadata.tags?.[0]?.sys?.id);
  const categories = [...new Set(usedCategories)];
  const [activeTab, setActiveTab] = useState(categories[0]);
  const switchTab = (e: any) => {
    setActiveTab(e.target.textContent);
  }

  return (
    <section className={styles.tech}>
      <h1 className={styles.heading}>Toolshed</h1>
      <div className={styles.container}>
        <ul className={styles.filters}>
          {categories.map((category) =>
            <li onClick={switchTab} key={category} className={activeTab === category ? styles.active : ""}>{category}</li>
          )}
        </ul>
        <ul className={styles.stack}>
          {skills.items.map((skill) =>
            (activeTab === skill.metadata.tags?.[0]?.sys?.id) && <li key={skill.fields.id}>
              <img
                src={skill?.fields?.image?.fields?.file?.url}
                alt={skill?.fields?.title}
              />
              <p>{skill.fields.title}</p>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default TechTabs;
