import { renderBlock, TextField } from "components/Notion/Blocks";
import { getBlocks, getDatabase, getPage } from "lib/notion";
import { Fragment } from "react";

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return;
  }

  return (
    <div>
      <article>
        <h1>
          <TextField text={page.page.properties?.Name?.title} />
        </h1>
        <section>
          {blocks.map((block) => (
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
    paths: entries.posts.results.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await fetch(`${process.env.BASE_FETCH_URL}/api/blog/${id}`).then((res) => res.json());
  const blocks = await getBlocks(id);

  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};