import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import LoadingScreen from "components/Loading/Loading";
import { renderBlock } from "components/Notion/Blocks";
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
              {page?.properties?.Name?.title[0].plain_text}
            </h1>
            <section className={styles.articleSection}>
              {blocks.results.map((block) => (
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

  const posts = await notionClient.databases.query({
    database_id: databaseId
  });
  const readyOnlyEntries = posts.results.filter((entry) => {
    if ("properties" in entry) {
      const status = entry.properties.Status;
      if (status.type === "status" && status.status) {
        return status.status.name === 'Done'
      }
    }
  });

  const paths = readyOnlyEntries.map((page: { id: string; }) => ({ params: { id: page.id } }));

  return {
    paths,
    fallback: false,
  };

};

export const getStaticProps = async (context: { params: { id: string; }; }) => {
  const { id } = context.params;
  const page = await notionClient.pages.retrieve({
    page_id: id,
  })
  const blocks = await notionClient.blocks.children.list({
    block_id: id,
  });

  return {
    props: {
      page,
      blocks,
    },
    revalidate: 60,
  };
};