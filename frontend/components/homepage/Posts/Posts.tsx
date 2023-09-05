import styles from "./Posts.module.css";
import Post from "./Post/Post";
import { forwardRef } from "react";
import { ArticleFieldsProps } from "./types";

interface ProjectsProps {
  projects: ArticleFieldsProps[];
}

const Posts = forwardRef<HTMLInputElement, ProjectsProps>(
  ({ projects }, ref) => {
    const allProjectsButRecent = projects?.slice(1);

    return (
      <section id="projects" className={styles.projects} ref={ref}>
        <h1>Portfolio</h1>
        <div className={styles.portfolio}>
          {allProjectsButRecent.map((article: any) => (
            <Post article={article} key={article?.sys?.id} />
          ))}
        </div>
      </section>
    );
  }
);

Posts.displayName = "Posts";
export default Posts;
