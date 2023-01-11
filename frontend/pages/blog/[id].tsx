import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import LoadingScreen from "components/Loading/Loading";
import { renderBlock, TextField } from "components/Notion/Blocks";
import { useThemeContext } from "contexts/theme-context";
import { GetStaticPaths } from "next";
import { notionClient } from "pages/api/lib/Notion";
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

export const getStaticPaths: GetStaticPaths = async () => {
  const databaseId = "75de570ce04946ba8ddc3c6f48f6a723";
  try {
    const posts = await notionClient.databases.query({
      database_id: databaseId
    });

    return {
      paths: posts.results.map((page: { id: string; }) => ({ params: { id: page.id } })),
      fallback: true,
    };
  } catch (err) {
    throw new Error("Static paths failed", err as ErrorOptions)
  }
};

export const getStaticProps = async (context: { params: { id: string; }; }) => {
  const { id } = context.params;
  const page = await fetch(`${process.env.VERCEL_URL}/api/blog/${id}`).then((res) => res.json());
  const blocks = await fetch(`${process.env.VERCEL_URL}/api/blog/blocks/${id}`).then((res) => res.json());

  return {
    props: {
      page,
      blocks,
    },
    revalidate: 1,
  };
};