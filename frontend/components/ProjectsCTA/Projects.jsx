import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import styles from "./Projects.module.css";

const ProjectsCTA = ({ onClick }) => {
  return (
    <div className={styles.projects_breadcumbs}>
      <div className={styles.wrapper}>
      <ThemeSwitch />
      <button className={styles.pointer} onClick={onClick}>
        <br />P<br />r<br />o<br />j<br />e<br />c<br />t<br />s
      </button>
      </div>
    </div>
  );
};

export default ProjectsCTA;
