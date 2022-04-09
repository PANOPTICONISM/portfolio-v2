import "./styles.css";

const Experience = ({ jobs }) => {
  console.log(jobs);
  return (
    <section id="experience">
      <h1>Experience</h1>
      <div className="grid-2 jobs">
        {jobs?.map((job) => (
          <div key={job?.sys?.id} className="job">
            <h3>{job?.fields?.jobTitle}</h3>
            <h4>{job?.fields?.company}</h4>
            <p>{job?.fields?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
