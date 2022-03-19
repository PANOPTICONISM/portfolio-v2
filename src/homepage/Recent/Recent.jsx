import "./recent.css";

const Recent = ({ post }) => {
  const { title, image, description, category, behance, github } =
    post[0].fields;
  console.log(github, category, behance);
  return (
    <section className="most_recent grid-2">
      {image && <img src={image.fields.file.url} alt={title} />}
      <div className="desc">
        <h2>Most recent project, selected for your viewing.</h2>
        <p>{description}</p>
      </div>
      <div className="button_container">
        <div className="learn-more">
          <span className="circle_button">
            <span className="icon_button icon_arrow"></span>
          </span>
          <button className="projects_button">
            <span>More projects</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recent;
