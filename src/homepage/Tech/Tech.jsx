import "./tech.css";
import { images } from "../../images";

const Tech = () => {
  return (
    <section className="tech grid-2">
      <h1 className="heading">Tech stack</h1>
      <div className="stack">
        <img src={images.HTML} alt="html" />
        <img src={images.CSS} alt="css" />
        <img src={images.JS} alt="javascript" />
        <img src={images.React} alt="react" />
        <img src={images.Docker} alt="docker" />
        <img src={images.SASS} alt="sass" />
        <img src={images.WordPress} alt="wordpress" />
        <img src={images.Figma} alt="figma" />
        <img src={images.Photoshop} alt="photoshop" />
      </div>
    </section>
  );
};

export default Tech;
