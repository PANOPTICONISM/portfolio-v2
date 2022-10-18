import styles from "./Recent.module.css";

const Recent = ({ post, handleBackClick }) => {
  const { title, image, description } = post?.fields;

  return (
    <section className={`${styles.most_recent} grid_2`}>
      {image && <img src={image.fields.file.url} alt={title} />}
      <div className={styles.desc}>
        <h2>Most recent project, selected for your viewing.</h2>
        <p>{description}</p>
      </div>
      <div className={styles.button_container}>
        <button onClick={handleBackClick} className={styles.learn_more}>
          <div className={styles.projects_button}>
            <span>More projects</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Recent;
