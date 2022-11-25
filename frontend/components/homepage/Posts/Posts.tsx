import styles from "./Posts.module.css";
import Post from "./Post/Post";
import { useState, forwardRef } from "react";
import { ArticleFieldsProps } from "./types";

interface ProjectsProps {
  projects: ArticleFieldsProps[];
}

const Posts = forwardRef<HTMLInputElement, ProjectsProps>(
  ({ projects }, ref) => {
    const removeFirstPost = projects?.slice(1);

    const [filteredProjects, setFilteredProjects] = useState(removeFirstPost);
    const [activeButton, setActiveButton] = useState("all");

    const categories = ["all", "ui/ux design", "web development"];

    const clickedFilter = (e: any) => {
      setActiveButton(e.target.textContent);

      const trigger = e.target.textContent;
      let result: any[] = [];

      removeFirstPost.map((project) => {
        return project?.fields?.category?.filter((cat) => {
          if (trigger === cat) {
            result.push(project);
          }
          return false;
        });
      });

      setFilteredProjects(result);
    };

    return (
      <section id="projects" className={styles.projects} ref={ref}>
        <h1>Portfolio</h1>
        <div className={styles.filters}>
          <ul>
            {categories?.map((nameCat, index) => (
              <li
                onClick={(e) => clickedFilter(e)}
                key={index}
                className={nameCat === activeButton ? styles.active : ""}
              >
                {nameCat}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.portfolio}>
          {filteredProjects?.map((article: any) => (
            <Post article={article} key={article?.sys?.id} />
          ))}
        </div>
      </section>
    );
  }
);

Posts.displayName = "Posts";
export default Posts;
