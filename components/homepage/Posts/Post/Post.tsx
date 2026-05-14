import styles from "../Posts.module.css";
import { ArticleProps } from "../Posts.types";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faBehance, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = ({ article }: ArticleProps) => {
  const {
    title,
    description,
    image,
    category,
    behance,
    github,
    livePreview,
    tools,
  } = article?.fields;

  const categories = category
    ? `${category}`
        .split(",")
        .map((c) => c.trim())
        .filter((c) => c && c.toLowerCase() !== "all")
    : [];

  const hasSources = behance || github || livePreview;

  return (
    <article className={styles.post}>
      {hasSources && (
        <div className={styles.sources}>
          <ul>
            {github ? (
              <li>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${title} on GitHub`}
                >
                  <FontAwesomeIcon icon={faGithub as IconProp} />
                </a>
              </li>
            ) : null}
            {behance ? (
              <li>
                <a
                  href={behance}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${title} on Behance`}
                >
                  <FontAwesomeIcon icon={faBehance as IconProp} />
                </a>
              </li>
            ) : null}
            {livePreview ? (
              <li>
                <a
                  href={livePreview}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${title} live preview`}
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare as IconProp} />
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      )}
      {image && (
        <div className={styles.image_wrapper}>
          <img
            className={styles.bgImage}
            src={image?.fields?.file?.url}
            alt={title}
          />
        </div>
      )}
      <div className={styles.content}>
        {categories.length > 0 && (
          <p className={styles.category}>{categories.join(" · ")}</p>
        )}
        <h2>{title}</h2>
        {description ? <p className={styles.description}>{description}</p> : null}

        {tools ? (
          <div className={styles.tools}>
            <ul>
              {tools.map(({ fields }) => (
                <li key={fields.id}>
                  {fields?.icon?.fields?.file?.url && (
                    <img
                      src={fields.icon.fields.file.url}
                      alt=""
                      aria-hidden="true"
                    />
                  )}
                  <p>{fields.title}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default Post;
