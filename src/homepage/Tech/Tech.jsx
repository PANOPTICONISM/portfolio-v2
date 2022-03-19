import "./tech.css";
import { images } from "../../images";

const Tech = () => {
  return (
    <section className="tech grid-2">
      <h1 className="heading">Tech stack</h1>
      <div className="stack">
        <img src={images.HTML} alt="" />
        <img src={images.CSS} alt="" />
        <img src={images.JS} alt="" />
        <img src={images.React} alt="" />
        <img src={images.Docker} alt="" />
        <img src={images.SASS} alt="" />
        <img src={images.WordPress} alt="" />
        <img src={images.Figma} alt="" />
        <img src={images.Photoshop} alt="" />
      </div>
    </section>
  );
};

export default Tech;
