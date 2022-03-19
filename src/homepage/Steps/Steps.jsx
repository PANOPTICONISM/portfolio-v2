import "./steps.css";
import { images } from "../../images";

const Steps = () => {
  return (
    <section id="steps">
      <h1>The process</h1>
      <div className="steps">
        <article>
          <img src={images.Strategy} alt="business-strategy" />
          <h2>Business strategy</h2>
          <p>
            A partnership begins by discussing what the goals for the project
            are, defining specific criterias, to be able to better plan and
            utilise all our efforts.
          </p>
        </article>
        <article>
          <img src={images.Research} alt="research" />
          <h2>Research</h2>
          <p>
            Because a website that exists is simply not enough to get in front
            of the competition, I do several types of research, competitor
            research included, in order to get ahead.
          </p>
        </article>
        <article className="highlight">
          <img src={images.Design} alt="design" />
          <h2>Design</h2>
          <p>
            Based on previous research and my expertise, I design your website
            with focus on the end-user’s needs and the customer journey’s ideal
            flow.
          </p>
        </article>
        <article className="highlight">
          <img src={images.Development} alt="development" />
          <h2>Development</h2>
          <p>
            From WordPress to React, all depends on which tools would fit the
            project’s scope better, but always with accessibility, SEO and
            performance on the forefront.
          </p>
        </article>
        <article>
          <img src={images.Testing} alt="testing" />
          <h2>Testing</h2>
          <p>
            Before delivering you the final solution, your website has been
            ensured to be functioning correctly, from beginning to end.
          </p>
        </article>
        <article>
          <img src={images.Support} alt="support" />
          <h2>Ongoing support</h2>
          <p>
            No matter whether new requirements come up, design needs to be
            updated or you’d rather I handle the technical part, I’m around to
            help.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Steps;
