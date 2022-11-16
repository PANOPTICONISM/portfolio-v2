import styles from "./Tech.module.css";
import { useState } from "react";

const TabSkills = ({ skills }) => {
  const [activeTab, setActiveTab] = useState("languages");
  const categories = ['languages', 'tools'];
  const switchTab = (e) => {
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
          {skills.items.map((skill, index) =>
            (activeTab === skill.metadata.tags?.[0]?.sys?.id) && <li key={index}>
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

export default TabSkills;
