import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { renderBlock } from "components/Notion/Blocks";
import { useThemeContext } from "contexts/theme-context";
import { GetStaticPaths } from "next";
import { notionClient } from "pages/api/lib/Notion";
import { SinglePostProps } from "types/App.types";
import styles from "./Post.module.css";
import { ThemeSwitch } from "components/ThemeSwitch/ThemeSwitch";
import { Socials } from "components";

export default function Post({ page, blocks }: SinglePostProps) {
  const { theme } = useThemeContext();

  return (
    <div className={`common theme-${theme}`}>
      <Header />
      <article className={styles.container}>
        <h1>
          {page?.properties?.Name?.title[0].plain_text}
        </h1>
        <section className={styles.articleSection}>
          {blocks.results.map((block) => (
            <div key={block.id}>{renderBlock(block, true)}</div>
          ))}
        </section>
        <Socials isBlog url={page.properties.Preview.url} />
      </article>
      <Footer />
      <ThemeSwitch />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const databaseId = process.env.NOTION_BLOG_ID || '';

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