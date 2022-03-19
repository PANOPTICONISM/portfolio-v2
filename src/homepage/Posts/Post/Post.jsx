import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faBehanceSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

const Post = ({ article }) => {
  const { title, image, category, behance, github, livePreview, languages } =
    article.fields;
  const removeCommaCat = `${category}`.replace(/,/g, " ");

  return (
    <div className={`post ${removeCommaCat}`}>
      <div className="container">
        <h2>{title}</h2>
        <div className="sources">
          <ul>
            <li>
              <a href={behance} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  size="lg"
                  color="black"
                  icon={faBehanceSquare}
                />
              </a>
            </li>
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
                  <FontAwesomeIcon
                    size="lg"
                    color="black"
                    icon={faEarthEurope}
                  />
                </a>
              </li>
            ) : null}
          </ul>
        </div>
        <div className="languages">
          <ul>
            {languages
              ? languages.map((lang, index) => <li key={index}>{lang}</li>)
              : null}
          </ul>
        </div>
      </div>
      {image && <img src={image.fields.file.url} alt="" />}
    </div>
  );
};

export default Post;
