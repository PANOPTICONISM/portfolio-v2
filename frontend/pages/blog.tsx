import { TextField } from 'components/Notion/Blocks';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

type DataProps = {
    entries: any,
}

const Blog: NextPage<DataProps> = ({ entries }) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req } = context;
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const baseUrl = req ? `${protocol}://${req.headers.host}` : "";
    const entries = await fetch(`${baseUrl}/api/blog`).then((res) => res.json());

    return {
        props: { entries },
    };
};