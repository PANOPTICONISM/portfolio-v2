import "./posts.css";
import Post from "./Post/Post";
import { useState } from "react";

const Posts = ({ posts }) => {
  let removeFirstPost = posts.slice(1);

  const [filteredProjects, setFilteredProjects] = useState(removeFirstPost);
  const [activeButton, setActiveButton] = useState("all");

  const categories = ["all", "ui/ux design", "web development", "illustration"];

  const clickedFilter = (e) => {
    // active class
    setActiveButton(e.target.textContent);

    // filtered projects
    const trigger = e.target.textContent;
    let result = [];

    removeFirstPost.map((project) => {
      return project.fields.category.filter((cat) => {
        if (trigger === cat) {
          result.push(project);
        }
        return false;
      });
    });

    setFilteredProjects(result);
  };

  return (
    <section id="projects">
      <h1>Portfolio</h1>
      <div className="filters">
        <ul>
          {categories.map((nameCat, index) => (
            <li
              onClick={clickedFilter}
              key={index}
              className={nameCat === activeButton ? "active" : null}
            >
              {nameCat}
            </li>
          ))}
        </ul>
      </div>
      <div className="portfolio">
        {filteredProjects.map((article) => (
          <Post article={article} key={article.sys.id} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
