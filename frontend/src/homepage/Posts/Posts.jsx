import "./posts.css";
import Post from "./Post/Post";
import { useState, forwardRef } from "react";

const Posts = forwardRef(({ posts }, ref) => {
  let removeFirstPost = posts?.slice(1);

  const [filteredProjects, setFilteredProjects] = useState(removeFirstPost);
  const [activeButton, setActiveButton] = useState("all");

  const categories = ["all", "ui/ux design", "web development", "illustration"];

  const clickedFilter = (e) => {
    setActiveButton(e.target.textContent);

    const trigger = e.target.textContent;
    let result = [];

    removeFirstPost.map((project) => {
      return project.attributes.categories.data.filter((cat) => {
        console.log(cat, "cat");
        if (trigger === cat.attributes.category) {
          result.push(project);
        }
        return false;
      });
    });

    setFilteredProjects(result);
  };

  return (
    <section id="projects" ref={ref}>
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
          <Post article={article.attributes} key={article.id} />
        ))}
      </div>
    </section>
  );
});

export default Posts;
