import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faBehanceSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEarthEuropa } from "@fortawesome/free-solid-svg-icons";

const Post = ({ article }) => {
  const { title, image, category, behance, github, livePreview, languages } =
    article.fields;
  const removeCommaCat = `${category}`.replace(/,/g, " ");

  return (
    <div className={`post ${removeCommaCat}`}>
      <div className="container">
        <h2>{title}</h2>
        <div className="languages">
          <ul>{languages ? languages.map((lang) => <li>{lang}</li>) : null}</ul>
        </div>
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
                    icon={faEarthEuropa}
                  />
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      {image && <img src={image.fields.file.url} alt="" />}
    </div>
  );
};

export default Post;
