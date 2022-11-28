import { renderBlock, TextField } from "components/Notion/Blocks";
import { Fragment } from "react";
import { PostProps } from "types/types";

export default function Post({ page, blocks }: PostProps) {
  if (!page || !blocks) {
    return null;
  }
  return (
    <div>
      <article>
        <h1>
          <TextField text={page.page.properties?.Name?.title} />
        </h1>
        <section>
          {blocks.blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </section>
      </article>
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