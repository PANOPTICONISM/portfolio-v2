import { Footer, Header } from 'components';
import { Entries } from 'components/Entries/Entries';
import { useThemeContext } from 'contexts/theme-context';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { BlogDataProps } from 'types/types';
import { notionClient } from './api/lib/Notion';

const Blog: NextPage<BlogDataProps> = ({ posts }) => {
    const { theme } = useThemeContext();

    return (
        <div className={`common theme-${theme}`}>
            <Header />
            <h1>Archive</h1>
            <main>
                <Entries posts={posts} />
            </main>
            <Footer />
        </div>
    )
}

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
    const databaseId = "75de570ce04946ba8ddc3c6f48f6a723";

    const entries = await notionClient.databases.query({
        database_id: databaseId
    });
    const readyOnlyEntries = entries.results.filter((entry) => {
        if ("properties" in entry) {
            const status = entry.properties.Status;
            if (status.type === "status" && status.status) {
                return status.status.name === 'Done'
            }
        }
    });
    return {
        props: { posts: readyOnlyEntries },
        revalidate: 60,
    };
};