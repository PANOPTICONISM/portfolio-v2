import "./projects.css";

const ProjectsCTA = ({ onClick }) => {
  return (
    <div className="projects_breadcumbs">
      <button className="pointer" onClick={onClick}>
        <br />P<br />r<br />o<br />j<br />e<br />c<br />t<br />s
      </button>
    </div>
  );
};

export default ProjectsCTA;
