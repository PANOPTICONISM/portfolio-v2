import styles from "./Styles.module.css";
import { ExperienceProps } from "./types";

const Experience = ({ jobs }: ExperienceProps) => {

  return (
    <section id="experience" className={styles.experience}>
      <h1>Experience</h1>
      <div className={`grid_2 ${styles.jobs}`}>
        {jobs?.map((job) => (
          <div key={job?.sys?.id} className={styles.job}>
            <h3>{job?.fields?.jobTitle}</h3>
            <h4>{job?.fields?.company}</h4>
            <p>{job?.fields?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
