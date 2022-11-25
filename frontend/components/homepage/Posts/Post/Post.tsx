import styles from "../Posts.module.css";
import { icons } from "../../../../public/icons";
import { ArticleProps } from "../types";

const Post = ({ article }: ArticleProps) => {
  const {
    title,
    description,
    image,
    category,
    behance,
    github,
    livePreview,
    languages,
  } = article?.fields;
  const removeCommaCat = `${category}`.replace(/,/g, " ");

  return (
    <div className={`${styles.post} ${removeCommaCat}`}>
      {image && (
        <img
          className={styles.bgImage}
          src={image?.fields?.file?.url}
          alt={title}
        />
      )}
      <div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
        {languages ? (
          <div className={styles.languages}>
            <ul>
              {languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
        ) : null}
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
    </div>
  );
};

export default Post;
