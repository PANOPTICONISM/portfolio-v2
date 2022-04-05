import "./tech.css";

const Tech = ({ skills }) => {
  return (
    <section className="tech grid-2">
      <h1 className="heading">Tech stack</h1>
      <div className="stack">
        {skills?.map((skill, index) => (
          <div key={index}>
            <img
              src={`${process.env.REACT_APP_STRAPI_URL_PROD}${skill?.attributes?.icon?.data?.attributes?.url}`}
              alt={skill?.attributes?.title}
            />
            <p>{skill?.attributes?.title}</p>
            {console.log(skill?.attributes?.icon?.data?.attributes?.url)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
