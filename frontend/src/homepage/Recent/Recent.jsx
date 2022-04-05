import "./recent.css";

const Recent = ({ post, handleBackClick }) => {
  const { title, image, description } = post?.[0]?.attributes;

  return (
    <section className="most_recent grid-2">
      {image.data && (
        <img
          src={`${process.env.REACT_APP_STRAPI_URL_PROD}${image?.data?.attributes?.url}`}
          alt={title}
        />
      )}
      <div className="desc">
        <h2>Most recent project, selected for your viewing.</h2>
        <p>{description}</p>
      </div>
      <div className="button_container">
        <div className="learn-more">
          <span className="circle_button">
            <span className="icon_button icon_arrow"></span>
          </span>
          <button onClick={handleBackClick} className="projects_button">
            <span>More projects</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recent;
