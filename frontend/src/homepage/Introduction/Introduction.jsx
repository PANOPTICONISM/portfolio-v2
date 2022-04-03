import "./introduction.css";
import { images } from "../../images";

const Introduction = () => {
  return (
    <section className="intro">
      <img src={images.Self} alt="portrait" />
      <div className="presentation">
        <ul>
          <li>&nbsp; 1 &nbsp; &nbsp; &nbsp; const developer = &#123; </li>
          <li>
            &nbsp; 2 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; person:
            &#123;
          </li>
          <li>
            &nbsp; 3 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; firstName: "Maria",
          </li>
          <li>
            &nbsp; 4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; lastName: "Almeida"
          </li>
          <li>
            &nbsp; 5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;,
          </li>
          <li>
            &nbsp; 6 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; expertise:
            &#123;
          </li>
          <li>
            &nbsp; 7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; design: "UI/UX Designer",
          </li>
          <li>
            &nbsp; 8 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; development: "Software Developer"
          </li>
          <li>
            &nbsp; 9 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#125;,
          </li>
          <li>
            10 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; location:
            "Copenhagen",
          </li>
          <li>11 &nbsp; &nbsp; &nbsp; &#125;;</li>
          <li>12</li>
        </ul>
        <ul>
          <li>13 &nbsp; &nbsp; &nbsp; const job = &#123; </li>
          <li>
            14 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; type: &#91;
            "Freelance", "Part-time" &#93;,
          </li>
          <li>
            15 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; location: &#91;
            "Remote", "Hybrid" &#93;,
          </li>
          <li>12 &nbsp; &nbsp; &nbsp; &#125;;</li>
        </ul>
      </div>
    </section>
  );
};

export default Introduction;
