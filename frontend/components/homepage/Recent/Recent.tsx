import styles from "./Recent.module.css";
import { icons } from "public/icons";
import { RecentProps } from "./types";

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
                      <icons.BehanceSquare width="30" height="30" />
                    </a>
                  </li>
                ) : null}
                {github ? (
                  <li>
                    <a href={github} target="_blank" rel="noreferrer">
                      <icons.GithubSquare width="30" height="30" />
                    </a>
                  </li>
                ) : null}
                {livePreview ? (
                  <li>
                    <a href={livePreview} target="_blank" rel="noreferrer">
                      <icons.PreviewIcon width="30" height="30" />
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          ) : null}
        </div>
      )}
      <div className={styles.desc}>
        <h2>Most recent project, selected for your viewing.</h2>
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
