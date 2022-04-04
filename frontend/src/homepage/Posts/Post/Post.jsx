import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faBehanceSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";

const Post = ({ article }) => {
  const {
    title,
    description,
    image,
    categories,
    behance,
    github,
    preview,
    languages,
  } = article;
  const category = categories.data.map((cat) => cat.attributes.category);
  const removeCommaCat = `${category}`.replace(/,/g, " ");

  return (
    <div className={`post ${removeCommaCat}`}>
      {image && (
        <img
          src={`${process.env.REACT_APP_STRAPI_URL_PROD}${image?.data?.attributes?.url}`}
          alt={title}
        />
      )}
      <div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
        {languages ? (
          <div className="languages">
            <ul>
              {languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {behance || github || preview ? (
          <div className="sources">
            <ul>
              {behance ? (
                <li>
                  <a href={behance} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      size="lg"
                      color="black"
                      icon={faBehanceSquare}
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
                      icon={faGithubSquare}
                    />
                  </a>
                </li>
              ) : null}
              {preview ? (
                <li>
                  <a href={preview} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon size="lg" color="black" icon={faChrome} />
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
