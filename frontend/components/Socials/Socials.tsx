import { Behance } from "../../icons/Behance";
import { CodeAndSandbox } from "../../icons/CodeAndSandbox";
import { GitHub } from "../../icons/GitHub";
import { LinkedIn } from "../../icons/LinkedIn";
import styles from "./Socials.module.css";

const Socials = () => {
  return (
    <div className={styles.social_media}>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/mariajalmeida/">
            <LinkedIn width="30" height="30" />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/panopticonism">
            <Behance width="30" height="30" />
          </a>
        </li>
        <li>
          <a href="https://github.com/PANOPTICONISM">
            <GitHub width="30" height="30" />
          </a>
        </li>
        <li className={styles.pointer}>
          <a href="https://codesandbox.io/u/panopticonism">
            <CodeAndSandbox width="30" height="30" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
