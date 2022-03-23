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
    category,
    behance,
    github,
    livePreview,
    languages,
  } = article.fields;
  const removeCommaCat = `${category}`.replace(/,/g, " ");

  return (
    <div className={`post ${removeCommaCat}`}>
      {image && <img src={image.fields.file.url} alt="" />}
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
        {behance || github || livePreview ? (
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
                  <a href={github}>
                    <FontAwesomeIcon
                      size="lg"
                      color="black"
                      icon={faGithubSquare}
                    />
                  </a>
                </li>
              ) : null}
              {livePreview ? (
                <li>
                  <a href={livePreview}>
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
