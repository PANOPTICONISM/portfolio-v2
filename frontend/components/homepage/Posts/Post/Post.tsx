import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faBehanceSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "../Posts.module.css";

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
      {image && <img src={image?.fields?.file?.url} alt={title} />}
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
                    <FontAwesomeIcon
                      size="lg"
                      color="black"
                      icon={faBehanceSquare as IconProp}
                    />
                  </a>
                </li>
              ) : null}
              {github ? (
                <li>
                  <a href={github} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      size="lg"
                      color="black"
                      icon={faGithubSquare as IconProp}
                    />
                  </a>
                </li>
              ) : null}
              {livePreview ? (
                <li>
                  <a href={livePreview} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      size="lg"
                      color="black"
                      icon={faChrome as IconProp}
                    />
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
