import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

type DataProps = {
    entries: any,
}

const Blog: NextPage<DataProps> = ({ entries }) => {
    const { results } = entries.posts;
    console.log(entries, 'cheers')
    return (
        <div>blog</div>
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