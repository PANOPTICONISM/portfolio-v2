import styles from "../Posts.module.css";
import { images } from "../../../../public";

interface ArticleProps {
  article: {
    fields: {
      title?: string;
      description?: string;
      image?: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      category?: string;
      behance?: string;
      github?: string;
      livePreview?: string;
      languages?: Array<string>;
    };
  };
}

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
                    <images.BehanceIcon width={30} height={30} />
                  </a>
                </li>
              ) : null}
              {github ? (
                <li>
                  <a href={github} target="_blank" rel="noreferrer">
                    <images.GitHubIcon width={30} height={30} />
                  </a>
                </li>
              ) : null}
              {livePreview ? (
                <li>
                  <a href={livePreview} target="_blank" rel="noreferrer">
                    <images.PreviewIcon width={30} height={30} />
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
