import { icons } from "../../public/icons";
import styles from "./Socials.module.css";

const Socials = () => {
  return (
    <div className={styles.social_media}>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/mariajalmeida/">
            <icons.LinkedInIcon width="30" height="30" />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/panopticonism">
            <icons.BehanceIcon width="30" height="30" />
          </a>
        </li>
        <li>
          <a href="https://github.com/PANOPTICONISM">
            <icons.GitHubIcon width="30" height="30" />
          </a>
        </li>
        <li className={styles.pointer}>
          <a href="https://codesandbox.io/u/panopticonism">
            <icons.SandboxIcon width="30" height="30" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
