import { FrontPageBlocks } from "types/App.types";
import styles from "./Introduction.module.css";
import { Code } from "components/Notion/Code";

const Introduction = ({ blocks }: { blocks: FrontPageBlocks[] }) => {
  return (
    <section className={styles.intro}>
      <div className={styles.portrait_wrapper}>
        <img
          className={styles.portrait}
          src="/illustrated-self.png"
          alt="Illustrated portrait of MAL"
          loading="eager"
          decoding="async"
        />
      </div>
      <div className={styles.code_stack}>
        {blocks.map((block) => (
          <Code
            key={block.type}
            content={block.code.rich_text[0].plain_text}
            language={block.code.language}
            allowCopy={false} />
        ))}
      </div>
    </section>
  );
};

export default Introduction;
