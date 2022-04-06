import "./tech.css";

const Tech = ({ skills }) => {
  console.log(skills);
  return (
    <section className="tech grid-2">
      <h1 className="heading">Tech stack</h1>
      <ul className="stack">
        {skills?.map((skill, index) => (
          <li key={index}>
            <img
              src={skill.fields.icon.fields.file.url}
              alt={skill.fields.icon.fields.title}
            />
            <p>{skill.fields.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tech;
