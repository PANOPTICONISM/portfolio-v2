import { TextField } from 'components/Notion/Blocks';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { BlogDataProps } from 'types/types';

const Blog: NextPage<BlogDataProps> = ({ entries }) => {
    const { results } = entries.posts;
    return (
        <section>
            {results.map((entry) =>
                <article key={entry.id}>
                    <TextField text={entry.properties.Name.title} />
                    <Link href={`/${entry.id}`}>Read post →</Link>
                </article>
            )}
        </section>
    )
}

export default Blog;

export const getServerSideProps: GetServerSideProps = async () => {
    const entries = await fetch(`${process.env.BASE_FETCH_URL}/api/blog/table`).then((res) => res.json());

    return {
        props: { entries },
    };
};