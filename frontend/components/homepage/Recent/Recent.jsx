import styles from "./Recent.module.css";

const Recent = ({ post, handleBackClick }) => {
  const { title, image, description } = post?.[0]?.fields;

  return (
    <section className={`${styles.most_recent} grid_2`}>
      {image && <img src={image.fields.file.url} alt={title} />}
      <div className={styles.desc}>
        <h2>Most recent project, selected for your viewing.</h2>
        <p>{description}</p>
      </div>
      <div className={styles.button_container}>
        <div className={styles.learn_more}>
          <span className={styles.circle_button}>
            <span
              className={`${styles.icon_button} ${styles.icon_arrow}`}
            ></span>
          </span>
          <button onClick={handleBackClick} className={styles.projects_button}>
            <span>More projects</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recent;
