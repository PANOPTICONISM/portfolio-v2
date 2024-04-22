import { FrontPageBlocks } from "types/App.types";
import styles from "./Introduction.module.css";
import { renderBlock } from "components/Notion/Blocks";
import { Code } from "components/Notion/Code";

const Introduction = ({ blocks }: { blocks: FrontPageBlocks[] }) => {
  return (
    <section className={styles.intro}>
      <img src="/illustrated-self.png" alt="portrait" />
      {blocks.map((block) => (
        <Code
          key={block.type}
          content={block.code.rich_text[0].plain_text}
          language={block.code.language}
          allowCopy={false} />
      ))}
    </section>
  );
};

export default Introduction;
