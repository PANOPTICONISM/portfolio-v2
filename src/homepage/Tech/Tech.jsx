import "./tech.css";

const Tech = ({ skills }) => {
  console.log(skills);
  return (
    <section className="tech grid-2">
      <h1 className="heading">Tech stack</h1>
      <div className="stack">
        {skills?.map((skill, index) => (
          <div key={index}>
            <img
              src={skill.fields.icon.fields.file.url}
              alt={skill.fields.icon.fields.title}
            />
            <p>{skill.fields.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
