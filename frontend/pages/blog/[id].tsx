import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import LoadingScreen from "components/Loading/Loading";
import { renderBlock, TextField } from "components/Notion/Blocks";
import { useThemeContext } from "contexts/theme-context";
import { Fragment, useState } from "react";
import { SinglePostProps } from "types/types";
import styles from "./Post.module.css";

export default function Post({ page, blocks }: SinglePostProps) {
  const { theme } = useThemeContext();
  const [isLoading, setLoading] = useState(false);
  if (!page || !blocks) {
    setLoading(true);
    return null;
  }

  return (
    <div className={`common theme-${theme}`}>
      {isLoading ?
        <LoadingScreen /> :
        <>
          <Header />
          <article className={styles.container}>
            <h1>
              <TextField text={page.page.properties?.Name?.title} />
            </h1>
            <section>
              {blocks.blocks.map((block) => (
                <Fragment key={block.id}>{renderBlock(block)}</Fragment>
              ))}
            </section>
          </article>
          <Footer />
        </>
      }
    </div>
  );
}

export const getStaticPaths = async () => {
  const entries = await fetch(`${process.env.BASE_FETCH_URL}/api/blog/table`).then((res) => res.json());

  return {
    paths: entries.posts.results.map((page: { id: string; }) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context: { params: { id: string; }; }) => {
  const { id } = context.params;
  const page = await fetch(`${process.env.BASE_FETCH_URL}/api/blog/${id}`).then((res) => res.json());
  const blocks = await fetch(`${process.env.BASE_FETCH_URL}/api/blog/blocks/${id}`).then((res) => res.json());

  return {
    props: {
      page,
      blocks,
    },
    revalidate: 1,
  };
};