import styles from "./ProjectsCTA.module.css";
import { ProjectsCTAProps } from "./ProjectsCTA.types";

const ProjectsCTA = ({ onClick }: ProjectsCTAProps) => {
  return (
    <div className={styles.projects_breadcumbs}>
      <div className={styles.wrapper}>
        <button className={styles.pointer} onClick={onClick}>
          <br />P<br />r<br />o<br />j<br />e<br />c<br />t<br />s
        </button>
      </div>
    </div>
  );
};

export default ProjectsCTA;
