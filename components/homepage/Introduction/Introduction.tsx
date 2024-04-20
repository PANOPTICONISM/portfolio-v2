import { FrontPageBlocks } from "types/App.types";
import styles from "./Introduction.module.css";
import { renderBlock } from "components/Notion/Blocks";

const Introduction = ({ blocks }: { blocks: FrontPageBlocks[] }) => {
  return (
    <section className={styles.intro}>
      <img src="/illustrated-self.png" alt="portrait" />
      <div>
        {blocks.map((block) => (
          <div key={block.type}>{renderBlock(block, false)}</div>
        ))}
      </div>
    </section>
  );
};

export default Introduction;
