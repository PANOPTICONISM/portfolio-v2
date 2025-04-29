import styles from "../Posts.module.css";
import { ArticleProps } from "../Posts.types";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
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
  const removeCommaCat = `${category}`.replace(/,/g, " ");

  return (
    <div className={`${styles.post} ${removeCommaCat}`}>
      {image && (
        <div className={styles.image_wrapper}>
          <img
            className={styles.bgImage}
            src={image?.fields?.file?.url}
            alt={title}
          />
          {behance || github || livePreview ? (
            <div className={styles.sources}>
              <ul>
                {behance ? (
                  <li>
                    <a href={behance} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon
                        color="white"
                        size="lg"
                        icon={faBehance as IconProp}
                      />
                    </a>
                  </li>
                ) : null}
                {github ? (
                  <li>
                    <a href={github} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon
                        color="white"
                        size="lg"
                        icon={faGithub as IconProp}
                      />
                    </a>
                  </li>
                ) : null}
                {livePreview ? (
                  <li>
                    <a href={livePreview} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon
                        color="white"
                        size="lg"
                        icon={faEarthEurope as IconProp}
                      />
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          ) : null}
        </div>
      )}
      <div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
        {tools ? (
          <div className={styles.tools}>
            <ul>
              {tools.map(({ fields }) => (
                <li key={fields.id}>
                  <img
                    src={fields?.icon?.fields?.file?.url}
                    alt={fields?.title}
                  />
                  <p>{fields.title}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Post;
