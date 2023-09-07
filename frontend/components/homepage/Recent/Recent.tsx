import styles from "./Recent.module.css";
import { RecentProps } from "./types";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import { faBehance, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Recent = ({ post, handleBackClick }: RecentProps) => {
  const { title, image, description, behance, github, livePreview } =
    post?.fields;

  return (
    <section className={`${styles.most_recent} grid_2`}>
      {image && (
        <div className={styles.image_wrapper}>
          <img src={image.fields.file.url} alt={title} />
          {behance || github || livePreview ? (
            <div className={styles.sources}>
              <ul>
                {behance ? (
                  <li>
                    <a href={behance} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon color="white" size="lg" icon={faBehance as IconProp} />
                    </a>
                  </li>
                ) : null}
                {github ? (
                  <li>
                    <a href={github} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon color="white" size="lg" icon={faGithub as IconProp} />
                    </a>
                  </li>
                ) : null}
                {livePreview ? (
                  <li>
                    <a href={livePreview} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon color="white" size="lg" icon={faEarthEurope as IconProp} />
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          ) : null}
        </div>
      )}
      <div className={styles.desc}>
        <h2>Latest Project — {title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.button_container}>
        <button onClick={handleBackClick} className={styles.learn_more}>
          <div className={styles.projects_button}>
            <span>More projects</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Recent;
